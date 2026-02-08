import t, { Test } from 'tap'
import { matchStrict } from '../dist/esm/index.js'

const match = (t: Test, a: any, b: any) => {
  const m = matchStrict(a, b)
  if (!m.match) {
    t.matchSnapshot(m.diff)
    t.not(m.diff, '', 'should not have empty diff with mismatch', {
      obj: a,
      exp: b,
    })
  }
  return m.match
}

t.test('only specified fields must be present', t => {
  t.ok(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: 2 }))
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.end()
})
