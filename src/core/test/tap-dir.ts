import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import t from 'tap'
const expect = resolve(fileURLToPath(new URL('..', import.meta.url)))
t.test('mjs style tap dir', async t => {
  await import('../dist/mjs/tap-dir.js').then(({ tapDir }) => {
    t.equal(tapDir, expect)
  })
  t.end()
})
