var t = require('../..')
var test = t.test

test(function nesting (t) {
  var plan = t.plan
  var test = t.test
  plan(2)
  test('first', function (tt) {
    var plan = tt.plan
    var ok = tt.ok
    var assert = tt.assert
    plan(2)
    ok(true, 'true is ok')
    assert('doeg', 'doag is also okay')
  })
  test('second', function (tt) {
    var pass = tt.pass
    var ok = tt.ok
    var equal = tt.equal
    var done = tt.done
    function foo () {
      ok('no plan', 'but that is ok')
      pass('this passes')
      equal(1, 1, 'nested ok')
      done()
    }
    function bar () {
      return foo()
    }
    function baz () {
      return bar()
    }
    baz()
  })
})

t.pass('this passes')
t.pass('this passes too')

t.test('async kid', function (t) {
  t.plan(2)
  setTimeout(function () {
    t.ok(true, 'timeout', { foo: 'blz' })
  })
  setTimeout(function () {
    t.pass('timeout')
  })
})

t.pass('pass after async kid')
