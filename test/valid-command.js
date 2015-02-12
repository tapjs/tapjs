var test = require('../').test
var Runner = require('../lib/tap-runner.js')
var TC = require('../lib/tap-consumer.js')

test('valid command', function (t) {
  var r = new Runner({argv:{remain:['./end-exception/t.js']}})
  var tc = new TC()
  var node = process.execPath
  var expectObj ={
    'id': 1,
    'ok': false,
    'name': ' ./end-exception/t.js',
    'timedOut': true,
    'command': '"' + node + ' t.js"',
    exit: null
  }
  if (process.platform === 'linux' && process.version < 'v0.11.0') {
    expectObj.exit = 143
  } else {
    expectObj.signal = 'SIGTERM'
  }
  var expect =
      [ 'TAP version 13'
      , 't.js'
      , expectObj
      , 'tests 1'
      , 'fail  1' ]
  r.pipe(tc)
  tc.on('data', function (d) {
    var e = expect.shift()
    t.same(d, e)
  })
  tc.on('end', function () {
    t.equal(expect.length, 0)
    t.end()
  })
})
