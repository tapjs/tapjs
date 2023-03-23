import t from 'tap'
import type { FormatOptions } from '../'
import * as compare from '../'

const same = (
  t: Tap.Test,
  a: any,
  b: any,
  options: FormatOptions & { diffContext?: number } = {}
) => {
  const s = compare.same(a, b, options)
  t.matchSnapshot(s.diff)
  return s.match
}

t.test('ctor usage', t => {
  t.throws(
    //@ts-expect-error
    () => new compare.Same(true),
    new TypeError('must supply options object')
  )
  t.throws(
    //@ts-expect-error
    () => new compare.Same(true, {}),
    new TypeError('must supply expected value')
  )

  const s = new compare.Same(true, { expect: false })
  t.matchSnapshot(s.print())
  t.equal(
    s.memoDiff,
    s.print(),
    'printing multiple times is memoized'
  )

  t.throws(
    () =>
      new compare.Same(true, {
        expect: true,
        style: 'tight',
      }),
    new Error('"tight" style not appropriate for diffs')
  )

  t.end()
})

t.test('simple diff nested in object', t => {
  same(
    t,
    { a: { b: [{ x: true }] } },
    { a: { b: [{ x: false }] } }
  )
  t.end()
})

t.test('symbology', t => {
  t.ok(same(t, { a: Symbol('a') }, { a: Symbol('a') }))
  t.ok(same(t, { a: Symbol('a') }, { a: Symbol.for('a') }))

  t.notOk(same(t, { a: Symbol('a') }, { a: Symbol }))
  t.notOk(same(t, { a: Symbol('a') }, { a: 'Symbol(a)' }))
  t.notOk(same(t, { a: 'Symbol(a)' }, { a: Symbol('a') }))
  t.notOk(
    same(t, { a: 'Symbol(a)' }, { a: Symbol.for('a') })
  )
  t.notOk(same(t, { a: 'Symbol(a)' }, { a: Symbol }))
  t.end()
})

t.test('diffing strings', t => {
  const str1 =
    'str1' + ('asdf'.repeat(10) + '\n').repeat(25)
  const str2 =
    'str2' +
    ('asdf'.repeat(10) + '\n').repeat(10) +
    ('foo'.repeat(5) + '\n').repeat(5) +
    ('asdf'.repeat(10) + '\n').repeat(10)
  t.notOk(
    same(t, str1, str2),
    'multi-line strings that do not match'
  )
  t.ok(same(t, '', ''), 'empty strings match')
  t.notOk(
    same(t, '', str1),
    'multi-line string is not empty string'
  )
  t.notOk(
    same(t, str1, ''),
    'multi-line string is not empty string'
  )
  t.ok(
    same(t, { str1 }, { str1 }),
    'multi-line string in an object'
  )
  t.end()
})

t.test('array-likes', t => {
  const RealArray = Array
  const Arry = class Array extends RealArray {}
  //const Ayyr = class ArrayLike extends RealArray {
  //  someMethod () { return 5 }
  //}

  const a = new Arry()
  a.push(1, 2, 3)
  const b = [1, 2, 3]
  t.ok(same(t, a, b))
  t.not(a.constructor, b.constructor)

  const args = (function (..._: any[]) {
    return arguments
  })(1, 2, 3)
  const o = {
    [Symbol.iterator]: function* () {
      for (let i of a) {
        yield i
      }
    },
  }
  // array can match iterable, or the other way around.
  t.ok(same(t, a, o))
  t.ok(same(t, o, a))
  t.ok(same(t, args, a))
  t.ok(same(t, o, args))
  t.notOk(same(t, a, { 0: 1, 1: 2, 2: 2, length: 3 }))
  t.end()
})

t.test('arrays extra and missing', t => {
  t.notOk(same(t, [1, 2, 3], [1, 2, 3, 4, 5]))
  t.notOk(same(t, [1, 2, 3, 4, 5], [1, 2, 3]))
  t.end()
})

