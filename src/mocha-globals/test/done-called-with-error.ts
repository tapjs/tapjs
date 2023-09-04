import t, { Test } from 'tap'
import { describe, it, mount } from '../dist/mjs/index.js'

const tt = new Test({ name: 'macchiatto' })
tt.runMain(() => {})
mount(tt)

describe(() => {
  it(done => {
    setTimeout(done(new Error('yolo')))
  })
})

tt.end()
t.matchSnapshot(await tt.concat())
