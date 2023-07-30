// run the provided tests
import { LoadedConfig } from '@tapjs/config'
import { tap } from '@tapjs/core'
import { plugin as StdinPlugin } from '@tapjs/stdin'
import { loaders } from '@tapjs/test'
import { glob } from 'glob'
import { createRequire } from 'node:module'
import { relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { FinalResults } from 'tap-parser'
import { runAfter } from './after.js'
import { runBefore } from './before.js'
import { buildWithSpawn } from './build-with-spawn.js'
import { getCoverageMap } from './coverage-map.js'
import { handleReporter } from './handle-reporter.js'
import { list } from './list.js'
import { values } from './main-config.js'
import { outputDir } from './output-dir.js'
import { outputFile } from './output-file.js'
import { proxyFatalSignals } from './proxy-fatal-signals.js'
import { report } from './report.js'
import { readSave, writeSave } from './save-list.js'
import { testIsSerial } from './test-is-serial.js'

const require = createRequire(import.meta.url)
const piLoader = pathToFileURL(require.resolve('@tapjs/processinfo'))

const node = process.execPath

export const run = async (args: string[], config: LoadedConfig) => {
  const timeout = (config.get('timeout') || 30) * 1000
  const t = tap({
    // special runner context so plugins can behave differently.
    // currently, this is only used by @tapjs/filter
    context: Symbol.for('tap.isRunner'),
  })
  // if we have to rebuild, then it'll re-spawn, so we do not continue
  if (await buildWithSpawn(t, config)) {
    return
  }

  // we don't want to time out the runner, just the subtests
  t.setTimeout(0)

  // proxy all fatal signals to child processes, so that we can report
  // their status properly.
  proxyFatalSignals(t)

  // Maybe should accept an optList of loaders in the config?
  // It seems a bit heavy to require a full on plugin just to
  // specify a loader to add to the list.
  // OTOH, you probably do want to have some other setup/config
  // in many cases, as seen in the @tapjs/typescript plugin.
  const loader = String(piLoader)

  // these all default to an empty array
  /* c8 ignore start */
  const testArgs: string[] = values['test-arg'] || []
  const testEnv: string[] = values['test-env'] || []
  const nodeArgs: string[] = values['node-arg'] || []
  /* c8 ignore stop */

  const argv = [
    '--no-warnings=ExperimentalLoader',
    ...loaders.map(l => `--loader=${l}`),
    '--enable-source-maps',
    `--loader=${loader}`,
    ...nodeArgs,
  ]

  // impossible, include has a default, but Jack's TS doesn't know that
  /* c8 ignore start */
  if (values.include === undefined) {
    throw new Error('no include option provided')
  }
  /* c8 ignore stop */

  process.env._TAPJS_PROCESSINFO_CWD_ = config.globCwd
  process.env._TAPJS_PROCESSINFO_EXCLUDE_ = String(
    // don't consider snapshots and fixtures, or else we'll
    // always think that all tests are new after generating!
    /(^node:|[\\\/](tap-testdir-[^\\\/]+|tap-snapshots)[\\\/])/
  )
  const files = await list(args, config)
  if (!files.length) {
    // see if we WOULD have gotten files, if not for the fact that they
    // are all unchanged.
    const unpruned = config.get('changed')
      ? await list(args, config, true)
      : []
    if (args.length && !unpruned.length) {
      console.error(
        'No valid test files found matching ' +
          args.map(a => JSON.stringify(a)).join(' ')
      )
      process.exitCode = 1
    } else if (unpruned.length) {
      console.log('No new tests to run')
    } else {
      console.error('No test files found')
      process.exitCode = 1
    }
    return
  }

  const map = await getCoverageMap(config)

  const env = { ...process.env }
  for (const e of testEnv) {
    if (!e.includes('=')) {
      delete env[e]
    } else {
      const split = e.split('=')
      const k = split[0]
      const v = split.slice(1).join('=')
      env[k] = v
    }
  }

  // jobs has a default of os.availableParallelism or 1
  /* c8 ignore start */
  if (typeof values.jobs !== 'number') {
    throw new Error('no jobs option provided')
  }
  /* c8 ignore stop */

  const hasReporter = await handleReporter(t, config)
  /* c8 ignore start */
  const stdio = hasReporter ? 'pipe' : 'inherit'
  /* c8 ignore end */

  t.buffered = false

  const readSaveList = await readSave(config)
  const saveList =
    config.get('save') && !readSaveList.length ? files : readSaveList

  // don't delete old coverage if only running subset of suites
  if (
    !config.get('changed') &&
    !saveList.length &&
    !config.get('coverage-add')
  ) {
    await rimraf(resolve(config.globCwd, '.tap/processinfo'))
    await rimraf(resolve(config.globCwd, '.tap/coverage'))
  }

  runBefore(t, argv, config)
  runAfter(t, argv, config)

  // after() can run in the same tick that the test promise resolves,
  // so we have to wait to write the save file until they're all done.
  // only an issue with more than one subtests that all run in parallel,
  // and end very quickly.
  const testPromises: Promise<any>[] = []
  if (config.get('save')) {
    t.after(async () => {
      await Promise.all(testPromises)
      await writeSave(config, saveList)
    })
  }

  t.jobs = Math.max(1, Math.min(values.jobs, files.length))
  const stdinOnly =
    files.length === 1 &&
    (files[0] === '-' || files[0] === '/dev/stdin') &&
    t.pluginLoaded(StdinPlugin)

  if (!stdinOnly) {
    t.teardown(() => report([], config))
    t.plan(files.length)
  }

  outputFile(t, config)
  outputDir(t, config)

  for (const f of files.sort((a, b) => a.localeCompare(b, 'en'))) {
    if (f === '-' || f === '/dev/stdin') {
      if (t.pluginLoaded(StdinPlugin)) {
        if (files.length === 1) t.stdinOnly()
        else t.stdin()
        // too much to mock to pretend this isn't loaded
        /* c8 ignore start */
      } else {
        console.error(
          '@tapjs/stdin plugin not loaded, skipping stdin'
        )
      }
      /* c8 ignore stop */
      continue
    }
    const mapped = map(f)
    let coveredFiles: null | string[] =
      mapped === null
        ? null
        : await glob(mapped, {
            cwd: config.globCwd,
            absolute: true,
          })
    const _TAPJS_PROCESSINFO_COVERAGE_ =
      coveredFiles === null ? '0' : '1'
    const _TAPJS_PROCESSINFO_COV_FILES_ = (coveredFiles || []).join(
      '\n'
    )
    const file = resolve(config.globCwd, f)
    const buffered = !testIsSerial(file) && t.jobs > 1
    const name = relative(config.globCwd, file)

    const p = t.spawn(node, [...argv, file, ...testArgs], {
      at: null,
      stack: '',
      buffered,
      timeout,
      stdio,
      env: {
        ...env,
        _TAPJS_PROCESSINFO_COVERAGE_,
        _TAPJS_PROCESSINFO_COV_FILES_,
      },
      name,
      cwd: config.globCwd,
      externalID: name,
    })

    if (saveList.length) {
      testPromises.push(
        p.then((results: FinalResults | null) => {
          if (results?.ok && saveList.includes(f))
            saveList.splice(saveList.indexOf(f), 1)
        })
      )
    }
  }
}
