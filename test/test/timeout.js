var t = require('../../lib/root.js')

t.test('parent of timeout test', function (t) {
  t.test('timeout test', { timeout: 50 }, function (t) {
    t.test('this never completes', function (tt) {
      tt.test('baby', function (tt) {
        tt.ok('wait a sec...')
        var timer = setTimeout(function () {
          tt.pass('ok done')
          tt.end()
        }, 1000)
        if (timer.unref) {
          timer.unref()
        }
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
