var t = require('../../lib/root.js')

t.test('nesting', function (t) {
  t.plan(2)
  t.test('first', function (tt) {
    tt.plan(3)
    tt.ok(true, 'true is ok')
    console.log('an object is', { a: 'thing', to: [ 'inspect' ] })
    tt.assert('doeg', 'doag is also okay')
    tt.assert('doeg', 'doag is very okay')
  })
  t.test('second', function (tt) {
    function foo() {
      tt.ok('no plan', 'but that is ok')
      tt.pass('this passes')
      tt.equal(1, 1, 'nested ok')
      console.trace('in foo')
      tt.equal(1, 1, 'nested ok second')
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
    t.ok(true, 'timeout', { foo: 'blz' })
  }, 50)
  setTimeout(function () {
    t.pass('timeout')
  })
})

t.pass('pass after async kid')

t.end()

