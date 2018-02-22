/* global describe, it */
'use strict'

const assert = require('assert')
const Parser = require('tap-parser')

const { Test } = require('../..')

describe('Test', () => {
  it('it works in the browser', async () => {
    const results = await new Promise(resolve => {
      const parser = new Parser(resolve)
      const test = new Test({ autoend: true })
      test.pipe(parser)
      test.test('Simple Arithmetic', t => {
        t.equal(2 + 2, 4, 'two plus two equals four')
        t.end()
      })
    })
    assert.equal(results.pass, 1)
  })
})
