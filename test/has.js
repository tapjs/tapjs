const t = require('tap')
const compare = require('../')
const has = (t, a, b) => {
  const h = compare.has(a, b)
  t.matchSnapshot(h.diff)
  return h.match
}

const arr = [1, 2, 3]
const a = {
  m: new Map([[1,2],[3,4]]),
  cm: new Map([[{a: 1}, 1], [{a: 1}, 1], [{b:2}, 2], [{b:2}, 2]]),
  em: new Map(),
  s: new Set([1, 2, 3, 4]),
  cs: new Set([{a:1},{a:1},{b:2},{b:2}]),
  es: new Set(),
  b: Buffer.from('asdf'),
  d: new Date('2019-02-14T07:41:12.747Z'),
  a: [1,2,3],
  ea: [],
  i: {[Symbol.iterator]: function*() { for (let i of arr) { yield i }}},
  c: { s: new Set() },
}
const m = new Map([a.c, a])
a.c.s.add(m)

t.test('array likes', t => {
  t.ok(has(t, a, { i: [1, 2, 3] }))
  t.ok(has(t, a, { i: (function(){return arguments})(1, 2, 3) }))
  t.ok(has(t, a, { i: (function(){return arguments})(1, 2, 3) }))
  t.ok(has(t, a, { a: (function(){return arguments})(1, 2) }))
  t.ok(has(t, a, { i: (function(){return arguments})(1, 2) }))
  t.end()
})

t.test('map', t => {
  t.ok(has(t, a, { m: new Map([[1, 2]]) }))
  t.ok(has(t, a, { m: new Map([[3, 4]]) }))
  t.ok(has(t, a, { m: new Map([['3', 4]]) }))
  t.ok(has(t, a, { cm: new Map([[{a: 1}, 1], [{a: 1}, 1]])}))
  t.notOk(has(t, a, { m: new Map([[3, 4], ['3', 4]]) }))
  t.ok(has(t, a, { m: new Map([[3, 4], [1, 2]]) }))
  t.ok(has(t, a, { m: new Map([[1, 2], [3, 4]]) }))
  t.notOk(has(t, a, { m: new Map([[1, 2], [4, 3]]) }))
  t.notOk(has(t, a, { em: new Map([[1, 2]]) }))
  t.notOk(has(t, a, { em: new Map([[1, 2]]) }))
  t.ok(has(t, a, { em: new Map() }))
  t.end()
})

t.test('set', t => {
  t.ok(has(t, a, { s: new Set([3, 2]) }))
  t.ok(has(t, a, { es: new Set() }))
  t.ok(has(t, a, { s: new Set() }))
  t.notOk(has(t, a, { s: new Set([2, 3, 4, 5]) }))
  t.ok(has(t, a, {cs: new Set([{a:1},{a:1}])}))
  t.notOk(has(t, a, {cs: new Set([{a:1},{a:1},{a:1}])}))
  t.end()
})

t.test('buffer', t => {
  t.ok(has(t, a, { b: Buffer.from('asdf') }))
  t.notOk(has(t, a, { b: Buffer.from('asd') }))
  t.end()
})

t.test('date', t => {
  t.ok(has(t, a, { d: new Date(a.d.toISOString()) }))
  t.notOk(has(t, a, { d: new Date('1979-07-01') }))
  t.end()
})

t.test('array', t => {
  t.ok(has(t, a, { a: [1,2,3] }))
  t.ok(has(t, a, { a: [1,2] }))
  t.ok(has(t, a, { a: [] }))
  t.ok(has(t, a, { ea: [] }))
  t.notOk(has(t, a, { ea: [1] }))
  t.notOk(has(t, a, { a: [1,2,3,4] }))
  t.end()
})

t.test('complex object', t => {
  t.ok(has(t, a, {c: {}}))
  t.ok(has(t, a, {c: {s: new Set()}}))
  t.ok(has(t, a, {c: {s: new Set([new Map()])}}))
  t.ok(has(t, a, {c: {s: new Set([new Map([{s: new Set()}, a])])}}))
  t.notOk(has(t, a, {xyz: true}))

  // same circularity
  const b = { c: { s: new Set() } }
  const n = new Map([b.c, b])
  b.c.s.add(n)
  t.ok(has(t, a, b))

  t.end()
})

t.test('errors', t => {
  const er = new Error('foo')
  er.code = 1
  er.signal = 'blerg'
  t.ok(has(t, er, { code: 1 }))
  const er2 = new Error('foo')
  er2.signal = 'blerg'
  t.ok(has(t, er, er2))
  t.ok(has(t, er, new Error('foo')))
  t.notOk(has(t, er, new TypeError('foo')))
  t.ok(has(t, er, {}))
  t.end()
})
