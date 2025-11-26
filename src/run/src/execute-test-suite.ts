/**
 * This provides the functionality that is shared between `tap run`
 * and `tap replay`, to figure out what tests need to be run, create
 * the various subtests for each, and pipe the whole thing through an
 * appropriate reporter.
 *
 * When called by `run`, the execution method is `t.spawn`. When called
 * by `replay`, the file is mapped to its appropriate saved results file in
 * `.tap/test-results`, and `t.tapFile()` is called.
 *
 * @module
 */
// run the provided tests
import { plugin as AfterPlugin } from '@tapjs/after'
import { LoadedConfig } from '@tapjs/config'
import type { TAP } from '@tapjs/core'
import { tap } from '@tapjs/core'
import { resolve } from 'path'
import { FinalResults } from 'tap-parser'
import { handleReporter } from './handle-reporter.js'
import { list } from './list.js'
import { values } from './main-config.js'
import { outputFile } from './output-file.js'
import { proxyFatalSignals } from './proxy-fatal-signals.js'
import { report } from './report.js'
import { readSave, writeSave } from './save-list.js'

export const executeTestSuite = async <
  T extends TAP & ReturnType<typeof AfterPlugin>,
  S extends (t: TAP & ReturnType<typeof AfterPlugin>) => T,
>(
  args: string[],
  config: LoadedConfig,
  /**
   * called with the tap object, so any additional plugins can be applied or
   * other modifications if needed.
   */
  applyPlugins: S,

  /**
   * called before running the test files, but only if we have files to run
   */
  setup: (t: T) => void | Promise<void>,

  /**
   * called with the mutated tap, and each test file path, relative to
   * config.projectRoot
   */
  execute: (
    t: T,
    testFile: string,
    files: string[],
    hasReporter: boolean,
  ) => Promise<any>,
) => {
  let base = tap({
    // special runner context so plugins can behave differently.
    // currently, this is only used by @tapjs/filter
    context: Symbol.for('tap.isRunner'),
  })
  if (!base.pluginLoaded(AfterPlugin)) {
    base = (base as TAP).applyPlugin(AfterPlugin) as TAP &
      ReturnType<typeof AfterPlugin>
  }
  const t = applyPlugins(base)

  // we don't want to time out the runner, just the subtests
  t.setTimeout(0)

  // proxy all fatal signals to child processes, so that we can report
  // their status properly.
  proxyFatalSignals(t)

  const files = await list(args, config)
  if (!files.length) {
    // see if we WOULD have gotten files, if not for the fact that they
    // are all unchanged.
    const unpruned =
      config.get('changed') ? await list(args, config, true) : []
    if (args.length && !unpruned.length) {
      console.error(
        'No valid test files found matching ' +
          args.map(a => JSON.stringify(a)).join(' '),
      )
      if (
        args.length === 2 &&
        args[0] === 'edit' &&
        args[1] === 'config'
      ) {
        console.error(`(Did you mean 'tap config edit'?)`)
      }
      t.debug('runner exit=1 no files found, args')
      process.exitCode = 1
    } else if (unpruned.length) {
      console.log('No new tests to run')
    } else {
      t.debug('runner exit=1 no files found, no args')
      console.error('No test files found')
      process.exitCode = 1
    }
    return
  }

  // jobs has a default of os.availableParallelism or 1
  /* c8 ignore start */
  if (typeof values.jobs !== 'number') {
    throw new Error('no jobs option provided')
  }
  /* c8 ignore stop */

  await setup(t)

  const hasReporter = await handleReporter(t, config)

  t.buffered = false

  const readSaveList = await readSave(config)
  const saveList =
    config.get('save') && !readSaveList.length ? files : readSaveList

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
    files.length === 1 && (files[0] === '-' || files[0] === '/dev/stdin')

  if (!stdinOnly) {
    t.teardown(() => report([], config))
    t.plan(files.length)
  }

  outputFile(t, config, hasReporter)

  const sorted = files.sort(
    config.get('shuffle') ?
      () => Math.random() - 0.5
    : (a, b) => a.localeCompare(b, 'en'),
  )
  for (const f of sorted) {
    const file =
      f === '-' || f === '/dev/stdin' ?
        '/dev/stdin'
      : resolve(config.projectRoot, f)
    const p = execute(t, file, sorted, hasReporter)

    testPromises.push(
      !saveList.length ? p : (
        p.then((results: FinalResults | null) => {
          if (results?.ok && saveList.includes(f))
            saveList.splice(saveList.indexOf(f), 1)
        })
      ),
    )
  }

  return t.promise()
}
