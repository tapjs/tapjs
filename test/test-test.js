var t = require('../')
var Test = t.Test

t.test('testing the test object', function (t) {
  t.isa(t, Test, 'test object should be instanceof Test')

  // now test all the methods.
  ;[
    'isNotDeepEqual',
    'equals',
    'inequivalent',
    'threw',
    'strictEqual',
    'emit',
    'fail',
    'strictEquals',
    'notLike',
    'dissimilar',
    'true',
    'assert',
    'is',
    'ok',
    'isEqual',
    'isDeeply',
    'deepEqual',
    'deepEquals',
    'pass',
    'isNotEqual',
    'looseEquals',
    'false',
    'notDeeply',
    'ifErr',
    'hasFields',
    'isNotDeeply',
    'like',
    'similar',
    'notOk',
    'isDissimilar',
    'isEquivalent',
    'doesNotEqual',
    'isSimilar',
    'notDeepEqual',
    'type',
    'notok',
    'isInequivalent',
    'isNot',
    'same',
    'isInequal',
    'ifError',
    'iferror',
    'has',
    'not',
    'notSimilar',
    'isUnlike',
    'notEquals',
    'unsimilar',
    'doesNotThrow',
    'error',
    'constructor',
    'notEqual',
    'throws',
    'isLike',
    'isNotSimilar',
    'isNotEquivalent',
    'inequal',
    'notEquivalent',
    'isNotLike',
    'equivalent',
    'looseEqual',
    'equal',
    'unlike',
    'doesNotHave',
    'comment',
    'isa'
  ].forEach(function (method) {
    t.ok(t[method], 'should have ' + method + ' method')
    t.isa(t[method], 'function', method + ' method should be a function')
  })
  t.end()
})

t.test('plan stuff', function (t) {
  t.throws(function () {
    var tt = new Test({ buffered: false })
    tt.plan(1)
    tt.plan(1)
  }, new Error('Cannot set plan more than once'))
  t.throws(function () {
    var tt = new Test({ buffered: false })
    tt.plan('foo')
  }, new TypeError('plan must be a number'))
  t.throws(function () {
    var tt = new Test({ buffered: false })
    tt.plan(-1)
  }, new TypeError('plan must be a number'))

  t.end()
})

t.test('invalid test arguments', function (t) {
  t.throws(function () {
    var tt = new Test({ buffered: false })
    tt.test('name', { skip: false }, 'not a function')
  }, new TypeError('unknown argument passed to parseTestArgs: string'))

  t.end()
})

t.test('throws type', function (t)  {
  t.throws(function() {
    throw new TypeError('some type error');
  }, TypeError, 'should throw a TypeError');

  var tt = new Test({ buffered: false })
  t.notOk(tt.throws(function () {
    throw new RangeError('x')
  }, TypeError))

  t.notOk(tt.throws(function () {
    throw new RangeError('x')
  }, new TypeError('x')))

  t.throws(function () {
    throw new SyntaxError('y')
  }, { message: 'y' })

  t.throws(function () {
    throw new RangeError('x')
  }, new Error('x'))

  t.end()
})

t.test('test-point', function (t) {
  var TestPoint = require('../lib/point.js')
  t.throws(function () {
    new TestPoint(100, 'century!', { flerg: 'blooze' })
  }, new TypeError('ok must be boolean'))

  var tp = TestPoint(true, 'msg', { a: 1 })
  t.isa(tp, TestPoint)
  t.match(tp, {
    ok: 'ok ',
    message: '- msg\n'
  })

  t.match(TestPoint(true, 'msg', { a: 1, diagnostic: true }), {
    ok: 'ok ',
    message: ' - msg\n  ---\n  a: 1\n  ...\n\n'
  })

  t.match(TestPoint(true, 'msg', { a: 1, tapChildBuffer: 'subtest output' }), {
    ok: 'ok ',
    message: ' - msg {\nsubtest output\n}\n\n'
  })

  t.end()
})
