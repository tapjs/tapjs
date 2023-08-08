import { tap } from '@tapjs/core'
import { Test } from '@tapjs/test'
import { MatchOnlyStrict } from '../dist/cjs/index.js'
const t = tap()

const match = (t: Test, a: any, b: any) => {
  const m = new MatchOnlyStrict(a, { expect: b })
  t.matchSnapshot(m.print())
  return m.match
}

t.test('only specified fields must be present', t => {
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: 2 }))
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.notOk(match(t, { a: 1, b: 2 }, { b: '2' }))
  t.end()
})
