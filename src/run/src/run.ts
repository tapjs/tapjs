// run the provided tests
import { plugin as AfterPlugin } from '@tapjs/after'
import { plugin as BeforePlugin } from '@tapjs/before'
import { LoadedConfig } from '@tapjs/config'
import { TapFile, TapFileOpts, type TAP } from '@tapjs/core'
import { plugin as SpawnPlugin } from '@tapjs/spawn'
import { plugin as StdinPlugin } from '@tapjs/stdin'
import { glob } from 'glob'
import { stat } from 'node:fs/promises'
import { relative, resolve } from 'node:path'
import { rimraf } from 'rimraf'
import { runAfter } from './after.js'
import { runBefore } from './before.js'
import { build } from './build.js'
import { getCoverageMap } from './coverage-map.js'
import { executeTestSuite } from './execute-test-suite.js'
import { values } from './main-config.js'
import { outputDir } from './output-dir.js'
import { readSave } from './save-list.js'
import { testArgv } from './test-argv.js'
import { testIsSerial } from './test-is-serial.js'

const regExpEscape = (s: string) =>
  s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

const node = process.execPath

export const run = async (args: string[], config: LoadedConfig) => {
  // timeout in ms for test subprocesses, has a default
  // so it'll always be set to a number.
  /* c8 ignore start */
  const timeout = (config.get('timeout') ?? 30) * 1000
  /* c8 ignore stop */

  // these all default to an empty array
  /* c8 ignore start */
  const testArgs: string[] = values['test-arg'] || []
  const testEnv: string[] = values['test-env'] || []
  /* c8 ignore stop */
  process.env._TAPJS_PROCESSINFO_CWD_ = config.projectRoot
  process.env._TAPJS_PROCESSINFO_EXCLUDE_ = String(
    // don't consider snapshots and fixtures, or else we'll
    // always think that all tests are new after generating!
    // TODO: these come from plugins, they should be able to export
    // this, like with testFileExtensions.
    /(^(node|tapmock):|[\\\/](\.tap|tap-snapshots)[\\\/])/,
  )

  const argv = testArgv(config)

  let env: NodeJS.ProcessEnv | undefined = undefined

  const saveList = await readSave(config)
  const map = await getCoverageMap(config)

  const covExcludeFiles: (string | undefined)[] = []
  let _TAPJS_PROCESSINFO_COV_EXCLUDE_FILES_: string | undefined =
    undefined

  // always exclude the root node_modules from coverage. we don't report
  // on it, and it just takes up space in the .tap/coverage data.
  const _TAPJS_PROCESSINFO_COV_EXCLUDE_ = String(
    new RegExp(
      '^' + regExpEscape(resolve(config.projectRoot, 'node_modules')),
    ),
  )

  return executeTestSuite(
    args,
    config,
    (
      t,
    ): TAP &
      ReturnType<typeof AfterPlugin> &
      ReturnType<typeof SpawnPlugin> &
      ReturnType<typeof BeforePlugin> &
      ReturnType<typeof StdinPlugin> => {
      // generate the env here, in case any plugins updated it
      env = { ...process.env }
      for (const e of testEnv) {
        if (!e.includes('=')) {
          delete env[e]
        } else {
          const split = e.split('=')
          const k = split[0] as string
          const v = split.slice(1).join('=')
          env[k] = v
        }
      }

      // always set in dev, and the applyPlugin behavior is well tested
      /* c8 ignore start */
      const a =
        (t as TAP).pluginLoaded(SpawnPlugin) ?
          t
        : t.applyPlugin(SpawnPlugin)
      const b =
        (a as TAP).pluginLoaded(BeforePlugin) ?
          a
        : a.applyPlugin(BeforePlugin)
      const c =
        (b as TAP).pluginLoaded(StdinPlugin) ?
          b
        : b.applyPlugin(StdinPlugin)
      /* c8 ignore stop */
      return c as TAP &
        ReturnType<typeof AfterPlugin> &
        ReturnType<typeof SpawnPlugin> &
        ReturnType<typeof BeforePlugin> &
        ReturnType<typeof StdinPlugin>
    },

    async t => {
      // if the configured plugins aren't what tap is built with, rebuild it
      // this won't affect the tap loaded here in the runner, but will in the
      // the test files we're about to run.
      const needBuild = t.pluginSignature !== config.pluginSignature
      if (needBuild) await build([], config)

      // have to register before doing before/after because otherwise
      // that will trigger a pipe to stdout.
      t.register()
      covExcludeFiles.push(runBefore(t, argv, config))
      covExcludeFiles.push(runAfter(t, argv, config))

      // don't delete old coverage if only running subset of suites
      if (!config.get('changed') && !saveList.length) {
        await rimraf(resolve(config.projectRoot, '.tap/processinfo'))
        await rimraf(resolve(config.projectRoot, '.tap/coverage'))
      }

      outputDir(t, config)
    },

    async (t, file, files, hasReporter) => {
      if (!_TAPJS_PROCESSINFO_COV_EXCLUDE_FILES_) {
        _TAPJS_PROCESSINFO_COV_EXCLUDE_FILES_ = [
          ...covExcludeFiles.filter(f => typeof f === 'string'),
          ...files.map(f => resolve(config.projectRoot, f)),
        ].join('\n')
      }

      /* c8 ignore start */
      const stdio = hasReporter ? 'pipe' : 'inherit'
      /* c8 ignore end */

      if (file === '/dev/stdin') {
        if (files.length === 1) return t.stdinOnly()
        else return t.stdin()
      }
      const name = relative(config.projectRoot, file).replace(
        /\\/g,
        '/',
      )
      const mapped = map(name)
      let coveredFiles: null | string[] =
        mapped === null ? null : (
          await glob(mapped, {
            cwd: config.projectRoot,
            absolute: true,
          })
        )
      if (mapped?.length && !coveredFiles?.length) {
        // provided a glob expression that didn't match anything.
        // cover nothing.
        coveredFiles = null
      }
      const _TAPJS_PROCESSINFO_COVERAGE_ =
        coveredFiles === null ? '0' : '1'
      const _TAPJS_PROCESSINFO_COV_FILES_ = (coveredFiles || []).join(
        '\n',
      )
      const buffered = !testIsSerial(file) && t.jobs > 1
      const args = [...argv, file, ...testArgs]
      // support stuff like `tap <(...)` or raw .tap files.
      const st = await stat(file)
      const raw =
        st.isCharacterDevice() ||
        st.isBlockDevice() ||
        st.isFIFO() ||
        file.toLowerCase().endsWith('.tap')
      return raw ?
          t.sub<TapFile, TapFileOpts>(TapFile, {
            at: null,
            cwd: config.projectRoot,
            buffered,
            filename: file,
          })
        : t.spawn(node, args, {
            at: null,
            stack: '',
            buffered,
            timeout,
            stdio,
            env: {
              ...env,
              _TAPJS_PROCESSINFO_COVERAGE_,
              _TAPJS_PROCESSINFO_COV_FILES_,
              _TAPJS_PROCESSINFO_COV_EXCLUDE_FILES_,
              _TAPJS_PROCESSINFO_COV_EXCLUDE_,
            },
            name,
            cwd: config.projectRoot,
            externalID: name,
          })
    },
  )
}
