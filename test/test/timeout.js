var t = require('../..')

t.test('parent of timeout test', function (t) {
  t.test('timeout test', { timeout: 50 }, function (t) {
    t.test('this never completes', function (tt) {
      tt.test('baby', function (tt) {
        tt.pass('wait a sec...')
        var timer = setTimeout(function () {
          tt.pass('ok done')
          tt.end()
        }, 10000)
        tt.on('end', clearTimeout.bind(null, timer))
      })
      tt.pass('p')
      tt.pass('a')
      tt.pass('s')
      tt.pass('s')
      tt.end()
    })
    t.end()
  })
  t.end()
})
