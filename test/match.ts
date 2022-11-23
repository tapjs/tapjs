import t from 'tap'
import * as compare from '../'

const match = (t: Tap.Test, a: any, b: any) => {
  const m = compare.match(a, b)
  t.matchSnapshot(m.diff)
  return m.match
}

t.test("shouldn't care about key order and types", t => {
  t.ok(match(t, { a: 1, b: 2 }, { b: 2, a: '1' }))
  t.end()
})

t.test('should notice objects with different shapes', t => {
  t.notOk(
    match(t, { a: 1, b: 'a thing' }, { a: 1, b: undefined })
  )
  t.ok(match(t, { a: 1 }, { a: 1, b: undefined }))
  t.notOk(match(t, { at: null }, { at: { line: Number } }))
  t.end()
})

t.test('extra keys in object are ok', t => {
  t.ok(
    match(
      t,
      { a: 1, b: null, c: 'ok' },
      { a: 1, b: undefined }
    )
  )
  t.end()
})

t.test('should notice objects with different keys', t => {
  t.notOk(match(t, { a: 1, b: 2 }, { a: 1, c: 2 }))
  t.end()
})

t.test('should handle dates', t => {
  t.notOk(match(t, new Date('1972-08-01'), null))
  t.notOk(match(t, new Date('1972-08-01'), undefined))
  t.ok(
    match(t, new Date('1972-08-01'), new Date('1972-08-01'))
  )
  t.ok(
    match(
      t,
      { x: new Date('1972-08-01') },
      { x: new Date('1972-08-01') }
    )
  )
  t.end()
})

t.test(
  'should handle bigints',
  { skip: typeof BigInt === 'undefined' && 'no BigInt' },
  t => {
    t.notOk(match(t, BigInt('1'), null))
    t.notOk(match(t, BigInt('1'), undefined))
    t.ok(match(t, BigInt('1'), BigInt('1')))
    t.ok(match(t, BigInt('1'), BigInt))
    t.ok(match(t, { x: BigInt('1') }, { x: BigInt('1') }))
    t.ok(match(t, { x: BigInt('1') }, { x: BigInt }))
    t.end()
  }
)

