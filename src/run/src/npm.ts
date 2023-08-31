/**
 * some utilities for interfacing with npm in the `tap plugin` command
 */

import { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { spawnSync } from 'node:child_process'

const npmFreeEnv = Object.fromEntries(
  Object.entries(process.env).filter(([k]) => !/^npm_/i.test(k))
)

/**
 * Run an npm command in the background, returning the result
 */
export const npmBg = (args: string[], config: LoadedConfig) =>
  spawnSync('npm', ['--prefix', config.globCwd, ...args], {
    env: npmFreeEnv,
    encoding: 'utf8',
    cwd: config.globCwd,
  })

/**
 * Run an npm command in the foreground
 */
const npmFg = (
  args: string[],
  config: LoadedConfig,
  cb: (
    code: number | null,
    signal: NodeJS.Signals | null
  ) =>
    | number
    | false
    | void
    | NodeJS.Signals
    | Promise<number | false | void | NodeJS.Signals | undefined>
    | undefined
) =>
  foregroundChild(
    'npm',
    ['--prefix', config.globCwd, ...args],
    {
      env: npmFreeEnv,
      cwd: config.globCwd,
    },
    cb
  )

// arguments when
const quiet = ['--no-audit', '--loglevel=error', '--no-progress']
export const install = async (
  pkgs: string[],
  config: LoadedConfig
) => {
  const args = ['install', ...quiet, '--save-dev', ...pkgs]
  await new Promise<void>((res, rej) => {
    npmFg(args, config, (code, signal) => {
      // allow error exit to proceed
      if (code || signal) {
        rej(
          Object.assign(new Error('install failed'), { code, signal })
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
  config: LoadedConfig
) => {
  const args = ['rm', ...quiet, ...pkgs]
  await new Promise<void>(res => {
    npmFg(args, config, (code, signal) => {
      // allow error exit to proceed
      res()
      return code || signal ? undefined : false
    })
  })
}
