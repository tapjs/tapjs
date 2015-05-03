// test that failOnBail is contagious to child processes

var t = require('../..')

t.test('bail fail', { bail: true }, function (t) {
  t.test('failer', function (t) {
    t.fail('this fails')
    t.ok('should not see this')
    t.end()
  })
  t.end()
})

t.test('this should never happen', function (t) {
  t.fail('nope')
  t.end()
})
