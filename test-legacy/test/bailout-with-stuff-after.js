var t = require('../..')
t.bailout('this is fine')
t.plan(9999)
t.test('nope', function (t) {
  throw new Error('should not get here')
})
t.throws(function () {}, 'did not throw')
t.end()
t.plan(100)
