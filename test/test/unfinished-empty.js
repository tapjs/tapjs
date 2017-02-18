var t = require('tap')

t.teardown(() => console.log('ok'))

t.test('a', t => {
  t.test('b', t => {
    // t.pass('ok')
  })
})
