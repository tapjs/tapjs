import t from 'tap'
import { format, Format } from '../'

// this is here so we can work with assertion errors and other
// inspection output from node 12 and 13, where cyclical refs
// are reported properly.
t.formatSnapshot = str => cleanNodeNames(str)

const cleanNodeNames = (str: string) =>
  str
    // strip out node 13's circular refs
    .replace(/<ref \*[0-9]+> /g, '')
    .replace(/\[Circular \*[0-9]+\]/g, '[Circular]')
    // remove node 10's ERR_ASSERTION litter
    .replace(
      /\s+"name": "AssertionError \[ERR_ASSERTION\]",\n/g,
      '\n'
    )
    .replace(
      /AssertionError \[ERR_ASSERTION\]/g,
      'AssertionError'
    )
    // remove enumerable domain:null field
    .replace(/\s+"domain": null,\n/g, '\n')
    .replace(
      /new AssertionError\([^\)]+\)/g,
      'new AssertionError(<contents elided for testing>)'
    )
    // tight formatting
    .replace(/"name":"AssertionError",/g, '')
    .replace(/"domain":null,/g, '')

t.test('gnarly object, many points of view', t => {
  const k: { [k: string]: any } = { a: 1 }
  k.k = { k }
  k.k.i = { i: 1 }
  k.k.i.k = k.k
  const o = { o: true }
  function args(..._: any[]) {
    return arguments
  }
  const f = {
    a: 1,
    b: 2,
    extra: true,
    c: 3,
    d: 4,
    more: false,
    e: {
      f: {
        g: 1,
      },
      a: [2, 3, 4],
      h: 'asdf',
      multilineString: 'this is a line\n'.repeat(4),
      emptyString: '',
    },
    nullObject: Object.assign(Object.create(null), {
      x: Object.create(null),
      y: Object.create(Object.create(null)),
      z: Object.assign(Object.create(Object.create(null)), {
        zed: true,
      }),
    }),
    p: new Set<any>([
      { x: 'y', z: true },
      { a: 1 },
      { b: 2 },
    ]),
    s: new Set<any>([{ b: 2 }, { c: 3 }]),
    m: new Map<any, any>([
      [k, 1],
      [{ b: 2 }, 2],
      [{ c: 'd' }, { re: /ef/g }],
    ]),
    ak: [k, k, [k, k]],
    //@ts-ignore-error
    ao: [o, o, [o, o]],
    om: new Map([
      [o, k],
      [k, o],
    ]),
    args: args(1, 2, 3, o),
    buf: Buffer.from('howdy'),
    longBuf: Buffer.from('hello, world!\n'.repeat(99)),
    emp: {
      b: Buffer.from(''),
      a: [],
      o: {},
      m: new Map(),
      s: new Set(),
    },
    fns: {
      name: function foo() {},
      anon: function () {},
      arr: () => {},
      identity: (x: any) => x,
      // v8 does not make this easy!
      nameless: (function () {
        return () => {}
      })(),
    },
    sym: Symbol('prince'),
    date: new Date('2019-02-14T07:13:44.100Z'),
    n: null,
    undef: void 0,
    classy: new (class Foo {})(),
    err: new Error('just an error'),
    emptyErr: new Error(),
    fancyErr: Object.assign(new Error('fancy pantsy'), {
      fancy: 'pantsy',
    }),
    assert: (() => {
      try {
        require('assert').equal(k, o)
      } catch (er) {
        return er
      }
    })(),
  }
  k.f = f

  const c: { [k: string]: any } = {}
  c.c = { c }
  c.a = [1, c]
  c.a.push(c.a)
  c.c.b = { b: 1, d: c }
  c.k = k
  c.f = f
  k.c = c

  f.m.set(1, c)

  f.s.add(f)
  f.m.set(f, k)

  const styles = ['pretty', 'js', 'tight']
  for (const style of styles) {
    t.matchSnapshot(
      cleanNodeNames(format(f, { style })),
      style
    )
  }

  t.test('different points of view', t => {
    t.matchSnapshot(cleanNodeNames(format(f.m)), 'f.m')
    t.matchSnapshot(cleanNodeNames(format(k)), 'k')
    t.matchSnapshot(cleanNodeNames(format(k.k)), 'k.k')
    t.matchSnapshot(cleanNodeNames(format(c)), 'c')
    t.end()
  })

  t.matchSnapshot(format(o, { indent: '\t' }), 'tab')
  t.matchSnapshot(format(o, { indent: '   ' }), '3 space')

  t.end()
})

