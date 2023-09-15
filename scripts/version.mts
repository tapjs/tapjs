// Rules:
// - All packages dependencies on internal workspace projects are pinned
// to the current version in the workspace project, at all times.
// - Projects are "dirty" if they have changes in their published files
// that are newer than the last time the version was updated.
//
// - When publishing:
//   - Bump the version of all dirty packages.
//   - Pin the version of all dependencies on the bumped packages.
//   - Repeat until no new dirty packages.
//   - Publish all dirty packages (making them clean).

// VERSION(bump, pkgs = all dirty packages)
// - changed := [...pkgs]
// - increment version of all <pkgs> by <bump> level
// - for each pkg of changed
//    - add all dependents to changed
//    - if pkg not in pkgs, bump patch version
// - for each pkg of changed
//    - for each dependent of pkg in changed
//      - set pkg dependency version to pkg.version
// - for each pkg of changed
//    - git add {ws}
//    - git commit+tag 'version: {pkg}@{version}'

// PUBLISH(pkg)
// - if latest commit in folder is not 'version:...' tag, fail
// - if latest commit in folder is 'publish:...' tag, fail
//    - npm publish --dist-tag=pre
//    - git tag -sm 'publish: {pkg}@{version}'

// Ws is dirty if the latest commit in the folder is not 'version:...'

// RELEASE()
// - just set all workspace dist tags from pre to latest

import chalk from 'chalk'
import { globSync } from 'glob'
import { spawnSync, SpawnSyncOptions } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { eq, gt, inc, parse, ReleaseType } from 'semver'
import { strict } from 'tcompare'

const noRollback = process.env.NO_ROLLBACK === '1'
const rollbacks: (() => void)[] = []
const rollback = (er: unknown) => {
  const doRollback = !noRollback && !!rollbacks.length
  if (doRollback) {
    console.error(er)
    console.error('error encountered, attempting rollback')
    let r: (() => void) | undefined
    while ((r = rollbacks.pop())) {
      try {
        console.error(
          r
            .toString()
            .replace(/\(\) =>/, '')
            .trim()
        )
        r()
      } catch {}
    }
  }
  console.error(chalk.red(er))
  if (!doRollback) console.error('\n' + usage)
  process.exit(1)
}
process.once('uncaughtException', rollback)

const isReleaseType = (v: string): v is ReleaseType =>
  [
    'patch',
    'major',
    'premajor',
    'minor',
    'preminor',
    'prepatch',
    'prerelease',
  ].includes(v)

const run = (
  cmd: string,
  args: string[] = [],
  options: SpawnSyncOptions = {}
) => {
  const res = spawnSync(cmd, args, { ...options, encoding: 'utf8' })
  if (res.error || res.status || res.signal) {
    const cause = {
      cmd,
      args,
      ...res,
    }
    throw res.error
      ? Object.assign(res.error, { cause })
      : new Error('command failed', { cause })
  }
  return res
}

const npm = (
  o: string | (SpawnSyncOptions & { quiet?: boolean }),
  ...args: string[]
) => {
  const defopt: SpawnSyncOptions & { quiet?: boolean } = {
    quiet: false,
    stdio: [null, 'pipe', 'inherit'],
  }
  const opt = typeof o === 'object' ? { ...defopt, ...o } : defopt
  if (typeof o === 'string') args.unshift(o)
  console.log(`npm ${args.map(a => JSON.stringify(a)).join(' ')}`)
  const res = run('npm', args, opt)
  if (!opt.quiet && res.stdout && res.stdout.trim())
    console.log(res.stdout.trimEnd())
  if (!opt.quiet && res.stderr && res.stderr.trim())
    console.error(res.stderr.trimEnd())
  return res
}

const git = (...args: string[]) => {
  console.log(`git ${args.map(a => JSON.stringify(a)).join(' ')}`)
  return run('git', args, { stdio: [null, 'pipe', 'inherit'] })
}

// don't proceed if there are changes in the project
const assertNoChanges = () => {
  const changes = git('status', '-s', '-uno', 'src')
    .stdout.toString()
    .trim()
  if (changes.length) {
    console.error(changes)
    throw 'uncommitted changes, cannot proceed'
  }
}

type DepSet = {
  [name: string]: string
}
type Manifest = {
  name: string
  version: string
  private?: boolean
  dependencies?: DepSet
  devDependencies?: DepSet
  peerDependencies?: DepSet
  optionalDependencies?: DepSet
}

const rootPkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const ws = globSync(rootPkg.workspaces as string[])

// package.json data by name and ws folder
const manifests: Record<string, Manifest> = Object.fromEntries(
  ws.map(p => [
    p,
    JSON.parse(readFileSync(resolve(p, 'package.json'), 'utf8')),
  ])
)
Object.assign(
  manifests,
  Object.fromEntries(ws.map(p => [manifests[p].name, manifests[p]]))
)

// get a ws folder name from a pkg manifest
const loc = new Map<Manifest, string>(
  ws.map(folder => [manifests[folder], folder])
)

const depTypes: (keyof Manifest)[] = [
  'dependencies',
  'optionalDependencies',
  'peerDependencies',
]

