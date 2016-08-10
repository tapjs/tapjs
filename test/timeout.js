var tap = require('../')
var Test = tap.Test

tap.test('timeout test with plan only', function (t) {
  t.plan(2)
  setTimeout(function () {
    t.ok(true, 'a')
  }, 100)
  setTimeout(function () {
    t.ok(true, 'b')
  }, 100)
})

tap.test('timeout test with plan and end', function (t) {
  t.plan(2)

  var tc = 2
  setTimeout(function () {
    t.ok(true, 'a')
    if (--tc === 0) {
      t.end()
    }
  }, 100)
  setTimeout(function () {
    t.ok(true, 'b')
    if (--tc === 0) {
      t.end()
    }
  }, 100)
})

tap.test('t.setTimeout()', function (t) {
  t.throws(function () {
    var tt = new Test()
    tt.setTimeout(-1)
  }, {}, { message: 'setTimeout: number > 0 required' })

  t.throws(function () {
    var tt = new Test()
    tt.setTimeout('not a number')
  }, {}, { message: 'setTimeout: number > 0 required' })

  var tt = new Test({ timeout: 1000, bail: false })
  tt.setTimeout(2000)
  tt.setTimeout(Infinity)
  t.notOk(tt._timeout)
  t.notOk(tt._timer)

  var expect = new RegExp('^TAP version 13\n' +
    '# Subtest: child test\n' +
    '    ok 1 - this is fine\n' +
    '    not ok 2 - timeout!\n' +
    '      ---\n' +
    '      timeout: 1\n' +
    '      \\.\\.\\.\n' +
    '    1..2\n' +
    '    # failed 1 of 2 tests\n' +
    'not ok 1 - child test # time=')

  tt = new Test({ name: 'some name', bail: false })
  tt.test('child test', { bail: false }, function (tt) {
    tt.pass('this is fine')
  })
  tt.setTimeout(1)
  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  setTimeout(function () {
    t.notOk(tt.passing())
    t.match(out, expect)
    t.end()
  }, 100)
})
