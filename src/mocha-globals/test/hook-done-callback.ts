import t from 'tap'
import { globalize, mount } from '../dist/esm/index.js'

globalize()
mount(t)

type mg = typeof import('../dist/esm/index.js')
declare var describe: mg['describe']
declare var it: mg['it']
declare var before: mg['before']
declare var after: mg['after']
declare var beforeEach: mg['beforeEach']
declare var afterEach: mg['afterEach']

// https://github.com/tapjs/tapjs/issues/1007
// mocha before/after (and sibling hooks) must wait for done()
const logs: string[] = []

describe('done callback hooks', () => {
  before('suite before', done => {
    setImmediate(() => {
      logs.push('before')
      done()
    })
  })
  beforeEach(done => {
    setImmediate(() => {
      logs.push('beforeEach')
      done()
    })
  })
  afterEach(done => {
    setImmediate(() => {
      logs.push('afterEach')
      done()
    })
  })
  after(done => {
    setImmediate(() => {
      logs.push('after')
      done()
    })
  })

  it('first', () => {
    logs.push('first')
  })
  it('second', () => {
    logs.push('second')
  })
})

describe('async/await hooks still work', () => {
  before(async () => {
    await new Promise<void>(r => setImmediate(r))
    logs.push('async before')
  })
  after(async () => {
    await new Promise<void>(r => setImmediate(r))
    logs.push('async after')
  })
  it('ran after await before', () => {
    logs.push('async it')
  })
})

describe('sync done() still works', () => {
  before(done => {
    logs.push('sync before')
    done()
  })
  it('ran after sync before', () => {
    logs.push('sync it')
  })
})

describe('check the logs', () => {
  t.strictSame(logs, [
    'before',
    'beforeEach',
    'first',
    'afterEach',
    'beforeEach',
    'second',
    'afterEach',
    'after',
    'async before',
    'async it',
    'async after',
    'sync before',
    'sync it',
  ])
})
