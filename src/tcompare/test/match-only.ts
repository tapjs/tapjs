import t, { Test } from 'tap'
import * as compare from '../dist/esm/index.js'

const match = (t: Test, a: any, b: any) => {
  const m = compare.matchOnly(a, b)
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
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.end()
})
