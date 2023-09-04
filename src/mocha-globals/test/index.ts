import t from 'tap'
import { config, plugin } from '../dist/mjs/index.js'

import { dirname } from 'node:path'
const CWD = dirname(process.cwd().toUpperCase())
t.cleanSnapshot = s => {
  s = s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
  let i = -1
  while ((i = s.toUpperCase().indexOf(CWD)) !== -1) {
    s = s.substring(0, i) + '{}' + s.substring(i + CWD.length)
  }
  return s.replace(/([^:]+):[0-9]+:[0-9]+(\)?)\n/g, '$1:#:#$2\n')
}

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
