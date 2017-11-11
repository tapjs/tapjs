var t = require('../..')

t.test('post-plan async', function (t) {
  t.test('child test', function (t) {
    t.pass('this is fine')
    setTimeout(t.end)
  })
  t.plan(1)
})
