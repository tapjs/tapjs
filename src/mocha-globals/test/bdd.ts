import assert from 'node:assert'
import t from 'tap'
import { currentTest, globalize, mount } from '../dist/esm/index.js'

globalize()
mount(t)

type mg = typeof import('../dist/esm/index.js')
declare var describe: mg['describe']
declare var it: mg['it']

describe('math', () => {
  describe('addition', () => {
    it('can add numbers', () => {
      assert.equal(2 + 2, 4)
      assert.equal(7 + 5, 12)
    })
    it('can subtract numbers', done => {
      currentTest()?.equal(5 - 3, 2)
      done()
    })
    it('promises to do division', async () => {
      await new Promise<void>(r => setTimeout(r))
    })
  })
})