// reverse lookup of dependencies among workspace projects
const dependents = new Map<string, string[]>()
{
  for (const p of new Set([...Object.values(manifests)])) {
    for (const t of depTypes) {
      const deps = p[t]
      if (!deps) continue
      const names = Object.keys(deps)
      for (const dep of names) {
        // external, don't care
        if (!manifests[dep]) continue
        const d = dependents.get(dep) || []
        d.push(p.name)
        dependents.set(dep, d)
      }
    }
  }
}

// bump all pkgs by the version level specified,
// bump all their dependents by a patch level,
// and tag everything properly.
const version = (pkgs: string[], level: string) => {
  if (!isReleaseType(level) && !parse(level)) {
    throw `invalid version or release type: ${level}`
  }

  // verify that building and pinning deps is not a change
  npm({ stdio: 'inherit' }, 'run', 'build')
  pinDeps()
  writeManifests()
  assertNoChanges()

  // stop if any failing tests
  npm({ stdio: 'inherit' }, 'test')

  let maxNameLen = -1
  let maxVerLen = -1
  // consistently refer to them by pkg name
  const names = new Set(
    [...pkgs].map(p => {
      if (!manifests[p])
        throw `1: invalid package name or ws folder: ${p}`
      return manifests[p].name
    })
  )
  const changed = new Set([...names])
  const oldVersion = new Map<string, string>()
  for (const p of changed) {
    const pkg = manifests[p]
    if (!pkg) throw `2: invalid package name or ws folder: ${p}`
    oldVersion.set(pkg.name, pkg.version)

    const l = names.has(p)
      ? level
      : level.startsWith('pre')
      ? parse(pkg.version)?.prerelease?.length
        ? 'prerelease'
        : 'prepatch'
      : 'patch'

    const nv = isReleaseType(l) ? inc(pkg.version, l) : parse(l)
    if (!nv) throw `invalid version generated: ${l}`
    const v = String(nv)
    if (eq(v, pkg.version)) {
      throw `${p} version is already ${v}, no change`
    }
    if (gt(pkg.version, v)) {
      throw `${p} may not reduce version from ${pkg.version} to ${v}`
    }
    maxNameLen = Math.max(maxNameLen, pkg.name.length)
    maxVerLen = Math.max(maxVerLen, pkg.version.length)
    pkg.version = v
    // now look for any dependents, and add them to the list.
    for (const d of dependents.get(p) || []) {
      changed.add(d)
    }
  }
  console.log('changing versions:')
  for (const [name, old] of oldVersion) {
    const req = names.has(name)
    const n = name.padEnd(maxNameLen)
    const pn = req ? chalk.cyan(n) : n
    const p = `${pn} ${old.padStart(maxVerLen)} => ${chalk.bold(
      manifests[name].version
    )}`
    const msg = req ? p : chalk.dim(p)
    console.log(msg)
  }
  // pin all deps everywhere
  pinDeps()
  const wrote = writeManifests()
  console.log('wrote manifests:', wrote)
  // install to update the package-lock.json
  npm('i')
  rollbacks.push(() => git('checkout', 'package-lock.json'))
  git(
    'add',
    'package-lock.json',
    ...wrote.map(name => {
      const ws = loc.get(manifests[name])
      if (!ws) throw `could not get ws folder for ${name}`
      return `${ws}/package.json`
    })
  )
  const pvs = wrote.map(name => `${name}@${manifests[name].version}`)
  rollbacks.push(() => git('reset', 'HEAD^'))
  git(
    'commit',
    '-m',
    `update versions

${pvs.join('\n')}
`
  )
  for (const pv of pvs) {
    rollbacks.push(() => git('tag', '-d', pv))
    git('tag', '-sm', pv, pv)
  }
  publish(wrote, level.startsWith('pre'))
}

const pinDeps = () => {
  for (const pkg of new Set([...Object.values(manifests)])) {
    for (const t of depTypes) {
      const deps = pkg[t] as DepSet | undefined
      if (!deps) continue
      for (const name of Object.keys(deps)) {
        const dep = manifests[name]
        if (!dep) continue
        const old = deps[name]
        if (String(parse(old)) === String(parse(dep.version)))
          continue
        deps[name] = dep.version
      }
    }
  }
}

// write all manifests that differ from their json on disk
const writeManifest = (pkg: Manifest) => {
  const ws = loc.get(pkg)
  if (!ws)
    throw `could not get ws folder from pkg manifest: ${pkg.name}`
  const newJson = JSON.stringify(pkg, null, 2) + '\n'
  const pj = resolve(ws, 'package.json')
  const oldJson = readFileSync(pj, 'utf8')
  const oldMani = JSON.parse(oldJson)
  const { match, diff } = strict(pkg, oldMani, { style: 'js' })
  if (
    oldMani.version === pkg.version &&
    process.argv[2] !== 'pindeps'
  ) {
    if (!match) {
      console.error(pj)
      console.error(diff)
      throw `manifest changed but version did not: ${pkg.name}`
    }
    return false
  }
  rollbacks.push(() => git('checkout', pj))
  writeFileSync(pj, newJson)
  return true
}
const writeManifests = () => {
  const wrote: string[] = []
  for (const p of new Set(Object.values(manifests))) {
    if (writeManifest(p)) {
      wrote.push(p.name)
    }
  }
  return wrote
}

