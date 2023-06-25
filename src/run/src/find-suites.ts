import { LoadedConfig } from '@tapjs/config'
import { ProcessInfo } from '@tapjs/processinfo'
import { glob, Glob, IgnoreLike } from 'glob'
import { resolve } from 'node:path'
import type { Path, PathScurry } from 'path-scurry'
import { readSave } from './save-list.js'

const alwaysExcludeNames = [
  '.tap',
  '.nyc_output',
  '.git',
  '.hg',
  'node_modules',
  'tap-snapshots',
]

const excludeEntry = (e: string) =>
  alwaysExcludeNames.includes(e) || e.startsWith('tap-testdir-')

const alwaysExcludePattern = `**/@(${alwaysExcludeNames.join(
  '|'
)}|tap-testdir-*)/**`

const defaultInclude =
  '**/{' +
  '@(test?(s)|__test?(s)__)/**/*,' +
  '*.@(test?(s)|spec),' +
  'test?(s)' +
  '}.@([mc][jt]s|[jt]s?(x))'
const dirInclude = '**/*.@([mc][jt]s|[jt]s?(x))'

// --save=<file>
//    only run the files in the list, write failures back to it.
//    If the file doesn't exist, run everything normally.
//    Otherwise, don't delete coverage history.
//    If they all pass, delete the file.
// --changed
//    Figure out which files in the suite have changed since last run,
//    and only run those. Do not delete coverage history ever.

export const findSuites = async (
  args: string[],
  config: LoadedConfig
) => {
  const { values } = config.parse()

  const saveList: Set<string> = new Set(await readSave(config))

  const ignore = [alwaysExcludePattern]
  if (values.exclude) ignore.push(values.exclude)

  const g = new Glob(values.include || defaultInclude, {
    ignore,
    cwd: config.globCwd,
    withFileTypes: true,
  })
  const { scurry } = g
  const entries = new Set<Path | '-' | '/dev/stdin'>(
    (
      await (!args.length
        ? g.walk()
        : Promise.all(
            args.map(async a => {
              if (a === '-' || a === '/dev/stdin') return a
              return scurry.cwd.resolve(resolve(a)).lstat()
            })
          ))
    ).filter(p => {
      if (!p) return false
      return true
    }) as (Path | '-' | '/dev/stdin')[]
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

  if (saveList.size) {
    for (const p of entries) {
      if (typeof p === 'string') continue
      if (!saveList.has(p.relativePosix())) entries.delete(p)
    }
  }

  if (config.get('changed')) {
    await pruneUnchanged(scurry, entries)
  }

  return [...entries].map(p =>
    typeof p === 'string' ? p : p.relativePosix()
  )
}

const expandDirectories = async (
  scurry: PathScurry,
  entries: Set<Path | '-' | '/dev/stdin'>,
  ignore: string | string[] | IgnoreLike | undefined
) => {
  // for each one that's a directory, expand it with the files it contains
  // then go back to the original dir when we're done expanding.
  const originalCwd = scurry.cwd
  for (const entry of entries) {
    if (typeof entry === 'string') continue
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
const pruneUnchanged = async (
  scurry: PathScurry,
  entries: Set<Path | '-' | '/dev/stdin'>
) => {
  const dir = scurry.resolve('.tap/processinfo')
  const db = new ProcessInfo({ dir })
  await db.load()
  // for each entry in the list, find relativePosix() in pi.externalIDs
  // then compare the mtime of the pi entry json file with the mtime
  // of all the files in its list. If none are newer, delete the entry
  for (const e of entries) {
    if (typeof e === 'string') continue
    const pi = db.externalIDs.get(e.relativePosix())
    if (!pi) continue
    const pie = scurry.cwd.resolve(`.tap/processinfo/${pi.uuid}.json`)
    const piMtime = (await pie.lstat())?.mtime
    const entryMtime = (await e.lstat())?.mtime

    if (!piMtime || !entryMtime || entryMtime > piMtime) {
      continue
    }

    let del = true
    OUTER: for (const f of pi.files || []) {
      const sources = pi.sources[f] || [f]
      for (const f of sources) {
        // if the stat is missing, then the file isn't there,
        // and that's definitely a change
        const fm =
          (await scurry.cwd.resolve(f).lstat())?.mtime || Infinity
        if (fm > piMtime) {
          del = false
          break OUTER
        }
      }
    }

    if (del) {
      // either we failed to load the test, pi entry, or one of the files,
      // or all the files are newer than the pi entry.
      entries.delete(e)
    }
  }
}
