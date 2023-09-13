import t, { Test } from 'tap'

import {
  after,
  afterEach,
  before,
  beforeEach,
  describe,
  it,
  mount,
  specify,
  tt,
} from '../dist/esm/index.js'

const m = (n: string) => ({
  message: `must import 'tap' before calling ${n}()`,
})
t.throws(() => describe(() => {}), m('describe'))
t.throws(() => before(() => {}), m('before'))
t.throws(() => beforeEach(() => {}), m('beforeEach'))
t.throws(() => after(() => {}), m('after'))
t.throws(() => afterEach(() => {}), m('afterEach'))

t.throws(() => it(() => {}), {
  message: 'must call describe() before calling it()',
})

t.throws(() => tt(), {
  message: 'not currently mounted',
})

mount(t)
t.throws(() => mount(t), {
  message: 'mocha globals already mounted on a tap test',
})

const n = (n: string) => ({
  message: `no function provided to ${n}()`,
})
//@ts-expect-error
t.throws(() => describe(), n('describe'))
//@ts-expect-error
t.throws(() => before(), n('before'))
//@ts-expect-error
t.throws(() => beforeEach(), n('beforeEach'))
//@ts-expect-error
t.throws(() => after(), n('after'))
//@ts-expect-error
t.throws(() => afterEach(), n('afterEach'))

describe('nesting its', () => {
  it('cannot nest', function (this: Test) {
    this.throws(() => it(() => {}), {
      message: 'it() calls may not be nested',
    })
  })
})

describe('done() call throws', () => {
  specify('when called multiple times', done => {
    done()
    tt().throws(() => done(), {
      message: 'done() called multiple times',
    })
  })
  specify('when called after promise return', async done => {
    await new Promise<void>(r => setTimeout(r))
    tt().throws(() => done(), {
      message: 'done() called when promise returned',
    })
  })
})
