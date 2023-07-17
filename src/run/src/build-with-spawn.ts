import { LoadedConfig } from '@tapjs/config'
import { plugin as SpawnPlugin } from '@tapjs/spawn'
import { signature } from '@tapjs/test'
import { foregroundChild } from 'foreground-child'
import { build } from './build.js'

import type { TAP } from '@tapjs/core'

const node = process.execPath
export const buildWithSpawn = async (
  t: TAP,
  config: LoadedConfig
): Promise<boolean> => {
  // Make sure that we WANT to have the spawn plugin, otherwise
  // the runner really can't work.
  if (!config.pluginList.includes('@tapjs/spawn')) {
    throw new Error('tap runner requires the @tapjs/spawn plugin')
  }

  // determine intended plugin list from plugin config
  // if it doesn't match what's in the Test signature, then
  // rebuild first.
  if (config.pluginSignature !== signature) {
    await build([], config)
  }

  // If we didn't load with the spawn plugin, then it means that
  // it must have just been re-built.
  // if we're already in such a respawn, error out to prevent infinite
  // process bomb, because obviously it didn't work.
  // otherwise, try to respawn the runner with the same args, in the hopes
  // that the reloaded version of the test will have the spawn plugin
  // we just built.
  if (!t.pluginLoaded(SpawnPlugin)) {
    if (process.env._TAP_RUN_REBUILD_RESPAWN_ === '1') {
      throw new Error('Failed to build a tap with the spawn plugin')
    }
    process.env._TAP_RUN_REBUILD_RESPAWN_ = '1'

    // let fg child terminate this process
    // we just tell run() that we did respawn, so it should no-op
    return new Promise<boolean>(res => {
      foregroundChild(
        node,
        [...process.execArgv, ...process.argv.slice(1)],
        () => {
          res(true)
        }
      )
    })
  }

  return false
}