t.test('should handle RegExps', t => {
  t.notOk(match(t, /[b]/, /[a]/))
  t.notOk(match(t, /[a]/i, /[a]/g))
  t.ok(match(t, /[a]/, /[a]/))
  t.ok(match(t, /ab?[a-z]{,6}/g, /ab?[a-z]{,6}/g))
  t.notOk(match(t, [1, 2, 3], /asdf/))
  t.ok(match(t, [1, 2, 3], /,2,/))
  t.ok(match(t, { x: 123 }, { x: /^\w+/ }))
  t.ok(
    match(
      t,
      {
        toString: function () {
          return 'FooBar'
        },
      },
      /^FooBar$/
    )
  )
  t.notOk(
    match(
      t,
      {
        toString: function () {
          return 'x'
        },
      },
      /^FooBar$/
    )
  )
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
    match(
      t,
      function a() {},
      function a() {}
    )
  )
  t.notOk(
    match(
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
  t.notOk(match(t, fnA, fnB), 'different names')
  t.ok(match(t, fnA, fnA))
  t.ok(match(t, fnB, fnB))
  t.end()
})

t.test('should handle arguments', function (t) {
  var outer = arguments
  ;(function (_tt) {
    var inner = arguments
    t.ok(match(t, outer, outer))
    t.ok(match(t, outer, inner))
    t.ok(match(t, outer, [t]))
  })(t)
  t.end()
})

t.test('same arrays match', t => {
  t.ok(match(t, [1, 2, 3], [1, 2, 3]))
  t.end()
})

t.test("different arrays don't match", t => {
  t.notOk(match(t, [1, 2, 3], [1, 2, 3, 4]))
  t.notOk(match(t, [1, 2, 3], [1, 2, 4]))
  t.end()
})

t.test('empty arrays match', t => {
  t.ok(match(t, [], []))
  t.ok(match(t, { x: [] }, { x: [] }))
  t.end()
})

t.test('arrays matched against object sets', t => {
  const a: number[] & { foo?: string } = [1, 2, 3]
  a.foo = 'bar'
  t.ok(match(t, a, { foo: 'bar' }))
  t.end()
})

t.test(
  "shallower shouldn't care about key order recursively and types",
  t => {
    t.ok(
      match(
        t,
        { x: { a: 1, b: 2 }, y: { c: 3, d: 4 } },
        { y: { d: 4, c: 3 }, x: { b: '2', a: '1' } }
      )
    )
    t.end()
  }
)

t.test('undefined is the same as itself', t => {
  t.ok(match(t, undefined, undefined))
  t.ok(match(t, { x: undefined }, { x: undefined }))
  t.ok(match(t, { x: [undefined] }, { x: [undefined] }))
  t.end()
})

t.test('undefined and null are Close Enough', t => {
  t.ok(match(t, undefined, null))
  t.ok(match(t, { x: null }, { x: undefined }))
  t.ok(match(t, { x: [undefined] }, { x: [null] }))
  t.end()
})

t.test("null is as shallow as you'd expect", t => {
  t.ok(match(t, null, null))
  t.ok(match(t, { x: null }, { x: null }))
  t.ok(match(t, { x: [null] }, { x: [null] }))
  t.end()
})

t.test('the same number matches', t => {
  t.ok(match(t, 0, 0))
  t.ok(match(t, 1, 1))
  t.ok(match(t, 3.14, 3.14))
  t.end()
})

t.test("different numbers don't match", t => {
  t.notOk(match(t, 0, 1))
  t.notOk(match(t, 1, -1))
  t.notOk(match(t, 3.14, 2.72))
  t.end()
})

t.test(
  "tmatch shouldn't care about key order (but still might) and types",
  t => {
    t.ok(
      match(
        t,
        [
          { foo: { z: 100, y: 200, x: 300 } },
          'bar',
          11,
          { baz: { d: 4, a: 1, b: 2, c: 3 } },
        ],
        [
          { foo: { z: 100, y: 200, x: 300 } },
          'bar',
          11,
          { baz: { a: '1', b: '2', c: '3', d: '4' } },
        ]
      )
    )
    t.end()
  }
)

t.test(
  "match shouldn't blow up on circular data structures",
  t => {
    var x1: { [k: string]: any } = { z: 4 }
    var y1: { [k: string]: any } = { x: x1 }
    x1.y = y1

    var x2: { [k: string]: any } = { z: 4 }
    var y2: { [k: string]: any } = { x: x2 }
    x2.y = y2

    t.ok(match(t, x1, x2))

    x1.other = x2
    x2.other = x1
    t.ok(match(t, x1, x2))

    x2.other = x2
    t.ok(match(t, x1, x2))
    t.end()
  }
)

t.test('regexps match strings', t => {
  {
    const x = { one: 'String' }
    const y = { one: /.ring$/ }
    t.ok(match(t, x, y))
    t.ok(match(t, x.one, y.one))
  }

  {
    const x = ['String', 'String']
    const y = [/.ring$/, /.ring$/]
    t.ok(match(t, x, y))
  }

  {
    const x = ['Ring', /.ring$/]
    const y = [/.ring$/]
    t.notOk(match(t, x, y))
  }
  t.end()
})

t.test('partial strings match on indexOf', t => {
  var x = { one: 'String' }
  var y = { one: 'rin' }

  t.ok(match(t, x, y))
  t.notOk(match(t, y, x))
  t.end()
})

t.test('ctors and other fun things', t => {
  class Foo {
    _isFoo: string
    constructor() {
      this._isFoo = 'foo'
    }
  }
  class Cls {}

  t.notOk(
    match(t, Buffer.from('asdf'), Buffer.from('asdff'))
  )

  var d = new Date('1979-07-01T19:10:00.000Z').toISOString()

  var obj = {
    buffer: Buffer.from('x'),
    date: new Date(d),
    fn: function () {},
    foo: new Foo(),
    num: 1.2,
    nan: NaN,
    bool: true,
    array: [],
    str: 'asdf',
    inf: Infinity,
    neginf: -Infinity,
    map: new Map([
      [1, 2],
      [3, 4],
    ]),
    set: new Set([1, 2, 3, 4]),
    obj: { a: 1 },
    cls: new Cls(),
  }

  t.ok(
    match(t, obj, {
      buffer: Buffer,
      date: Date,
      fn: Function,
      foo: Foo,
      num: Number,
      nan: NaN,
      bool: Boolean,
      array: Array,
      str: String,
      map: Map,
      set: Set,
      obj: Object,
      cls: Cls,
    })
  )

  t.ok(
    match(t, obj, {
      buffer: Buffer.from('x'),
      date: d,
      foo: new Foo(),
      str: 'sd',
    })
  )

  t.notOk(
    match(t, obj, {
      inf: Number,
    })
  )

  t.notOk(
    match(t, obj, {
      neginf: Number,
    })
  )

  t.notOk(
    match(t, obj, {
      nan: Number,
    })
  )

  t.end()
})

t.test('js WAT! array/string stuff', t => {
  t.notOk(match(t, [1], 1))
  t.notOk(match(t, 1, [1]))
  t.ok(match(t, [1], [1]))
  var o = {}
  t.ok(match(t, o, o))
  t.ok(match(t, 1, '1'))
  t.end()
})

t.test('symbology', t => {
  t.ok(match(t, { a: Symbol('a') }, { a: Symbol }))
  t.ok(match(t, { a: Symbol('a') }, { a: Symbol('a') }))
  t.ok(match(t, { a: Symbol('a') }, { a: Symbol.for('a') }))

  t.notOk(match(t, { a: Symbol('a') }, { a: 'Symbol(a)' }))
  t.notOk(match(t, { a: 'Symbol(a)' }, { a: Symbol('a') }))
  t.notOk(
    match(t, { a: 'Symbol(a)' }, { a: Symbol.for('a') })
  )
  t.notOk(match(t, { a: 'Symbol(a)' }, { a: Symbol }))
  t.end()
})

t.test('set vs non-set, map vs non-map', t => {
  const obj = {
    set: new Set(),
    map: new Map(),
  }
  t.notOk(
    match(t, obj, {
      set: new Map(),
      map: new Map(),
    })
  )
  t.notOk(
    match(t, obj, {
      set: new Set(),
      map: new Set(),
    })
  )
  t.notOk(
    match(t, obj, {
      set: [],
      map: Array,
    })
  )
  t.end()
})

t.test('errors can only be satisfied by errors', t => {
  const obj = {
    er: new TypeError('asdf'),
  }
  const pat = {
    er: {
      name: obj.er.name,
      message: obj.er.message,
    },
  }
  t.ok(match(t, obj, pat))
  t.notOk(match(t, pat, obj))
  t.ok(match(t, obj, { er: Error }))
  t.ok(match(t, obj, { er: TypeError }))
  t.notOk(match(t, obj, { er: new Error('fdsa') }))
  t.notOk(match(t, obj, { er: { message: 'yolo' } }))
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
  t.ok(match(t, a, b), 'iterables match one another')
  t.ok(match(t, a, arr), 'iterable matches array')
  t.ok(match(t, arr, b), 'array matches iterable')
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
    match(t, er, er2),
    'errors with different properties are not the same'
  )
  t.notOk(
    match(t, { er }, { er: er2 }),
    'errors with different properties are not the same'
  )
  t.end()
})