t.test('sorting', t => {
  t.matchSnapshot(
    format({ b: 1, a: 2 }, { sort: true }),
    'sort it'
  )
  t.equal(
    format({ b: 1, a: 2 }, { sort: true }),
    format({ a: 2, b: 1 }, { sort: true }),
    'sorting makes them the same'
  )
  t.end()
})

t.test('other misc', t => {
  t.throws(
    () => new Format(1, { isKey: true }),
    new Error(`isKey should only be set for Map keys`)
  )

  const s = new Format(true)
  t.matchSnapshot(s.print())
  t.equal(
    s.memo,
    s.print(),
    'printing multiple times is memoized'
  )

  const parent = new Format([1])
  t.throws(
    () => new Format(1, { parent, isKey: true }),
    new Error(`isKey should only be set for Map keys`)
  )

  t.throws(
    () => new Format(1, { style: 'nyancat' }),
    new TypeError(`unknown style: nyancat`)
  )

  // fake out the 'seen' function
  const o: { [k: string]: any } = { a: {} }
  o.a.t = o
  const root = new Format(o)
  const branch = new Format(o.a, { parent: root })
  new Format(o.a.t, {
    parent: branch,
    seen: () => branch,
  })
  t.matchSnapshot(root.print(), 'faked out seen() method')

  t.end()
})

t.test('format iterable', t => {
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
  const s = new Format(
    new And(new And(1, 2), new And(3, 4))
  )
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
  t.matchSnapshot(
    cleanNodeNames(new Format(readable).print())
  )
  t.matchSnapshot(
    cleanNodeNames(new Format(writable).print())
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
  const nullObj = Object.create(null)
  nullObj.isNullObject = true
  t.matchSnapshot(new Format(one).print(), 'own props only')
  t.matchSnapshot(
    new Format(nullObj).print(),
    'own props only'
  )
  t.matchSnapshot(
    new Format(one, {
      includeGetters: true,
    }).print(),
    'enumerable inherited getters shown'
  )
  t.matchSnapshot(
    new Format(nullObj, {
      includeGetters: true,
    }).print(),
    'enumerable inherited getters shown'
  )
  t.matchSnapshot(
    new Format(one, {
      includeEnumerable: true,
    }).print(),
    'all enumerable properties shown'
  )
  t.matchSnapshot(
    new Format(nullObj, {
      includeEnumerable: true,
    }).print(),
    'all enumerable properties shown'
  )
  t.end()
})

t.test(
  'format BigInt',
  { skip: typeof BigInt === 'undefined' && 'no BigInt' },
  t => {
    t.equal(new Format(BigInt('5')).print(), '5n')
    t.end()
  }
)

t.test('locale sorting', t => {
  const obj = {
    cat: 'meow',
    dog: 'woof',
    chai: 'blub',
  }
  t.matchSnapshot(format(obj, { sort: true }))
  t.end()
})

t.test('invalid iterator', t => {
  const obj = {
    [Symbol.iterator]() {
      return {}
    },
  }
  t.matchSnapshot(format(obj))
  const f = new Format(obj)
  // looks like an array
  t.equal(f.isArray(), true)
  // until you try to format it
  t.equal(f.print(), 'Object {}')
  // then it realizes it's actually not
  t.equal(f.isArray(), false)
  t.end()
})

t.test('getId() returns same id every time', t => {
  const f = new Format({ ok: true })
  t.equal(f.getId(), 1)
  t.equal(f.getId(), 1)
  t.end()
})
t.test('nodeId() method', t => {
  const f = new Format({ ok: true })
  f.memo = 'memo'
  t.equal(f.nodeId(), '', 'nothing without an id')
  t.equal(f.getId(), 1)
  t.equal(
    f.nodeId(),
    '&ref_1 ',
    'id prefix set when id set'
  )
  t.equal(f.getId(), 1, 'id is consistent')
  t.equal(
    f.nodeId(),
    '&ref_1 ',
    'id prefix set when id set'
  )
  const f2 = new Format(f.object, { parent: f })
  t.equal(f2.getId(), 1, 'same object, same id')
  const f3 = new Format({ ok: true }, { parent: f })
  t.equal(f3.getId(), 2, 'different object, different id')
  t.end()
})

t.test('error without name/message', t => {
  const objs = [{ hello: 'world' }, {}]
  const styles = ['pretty', 'js', 'tight']

  t.plan(objs.length)
  for (const obj of objs) {
    t.test(JSON.stringify(obj), t => {
      t.plan(styles.length)
      for (const style of styles) {
        t.test(style, t => {
          const f = new Format(obj, { style })
          f.memo = ''
          f.printError()
          t.matchSnapshot(f.print())
          t.end()
        })
      }
    })
  }
})
