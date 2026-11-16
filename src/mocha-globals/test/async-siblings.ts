import { strictEqual } from 'node:assert'
import t, { Test } from 'tap'

import { currentTest, describe, it, mount } from '../dist/esm/index.js'

mount(t)

const events: string[] = []
describe('suite with async and synchronous siblings', () => {
  it('asynchronous test', async function (this: Test) {
    events.push('async started')
    await Promise.resolve()
    this.equal(currentTest(), this)
    this.throws(() => it(() => {}), {
      message: 'it() calls may not be nested',
    })
    events.push('async ended')
  })
  it('synchronous sibling', () => {
    events.push('sync ran')
  })
  strictEqual(currentTest(), undefined)
})

describe('check the test order', function (this: Test) {
  this.same(events, ['async started', 'async ended', 'sync ran'])
})
