// just to make the coverage fail
const t = require('tap')

const compare = require('../')
const hasStrict = (t, a, b) => {
  const h = compare.hasStrict(a, b)
  t.matchSnapshot(h.diff)
  return h.match
}

t.ok(hasStrict(t, {a:1, b:2}, {a: 1}))
t.notOk(hasStrict(t, {a:1, b:2}, {b:'2'}))

t.test('iterables match one another', t => {
  class And {
    constructor (a, b) {
      this.a = a
      this.b = b
    }
    *[Symbol.iterator] () {
      yield this.a
      yield this.b
    }
  }
  const a = new And(1, 2)
  const b = new And(1, 2)
  const arr = [1, 2]
  t.ok(hasStrict(t, a, b), 'iterables match one another')
  t.notOk(hasStrict(t, a, arr), 'iterable does not strictly match array')
  t.notOk(hasStrict(t, arr, b), 'array does not strictly match iterable')
  t.end()
})
