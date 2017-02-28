var t = require('../..')

t.teardown(function () { console.log('ok') })

t.test('a', function (t) {
  t.test('b', function (t) {
    // nothing here
  })
})
