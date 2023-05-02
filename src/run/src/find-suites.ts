import { glob, Glob } from 'glob'
import type { Path } from 'path-scurry'
import { Config } from './index.js'

const alwaysExcludeNames = [
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
  'test*(s)|__test*(s)__)/**/*,' +
  '*.@(test*(s)|spec),' +
  'test*(s)' +
  '}.([mc]js|[jt]s*(x))'

export const findSuites = async (args: string[], config: Config) => {
  const { values } = config.parse()

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
      await (args.length
        ? g.walk()
        : Promise.all(args.map(async a => scurry.cwd.resolve(a).lstat())))
    ).filter(p => !!p) as Path[]
  )

  // for each one that's a directory, expand it with the files it contains
  for (const entry of entries) {
    if (excludeEntry(entry.name.toLowerCase())) {
      entries.delete(entry)
      continue
    }
    if (entry.isDirectory()) {
      entries.delete(entry)
      for (const s of await glob(defaultInclude, {
        cwd: entry.fullpath(),
        ignore,
        withFileTypes: true,
        scurry,
      })) {
        entries.add(s)
      }
    }
  }

  return [...entries].map(e => e.fullpath())
}
