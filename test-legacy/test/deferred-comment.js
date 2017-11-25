var t = require('../..')
t.test('child', function (t) {
  setTimeout(function () {
    t.end()
  })
})
t.comment('this is %j json', { some: true })
