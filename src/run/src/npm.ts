/**
 * some utilities for interfacing with npm in the `tap plugin` command
 */

import { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { spawnSync } from 'node:child_process'
import { sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveImport } from 'resolve-import'

// Figure out the cwd where we should run npm commands.
// This is important because we need the @tapjs/test module to be able
// to see the plugins we add.
let npmCwd: string
const getDepNMParent = async (pkg: string, cwd: string) => {
  try {
    const p = fileURLToPath(await resolveImport(pkg, cwd + '/x'))
    const ppkg = pkg.replace(/\//, sep)
    const test = `node_modules${sep}${ppkg}`
    const i = p.lastIndexOf(test)
    if (i <= 0) return null
    return p.substring(0, i - 1)
  } catch {
    return null
  }
}

const npmGetPrefix = (cwd: string) =>
  spawnSync('npm', ['prefix'], {
    env: npmFreeEnv,
    encoding: 'utf8',
    cwd,
    shell: true,
  }).stdout || null

export const npmFindCwd = async (
  projectRoot: string,
): Promise<string> =>
  (npmCwd ??=
    // if tap is in node_modules, take the parent.
    // almost always going to be the one that hits.
    (await getDepNMParent('tap', projectRoot)) ??
    // failing that, look for the Test class they're using.
    (await getDepNMParent('@tapjs/test', projectRoot)) ??
    // the workspace root, if we're in a monorepo workspace
    npmGetPrefix(projectRoot) ??
    // fall back finally to the project root
    projectRoot)

const npmFreeEnv = Object.fromEntries(
  Object.entries(process.env).filter(([k]) => !/^npm_/i.test(k)),
)

/**
 * Run an npm command in the background, returning the result
 */
export const npmBg = (args: string[], config: LoadedConfig) =>
  spawnSync(
    'npm',
    ['--prefix', npmCwd ?? config.projectRoot, ...args],
    {
      env: npmFreeEnv,
      encoding: 'utf8',
      cwd: npmCwd || config.projectRoot,
      shell: true,
    },
  )

/**
 * Run an npm command in the foreground
 */
const npmFg = (
  args: string[],
  config: LoadedConfig,
  cb: (
    code: number | null,
    signal: NodeJS.Signals | null,
  ) =>
    | number
    | false
    | void
    | NodeJS.Signals
    | Promise<number | false | void | NodeJS.Signals | undefined>
    | undefined,
) =>
  foregroundChild(
    'npm',
    // will always have set npmCwd by now
    /* c8 ignore start */
    ['--prefix', npmCwd ?? config.projectRoot, ...args],
    {
      env: npmFreeEnv,
      cwd: npmCwd || config.projectRoot,
      shell: true,
      /* c8 ignore stop */
    },
    cb,
  )

// suppress all non-essential npm output
const quiet = ['--no-audit', '--loglevel=error', '--no-progress']

export const install = async (
  pkgs: string[],
  config: LoadedConfig,
) => {
  await npmFindCwd(config.projectRoot)
  const args = ['install', ...quiet, '--save-dev', ...pkgs]
  await new Promise<void>((res, rej) => {
    npmFg(args, config, (code, signal) => {
      // allow error exit to proceed
      if (code || signal) {
        rej(
          Object.assign(new Error('install failed'), {
            code,
            signal,
          }),
        )
        return
      }
      res()
      // do not exit
      return false
    })
  })
}

export const uninstall = async (
  pkgs: string[],
  config: LoadedConfig,
) => {
  await npmFindCwd(config.projectRoot)
  const args = ['rm', ...quiet, ...pkgs]
  await new Promise<void>(res =>
    npmFg(args, config, (code, signal) => {
      // allow error exit to proceed
      res()
      return code || signal ? undefined : false
    }),
  )
}
