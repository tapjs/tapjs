import { ProcessInfo } from '@tapjs/processinfo'
import { glob, Glob, IgnoreLike } from 'glob'
import { readFile } from 'node:fs/promises'
import type { Path, PathScurry } from 'path-scurry'
import { Config } from './index.js'

const alwaysExcludeNames = [
  '.tap',
  '.nyc_output',
  '.git',
  '.hg',
  'node_modules',
  'tap-snapshots',
  'tap-testdir-*',
]

const excludeEntry = (e: string) =>
  alwaysExcludeNames.includes(e) || e.startsWith('tap-testdir-')

const alwaysExcludePattern = `**/@(${alwaysExcludeNames.join('|')})/**`

const defaultInclude =
  '**/{' +
  '@(test*(s)|__test*(s)__)/**/*,' +
  '*.@(test*(s)|spec),' +
  'test*(s)' +
  '}.@([mc]js|[jt]s*(x))'
const dirInclude = '**/*.@([mc]js|[jt]s*(x))'

// --save=<file>
//    only run the files in the list, write failures back to it.
//    If the file doesn't exist, run everything normally.
//    Otherwise, don't delete coverage history.
//    If they all pass, delete the file.
// --changed
//    Figure out which files in the suite have changed since last run,
//    and only run those. Do not delete coverage history ever.

export const findSuites = async (args: string[], config: Config) => {
  const { values } = config.parse()

  const saveFile = config.get('save')
  const saveFileList: Set<string> = new Set(
    !saveFile
      ? []
      : (await readFile(saveFile, 'utf8').catch(() => ''))
          .trim()
          .split('\n')
  )

  const ignore = [alwaysExcludePattern]
  if (values.exclude) ignore.push(values.exclude)

  const g = new Glob(values.include || defaultInclude, {
    ignore,
    cwd: config.globCwd,
    withFileTypes: true,
  })
  const { scurry } = g
  const entries = new Set<Path>(
    (
      await (!args.length
        ? g.walk()
        : Promise.all(args.map(async a => scurry.cwd.resolve(a).lstat())))
    ).filter(p => {
      if (!p) return false
      return true
    }) as Path[]
  )
  await expandDirectories(scurry, entries, g.ignore)
  const before = config.get('before')
  const after = config.get('after')
  if (before) {
    entries.delete(scurry.cwd.resolve(before))
  }
  if (after) {
    entries.delete(scurry.cwd.resolve(after))
  }

  if (saveFileList.size) {
    for (const p of entries) {
      if (!saveFileList.has(p.relativePosix())) entries.delete(p)
    }
  }

  if (config.get('changed')) {
    await pruneUnchanged(scurry, entries)
  }

  return [...entries].map(p => p.relativePosix())
}

const expandDirectories = async (
  scurry: PathScurry,
  entries: Set<Path>,
  ignore: string | string[] | IgnoreLike | undefined
) => {
  // for each one that's a directory, expand it with the files it contains
  // then go back to the original dir when we're done expanding.
  const originalCwd = scurry.cwd
  for (const entry of entries) {
    if (excludeEntry(entry.name.toLowerCase())) {
      entries.delete(entry)
      continue
    }
    if (entry.isDirectory()) {
      entries.delete(entry)
      scurry.chdir(entry)
      // if we match a dir, then pull in any runnable files from within it
      for (const s of await glob(dirInclude, {
        scurry,
        ignore,
        withFileTypes: true,
      })) {
        entries.add(s)
      }
    }
  }
  scurry.chdir(originalCwd)
}

// delete all the entries in the set that do not reference files
// that have changed since the last run.
const pruneUnchanged = async (scurry: PathScurry, entries: Set<Path>) => {
  const dir = scurry.resolve('.tap/processinfo')
  const db = new ProcessInfo({ dir })
  await db.load()
  // for each entry in the list, find relativePosix() in pi.externalIDs
  // then compare the mtime of the pi entry json file with the mtime
  // of all the files in its list. If none are newer, delete the entry
  for (const e of entries) {
    const pi = db.externalIDs.get(e.relativePosix())
    if (!pi) continue
    const pie = scurry.cwd.resolve(`.tap/processinfo/${pi.uuid}.json`)
    const piMtime = (await pie.lstat())?.mtime
    const entryMtime = (await e.lstat())?.mtime

    if (!piMtime || !entryMtime || entryMtime > piMtime) {
      continue
    }

    let del = true
    for (const f of pi.files || []) {
      const fst = await scurry.cwd.resolve(f).lstat()
      if (!fst || !fst.mtime || fst.mtime > piMtime) {
        del = false
        break
      }
    }

    if (del) {
      // either we failed to load the test, pi entry, or one of the files,
      // or all the files are newer than the pi entry.
      entries.delete(e)
    }
  }
}
