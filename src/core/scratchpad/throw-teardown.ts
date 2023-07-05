import { tap } from '../dist/cjs/tap.js'
const t = tap()
t.pass('fine')
// t.end()
t.teardown(() => {
  throw new Error('oops')
})
