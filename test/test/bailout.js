var Test = require('../../lib/test.js')
var t = new Test()

t.test('nesting', function (t) {
  t.plan(2)
  t.test('first', function (tt) {
    tt.plan(2)
    tt.ok(true, 'true is ok')
    tt.ok('doeg', 'doag is also okay')
  })
  t.test('second', function (tt) {
    tt.ok('no plan', 'but that is ok')
    tt.pass('this passes')
    tt.end()
  })
})

t.pass('this passes')
t.fail('this fails')

t.test('async kid', function (t) {
  t.plan(2)
  setTimeout(function () {
    t.pass('first timeout', { foo: 'blz' })
  }, 50)
  setTimeout(function () {
    t.bailout('# # # cannot continue')
  })
})

t.pass('pass after async kid')

t.end()

t.pipe(process.stdout)
