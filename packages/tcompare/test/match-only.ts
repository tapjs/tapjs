import t from 'tap'
import { MatchOnly } from '../'

const match = (t: Tap.Test, a: any, b: any) => {
  const m = new MatchOnly(a, { expect: b })
  t.matchSnapshot(m.print())
  return m.match
}

t.test('only specified fields must be present', t => {
  t.notOk(match(t, { a: 1, b: 2 }, { a: Number }))
  t.ok(match(t, { a: 1, b: 2 }, { a: Number, b: '2' }))
  t.end()
})
