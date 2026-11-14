/**
 * some utilities for interfacing with npm in the `tap plugin` command
 */

import { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { mkdirp } from 'mkdirp'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'

const npmFreeEnv = Object.fromEntries(
  Object.entries(process.env).filter(([k]) => !/^npm_/i.test(k)),
)

let npmCwd: string | undefined = undefined
export const npmFindCwd = async (projectRoot: string): Promise<string> => {
  if (!npmCwd) {
    npmCwd = resolve(projectRoot, '.tap/plugins')
    await mkdirp(npmCwd + '/node_modules')
  }
  return npmCwd
}

// exported for testing
export const npmExe = process.platform === 'win32' ? 'npm.cmd' : 'npm'

/**
 * Run an npm command in the background, returning the result
 */
export const npmBg = (args: string[], npmCwd: string) => {
  return spawnSync(npmExe, args, {
    env: {
      ...npmFreeEnv,
      npm_config_prefix: npmCwd,
    },
    encoding: 'utf8',
    cwd: npmCwd,
    shell: false,
  })
}

/**
 * Run an npm command in the project root, so that it reads the project's
 * `.npmrc` (scoped registries, auth) like any other npm command run there.
 *
 * Only the `npm_*` variables that npm itself sets for scripts are removed.
 * Variables that a `.npmrc` may refer to, like `NPM_TOKEN`, are kept.
 */
export const npmInProject = (args: string[], projectRoot: string) => {
  return spawnSync(npmExe, args, {
    env: Object.fromEntries(
      Object.entries(process.env).filter(([k]) => !/^npm_/.test(k)),
    ),
    encoding: 'utf8',
    cwd: projectRoot,
    shell: false,
  })
}

/**
 * The registry that npm uses in the project root for a package.
 *
 * The plugins folder is a project of its own to npm, so it does not see
 * the `.npmrc` of the project root. Passing the registries on the command
 * line makes `npm install` fetch from the same place as the rest of the
 * project does.
 */
export const registryArgs = (names: string[], projectRoot: string) => {
  const keys = new Set(['registry'])
  for (const name of names) {
    if (name.startsWith('@')) {
      keys.add(`${name.slice(0, name.indexOf('/'))}:registry`)
    }
  }
  const args: string[] = []
  for (const key of keys) {
    const res = npmInProject(['config', 'get', key], projectRoot)
    const value = String(res.stdout ?? '').trim()
    if (
      !res.status &&
      value &&
      value !== 'undefined' &&
      value !== 'null'
    ) {
      args.push(`--${key}=${value}`)
    }
  }
  return args
}

/**
 * Run an npm command in the foreground
 */
const npmFg = (
  args: string[],
  npmCwd: string,
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
) => {
  return foregroundChild(
    npmExe,
    args,
    {
      env: {
        ...npmFreeEnv,
        npm_config_prefix: npmCwd,
      },
      cwd: npmCwd,
      shell: false,
    },
    cb,
  )
}

// suppress all non-essential npm output
const quiet: string[] = [
  '--silent',
  '--log-level=silent',
  '--no-audit',
  '--loglevel=error',
  '--no-progress',
  '--no-fund',
]

export const install = async (pkgs: string[], config: LoadedConfig) => {
  const npmCwd = await npmFindCwd(config.projectRoot)
  const args = [
    'install',
    ...quiet,
    ...registryArgs(pkgs, config.projectRoot),
    '--save',
    ...pkgs,
  ]
  await new Promise<void>((res, rej) => {
    npmFg(args, npmCwd, (code, signal) => {
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

export const uninstall = async (pkgs: string[], config: LoadedConfig) => {
  const args = ['rm', ...quiet, ...pkgs]
  const npmCwd = await npmFindCwd(config.projectRoot)
  await new Promise<void>(res =>
    npmFg(args, npmCwd, (code, signal) => {
      // allow error exit to proceed
      res()
      return code || signal ? undefined : false
    }),
  )
}
