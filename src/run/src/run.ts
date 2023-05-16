// run the provided tests
import { proc, TAP, tap } from '@tapjs/core'
import { plugin as SpawnPlugin } from '@tapjs/core/plugin/spawn'
import { loaders, signature } from '@tapjs/test'
import { foregroundChild } from 'foreground-child'
import { Minipass } from 'minipass'
import { mkdirpSync } from 'mkdirp'
import { createWriteStream } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, relative, sep } from 'node:path'
import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { pathToFileURL } from 'url'
import { build } from './build.js'
import { findSuites } from './find-suites.js'
import { Config, mainBin, mainCommand } from './index.js'
import { report } from './report.js'

const require = createRequire(import.meta.url)
const piLoader = pathToFileURL(require.resolve('@tapjs/processinfo'))

const node = process.execPath

const buildWithSpawn = async (
  t: TAP,
  args: string[],
  config: Config
) => {
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

export const run = async (args: string[], config: Config) => {
  const t = tap()
  await buildWithSpawn(t, args, config)

  // Maybe should accept an optList of loaders in the config?
  // It seems a bit heavy to require a full on plugin just to
  // specify a loader to add to the list.
  const loader = String(piLoader)
  const argv = [
    '--no-warnings',
    `--loader=${loader}`,
    ...loaders.map(l => `--loader=${l}`),
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

  t.plan(files.length)
  t.jobs = values.jobs

  const before = config.get('before')
  if (before) {
    t.before(
      async () =>
        new Promise<void>(res => {
          foregroundChild(
            node,
            [...argv, resolve(before)],
            (code, signal) => {
              if (code || signal) return
              res()
              return false
            }
          )
        })
    )
  }

  const after = config.get('after')
  if (after) {
    t.after(
      async () =>
        new Promise<void>(res => {
          foregroundChild(node, [...argv, resolve(after)], () => res())
        })
    )
  }

  const save = config.get('save')
  const sf = save && resolve(config.globCwd, save)
  const saveList: string[] = []
  if (sf) {
    t.after(async () => {
      if (!saveList.length) await rimraf(sf)
      else await writeFile(sf, saveList.map(s => `${s}\n`).join(''))
    })
  }

  if (!config.get('changed') && !config.get('save')) {
    await rimraf(resolve(config.globCwd, '.tap'))
  }

  t.teardown(() => report([], config))

  const outputFile = config.get('output-file')
  if (outputFile) {
    const m = new Minipass<string, string>({ encoding: 'utf8' })
    m.pipe(process.stdout)
    m.pipe(createWriteStream(outputFile))
    t.register()
    t.pipe(m)
  }

  const outputDir = config.get('output-dir')

  if (outputDir) {
    t.on('spawn', subtest => {
      const out = resolve(outputDir, subtest.name + '.tap')
      mkdirpSync(dirname(out))
      subtest.on('process', proc =>
        proc.stdout.pipe(createWriteStream(out))
      )
    })
  }

  for (const f of files) {
    if (f === '-' || f === '/dev/stdin') {
      t.stdin()
      continue
    }
    const file = resolve(f)
    const buffered = !serial.some(s => file.toLowerCase().startsWith(s))
    const p = t.spawn(node, [...argv, file, ...testArgs], {
      buffered,
      env,
      name: relative(config.globCwd, file),
    })
    if (save) {
      p.then(results => {
        if (!results?.ok) {
          saveList.push(f)
        }
      })
    }
  }
}
