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
    var tt = new Test()
    tt.plan(1)
    tt.plan(1)
  }, new Error('Cannot set plan more than once'))
  t.throws(function () {
    var tt = new Test()
    tt.plan('foo')
  }, new TypeError('plan must be a number'))
  t.throws(function () {
    var tt = new Test()
    tt.plan(-1)
  }, new TypeError('plan must be a number'))

  t.end()
})

test('do nothing after bailout', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.bailout('this is fine')
  tt.plan(9999)
  tt.test('nope', function (t) {
    throw new Error('should not get here')
  })
  tt.throws(function () {}, 'did not throw')
  tt.end()
  tt.plan(100)
  t.equal(out, 'TAP version 13\nBail out! # this is fine\n')
  t.end()
})

test('subtest without arguments', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test()
  tt.end()

  t.match(out, /^TAP version 13\nok 1 - \(unnamed test\) # TODO\n1\.\.1\n# time=[^\n]+\n$/)

  t.end()
})

test('subtest with only a name', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test('name only')
  tt.end()

  t.match(out, /^TAP version 13\nok 1 - name only # TODO\n1\.\.1\n# time=[^\n]+\n$/)

  t.end()
})

test('subtest with only options', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test({skip: true})
  tt.end()

  t.match(out, /^TAP version 13\nok 1 - \(unnamed test\) # SKIP\n1\.\.1\n# time=[^\n]+\n$/)

  t.end()
})

test('subtest with only a function', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test(function (){})
  tt.end()
  
  t.equal(out, 'TAP version 13\n# Subtest: (unnamed test)\n');

  t.end()
})

test('subtest with name and options', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test('name', {skip: false})
  tt.end()
  
  t.match(out, /^TAP version 13\nok 1 - name # TODO\n1\.\.1\n# time=[^\n]+\n$/)

  t.end()
})

test('subtest with name and function', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test('name', function (){})
  tt.end()

  t.equal(out, 'TAP version 13\n# Subtest: name\n');

  t.end()
})

test('subtest with options and function', function (t) {
  var tt = new Test()
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.test({skip: false}, function (){})
  tt.end()

  t.equal(out, 'TAP version 13\n# Subtest: (unnamed test)\n');

  t.end()
})

test('invalid test arguments', function (t) {
  t.throws(function () {
    var tt = new Test()
    tt.test('name', { skip: false }, 'not a function')
  }, new TypeError('test() callback must be function if provided'))

  t.end()
})

test('throws type', function (t)  {
  t.throws(function() {
    throw new TypeError('some type error');
  }, TypeError, 'should throw a TypeError');

  var tt = new Test()
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
