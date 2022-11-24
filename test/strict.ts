import t from 'tap'
import { strict as compareStrict } from '../'

const strict = (t: Tap.Test, a: any, b: any) => {
  const s = compareStrict(a, b)
  t.matchSnapshot(s.diff)
  return s.match
}

t.test('symbology', t => {
  // symbols only match if they're the same symbol
  t.ok(
    strict(
      t,
      { a: Symbol.for('a') },
      { a: Symbol.for('a') }
    )
  )
  const a = Symbol('a')
  t.ok(strict(t, a, a))

  t.notOk(strict(t, { a: Symbol('a') }, { a: Symbol('a') }))
  t.notOk(
    strict(t, { a: Symbol('a') }, { a: Symbol.for('a') })
  )

  t.notOk(strict(t, { a: Symbol('a') }, { a: Symbol }))
  t.notOk(strict(t, { a: Symbol('a') }, { a: 'Symbol(a)' }))
  t.notOk(strict(t, { a: 'Symbol(a)' }, { a: Symbol('a') }))
  t.notOk(
    strict(t, { a: 'Symbol(a)' }, { a: Symbol.for('a') })
  )
  t.notOk(strict(t, { a: 'Symbol(a)' }, { a: Symbol }))
  t.end()
})

t.test('array-likes', t => {
  // only match if they have the same values and ctor names
  const RealArray = Array
  const Arry = class Array extends RealArray {}
  class Ayyr extends RealArray {}
  const a = new Arry()
  a.push(1, 2, 3)
  t.ok(strict(t, a, [1, 2, 3]))
  const b = new Ayyr()
  b.push(1, 2, 3)
  t.notOk(strict(t, a, b))
  t.end()
})

