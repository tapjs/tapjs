var t = require('../..')

t.test('children plan too big', function (t) {
  t.plan(9)
  t.pass('this is ok')
  t.pass('i am ok with how this is proceeding')
  t.test('grandchild', function (tt) {
    tt.plan(8)
    tt.pass('i am planning big things')
  })
})
