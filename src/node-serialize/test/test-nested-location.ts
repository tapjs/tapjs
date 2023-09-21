import t, { Minimal } from 'tap'
import { testNestedLocation } from '../src/test-nested-location.js'

// root test doesn't have an 'at' because we didn't give it one
const tt = new Minimal({ name: 'parent' })
t.matchOnly(testNestedLocation(tt), {
  file: undefined,
  line: undefined,
  column: undefined,
  nesting: 0,
})
tt.test('child', async tt => {
  t.matchOnly(testNestedLocation(tt), {
    file: String,
    line: Number,
    column: Number,
    nesting: 0,
  })
  tt.test('grandchild', async tt => {
    t.matchOnly(testNestedLocation(tt), {
      file: String,
      line: Number,
      column: Number,
      nesting: 1,
    })
  })
})
tt.end()
await tt.concat()