t.test('iterator that doesnt play nice', t => {
  const o = {
    [Symbol.iterator]: function* () {
      throw 'no array for you'
    },
  }
  const a = [1, 2, 3]
  t.notOk(same(t, a, o))
  t.end()
})

t.test('customize diff context', t => {
  const opt = { diffContext: 1 }
  const a = { x: { y: { z: { a: { b: { c: 1 } } } } } }
  const b = { x: { y: { z: { a: { b: { c: 2 } } } } } }
  t.notOk(same(t, a, b, opt))
  t.end()
})

t.test('pojos extra and missing', t => {
  t.ok(same(t, {}, {}))
  t.notOk(same(t, { a: 1 }, { b: 2, a: 1 }))
  t.notOk(same(t, { b: 2, a: 1 }, { a: 1 }))
  t.end()
})

t.test('maps extra and missing', t => {
  same(
    t,
    new Map([['a', 1]]),
    new Map([
      ['b', 2],
      ['a', 1],
    ])
  )
  same(
    t,
    new Map([
      ['b', 2],
      ['a', 1],
    ]),
    new Map([['a', 1]])
  )
  t.end()
})

t.test('sets extra and missing', t => {
  same(
    t,
    new Set([['a', 1]]),
    new Set([
      ['b', 2],
      ['a', 1],
    ])
  )
  same(
    t,
    new Set([
      ['b', 2],
      ['a', 1],
    ]),
    new Set([['a', 1]])
  )
  t.end()
})

t.test('NaN matches NaN', function (t) {
  t.ok(same(t, NaN, NaN))
  t.end()
})

t.test(
  "shouldn't care about key order and types",
  function (t) {
    t.ok(same(t, { a: 1, b: 2 }, { b: 2, a: '1' }))
    t.end()
  }
)

t.test(
  'should notice objects with different shapes',
  function (t) {
    t.notOk(same(t, { a: 1 }, { a: 1, b: undefined }))
    t.end()
  }
)

t.test(
  'should notice objects with different keys',
  function (t) {
    t.notOk(same(t, { a: 1, b: 2 }, { a: 1, c: 2 }))
    t.end()
  }
)

t.test('should handle dates', function (t) {
  t.notOk(same(t, new Date('1972-08-01'), null))
  t.notOk(same(t, new Date('1972-08-01'), undefined))
  t.ok(
    same(t, new Date('1972-08-01'), new Date('1972-08-01'))
  )
  t.ok(
    same(
      t,
      { x: new Date('1972-08-01') },
      { x: new Date('1972-08-01') }
    )
  )
  t.end()
})

t.test('should handle RegExps', function (t) {
  t.notOk(same(t, /[b]/, /[a]/))
  t.notOk(same(t, /[a]/i, /[a]/g))
  t.ok(same(t, /[a]/, /[a]/))
  t.ok(same(t, /ab?[a-z]{,6}/g, /ab?[a-z]{,6}/g))
  t.end()
})

t.test('should handle functions', function (t) {
  const fnA = function fnA(a: any) {
    return a
  }
  const fnB = function fnB(a: any) {
    return a
  }

  t.ok(
    same(
      t,
      function a() {},
      function a() {}
    )
  )
  t.notOk(
    same(
      t,
      function a() {
        //@ts-expect-error
        return b
      },
      function a() {
        return a
      }
    ),
    'different toString'
  )
  t.notOk(same(t, fnA, fnB), 'different names')
  t.ok(same(t, fnA, fnA))
  t.ok(same(t, fnB, fnB))
  t.end()
})

t.test('should handle arguments', function (t) {
  var outer = arguments
  ;(function inner(tt: Tap.Test) {
    var inner = arguments
    tt.ok(same(t, outer, outer))
    tt.ok(same(t, outer, inner))
    tt.ok(same(t, outer, [t]))
  })(t)
  t.end()
})

