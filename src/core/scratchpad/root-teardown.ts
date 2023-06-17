import { tap } from '@tapjs/core'
const t = tap()

const interval = setInterval(() => {}, 10000)
t.teardown(() => clearInterval(interval))
// t.pass('this should not time out')
t.test('child', async t => {
  t.pass('even if there is an async child')
})
t.test('final child', t => t.end())
