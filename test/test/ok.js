var t = require('../../lib/test.js')()

t.test('nesting', function (t) {
  t.plan(2)
  t.test('first', function (tt) {
    tt.plan(2)
    tt.ok(true, 'true is ok')
    tt.assert('doeg', 'doag is also okay')
  })
  t.test('second', function (tt) {
    function foo() {
      tt.ok('no plan', 'but that is ok')
      tt.pass('this passes')
      tt.equal(1, 1, 'nested ok')
      tt.end()
    }
    function bar() {
      return foo()
    }
    function baz() {
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
    t.ok(true, 'first timeout', { foo: 'blz' })
  }, 50)
  setTimeout(function () {
    t.pass('second timeout')
  })
})

t.pass('pass after async kid')

t.end()

t.pipe(process.stdout)
