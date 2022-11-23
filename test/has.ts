import t from 'tap'
import { has as compareHas, Has } from '../'
const has = (t: Tap.Test, a: any, b: any) => {
  const h = compareHas(a, b)
  t.matchSnapshot(h.diff)
  return h.match
}

const arr = [1, 2, 3]
const a = {
  m: new Map([
    [1, 2],
    [3, 4],
  ]),
  cm: new Map([
    [{ a: 1 }, 1],
    [{ a: 1 }, 1],
    [{ b: 2 }, 2],
    [{ b: 2 }, 2],
  ]),
  em: new Map(),
  s: new Set([1, 2, 3, 4]),
  cs: new Set([{ a: 1 }, { a: 1 }, { b: 2 }, { b: 2 }]),
  es: new Set(),
  b: Buffer.from('asdf'),
  d: new Date('2019-02-14T07:41:12.747Z'),
  a: [1, 2, 3],
  ea: [],
  i: {
    [Symbol.iterator]: function* () {
      for (let i of arr) {
        yield i
      }
    },
  },
  c: { s: new Set() },
}
const m = new Map<any, any>([[a.c, a]])
a.c.s.add(m)

t.test('array likes', t => {
  t.ok(has(t, a, { i: [1, 2, 3] }))
  t.ok(
    has(t, a, {
      i: (function (..._: any[]) {
        return arguments
      })(1, 2, 3),
    })
  )
  t.ok(
    has(t, a, {
      i: (function (..._: any[]) {
        return arguments
      })(1, 2, 3),
    })
  )
  t.ok(
    has(t, a, {
      a: (function (..._: any[]) {
        return arguments
      })(1, 2),
    })
  )
  t.ok(
    has(t, a, {
      i: (function (..._: any[]) {
        return arguments
      })(1, 2),
    })
  )
  t.notOk(has(t, arr, { foo: 'bar' }))
  t.end()
})

t.test('map', t => {
  t.ok(has(t, a, { m: new Map([[1, 2]]) }))
  t.ok(has(t, a, { m: new Map([[3, 4]]) }))
  t.ok(has(t, a, { m: new Map([['3', 4]]) }))
  t.ok(
    has(t, a, {
      cm: new Map([
        [{ a: 1 }, 1],
        [{ a: 1 }, 1],
      ]),
    })
  )
  t.notOk(
    has(t, a, {
      m: new Map<any, any>([
        [3, 4],
        ['3', 4],
      ]),
    })
  )
  t.ok(
    has(t, a, {
      m: new Map([
        [3, 4],
        [1, 2],
      ]),
    })
  )
  t.ok(
    has(t, a, {
      m: new Map([
        [1, 2],
        [3, 4],
      ]),
    })
  )
  t.notOk(
    has(t, a, {
      m: new Map([
        [1, 2],
        [4, 3],
      ]),
    })
  )
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
  t.ok(has(t, a, { cs: new Set([{ a: 1 }, { a: 1 }]) }))
  t.notOk(
    has(t, a, {
      cs: new Set([{ a: 1 }, { a: 1 }, { a: 1 }]),
    })
  )
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
  t.ok(has(t, a, { a: [1, 2, 3] }))
  t.ok(has(t, a, { a: [1, 2] }))
  t.ok(has(t, a, { a: [] }))
  t.ok(has(t, a, { ea: [] }))
  t.notOk(has(t, a, { ea: [1] }))
  t.notOk(has(t, a, { a: [1, 2, 3, 4] }))
  t.end()
})

t.test('complex object', t => {
  t.ok(has(t, a, { c: {} }))
  t.ok(has(t, a, { c: { s: new Set() } }))
  t.ok(has(t, a, { c: { s: new Set([new Map()]) } }))
  t.ok(
    has(t, a, {
      c: {
        s: new Set([
          new Map<any, any>([[{ s: new Set() }, a]]),
        ]),
      },
    })
  )
  t.notOk(has(t, a, { xyz: true }))

  // same circularity
  const b = { c: { s: new Set() } }
  const n = new Map<any, any>([[b.c, b]])
  b.c.s.add(n)
  t.ok(has(t, a, b))

  t.end()
})

t.test('errors', t => {
  const er: Error & { code?: number; signal?: string } =
    new Error('foo')
  er.code = 1
  er.signal = 'blerg'
  t.ok(has(t, er, { code: 1 }))
  const er2: Error & { code?: number; signal?: string } =
    new Error('foo')
  er2.signal = 'blerg'
  t.ok(has(t, er, er2))
  t.ok(has(t, er, new Error('foo')))
  t.notOk(has(t, er, new TypeError('foo')))
  t.ok(has(t, er, {}))

  const er3: Error & {
    code?: number
    signal?: string
    foo?: string
  } = new RangeError('hello')
  er3.foo = 'bar'
  t.ok(has(t, er3, { name: 'RangeError', foo: 'bar' }))

  t.end()
})

t.test('iterables match one another', t => {
  class And {
    a: any
    b: any
    constructor(a: any, b: any) {
      this.a = a
      this.b = b
    }
    *[Symbol.iterator]() {
      yield this.a
      yield this.b
    }
  }
  const a = new And(1, 2)
  const b = new And(1, 2)
  const arr = [1, 2]
  t.ok(has(t, a, b), 'iterables match one another')
  t.ok(has(t, a, arr), 'iterable matches array')
  t.ok(has(t, arr, b), 'array matches iterable')
  t.end()
})

t.test('error message', t => {
  const a = new Error('foo')
  const b = { message: 'foo' }
  const c = { name: 'Error' }
  t.ok(has(t, a, b), 'match on error message')
  t.ok(has(t, a, c), 'match on error name')
  t.end()
})

t.test(
  'small set cannot satisfy big set expectation',
  t => {
    const a = new Set([1])
    const b = new Set([1, 2, 3])
    t.notOk(has(t, a, b))
    t.end()
  }
)

t.test('sort pojos', t => {
  const a = {
    x: 1,
    a: 0,
    j: 2,
    b: 4,
    m: 3,
  }
  const b = {
    j: 2,
    m: 3,
    x: 1,
    a: 0,
  }
  const c = {
    j: 1,
    m: 2,
    x: 3,
    a: 4,
  }
  const h = new Has(a, { expect: b, sort: true })
  const diff = h.print()
  t.equal(diff, '')
  t.equal(h.match, true)
  const h2 = new Has(a, { expect: c, sort: true })
  t.matchSnapshot(h2.print())
  t.equal(
    h2.memoDiff,
    `--- expected
+++ actual
@@ -1,6 +1,6 @@
 Object {
-  "a": 4,
-  "j": 1,
-  "m": 2,
-  "x": 3,
+  "a": 0,
+  "j": 2,
+  "m": 3,
+  "x": 1,
 }
`
  )
  t.end()
})

t.test('undefined/null matches missing', t => {
  const a = { a: 1 }
  const b = { a: 1, b: undefined }
  const c = { a: 1, c: null }
  t.ok(has(t, a, b))
  t.ok(has(t, a, c))
  t.end()
})

t.test(
  'pojo can match against array with same fields',
  t => {
    const a = Object.assign([1, 2, 3], { foo: 'bar' })
    const b = { foo: 'bar' }
    t.ok(has(t, a, b))
    t.end()
  }
)
