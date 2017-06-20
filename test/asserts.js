var test = require('../').test
var Test = require('../lib/test.js')
var util = require('util')
var truthies = [ true, 1, 'ok', Infinity, function () {}, {}, [], /./ ]
var falsies = [ false, 0, '', NaN, null, undefined ]

test('NaN', function (t) {
  t.same(NaN, NaN)
  t.strictSame(NaN, NaN)
  t.match(NaN, NaN)
  t.end()
})

test('ok finds truthiness, notOk finds falsiness', function (t) {
  var tt = new Test()
  truthies.forEach(function (truthy) {
    t.ok(truthy, util.inspect(truthy) + ' is truthy')
    t.notOk(tt.ok(!truthy), util.inspect(truthy) + ' is not falsey')
  })
  falsies.forEach(function (falsey) {
    t.notOk(falsey, util.inspect(falsey) + ' is falsey')
    t.notOk(tt.ok(falsey), util.inspect(falsey) + ' is not truthy')
  })
  t.end()
})

test('error tests for errorness', function (t) {
  var er = new Error('ok')
  var tt = new Test()
  var c = ''
  tt.on('end', function () {
    t.match(c, /non-Error error encountered/, 'warns about non-errors')
    t.end()
  })
  tt.on('data', function (chunk) { c += chunk })

  t.notOk(tt.error(er), 'fails when presented error')

  var circular = {}
  circular.circular = circular
  t.notOk(tt.error(circular), 'fails when presented circular object')

  falsies.forEach(function (falsey) {
    t.error(falsey, 'passes with ' + util.inspect(falsey))
  })
  truthies.forEach(function (truthy) {
    t.notOk(tt.error(truthy), 'fails with ' + util.inspect(truthy))
  })
  t.end()
})

test('throws expects to catch', function (t) {
  var tt = new Test()
  t.throws(function () {
    throw 'x' // eslint-disable-line
  })
  t.throws('message first', function () { throw new Error('x') })

  t.throws(function () { throw new Error('x') },
    new Error('x'), 'test thrown result')

  t.notOk(tt.throws(function () { throw new Error('x') },
    new Error('y'), 'test thrown result'))

  t.throws('test thrown result',
    function () { throw new Error('x') },
    new Error('x'), { foo: 'bar' })
  t.notOk(tt.throws('test thrown result',
    function () { throw new Error('x') },
    new Error('y'), { foo: 'bar' }))

  t.throws('test thrown non-Error object',
    function () {
      throw { ok: 'yup' } // eslint-disable-line
    },
    { ok: 'yup' })
  t.notOk(tt.throws('test thrown non-Error object',
    function () {
      throw { ok: 'yup' } // eslint-disable-line
    },
    { ok: 'nope' }))
  t.notOk(tt.throws(function () {}))
  t.end()
})

test('doesNotThrow expects not to catch', function (t) {
  var tt = new Test()
  t.notOk(tt.doesNotThrow(function () {
    throw 'x' // eslint-disable-line
  }))
  t.doesNotThrow(function () {})
  t.doesNotThrow('this does not throw', function () {})
  t.end()
})

test('equal is strict equality', function (t) {
  var tt = new Test()
  t.equal(1, 1, 'number 1')
  t.equal('a', 'a', 'letter a')
  t.notOk(tt.equal('1', 1), 'number 1 !== letter 1')
  t.notOk(tt.equal({x: 1}, {x: 1}), 'similar objects not ===')
  t.notOk(tt.equal(NaN, NaN), 'NaN cat')
  var o = {x: 1}
  t.equal(o, o, 'object identity')
  t.end()
})

test('not is strict inequality', function (t) {
  var tt = new Test()
  t.notOk(tt.not(1, 1), 'number 1')
  t.notOk(tt.not('a', 'a'), 'letter a')
  t.not('1', 1, 'number 1 !== letter 1')
  t.not({x: 1}, {x: 1}, 'similar objects not ===')
  t.not(NaN, NaN, 'NaN cat')
  var o = {x: 1}
  t.notOk(tt.not(o, o), 'object identity')
  t.end()
})

test('same is deep equivalence', function (t) {
  var tt = new Test()
  t.same({ x: 1 }, { x: 1 })
  t.same({ x: '1' }, { x: 1 })
  t.notOk(tt.same([1, 2], '1,2'))
  t.notOk(tt.same({ x: 1, y: 2 }, { x: 1 }))
  t.notOk(tt.same({ x: 1 }, { x: 1, y: 2 }))
  t.same([1, 2], ['1', '2'])
  t.same([1, '2'], ['1', 2])
  t.end()
})

