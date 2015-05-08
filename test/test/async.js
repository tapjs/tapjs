var t = require('../..')

t.test('first test', function (t) {
  t.pass('this is ok')
  t.end()
})

setTimeout(function () {
  t.test('second test (async)', function (t) {
    t.pass('this is ok')
    t.end()
  })
})
