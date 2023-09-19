import type { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { createRequire } from 'node:module'
import { mainCommand } from './main-config.js'
const require = createRequire(import.meta.url)
const tmbin = require.resolve('.bin/generate-tap-test-class')
const execArgs = [
  '--loader=ts-node/esm',
  '--no-warnings',
]
const node = process.execPath

export const build = async (args: string[], config: LoadedConfig) => {
  if (args.length !== 0) {
    throw new TypeError(
      'build command does not take positional arguments'
    )
  }

  const argv = [...execArgs, tmbin, ...config.pluginList]
  return new Promise<void>((res, rej) => {
    foregroundChild(node, argv, {}, (code, signal) => {
      // if this is the main command, just terminate in the same way
      // otherwise, let the promise communicate the build status
      if (mainCommand === 'build') {
        res()
        return
      }
      if (code || signal) {
        rej(
          Object.assign(new Error('build failed'), {
            code,
            signal,
          })
        )
      } else {
        res()
      }
      return false
    })
  })
}
