import { LoadedConfig } from '@tapjs/config'
import { proc, TAP } from '@tapjs/core'
import { plugin as SpawnPlugin } from '@tapjs/spawn'
import { signature } from '@tapjs/test'
import { foregroundChild } from 'foreground-child'
import { build } from './build.js'
import { mainBin, mainCommand } from './main-config.js'

const node = process.execPath
export const buildWithSpawn = async (
  t: TAP,
  args: string[],
  config: LoadedConfig
) => {
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
  if (!t.pluginLoaded(SpawnPlugin)) {
    if (process.env._TAP_RUN_REBUILD_RESPAWN_ === '1') {
      throw new Error('Failed to build a tap with the spawn plugin')
    }
    const argv = [
      '--no-warnings=ExperimentalLoader',
      '--loader=ts-node/esm',
      mainBin,
      ...args,
    ]
    const env = {
      ...process.env,
      _TAP_RUN_REBUILD_RESPAWN_: '1',
    }

    return new Promise<void>((res, rej) => {
      foregroundChild(
        node,
        [...(proc?.execArgv || []), ...argv],
        { env },
        (code, signal) => {
          if (code || signal) {
            const er = new Error('run command failed')
            rej(Object.assign(er, { code, signal }))
            return
          }
          res()
          if (mainCommand === 'run') {
            if (code) return code
            if (signal) return signal
            return
          }
          return false
        }
      )
    })
  }
}
