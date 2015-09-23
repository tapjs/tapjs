var t = require('../..')

if (process.argv[2] === 'child') {
  t.pass('this is ok')

  switch (process.argv[3]) {
  case 'timer':
    setInterval(function () {}, 100000)
    break

  case 'fs':
    var fs = require('fs')
    fs.open(__filename, 'r', function onOpen (er, fd) {
      fs.open(__filename, 'r', onOpen)
      if (fd) fs.closeSync(fd)
    })
    break

  case 'server':
    var http = require('http')
    var server = http.createServer(function (req, res) {
      // hang
    }).listen(8000, function () {
      var req = require('http').request(
        'http://localhost:8000/foo').end()
    })
    break

  }
  return
}

var args = [
  'timer',
  'server',
  'fs'
]

args.forEach(function (a) {
  t.spawn(process.execPath, [__filename, 'child', a], {}, '', {
    timeout: 900
  })
})
