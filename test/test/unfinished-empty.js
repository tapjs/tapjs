var t = require('tap')

t.teardown(function () { console.log('ok') })

t.test('a', function (t) {
  t.test('b', function (t) {
    // nothing here
  })
})