const publish = (names: string[], pre: boolean = false) => {
  const msg = git(
    'show',
    '--no-patch',
    '--pretty=%s\n\n%b',
    'HEAD'
  ).stdout.trim()

  // verify current commit is updating all and only these versions
  const [subject, ...body] = msg.split('\n\n')
  if (subject !== 'update versions' || body.length !== 1) {
    throw `cannot publish, not on a version update commit:\n${msg}`
  }
  const expect = new Set(body[0].trim().split('\n'))
  const pvs = names.map(name => `${name}@${manifests[name].version}`)
  for (const pv of pvs) {
    if (!expect.has(pv)) {
      throw `${pv} not updated on this commit\n${msg}`
    }
    expect.delete(pv)
  }
  if (expect.size) {
    throw `must publish all packages, missing:\n${[...expect].join(
      '\n'
    )}`
  }

  // verify that we're on the right HEAD and all are tagged properly
  const shas = pvs.map(pv => [
    pv,
    git('show', '--no-patch', '--pretty=%H', pv)
      .stdout.trim()
      .split('\n')
      .pop(),
  ])
  const head = git(
    'show',
    '--no-patch',
    '--pretty=%H',
    'HEAD'
  ).stdout.trim()
  for (const [pv, sha] of shas) {
    if (sha !== head) {
      console.error({ sha, head })
      throw `${pv} not tagged at ${head}`
    }
  }

  // ok, this is the commit we want, it's all tagged and good to go
  git('push', 'origin', '--follow-tags')
  for (const pv of pvs) {
    // delete the remote tags if it doesn't work
    rollbacks.push(() => git('push', 'origin', `:${pv}`))
  }
  // push worked, try to publish, skip any private packages
  const pn = names.filter(n => !manifests[n].private)
  // always publish tap last
  const noTap = pn.filter(n => n !== 'tap')
  npm(
    { stdio: 'inherit' },
    'publish',
    '--access=public',
    `--tag=${pre ? 'pre' : 'latest'}`,
    ...noTap.map(n => `-w=${n}`)
  )
  if (pn.includes('tap')) {
    npm(
      { stdio: 'inherit' },
      'publish',
      '--access=public',
      `--tag=${pre ? 'pre' : 'latest'}`,
      '-w=tap'
    )
  }
}

// publish any packages whose versions do not match what's on npm
const pubAll = () => {
  const pubs: Manifest[] = []
  const tags = new Map<string, string>()
  for (const mani of new Set([...Object.values(manifests)])) {
    if (mani.private) continue

    const { versions: v, 'dist-tags': distTags } = JSON.parse(
      npm(
        { quiet: true },
        'view',
        mani.name,
        'versions',
        'dist-tags',
        '--json'
      ).stdout
    )
    if (!(v === mani.version || v.includes(mani.version))) {
      pubs.push(mani)
    }
    const t = parse(mani.version)?.prerelease?.length
      ? 'pre'
      : 'latest'
    if (distTags[t] !== mani.version) {
      tags.set(`${mani.name}@${mani.version}`, t)
    }
  }
  if (!pubs.length) {
    console.log('all packages published')
  }
  for (const p of pubs) {
    const tag = parse(p.version)?.prerelease?.length
      ? 'pre'
      : 'latest'
    npm({ stdio: 'inherit' }, 'publish', '-ws', p.name, '--tag', tag)
  }
  if (!tags.size) {
    console.log('all dist-tags set')
  }
  for (const [pkg, tag] of tags.entries()) {
    npm({ stdio: 'inherit' }, 'dist-tag', 'add', pkg, tag)
  }
}

const usage = `Usage: node ${relative(
  process.cwd(),
  process.argv[1].replace(/\.mts$/, '.mjs')
)} [ <bump> <pkg> [<pkg> ...] | pindeps ]`

const fullHelp = `${usage}

Increment or set the specified package(s) by the first arg. All of the
dependents of any package changed will receive a patch increment. If
any changes are made, then the proper git and npm stuff will be done.

  bump:   Either a SemVer string, or a version update type
  pkg:    The name of a package, or the workspace path

If called with the argument 'pindeps', then it'll pin all deps to their
proper values, and write manifests, but not commit or publish anything.`

{
  if (/^(-+h(elp)?)|help$/.test(process.argv[2])) {
    console.log(fullHelp)
    process.exit(0)
  }

  if (process.argv[2] === 'pindeps') {
    pinDeps()
    const wrote = writeManifests()
    if (wrote.length) npm('i')
    process.exit(0)
  }

  if (process.argv[2] === 'pub') {
    pubAll()
    process.exit(0)
  }

  if (process.argv.length < 4) {
    console.log(fullHelp)
    process.exit(1)
  }

  const [level, ...pkgs] = process.argv.slice(2)
  version(pkgs, level)
}