t.test(
  'should handle bigint',
  { skip: typeof BigInt === 'undefined' && 'no BigInt' },
  function (t) {
    t.ok(same(t, BigInt('0'), BigInt('0')))
    t.ok(same(t, BigInt('1'), BigInt('1')))
    t.notOk(same(t, BigInt('1'), BigInt('2')))
    t.end()
  }
)

t.test('same arrays match', function (t) {
  t.ok(same(t, [1, 2, 3], [1, 2, 3]))
  t.end()
})

t.test("different arrays don't match", function (t) {
  t.notOk(same(t, [1, 2, 3], [1, 2, 3, 4]))
  t.notOk(same(t, [1, 2, 3], [1, 2, 4]))
  t.end()
})

t.test('empty arrays match', function (t) {
  t.ok(same(t, [], []))
  t.ok(same(t, { x: [] }, { x: [] }))
  t.end()
})

t.test(
  "same shouldn't care about key order recursively and types",
  function (t) {
    t.ok(
      same(
        t,
        { x: { a: 1, b: 2 }, y: { c: 3, d: 4 } },
        { y: { d: 4, c: 3 }, x: { b: '2', a: '1' } }
      )
    )
    t.end()
  }
)

t.test('undefined is the same as itself', function (t) {
  t.ok(same(t, undefined, undefined))
  t.ok(same(t, { x: undefined }, { x: undefined }))
  t.ok(same(t, { x: [undefined] }, { x: [undefined] }))
  t.end()
})

t.test('undefined and null are Close Enough', function (t) {
  t.ok(same(t, undefined, null))
  t.ok(same(t, { x: null }, { x: undefined }))
  t.ok(same(t, { x: [undefined] }, { x: [null] }))
  t.end()
})

t.test("null is as shallow as you'd expect", function (t) {
  t.ok(same(t, null, null))
  t.ok(same(t, { x: null }, { x: null }))
  t.ok(same(t, { x: [null] }, { x: [null] }))
  t.end()
})

t.test('the same number matches', function (t) {
  t.ok(same(t, 0, 0))
  t.ok(same(t, 1, 1))
  t.ok(same(t, 3.14, 3.14))
  t.end()
})

t.test("different numbers don't match", function (t) {
  t.notOk(same(t, 0, 1))
  t.notOk(same(t, 1, -1))
  t.notOk(same(t, 3.14, 2.72))
  t.end()
})

t.test('flexible about key order and types', function (t) {
  t.ok(
    same(
      t,
      [
        { foo: { z: 100, y: 200, x: 300 } },
        'bar',
        11,
        { baz: { d: 4, a: 1, b: 2, c: 3 } },
      ],
      [
        { foo: { x: 300, y: 200, z: 100 } },
        'bar',
        11,
        { baz: { a: '1', b: '2', c: '3', d: '4' } },
      ]
    )
  )
  t.end()
})

t.test(
  'properly handle circular data structures',
  function (t) {
    var x1: { [k: string]: any } = { z: 4 }
    var y1: { [k: string]: any } = { x: x1 }
    x1.y = y1

    var x2: { [k: string]: any } = { z: 4 }
    var y2: { [k: string]: any } = { x: x2 }
    x2.y = y2

    t.ok(same(t, x1, x2))
    x1.other = x2
    x2.other = x1
    t.ok(same(t, x1, x2))
    x2.other = x2
    t.notOk(same(t, x1, x2), 'should not match')

    // matching circularity
    const obj = () => {
      const a: { [k: string]: any } = {
        ONE: 1,
        x: { TWO: 2 },
      }
      a.x.a = a
      return a
    }
    const a = obj()
    const b = obj()
    t.ok(same(t, a, b))

    // non-matching circularity
    b.x.a = b.x
    t.notOk(same(t, a, b))

    // mismatch the circularity entirely
    a.x = { happy: true }
    t.notOk(same(t, a, b))

    t.end()
  }
)

