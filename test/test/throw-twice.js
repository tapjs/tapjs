var t = require('../..')

t.test('fine', function (t) {
  t.pass('fine')
  t.end()
  setTimeout(function () {
    throw new Error('this one')
  })
  setTimeout(function () {
    throw new Error('not this one')
  }, 100)
})
