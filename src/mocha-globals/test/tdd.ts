import assert from 'node:assert'
import t from 'tap'
import { currentTest, globalize, mount } from '../dist/esm/index.js'

globalize()
mount(t)

type mg = typeof import('../dist/esm/index.js')
declare var suite: mg['suite']
declare var context: mg['context']
declare var test: mg['test']

suite('math', () => {
  context('addition', () => {
    test('can add numbers', () => {
      assert.equal(2 + 2, 4)
      assert.equal(7 + 5, 12)
    })
  })
  context('subtraction', () => {
    test('can subtract numbers', done => {
      currentTest()?.equal(5 - 3, 2)
      done()
    })
  })
  context('division', () => {
    test('promises to do division', async () => {
      await new Promise<void>(r => setTimeout(r))
    })
  })
})
