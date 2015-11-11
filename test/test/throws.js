var t = require('../..')

t.test('throws should match a regex', function(t) {
  t.plan(2)
  t.throws(function() {
    throw new Error('test')
  }, /test/)

  t.throws(function() {
    throw new Error('test')
  }, /fasdfsadf/)
})
