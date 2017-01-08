var t = require('../..')
t.test('with timeout', function (t) {
  t.plan(1)
  t.test('child test', function (t) {
    t.plan(2)
    setTimeout(function () {
      t.pass('this is fine')
      t.pass('i am ok with how things are proceeding')
    })
  })
})

t.test('no timeout', function (t) {
  t.plan(1)
  t.test('child test', function (t) {
    t.plan(2)
    t.pass('this is fine')
    t.pass('i am ok with how things are proceeding')
  })
})
