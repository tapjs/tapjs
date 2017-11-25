var t = require('../..')
t.plan(1)
t.test('parent', function (t) {
  t.plan(1)
  t.test('child', function (t) {
    t.plan(1)
    t.fail('nope')
  })
})
