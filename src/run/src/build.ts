import type { LoadedConfig } from '@tapjs/config'
import { foregroundChild } from 'foreground-child'
import { fileURLToPath } from 'node:url'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import { mainCommand } from './main-config.js'
import { plugin } from './plugin.js'
const tapBuildBin = fileURLToPath(
  resolveImportSync(
    '@tapjs/test/generate-tap-test-class',
    import.meta.url,
  ),
)
const node = process.execPath

export const build = async (args: string[], config: LoadedConfig) => {
  if (args.length !== 0) {
    throw new TypeError('build command does not take positional arguments')
  }

  await plugin(['add', ...config.pluginList], config, true)
  const argv = [tapBuildBin, ...config.pluginList]
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
          }),
        )
      } else {
        res()
      }
      return false
    })
  })
}
