var t = require('../')
var execFile = require('child_process').execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')

t.test('--only flag', function (t) {
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

t.test('{only: true} without --only flag', function (t) {
  var file = require.resolve('./fixtures/only.js')
  var args = [
    run,
    file
  ]

  execFile(node, args, function (err, stdout, stderr) {
    if (err) {
      throw err
    }

    t.equal(stderr.trim(), '# Warning: "only" has {only: true} set but all tests are run')

    t.match(stdout, /^ok 1 - .*[\\\/]only.js/m)
    t.end()
  })
})
