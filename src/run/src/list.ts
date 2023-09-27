import { LoadedConfig } from '@tapjs/config'
import { ProcessInfo } from '@tapjs/processinfo'
import { glob, Glob, IgnoreLike } from 'glob'
import { resolve } from 'node:path'
import type { Path, PathScurry } from 'path-scurry'
import { mainCommand, values } from './main-config.js'
import { readSave } from './save-list.js'

const alwaysExcludeNames = [
  '.tap',
  '.nyc_output',
  '.git',
  '.hg',
  'node_modules',
  'tap-snapshots',
]

const alwaysExcludePattern = `**/@(${alwaysExcludeNames.join(
  '|'
)})/**`

const defaultInclude =
  '**/{' +
  '@(test?(s)|__test?(s)__)/**/*,' +
  '*.@(test?(s)|spec),' +
  'test?(s)' +
  '}.__EXTENSIONS__'
const dirInclude = '**/*.__EXTENSIONS__'

// --save=<file>
//    only run the files in the list, write failures back to it.
//    If the file doesn't exist, run everything normally.
//    Otherwise, don't delete coverage history.
//    If they all pass, delete the file.
// --changed
//    Figure out which files in the suite have changed since last run,
//    and only run those. Do not delete coverage history ever.

export const list = async (
  args: string[],
  config: LoadedConfig,
  noPruneUnchanged: boolean = false
) => {
  const saveList: Set<string> = new Set(await readSave(config))

  if (args.length === 0) args = config.get('files') || []

  const ignore = [alwaysExcludePattern]
  if (values.exclude) ignore.push(...values.exclude)

  const g = new Glob(
    values.include || config.expandInclude(defaultInclude),
    {
      ignore,
      cwd: config.globCwd,
      withFileTypes: true,
    }
  )

  const { scurry } = g
  // resolve non-existent paths as globs in the actual cwd
  // turn everything into a Path in our main scurry, except
  // stdin designators, which are left as strings
  // This way the expected behavior of "the thing glob says"
  // will work the same way across platforms, *and* the tests
  // are all resolved to absolute paths that can be run from
  // the cwd context of the project root.
  const entries = new Set<Path | '-' | '/dev/stdin'>(
    (
      await Promise.all(
        (
          await (!args.length
            ? g.walk()
            : Promise.all(
                args.map(async a => {
                  if (a === '-' || a === '/dev/stdin') return a
                  const st = await scurry.cwd
                    .resolve(resolve(a))
                    .lstat()
                  if (st) return st
                  return glob(a, { absolute: true })
                })
              ))
        ).reduce(
          (
            set: (
              | string
              | Path
              | Promise<Path | undefined>
              | undefined
            )[],
            entry: string | Path | string[]
          ) => {
            // stat the glob results a second time, even though we know
            // that they exist, because we need their stat info later.
            if (Array.isArray(entry)) {
              set.push(
                ...entry.map(e => scurry.cwd.resolve(e).lstat())
              )
            } else if (entry === '-' || entry === '/dev/stdin') {
              set.push(entry)
            } else {
              set.push(entry)
            }
            return set
          },
          []
        )
      )
    ).filter(p => {
      // enoents should already be filtered out by glob, but just in case
      /* c8 ignore start */
      if (!p) return false
      /* c8 ignore stop */
      return true
    }) as (Path | '-' | '/dev/stdin')[]
  )
  await expandDirectories(config, scurry, entries, g.ignore)
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

  const foundEntries = entries.size !== 0
  if (config.get('changed') && foundEntries && !noPruneUnchanged) {
    await pruneUnchanged(scurry, entries)
  }

  const files = [...entries].map(p =>
    typeof p === 'string' ? p : p.relativePosix()
  )
  if (mainCommand === 'list') {
    if (foundEntries) {
      // don't report an error if we found something but it's just not new
      if (files.length) console.log(files.join('\n').trimEnd())
    } else {
      console.error('No files found.')
      process.exitCode = 1
      if (args.length === 1) {
        const maybe = args[0]?.match(/^(plugin|config)s?$/)
        if (maybe) {
          console.error(`(Did you mean 'tap ${maybe[1]} list'?)`)
        }
      }
    }
  }
  return files
}

const expandDirectories = async (
  config: LoadedConfig,
  scurry: PathScurry,
  entries: Set<Path | '-' | '/dev/stdin'>,
  ignore: string | string[] | IgnoreLike | undefined
) => {
  // for each one that's a directory, expand it with the files it contains
  // then go back to the original dir when we're done expanding.
  const originalCwd = scurry.cwd
  for (const entry of entries) {
    if (typeof entry === 'string') continue
    if (entry.isDirectory()) {
      entries.delete(entry)
      scurry.chdir(entry)
      // if we match a dir, then pull in any runnable files from within it
      for (const s of await glob(config.expandInclude(dirInclude), {
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
  // for each entry in the list, find it in the processinfo db's list
  // of externalIDs with changed files. but, we only need to check the
  // ones for which there is SOME externalID node in the processinfo,
  // because otherwise that means it's never been run.
  const ids = new Map<string, Path>()
  for (const e of entries) {
    if (typeof e === 'string') continue
    const rp = e.relativePosix()
    const pi = db.externalIDs.get(rp)
    if (!pi) {
      // if there's no processinfo entry for it, then it must be new
      // so don't even check it.
      continue
    }
    ids.set(rp, e)
  }
  const changed = await db.externalIDsChanged(id => ids.has(id))
  for (const [id, e] of ids.entries()) {
    if (!changed.has(id)) {
      entries.delete(e)
    }
  }
}
