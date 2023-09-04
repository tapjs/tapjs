import t, { Test } from 'tap'
import { mount, describe, it } from "../dist/mjs/index.js";

const tt = new Test({ name: 'macchiatto' })
tt.runMain(() => {})
mount(tt)
describe('without a function', () => {
  it('is a todo test')
})
tt.end()
t.matchSnapshot(await tt.concat())
