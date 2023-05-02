// run the provided tests
import { TAP } from '@tapjs/core'
import { plugin as SpawnPlugin } from '@tapjs/core/plugin/spawn'
import { loaders, signature } from '@tapjs/test'
import { foregroundChild } from 'foreground-child'
import { createRequire } from 'node:module'
import { relative, sep } from 'node:path'
import { resolve } from 'path'
import { pathToFileURL } from 'url'
import { build } from './build.js'
import { findSuites } from './find-suites.js'
import { Config, mainBin, mainCommand } from './index.js'
type T = ReturnType<typeof TAP> & ReturnType<typeof SpawnPlugin>
const require = createRequire(import.meta.url)
const piLoader = pathToFileURL(require.resolve('@tapjs/processinfo/esm'))

const node = process.execPath
const t = TAP() as T

export const run = async (args: string[], config: Config) => {
  // Make sure that we WANT to have the spawn plugin, otherwise
  // the runner really can't work.
  if (!config.pluginList.includes('@tapjs/core/plugin/spawn')) {
    throw new Error(
      'tap runner requires the @tapjs/core/plugin/spawn plugin'
    )
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
    if (process.env._TAP_RUN_REBUILD_RESPAWN === '1') {
      throw new Error('Failed to build a tap with the spawn plugin')
    }
    const argv = [
      '--no-warnings',
      '--loader=ts-node/esm',
      mainBin,
      ...args,
    ]
    const env = {
      ...process.env,
      _TAP_RUN_REBUILD_RESPAWN: '1',
    }

    return new Promise<void>((res, rej) => {
      foregroundChild(node, argv, { env }, (code, signal) => {
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
      })
    })
  }

  // Maybe should accept an optList of loaders in the config?
  // It seems a bit heavy to require a full on plugin just to
  // specify a loader to add to the list.
  for (const l of loaders) {
    piLoader.searchParams.set(l, '1')
  }
  const loader = String(piLoader)
  const argv = [
    '--no-warnings',
    `--loader=${loader}`,
    '--enable-source-maps',
    ...(config.values?.['node-arg'] || []),
  ]

  const { values } = config.parse()
  // impossible, include has a default, but Jack's TS doesn't know that
  /* c8 ignore start */
  if (values.include === undefined) {
    throw new Error('no include option provided')
  }
  /* c8 ignore stop */

  const files = await findSuites(args, config)

  /* c8 ignore start */
  const testArgs: string[] = values['test-arg'] || []
  const testEnv: string[] = values['test-env'] || []
  /* c8 ignore stop */
  const env = { ...process.env }
  for (const e of testEnv) {
    if (!e.includes('=')) delete env[e]
    const split = e.split('=')
    const k = split[0]
    const v = split.slice(1).join('=')
    env[k] = v
  }

  // run the test files, marking the non-parallel ones as buffer:false
  /* c8 ignore start */
  if (typeof values.jobs !== 'number') {
    throw new Error('no jobs option provided')
  }
  /* c8 ignore stop */

  const serial = values.serial
    ? values.serial.map(s => resolve(s).toLowerCase() + sep)
    : []

  t.jobs = values.jobs
  for (const f of files) {
    t.spawn(node, [...argv, resolve(f), ...testArgs], {
      buffered: !serial.some(s => f.toLowerCase().startsWith(s)),
      env,
      name: relative(config.globCwd, resolve(f)),
    })
  }
}
