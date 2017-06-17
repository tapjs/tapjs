var t = require('../')
var execFile = require('child_process').execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')

t.test('--only', function (t) {
  var file = require.resolve('./fixtures/only.js')
  var args = [
    run,
    '--only',
    file
  ]

  execFile(node, args, function (err, stdout, stderr) {
    if (err) {
      throw err
    }
    t.equal(stderr, '')

    t.match(stdout, /^ok 1 - .*[\\\/]only.js/m)
    t.end()
  })
})
