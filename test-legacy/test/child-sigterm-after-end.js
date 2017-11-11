var t = require('../..')
if (process.argv[2] === 'child') {
  setInterval(function () {}, 10000)
  t.pass('this is fine')
  t.end()
  // use ipc so that we're not waiting longer than necessary
  process.send({ do: 'it' })
} else {
  t.comment('child start')
  var spawn = require('child_process').spawn
  var child = spawn(process.execPath, [__filename, 'child'], {
    stdio: [ 0, 1, 1, 'ipc']
  })
  child.on('message', function () {
    child.kill('SIGTERM')
  })
  child.on('exit', function (code, signal) {
    t.comment('child end code=%j signal=%j', code, signal)
    t.notEqual(code, 0)
    t.end()
  })
}
