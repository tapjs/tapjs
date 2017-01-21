var t = require('../..')

t.test('unbuffered', function (t) {
  t.pass('fine')
  setTimeout(function () {
    t.pass('also fine')
    t.end()
  })
})

t.test('buffered', { buffered: true }, function (t) {
  t.pass('fine')
  setTimeout(function () {
    t.pass('also fine')
    t.end()
  })
})

if (process.argv[2] !== 'child') {
  t.spawn(process.execPath, [__filename, 'child'], 'unbuffered spawn')
  t.spawn(process.execPath, [__filename, 'child'], { buffered: true }, 'buffered spawn')
}
