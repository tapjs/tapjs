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
