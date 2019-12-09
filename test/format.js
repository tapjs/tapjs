const t = require('tap')
const {format, Format} = require('../')

t.test('gnarly object, many points of view', t => {
  const k = { a: 1 }
  k.k = { k }
  k.k.i = { i: 1 }
  k.k.i.k = k.k
  const o = { o: true }
  function args () { return arguments }
  const f = {
    a: 1,
    b: 2,
    extra: true,
    c: 3,
    d: 4,
    more: false,
    e: {
      f: {
        g: 1
      },
      a: [2, 3, 4],
      h: 'asdf',
      multilineString: new Array(5).join('this is a line\n'),
      emptyString: '',
    },
    nullObject: Object.assign(Object.create(null), {
      x: Object.create(null),
      y: Object.create(Object.create(null)),
      z: Object.assign(Object.create(Object.create(null)), { zed: true }),
    }),
    p: new Set([{x: 'y', z: true }, {a:1}, {b:2}]),
    s: new Set([{b:2}, {c:3}]),
    m: new Map([
      [k, 1],
      [{b: 2}, 2],
      [{c: 'd'}, { re: /ef/g }],
    ]),
    ao: [k, k, [k, k]],
    ao: [o, o, [o, o]],
    om: new Map([[o, k], [k, o]]),
    args: args(1, 2, 3, o),
    buf: Buffer.from('howdy'),
    bigInt: 5n,
    longBuf: Buffer.from(new Array(100).join('hello, world!\n')),
    emp: {
      b: Buffer.from(''),
      a: [],
      o: {},
      m: new Map(),
      s: new Set(),
    },
    fns: {
      name: function foo () {},
      anon: function () {},
      arr: () => {},
      identity: x => x,
      // v8 does not make this easy!
      nameless: (function () { return () => {} })(),
    },
    sym: Symbol('prince'),
    date: new Date('2019-02-14T07:13:44.100Z'),
    n: null,
    undef: void 0,
    classy: new (class Foo {}),
    err: new Error('just an error'),
    emptyErr: new Error(),
    fancyErr: (() => {
      const er = new Error('fancy pantsy')
      er.fancy = 'pantsy'
      return er
    })(),
    assert: (() => {
      try {
        require('assert').equal(k, o)
      } catch (er) {
        return er
      }
    })(),
  }
  k.f = f

  const c = {}
  c.c = {c}
  c.a = [1, c]
  c.a.push(c.a)
  c.c.b = {b: 1, d: c}
  c.k = k
  c.f = f
  k.c = c

  f.m.set(1, c)

  f.s.add(f)
  f.m.set(f, k)

  const styles = ['pretty', 'js', 'tight']
  for (const style of styles) {
    t.matchSnapshot(format(f, {style}), style)
  }

  t.test('different points of view', t => {
    t.matchSnapshot(format(f.m), 'f.m')
    t.matchSnapshot(format(k), 'k')
    t.matchSnapshot(format(k.k), 'k.k')
    t.matchSnapshot(format(c), 'c')
    t.end()
  })

  t.matchSnapshot(format(o, {indent: '\t'}), 'tab')
  t.matchSnapshot(format(o, {indent: '   '}), '3 space')

  t.end()
})

t.test('sorting', t => {
  t.matchSnapshot(format({b: 1, a: 2}, {sort: true}), 'sort it')
  t.equal(
    format({b: 1, a: 2}, {sort: true}),
    format({a: 2, b: 1}, {sort: true}),
    'sorting makes them the same'
  )
  t.end()
})

t.test('other misc', t => {
  t.throws(() => new Format(1, { isKey: true }),
    new Error(`isKey should only be set for Map keys`))

  const s = new Format(true)
  t.matchSnapshot(s.print())
  t.equal(s.memo, s.print(), 'printing multiple times is memoized')

  const parent = new Format([1])
  t.throws(() => new Format(1, { parent, isKey: true }),
    new Error(`isKey should only be set for Map keys`))

  t.throws(() => new Format(1, { style: 'nyancat' }),
    new TypeError(`unknown style: nyancat`))

  // fake out the 'seen' function
  const o = { a: {} }
  o.a.t = o
  const root = new Format(o)
  const branch = new Format(o.a, { parent: root })
  const leaf = new Format(o.a.t, {
    parent: branch,
    seen: () => branch,
  })
  t.matchSnapshot(root.print(), 'faked out seen() method')

  t.end()
})

t.test('format iterable', t => {
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
  const s = new Format(new And(new And(1, 2), new And(3, 4)))
  t.matchSnapshot(s.print())
  t.end()
})

t.test('objectAsArray is null for non-arrays', t => {
  t.equal(new Format('hello').objectAsArray, null)
  t.end()
})

t.test('streams are not arrays', t => {
  const MP = require('minipass')
  const readable = new MP().end('hello')
  const writable = new MP()
  writable.pipe = null
  t.matchSnapshot(new Format(readable).print())
  t.matchSnapshot(new Format(writable).print())
  t.end()
})

t.test('hidden props and getters', t => {
  const _val = Symbol('_value')
  const _baseVal = Symbol('_baseValue')
  let i = 0
  class Base {
    constructor (val) {
      this.raw = val
      this[_val] = val
      this[_baseVal] = i++
    }
    get baseValue () {
      return this[_baseVal]
    }
  }
  class Hidden extends Base {
    get value () { return this[_val] }
  }
  Object.defineProperty(Hidden.prototype, 'value', { enumerable: true })
  Object.defineProperty(Base.prototype, 'baseValue', { enumerable: true })

  const one = new Hidden(1)
  const nullObj = Object.create(null)
  nullObj.isNullObject = true
  t.matchSnapshot(new Format(one).print(), 'own props only')
  t.matchSnapshot(new Format(nullObj).print(), 'own props only')
  t.matchSnapshot(new Format(one, {
    includeGetters: true
  }).print(), 'enumerable inherited getters shown')
  t.matchSnapshot(new Format(nullObj, {
    includeGetters: true
  }).print(), 'enumerable inherited getters shown')
  t.matchSnapshot(new Format(one, {
    includeEnumerable: true
  }).print(), 'all enumerable properties shown')
  t.matchSnapshot(new Format(nullObj, {
    includeEnumerable: true
  }).print(), 'all enumerable properties shown')
  t.end()
})

t.test('format BigInt', t => {
  t.equal(new Format(BigInt('5')).print(), '5n')
  t.end()
})
