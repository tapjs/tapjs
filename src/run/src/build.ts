import type { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { fileURLToPath } from 'node:url'
import { resolveImport } from 'resolve-import'
import { mainCommand } from './main-config.js'
const tmbin = fileURLToPath(
  await resolveImport('@tapjs/test/generate-tap-test-class')
)
const node = process.execPath

export const build = async (args: string[], config: LoadedConfig) => {
  if (args.length !== 0) {
    throw new TypeError(
      'build command does not take positional arguments'
    )
  }

  const argv = [tmbin, ...config.pluginList]
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
