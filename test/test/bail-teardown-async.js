var t = require('../..')

t.test('foobar test', function (t) {
  t.tearDown(function () {
    setTimeout(function () {
      t.bailout('teardown fail')
    })
  })
  t.end()
})

t.test('barfoo', function (t) {
  return t.test('barfoo2', function (t) {
    return t.test('barf3', function (t) {
      return t.test('b3rf', function (t) {
        setTimeout(t.end, 1000)
      })
    })
  })
})
