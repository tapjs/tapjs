var tap = require('../')

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
