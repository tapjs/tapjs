var t = require('../..')

if (process.argv[2] === 'child') {
  t.pass('this is ok')
  setInterval(function () {}, 100000)
} else {
  t.spawn(process.execPath, [__filename, 'child'], {
    timeout: 900
  })
}
