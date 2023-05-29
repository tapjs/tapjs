// run the provided tests
import { proc, TAP, tap } from '@tapjs/core'
import {
  report as testReport,
  types as reportTypes,
} from '@tapjs/reporter'
import { plugin as SpawnPlugin } from '@tapjs/spawn'
import { plugin as StdinPlugin } from '@tapjs/stdin'
import { loaders, signature } from '@tapjs/test'
import { foregroundChild } from 'foreground-child'
import { glob } from 'glob'
import { Minipass } from 'minipass'
import { mkdirpSync } from 'mkdirp'
import { createWriteStream } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, relative, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { build } from './build.js'
import { findSuites } from './find-suites.js'
import { Config, mainBin, mainCommand } from './index.js'
import { report } from './report.js'
import { readSave, writeSave } from './save-list.js'

const require = createRequire(import.meta.url)
const piLoader = pathToFileURL(require.resolve('@tapjs/processinfo'))

const node = process.execPath

const buildWithSpawn = async (t: TAP, args: string[], config: Config) => {
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
      '--no-warnings',
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

const isStringArray = (a: any): a is string[] =>
  Array.isArray(a) && !a.some(s => typeof s !== 'string')

const handleReporter = async (t: TAP, config: Config) => {
  // figure out if we MUST use the 'tap' reporter
  const reporter = config.get('reporter') as string
  // TODO: if it's not in keyof reportTypes, then look it up as a module.
  return await testReport(
    reporter as 'tap' | keyof typeof reportTypes,
    t,
    config
  )
}

export const run = async (args: string[], config: Config) => {
  const timeout = (config.get('timeout') || 30) * 1000
  const t = tap()
  // we don't want to time out the runner, just the subtests
  t.setTimeout(0)
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

  const coverageMap = config.get('coverage-map')
  const map = !coverageMap
    ? () => []
    : (await import(resolve(config.globCwd, coverageMap))).default
  if (typeof map !== 'function') {
    throw new Error(
      `Coverage map ${map} did not default export a function`
    )
  }

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

  const hasReporter = await handleReporter(t, config)
  const stdio = hasReporter ? 'pipe' : 'inherit'

  t.buffered = false

  const saveList = await readSave(config)
  // don't delete old coverage if only running subset of suites
  if (!config.get('changed') && !saveList.length) {
    await rimraf(resolve(config.globCwd, '.tap'))
  }

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

  if (config.get('save')) {
    t.after(async () => await writeSave(config, saveList))
  }

  t.plan(files.length)
  t.jobs = values.jobs
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
      if (t.pluginLoaded(StdinPlugin)) {
        t.stdin()
      } else {
        console.error('@tapjs/stdin plugin not loaded, skipping stdin')
      }
      continue
    }
    let coveredFiles: string | string[] | null = await glob(map(f), {
      cwd: config.globCwd,
    })
    const _TAPJS_PROCESSINFO_COVERAGE_ = coveredFiles === null ? '0' : '1'
    if (typeof coveredFiles === 'string') coveredFiles = [coveredFiles]
    else if (!isStringArray(coveredFiles)) {
      throw new Error(
        `Coverage map ${map} must return string array or null`
      )
    }
    const _TAPJS_PROCESSINFO_COV_FILES_ = coveredFiles
      .map(f => resolve(f))
      .join('\n')
    const file = resolve(f)
    const buffered = !serial.some(s => file.toLowerCase().startsWith(s))
    const p = t.spawn(node, [...argv, file, ...testArgs], {
      buffered,
      timeout,
      stdio,
      env: {
        ...env,
        _TAPJS_PROCESSINFO_COVERAGE_,
        _TAPJS_PROCESSINFO_COV_FILES_,
      },
      name: relative(config.globCwd, file),
    })
    if (saveList.length) {
      p.then(results => {
        if (!results?.ok) {
          saveList.push(f)
        }
      })
    }
  }
}
