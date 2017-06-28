var t = require('../..')

t.pass('this is fine',{
  diagnostic: true,
  foo: {
    bar: 'baz'
  }
})

t.test('child', { diagnostic: true }, function (t) {
  t.plan(1)
  t.pass('this is fine')
})