test('notSame is deep inequivalence', function (t) {
  var tt = new Test()
  t.notOk(tt.notSame({ x: 1 }, { x: 1 }))
  t.notOk(tt.notSame({ x: '1' }, { x: 1 }))
  t.not_same([1, 2], '1,2')
  t.not_same({ x: 1, y: 2 }, { x: 1 })
  t.not_same({ x: 1 }, { x: 1, y: 2 })
  t.not_ok(tt.not_same([1, 2], ['1', '2']))
  t.notOk(tt.not_same([1, '2'], ['1', 2]))
  t.end()
})

test('strictSame is deep strict equality', function (t) {
  var tt = new Test()
  t.strictSame({ x: 1 }, { x: 1 })
  t.notOk(tt.strictSame({ x: '1' }, { x: 1 }))
  t.not_ok(tt.strict_same([1, 2], '1,2'))
  t.not_ok(tt.strict_same({ x: 1, y: 2 }, { x: 1 }))
  t.not_ok(tt.strict_same({ x: 1 }, { x: 1, y: 2 }))
  t.not_ok(tt.strict_same([1, 2], ['1', '2']))
  t.notOk(tt.strict_same([1, '2'], ['1', 2]))
  t.strictSame([1, 2], [1, 2])
  t.end()
})

test('strictNotSame is deep strict inequality', function (t) {
  var tt = new Test()
  t.notOk(tt.notStrictSame({ x: 1 }, { x: 1 }))
  t.notStrictSame({ x: '1' }, { x: 1 })
  t.not_strict_same([1, 2], '1,2')
  t.not_strict_same({ x: 1, y: 2 }, { x: 1 })
  t.not_strict_same({ x: 1 }, { x: 1, y: 2 })
  t.not_strict_same([1, 2], ['1', '2'])
  t.not_strict_same([1, '2'], ['1', 2])
  t.notOk(tt.not_strict_same([1, 2], [1, 2]))
  t.end()
})

test('match is pattern matching', function (t) {
  var tt = new Test()
  t.match('asdf', /sd./)
  t.match('asdf', 'sd')
  t.notOk(tt.match(/sd./, 'asdf'))
  t.notOk(tt.match('asdf', 'xyz'))
  t.match({ x: 1, y: 2 }, { x: 1 })
  t.notOk(tt.match({ x: 1, y: 2 }, { x: 2 }))
  t.match('asdf', 'asdf')
  t.match('1', 1)
  t.match(1, '1')
  t.match([1, 2, 3], [1])
  t.match([1, 2, 3], [1, Number, '3'])

  // XXX debatable?
  t.notOk(tt.match(1, [1]))
  t.notOk(tt.match([1, 2, 3], 1))

  t.end()
})

test('notMatch is pattern unmatching', function (t) {
  var tt = new Test()
  t.not_ok(tt.not_match('asdf', /sd./))
  t.not_match(/sd./, 'asdf')
  t.not_match('asdf', 'xyz')
  t.not_ok(tt.not_match('asdf', 'sd'))
  t.not_ok(tt.not_match({ x: 1, y: 2 }, { x: 1 }))
  t.not_match({ x: 1, y: 2 }, { x: 2 })
  t.not_ok(tt.not_match('asdf', 'asdf'))
  t.not_ok(tt.not_match('1', 1))
  t.not_ok(tt.not_match(1, '1'))

  // XXX debatable?
  t.not_match(1, [1])
  t.not_match([1, 2, 3], 1)

  t.end()
})

test('type is type checking', function (t) {
  function fn () {}

  t.type(fn, 'function')
  t.type(fn, fn)
  // t.type(fn, 'Function')
  // t.type(fn, Function)

  t.type(new Date(), 'object')
  t.type(new Date(), 'Date')
  t.type(new Date(), Date)

  t.type(/./, 'object')
  t.type(/./, 'RegExp')
  t.type(/./, RegExp)

  t.type('.', 'string')

  function Parent () {}
  function Child () {}
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child
    }
  })
  var c = new Child()
  t.type(c, 'object')
  t.type(c, 'Child')
  t.type(c, 'Parent')
  t.type(c, 'Object')
  t.type(c, Child)
  t.type(c, Parent)
  t.type(c, Object)

  t.type(null, 'null')
  t.type(null, null)
  t.type(undefined, 'undefined')
  t.type(undefined, undefined)
  t.type(NaN, 'number')

  t.end()
})
