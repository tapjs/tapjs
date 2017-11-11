var tap = require('../..')

var timer = setTimeout(function () {
  throw new Error('timer should never ding')
}, 1000)

tap.tearDown(function () {
  clearTimeout(timer)
})

tap.test('child test', function (t) {
  t.pass('this is ok')
  setTimeout(function () {
    t.end()
  }, 100)
})

tap.pass('one')
setTimeout(function () {
  tap.pass('two')
  setTimeout(function () {
    tap.pass('three')
    setTimeout(function () {
      tap.pass('four')
      setTimeout(function () {
        tap.pass('five')
        setTimeout(function () {
          tap.pass('six')
        })
      })
    })
  })
})
