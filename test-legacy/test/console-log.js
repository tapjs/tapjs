var t = require('../..')

console.log('>>>> before any tests')

t.test('nesting', function (t) {
  t.plan(2)
  t.test('first', function (tt) {
    tt.plan(3)
    tt.ok(true, 'true is ok')
    console.log('>>>> an object is', { a: 'thing', to: [ 'inspect' ] })
    tt.assert('doeg', 'doag is also okay')
    tt.assert('doeg', 'doag is very okay')
  })
  console.log('>>>> after first child')
  t.test('second', function (tt) {
    function foo () {
      tt.ok('no plan', 'but that is ok')
      tt.pass('this passes')
      tt.equal(1, 1, 'nested ok')
      console.trace('in foo')
      tt.equal(1, 1, 'nested ok second')
      tt.end()
    }
    function bar () {
      return foo()
    }
    function baz () {
      return bar()
    }
    baz()
  })
  console.log('>>>> after second child')
})

console.log('>>>> after child test')

t.pass('this passes')
t.pass('this passes too')

console.log('>>>> after pass() calls')

t.test('async kid', function (t) {
  console.log('>>>> in async kid, before plan')
  t.plan(2)
  console.log('>>>> in async kid, after plan')
  setTimeout(function () {
    t.ok(true, 'timeout', { foo: 'blz' })
  }, 50)
  setTimeout(function () {
    t.pass('timeout')
  })
})

console.log('>>>> after async kid')

t.pass('pass after async kid')

console.log('>>>> after all tests, before end()')

t.end()

console.log('>>>> after end() called')
