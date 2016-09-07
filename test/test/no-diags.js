var t = require('../..')
t.fail('this is not ok', { diagnostic: false })
t.test('not ok subtest', { diagnostic: false }, function (t) {
  t.fail('diagnostics not ok', { diagnostic: false })
  t.end()
})
