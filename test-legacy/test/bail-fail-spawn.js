// test that failOnBail is contagious to child processes

var t = require('../..')

t.test('bail fail', { bail: true }, function (t) {
  t.spawn(process.execPath, [require.resolve('./nesting.js')])
  t.end()
})

t.test('this should never happen', function (t) {
  t.fail('nope')
  t.end()
})
