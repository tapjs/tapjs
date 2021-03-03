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

t.test('url object matches normal object (ctors not relevant)', t => {
  const u = new URL('https://google.com/foo')
  t.ok(hasStrict(t, u, { pathname: '/foo' }), 'plain object can match class instance')
  t.notOk(hasStrict(t, u, { pathname: '/f' }), 'no partial string matching tho')
  t.ok(hasStrict(t, u, Object.assign(Object.create(null), {pathname: '/foo'})))
  t.ok(hasStrict(t, u, new (class { constructor () { this.pathname = '/foo' }})))
  t.ok(hasStrict(t, u, { pathname: '/foo', constructor: URL }), 'specifying ctor explicitly checks it')
  t.notOk(hasStrict(t, {pathname: '/foo'}, { pathname: '/foo', constructor: URL }), 'specifying ctor explicitly checks it')
  t.end()
})
