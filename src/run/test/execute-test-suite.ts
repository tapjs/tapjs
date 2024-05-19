import t from 'tap'

// all we really have to cover is the case where @tapjs/after isn't loaded
// everything else is covered by the tests for run and replay

import { plugin as AfterPlugin } from '@tapjs/after'
import { LoadedConfig } from '@tapjs/config'
import * as CORE from '@tapjs/core'
import { Minimal } from '@tapjs/core'
import { resolve } from 'node:path'

t.test('after plugin always loaded', async t => {
  const pluginsLoaded: any[] = []
  let signalsProxied = false
  let teardownCalled = false
  let pipeCalled = false
  const fakeTap = Object.assign(new Minimal({ name: 'mock TAP' }), {
    pipe: (dest: any) => {
      pipeCalled = true
      t.equal(dest, process.stdout, 'piping to stdout')
    },
    pluginLoaded: () => false,
    applyPlugin: (p: any) => {
      t.equal(p, AfterPlugin, 'applying @tapjs/after plugin')
      pluginsLoaded.push(p)
      return fakeTap
    },
    teardown: () => {
      teardownCalled = true
    },
  })
  const output = fakeTap.concat()
  fakeTap.pass('just an assertion so it has at least one')

  const { executeTestSuite } = await t.mockImport<
    typeof import('../dist/esm/execute-test-suite.js')
  >('../dist/esm/execute-test-suite.js', {
    '@tapjs/core': t.createMock(CORE, {
      tap: () => fakeTap,
    }),
    '@tapjs/after': { plugin: AfterPlugin },
    '../dist/esm/proxy-fatal-signals.js': {
      proxyFatalSignals: (tap: any) => {
        t.equal(tap, fakeTap, 'proxying fatal signals on root test')
        signalsProxied = true
      },
    },
  })

  const dir = t.testdir({
    'test.js': '',
  })

  const fakeConfig = {
    get: (c: string) => (c === 'reporter' ? 'tap' : undefined),
    projectRoot: dir,
  } as unknown as LoadedConfig

  let applyPluginsCalled = false
  let setupCalled = false
  let executeCalled = false

  await executeTestSuite(
    [],
    fakeConfig,
    tap => {
      t.equal(tap, fakeTap)
      applyPluginsCalled = true
      return tap
    },
    () => {
      setupCalled = true
    },
    async (tap, testFile, files, hasReporter) => {
      executeCalled = true
      t.equal(tap, fakeTap)
      t.strictSame(
        { testFile, files, hasReporter },
        {
          testFile: resolve(dir, 'test.js'),
          files: ['test.js'],
          hasReporter: false,
        },
      )
    },
  )

  t.equal(pipeCalled, true)
  t.equal(signalsProxied, true)
  t.equal(teardownCalled, true)
  t.strictSame(pluginsLoaded, [AfterPlugin])
  t.equal(applyPluginsCalled, true)
  t.equal(setupCalled, true)
  t.equal(executeCalled, true)

  t.equal(
    await output,
    `TAP version 14
ok 1 - just an assertion so it has at least one
1..1
`,
  )
})
