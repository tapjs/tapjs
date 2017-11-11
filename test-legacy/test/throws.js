var t = require('../..')

t.test('throws should match a regex', function (t) {
  t.plan(2)
  t.throws(function passing_thrower () {
    throw new Error('test')
  }, /test/)

  t.throws(function failing_thrower () {
    throw new Error('test')
  }, /fasdfsadf/)
})
