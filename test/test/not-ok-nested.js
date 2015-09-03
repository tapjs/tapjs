var t = require('../..')

t.test('gp', function (t) {
  t.plan(1)
  t.test('parent', function (t) {
    t.plan(1)
    t.fail('fail')
  })
})
