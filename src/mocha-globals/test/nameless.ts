import t, { Test } from 'tap'
import { mount, describe, it, tt as c } from "../dist/mjs/index.js";

const tt = new Test({ name: 'macchiatto' })
tt.runMain(() => {})
mount(tt)

describe(() => {
  it(() => {
    c().pass('has no name')
  })
})

tt.end()
t.matchSnapshot(await tt.concat())
