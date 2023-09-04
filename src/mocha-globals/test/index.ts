import t from 'tap'
import { config, plugin } from '../dist/mjs/index.js'

t.matchSnapshot(config, 'config')

t.equal(t.pluginLoaded(plugin), false, 'plugin not loaded by default')

const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('without global injection', async t => {
  process.env.TAP_MOCHA_GLOBALS = '0'
  const mg = (await t.mockImport(
    '../dist/mjs/index.js'
  )) as typeof import('../dist/mjs/index.js')
  t.match(
    mg,
    {
      describe: Function,
      context: Function,
      suite: Function,
      it: Function,
      specify: Function,
      test: Function,
      before: Function,
      suiteSetup: Function,
      after: Function,
      suiteTeardown: Function,
      beforeEach: Function,
      setup: Function,
      afterEach: Function,
      teardown: Function,
    },
    'exported the things'
  )
  t.match(
    globalThis,
    {
      describe: undefined,
      context: undefined,
      suite: undefined,
      it: undefined,
      specify: undefined,
      test: undefined,
      before: undefined,
      suiteSetup: undefined,
      after: undefined,
      suiteTeardown: undefined,
      beforeEach: undefined,
      setup: undefined,
      afterEach: undefined,
      teardown: undefined,
    },
    'no globals injected'
  )
})

t.test('with global injection', async t => {
  process.env.TAP_MOCHA_GLOBALS = '1'
  const mg = (await t.mockImport(
    '../dist/mjs/index.js'
  )) as typeof import('../dist/mjs/index.js')
  t.match(
    mg,
    {
      describe: Function,
      context: Function,
      suite: Function,
      it: Function,
      specify: Function,
      test: Function,
      before: Function,
      suiteSetup: Function,
      after: Function,
      suiteTeardown: Function,
      beforeEach: Function,
      setup: Function,
      afterEach: Function,
      teardown: Function,
    },
    'exported the things'
  )
  const {
    describe,
    context,
    suite,
    it,
    specify,
    test,
    before,
    suiteSetup,
    after,
    suiteTeardown,
    beforeEach,
    setup,
    afterEach,
    teardown,
  } = mg
  t.has(
    globalThis,
    {
      describe,
      context,
      suite,
      it,
      specify,
      test,
      before,
      suiteSetup,
      after,
      suiteTeardown,
      beforeEach,
      setup,
      afterEach,
      teardown,
    },
    'globals injected'
  )
})
