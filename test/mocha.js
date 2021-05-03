'use strict'
/* global deglobal */

const {mocha} = require('../lib/tap.js')
const assert = require('assert')

mocha.describe('globals', () => {
  let beforeEaches = 0
  mocha.beforeEach(() => beforeEaches++)

  mocha.beforeEach(cb => setTimeout(cb))
  mocha.beforeEach(() => new Promise(r => r()))

  let afterEaches = 0
  mocha.afterEach(() => afterEaches++)

  // test that afterEach is happening correct number
  // of times.
  let eachExpect = 0
  mocha.afterEach(() => new Promise(res => {
    eachExpect ++
    assert.equal(beforeEaches, eachExpect, 'before')
    assert.equal(afterEaches, eachExpect, 'after')
    res()
  }))

  mocha.it('has no describe', () =>
    assert.equal(global.describe, undefined))

  mocha.it('is ok running deglobal() first', () => {
    mocha.deglobal()
    assert.equal(global.describe, undefined)
  })

  mocha.it('has describe after call', () => {
    mocha.global()
    mocha.global()
    assert.equal(global.describe, mocha.describe)
  })

  mocha.it('has no describe after deglobal', () => {
    deglobal()
    assert.equal(global.describe, undefined)
  })

  mocha.it('escape to tap', function () {
    const t = this
    t.test('should not get a beforeEach', t =>
      t.test('or an after each', t => {
        t.pass('this is fine')
        t.end()
      }))
  })

  // at this point, beforeEach has been called
  // 1 more time than afterEach
  mocha.it('called beforeEach/afterEach', () =>
     new Promise((resolve) => {
       assert.equal(beforeEaches, eachExpect + 1)
       assert.equal(afterEaches, eachExpect)
       resolve()
     }))
})

if (process.version.match(/v[0-9]\./)) {
  assert.throws(() => mocha.after(),
    'cannot call "after" outside of describe()')
  assert.throws(() => mocha.before(),
    'cannot call "before" outside of describe()')
} else {
  assert.throws(() => mocha.after(),
    new Error('cannot call "after" outside of describe()'))
  assert.throws(() => mocha.before(),
    new Error('cannot call "before" outside of describe()'))
}

let calledAfter = false
let calledBefore = false
mocha.describe(function after_and_before () {
  mocha.before((cb) => {
    assert.equal(calledBefore, false)
    calledBefore = true
    setTimeout(cb)
  })
  mocha.before('named before', () => new Promise(r => {
    assert.equal(calledBefore, true)
    r()
  }))

  mocha.after(() => {
    assert.equal(calledAfter, false)
    calledAfter = true
  })

  mocha.after('named after', () => {
    assert.equal(calledAfter, true)
  })

  mocha.after(function named_after () {
    assert.equal(calledAfter, true)
  })

  mocha.it(function this_is_fine () {})
  mocha.it(() => {})
  mocha.it(cb => cb())
})
mocha.describe('after after', function () {
  this.test.plan(1)
  mocha.it('should have called after fn', () =>
    assert.equal(calledAfter, true))
})

mocha.describe('todo, skip, and failure', () => {
  let calledTodoFn = false
  let calledSkipFn = false
  const it = mocha.it
  mocha.describe('expect todo and skip', function () {
    /* istanbul ignore next */
    it.todo('expected todo', () => calledTodoFn = true)
    /* istanbul ignore next */
    it.skip('expected skip', () => calledSkipFn = true)
  }, { silent: true })
  it('expected fail from cb(er)', cb => {
    cb(new Error('expected failure'))
  }, { expectFail: true })
  it('did not call skip/todo functions', () => {
    assert.equal(calledTodoFn, false)
    assert.equal(calledSkipFn, false)
  })
})

mocha.describe('expected before failure', () =>
  mocha.before('expect failure', (cb) =>
    cb(new Error('expected')), { expectFail : true }))
