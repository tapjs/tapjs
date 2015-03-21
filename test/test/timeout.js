var t = require('../../lib/test.js')()
t.pipe(process.stdout)
process.on('exit', function () {
  t.end()
})

t.test('parent of timeout test', function (t) {
  t.test('timeout test', { timeout: 50 }, function (t) {
    t.test('this never completes', function (tt) {
      tt.ok('wait a sec...')
      setTimeout(function () {
        tt.pass('ok done')
        tt.end()
      }, 100)
    })
    t.end()
  })
  t.end()
})
