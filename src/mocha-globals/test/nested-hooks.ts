import t from 'tap'
import { globalize, mount } from '../dist/esm/index.js'

globalize()
mount(t)

type mg = typeof import('../dist/esm/index.js')
declare var describe: mg['describe']
declare var it: mg['it']
declare var beforeEach: mg['beforeEach']
declare var afterEach: mg['afterEach']

// https://github.com/tapjs/tapjs/issues/1008
// mocha beforeEach/afterEach must wrap it() tests only, not
// nested describe() suites (both are tap t.test() children).
const logs: string[] = []

describe('foo', () => {
  beforeEach(() => logs.push('beforeEach'))
  afterEach(() => logs.push('afterEach'))

  describe('bar', () => {
    describe('baz', () => {
      it('1', () => {})
      it('2', () => {})
    })
  })
})

describe('check the logs', () => {
  t.strictSame(logs, [
    'beforeEach',
    'afterEach',
    'beforeEach',
    'afterEach',
  ])
})
