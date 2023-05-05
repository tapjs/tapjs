import { MatchOnly } from '../dist/cjs/index.js'
import { Test } from '@tapjs/test'
import { TAP } from '@tapjs/core'
const t = TAP()

const match = (t: Test, a: any, b: any) => {
  const m = new MatchOnly(a, { expect: b })
  t.matchSnapshot(m.print())
  return m.match
}

t.test('only specified fields must be present', t => {
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.end()
})
