import t, { Test } from 'tap'
import { MatchStrict } from '../dist/esm/index.js'

const match = (t: Test, a: any, b: any) => {
  const m = new MatchStrict(a, { expect: b })
  t.matchSnapshot(m.print())
  return m.match
}

t.test('only specified fields must be present', t => {
  t.ok(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: 2 }))
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.end()
})