t.test('should match empty Buffers', function (t) {
  t.ok(same(t, Buffer.from([]), Buffer.from([])))
  t.end()
})

t.test('should match similar Buffers', function (t) {
  var b1 = Buffer.from([0])
  var b2 = Buffer.from([0])
  t.ok(same(t, b1, b2))

  var b3 = Buffer.from([0, 1, 3])
  var b4 = Buffer.from([0, 1, 3])
  t.ok(same(t, b3, b4))

  t.end()
})

t.test('should notice different Buffers', function (t) {
  var b1 = Buffer.from([0, 1, 2])
  var b2 = Buffer.from([0, 1, 23])
  t.notOk(same(t, b1, b2))

  var shortb = Buffer.from([0, 1])
  var longb = Buffer.alloc(320)
  for (var i = 0; i < 160; i++)
    longb.writeUInt16LE(i, i * 2)
  t.notOk(
    same(
      t,
      { x: { y: { z: shortb } } },
      { x: { y: { z: longb } } }
    )
  )
  t.end()
})

t.test('set', function (t) {
  var obj = { a: 1 }
  var a = new Set([1, 2, 3, 4, obj])
  var b = new Set([obj, 2, 4, 3, 1])
  var c = new Set([4, 3, 2, 1, { a: 1 }])
  t.ok(same(t, a, b))
  t.comment('should be same', [a, c])
  t.ok(same(t, a, c))
  t.ok(same(t, b, c))
  t.notOk(same(t, new Set([1]), new Set([1, 2])))
  t.notOk(same(t, new Set([1, 3, 5]), new Set([1, 6, 2])))
  t.ok(same(t, new Set(), new Set()))
  t.notOk(same(t, a, Array.from(a)))
  t.end()
})

t.test('map', function (t) {
  var obj = { a: 1 }
  var a = new Map<any, any>([
    [1, 2],
    [3, 4],
    [5, obj],
    [obj, 6],
  ])
  var b = new Map<any, any>([
    [3, 4],
    [5, obj],
    [obj, 6],
    [1, 2],
  ])
  // values match, but not strictly
  var c = new Map<any, any>([
    [3, 4],
    [5, { a: '1' }],
    [obj, 6],
    [1, 2],
  ])
  // keys don't match
  var d = new Map<any, any>([
    [3, 4],
    [5, { a: 1 }],
    [{ a: 1, b: 2 }, 6],
    [1, 2],
  ])
  // keys that do match
  var e = new Map<any, any>([
    [3, 4],
    [5, { a: 1 }],
    [{ a: 1 }, 6],
    [1, 2],
  ])

  t.ok(same(t, a, b))
  t.ok(same(t, a, c))
  t.ok(same(t, b, c))
  t.ok(same(t, a, e))
  t.ok(same(t, c, e))
  t.ok(same(t, new Map(), new Map()))
  t.notOk(same(t, a, Array.from(a)))
  t.notOk(same(t, a, d))
  t.notOk(same(t, a, d))
  t.end()
})

t.test('collections missing all entries', t => {
  t.notOk(same(t, new Map(), new Map([[1, 1]])))
  t.notOk(same(t, {}, { a: 1 }))
  t.notOk(same(t, new Set(), new Set([1])))
  t.notOk(same(t, [], [1]))
  t.end()
})

