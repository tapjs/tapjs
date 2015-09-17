var t = require('../..')

if (process.argv[2] === 'child') {
  t.pass('this is ok')
  setInterval(function () {}, 100000)

  var fs = require('fs')
  fs.open(__filename, 'r', function onOpen (er, fd) {
    fs.open(__filename, 'r', onOpen)
    if (fd) fs.closeSync(fd)
  })

  var server = require('http').createServer(function (req, res) {
  }).listen(8000, function () {
    var req = require('http').request('http://localhost:8000/foo').end()
  })

  return
}

t.spawn(process.execPath, [__filename, 'child'], {}, '', { timeout: 200 })
