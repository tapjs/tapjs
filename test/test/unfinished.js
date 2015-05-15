var tap = require('../..')

tap.test('parent', function(t) {
  t.test('child 1', function(t) {
    t.test('grandchild 1', function(t) {
      t.pass('1')
      t.end()
    })
  })
  t.test('child 2', function(t) {
    t.test('grandchild 2', function(t) {
      t.pass('2')
      t.end()
    })
  })
})
