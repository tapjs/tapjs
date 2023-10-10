import tap, { Test } from 'tap'
import {
  currentSuite,
  currentTest,
  globalize,
  mounted,
  plugin,
  tt,
} from '../dist/esm/index.js'

type mg = typeof import('../dist/esm/index.js')

declare var describe: mg['describe']
declare var context: mg['context']
declare var suite: mg['suite']
declare var it: mg['it']
declare var specify: mg['specify']
declare var test: mg['test']
declare var before: mg['before']
declare var suiteSetup: mg['suiteSetup']
declare var after: mg['after']
declare var suiteTeardown: mg['suiteTeardown']
declare var beforeEach: mg['beforeEach']
declare var setup: mg['setup']
declare var afterEach: mg['afterEach']
declare var teardown: mg['teardown']

const t = tap.applyPlugin(plugin)
globalize()

t.hasStrict(
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
  'globalized'
)

t.equal(tt(), t.t)
t.equal(mounted(), t.t)
t.equal(currentSuite(), undefined)
t.equal(currentTest(), undefined)

describe('suite aliases', () => {
  it('has aliases for describe()', () => {
    tt().equal(context, describe)
    tt().equal(suite, describe)
  })
})

describe('test aliases', () => {
  it('has aliases for it()', function (this: Test) {
    this.equal(specify, it)
    this.equal(test, it)
  })
})

t.equal(suiteSetup, before)
t.equal(suiteTeardown, after)
t.equal(setup, beforeEach)
t.equal(teardown, afterEach)
