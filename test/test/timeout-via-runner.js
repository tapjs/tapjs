var t = require('../..')

if (process.argv[2] === 'child') {
  t.test('child test', function (t) {
    t.plan(2)
    t.pass('this is fine')
    setTimeout(function (res) {
      t.pass('request complete')
    }, 20000)
  })
} else {
  t.spawn(process.execPath, [__filename, 'child'], {}, 'child', { timeout: 1000 })
}
