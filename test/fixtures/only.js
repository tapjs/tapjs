var test = require('../..').test

test('normal', function (t) {
  t.pass('will log an error when run without TAP_ONLY=1')
  t.end()
})

test('only', {only: true}, function (t) {
  t.pass('ok')
  t.end()
})
