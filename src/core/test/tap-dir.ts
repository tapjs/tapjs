import t from 'tap'
import { dirname } from 'node:path'
t.test('mjs style tap dir', async t => {
  await import('../dist/mjs/tap-dir.js').then(({ tapDir }) => {
    t.equal(tapDir, dirname(__dirname))
  })
  t.end()
})
