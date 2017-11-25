var t = require('../..')

if (process.argv[2] === 'child') {
  process.on('SIGTERM', function () {
    console.log('yolo')
  })
  t.pass('this is fine 1')
  t.pass('this is fine 2')
  t.pass('this is fine 3')
  t.test('child test', function (t) {
    t.plan(3)
    t.pass('this is fine 4')
    t.pass('this is fine 5')
    setTimeout(function (res) {
      t.pass('request complete')
    }, 20000)
  })
} else {
  t.spawn(process.execPath, [__filename, 'child'], { timeout: 1000 })
}