t.test('errors', t => {
  const foo: Error & { foo?: string } = new Error('foo')
  t.ok(same(t, foo, new Error('foo')))
  t.notOk(same(t, foo, new Error('oof')))
  t.notOk(same(t, { name: 'Error', message: 'foo' }, foo))
  foo.foo = 'bar'
  t.ok(
    same(t, new Error('foo'), {
      name: 'Error',
      message: 'foo',
    })
  )
  const b: Error & { foo?: string } = new Error('foo')
  b.foo = 'bar'
  t.ok(same(t, foo, b))

  const c = Object.create(Error.prototype)
  c.name = 'drr'
  c.message = 'i have none'
  c.foo = 'bar'
  t.notOk(same(t, foo, c))

  // cover case wehre name/message AREN'T non-enumerable
  const d = Object.create(Error.prototype)
  d.name = c.name
  d.message = c.message
  d.foo = 'baz'
  t.notOk(same(t, c, d))
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
  t.ok(same(t, a, b), 'iterables match one another')
  t.ok(same(t, a, arr), 'iterable matches array')
  t.ok(same(t, arr, b), 'array matches iterable')
  t.end()
})

t.test('diffs of errors with \\n in the message', t => {
  const er: Error & { foo?: string } = new Error('foo\nbar')
  er.foo = 'bar'
  const er2: Error & { foo?: string } = new Error(
    'foo\nbar'
  )
  er2.foo = 'two'
  t.notOk(
    same(t, er, er2),
    'errors with different properties are not the same'
  )
  t.notOk(
    same(t, { er }, { er: er2 }),
    'errors with different properties are not the same'
  )
  t.end()
})

t.test('hidden props and getters', t => {
  const _val = Symbol('_value')
  const _baseVal = Symbol('_baseValue')
  let i = 0
  class Base {
    raw: any;
    [_val]: any;
    [_baseVal]: number
    constructor(val: any) {
      this.raw = val
      this[_val] = val
      this[_baseVal] = i++
    }
    get baseValue() {
      return this[_baseVal]
    }
  }
  class Hidden extends Base {
    get value() {
      return this[_val]
    }
  }
  Object.defineProperty(Hidden.prototype, 'value', {
    enumerable: true,
  })
  Object.defineProperty(Base.prototype, 'baseValue', {
    enumerable: true,
  })
  const one = new Hidden(1)
  const two = new Hidden(1)
  t.ok(same(t, one, two), 'own props only')
  t.ok(
    same(t, one, two, { includeGetters: true }),
    'include getters'
  )
  t.notOk(
    same(t, one, two, { includeEnumerable: true }),
    'all enumerable'
  )
  t.end()
})

t.test('tricky mismatched nesting', t => {
  // one is immediately cycling back to the root,
  // the other has an o with an o member referencing root.o
  type T = { [k: string]: any }
  const a: T = {}
  a.o = a
  const b: T = { o: {} }
  b.o.o = b.o
  t.notOk(same(t, a, b))
  const c: T = { o: { o: { o: { o: {} } } } }
  c.o.o.o.o.o = c.o.o
  t.notOk(same(t, a, c))
  t.notOk(same(t, b, c))
  t.end()
})

t.test('another weird cycle case', t => {
  const a: { [k: string]: any } = {}
  a.o = a
  const b: { [k: string]: any } = { o: a }
  // note, this one is *really* weird.
  // we end up with two objects in the graph with &ref_1,
  // because when it checks the id on the expect path,
  // during the simplePrintExpect, it finds a,
  // which already has an ID assigned.
  // It's an edge case and unlikely to ever be a serious issue,
  // but tracking it here so that we can at least track
  // the snapshot if/when it ever changes.
  t.notOk(same(t, a, b))
  t.end()
})

t.test('obj cycles, expect does not', t => {
  const a: { [k: string]: any } = { o: { o: { o: {} } } }
  const b: { [k: string]: any } = { o: { o: { o: {} } } }
  a.o.o.o.a = a
  t.notOk(same(t, a, b))
  t.end()
})

t.test('array is not the same as object', t => {
  const a = [1, 2, 3]
  const b = { 0: 1, 1: 2, 2: 3 }
  t.notOk(same(t, a, b))
  t.end()
})

t.test(
  'inherited fields will satisfy ownprop expects',
  t => {
    const a = Object.create({ a: 1 })
    const b = { a: 1 }
    t.ok(same(t, a, b))
    t.end()
  }
)