t.test('basic', t => {
  var EventEmitter = require('events').EventEmitter
  function functionA(a: any) {
    return a
  }
  var heinous = {
    nothin: null,
    nope: undefined,
    number: 0,
    funky: functionA,
    stringer: 'heya',
    then: new Date('1981-03-30'),
    rexpy: /^(pi|π)$/,
    granular: {
      stuff: [0, 1, 2],
    } as { [k: string]: any },
  }
  heinous.granular.self = heinous

  var awful = {
    nothin: null,
    nope: undefined,
    number: 0,
    funky: functionA,
    stringer: 'heya',
    then: new Date('1981-03-30'),
    rexpy: /^(pi|π)$/,
    granular: {
      stuff: [0, 1, 2],
    } as { [k: string]: any },
  }
  awful.granular.self = awful

  var functionB = functionA

  // 1. === gets the job done
  t.ok(strict(t, null, null), 'null is the same as itself')
  t.ok(
    strict(t, undefined, undefined),
    'undefined is the same as itself'
  )
  t.ok(strict(t, 0, 0), 'numbers check out')
  t.ok(
    strict(t, 1 / 0, 1 / 0),
    "it's a travesty that 1 / 0 = Infinity, but Infinities are equal"
  )
  t.ok(strict(t, 'ok', 'ok'), 'strings check out')
  t.ok(
    strict(t, functionA, functionB),
    'references to the same function are equal'
  )

  // 4. buffers are compared by value
  var bufferA = Buffer.from('abc')
  var bufferB = Buffer.from('abc')
  t.ok(
    strict(t, bufferA, bufferB),
    'buffers are compared by value'
  )

  // 5. dates are compared by numeric (time) value
  var dateA = new Date('2001-01-11')
  var dateB = new Date('2001-01-11')
  t.ok(
    strict(t, dateA, dateB),
    'dates are compared by time value'
  )

  // 6. regexps are compared by their properties
  var rexpA = /^h[oe][wl][dl][oy]$/
  var rexpB = /^h[oe][wl][dl][oy]$/
  t.ok(
    strict(t, rexpA, rexpB),
    'regexps are compared by their properties'
  )

  // 8. loads of tests for objects
  t.ok(strict(t, {}, {}), 'bare objects check out')
  var a = { a: 'a' }
  var b: any = a
  t.ok(
    strict(t, a, b),
    'identical object references check out'
  )
  b = { a: 'a' }
  t.ok(
    strict(t, a, b),
    'identical simple object values check out'
  )

  t.ok(strict(t, [0, 1], [0, 1]), 'arrays check out')

  function onerror(error: Error) {
    console.error(error.stack)
  }
  var eeA = new EventEmitter()
  eeA.on('error', onerror)
  var eeB = new EventEmitter()
  eeB.on('error', onerror)
  t.ok(
    strict(t, eeA, eeB),
    'more complex objects check out'
  )

  var cyclicA: { [k: string]: any } = {}
  cyclicA.x = cyclicA
  var cyclicB: { [k: string]: any } = {}
  cyclicB.x = cyclicB
  t.ok(
    strict(t, cyclicA, cyclicB),
    'can handle cyclic data structures'
  )

  var y = {
    v: {
      v: {
        v: {
          v: {
            v: {
              v: {
                v: {
                  v: {
                    v: {
                      v: {
                        v: {
                          v: {
                            v: {
                              v: {
                                v: {} as {
                                  [k: string]: any
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }
  y.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v = y
  var z = {
    v: {
      v: {
        v: {
          v: {
            v: {
              v: {
                v: {
                  v: {
                    v: {
                      v: {
                        v: {
                          v: {
                            v: {
                              v: {
                                v: {} as {
                                  [k: string]: any
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }
  z.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v = z
  t.ok(
    strict(t, y, z),
    'deeply recursive data structures also work'
  )

  t.ok(
    strict(t, heinous, awful),
    'more complex objects also check out'
  )

  awful.granular.self = heinous
  heinous.granular.self = awful
  t.ok(
    strict(t, heinous, awful),
    'mutual recursion with otherwise identical structures fools deepEquals'
  )

  /*
   *
   * FAILURE
   *
   */

  // 1. === does its job
  t.notOk(
    strict(t, 1 / 0, -1 / 0),
    'opposite infinities are different'
  )
  t.notOk(
    strict(t, 1, '1'),
    'strict equality, no coercion between strings and numbers'
  )
  t.notOk(
    strict(t, 'ok', 'nok'),
    'different strings are different'
  )
  t.notOk(
    strict(t, 0, '0'),
    'strict equality, no coercion between strings and numbers'
  )
  t.notOk(
    strict(t, undefined, null),
    'so many kinds of nothingness!'
  )
  t.notOk(
    strict(
      t,
      function nop() {},
      function nop() {}
    ),
    'functions are only the same by reference'
  )

  // 2. one is an object, the other is not
  t.notOk(
    strict(t, undefined, {}),
    "if both aren't objects, not the same"
  )

  // 3. null is an object
  t.notOk(strict(t, {}, null), 'null is of type object')
  t.notOk(strict(t, null, {}), 'null is of type object')
  t.notOk(
    strict(t, null, undefined),
    'null is of type object'
  )
  t.notOk(
    strict(t, undefined, null),
    'null is of type object'
  )

  // 4. buffers are compared by both byte length (for speed) and value
  bufferB = Buffer.from('abcd')
  t.notOk(
    strict(t, bufferA, bufferB),
    'Buffers are checked for length'
  )
  bufferB = Buffer.from('abd')
  t.notOk(
    strict(t, bufferA, bufferB),
    'Buffers are also checked for value'
  )

  // 5. dates
  dateB = new Date('2001-01-12')
  t.notOk(
    strict(t, dateA, dateB),
    'different dates are not the same'
  )

  // 6. regexps
  rexpB = /^(howdy|hello)$/
  t.notOk(
    strict(t, rexpA, rexpB),
    'different regexps are not the same'
  )

  // 7. arguments
  var outer = (function (..._: any[]) {
    return arguments
  })(1, 2, 3)
  ;(function inner(_a: number, _b: number, _c: number) {
    var inner = arguments
    t.ok(strict(t, outer, outer))
    t.ok(strict(t, outer, inner))
    // arguments only match arguments, not arrays
    t.notOk(strict(t, outer, [1, 2, 3]))
    t.notOk(strict(t, [1, 2, 3], inner))
  })(1, 2, 3)

  // 8. objects present edge cases galore
  t.notOk(
    strict(t, [], {}),
    "different object types shouldn't match"
  )

  var nullstructor = Object.create(null)
  t.notOk(
    strict(t, {}, nullstructor),
    'Object.create(null).constructor === undefined'
  )

  b = { b: 'b' }
  t.notOk(
    strict(t, a, b),
    "different object values aren't the same"
  )

  var c = { b: 'b', c: undefined }
  t.notOk(
    strict(t, b, c),
    "different object values aren't the same"
  )

  function ondata(data: any) {
    console.log(data)
  }
  eeB.on('data', ondata)
  t.notOk(
    strict(t, eeA, eeB),
    "changed objects don't match"
  )

  awful.granular.stuff[2] = 3
  t.notOk(
    strict(t, heinous, awful),
    'small changes should be found'
  )

  awful.granular.stuff[2] = 2
  t.ok(
    strict(t, heinous, awful),
    'small changes should be fixable'
  )

  t.end()
})

t.test('NaN', t => {
  t.ok(strict(t, NaN, NaN))
  t.end()
})

t.test('set', function (t) {
  var obj = { a: 1 }
  var a = new Set([1, 2, 3, 4, obj])
  var b = new Set([obj, 2, 4, 3, 1])
  var c = new Set([4, 3, 2, 1, { a: 1 }])
  t.ok(strict(t, a, b))
  t.ok(strict(t, a, c))
  t.ok(strict(t, b, c))
  t.notOk(strict(t, new Set([1]), new Set([1, 2])))
  t.notOk(strict(t, new Set([1, 3, 5]), new Set([1, 6, 2])))
  t.ok(strict(t, new Set(), new Set()))
  t.notOk(strict(t, a, Array.from(a)))
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
  t.ok(strict(t, a, b))
  t.notOk(strict(t, a, c))
  t.notOk(strict(t, b, c))
  t.notOk(strict(t, e, c))
  t.ok(strict(t, a, e))
  t.ok(strict(t, b, e))
  t.ok(strict(t, new Map(), new Map()))
  t.notOk(strict(t, a, Array.from(a)))
  t.notOk(strict(t, a, d))
  t.notOk(strict(t, c, d))
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
  t.ok(strict(t, a, b), 'iterables match one another')
  t.notOk(
    strict(t, a, arr),
    'iterable does not strictly match array'
  )
  t.notOk(
    strict(t, arr, b),
    'array does not strictly match iterable'
  )
  t.end()
})
