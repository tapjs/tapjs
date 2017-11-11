var t = require('../..')

t.test('fine', function (t) {
  t.pass('fine')
  t.end()
  setTimeout(function () {
    throw { stack: new Error('this one').stack }
  })
  setTimeout(function () {
    throw new Error('not this one')
  }, 100)
})
