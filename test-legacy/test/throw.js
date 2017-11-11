var t = require('../..')

t.test('nesting', function (t) {
  t.plan(3)
  t.test('first', function (tt) {
    tt.plan(2)
    tt.ok(true, 'true is ok')
    tt.ok('doeg', 'doag is also okay')
  })
  t.test('async thrower', function (tt) {
    setTimeout(function () {
      var er = new Error('THINK FAST!\nand also lines\nso many')
      er.jerk = true
      throw er
    })
  })
  t.test('thrower', function (tt) {
    var er = new Error('here hold this for a second')
    er.syscall = 'ring ring'
    throw er
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
    t.bailout('cannot continue')
  })
})

t.pass('pass after async kid')
