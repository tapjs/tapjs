var tap = require('../')
var test = tap.test
var Test = tap.Test

test('testing the test object', function (t) {
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

test('plan stuff', function (t) {
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

test('subtest with name and function', function (t) {
  var tt = new Test({ buffered: false })
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test('name', function (t){t.end()})
  tt.end()

  t.equal(out, 'TAP version 13\n# Subtest: name\n    1..0\nok 1 - name\n\n1..1\n');
  t.end()
})

test('invalid test arguments', function (t) {
  t.throws(function () {
    var tt = new Test({ buffered: false })
    tt.test('name', { skip: false }, 'not a function')
  }, new TypeError('unknown argument passed to parseTestArgs: string'))

  t.end()
})

test('throws type', function (t)  {
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
