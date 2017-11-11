var t = require('../..')

t.pass('this is fine')
t.test(function child (t) {
  t.pass('child test point')
  t.tearDown(function () {
    t.bailout('i did not want to be torn down')
  })
  t.end()
})
