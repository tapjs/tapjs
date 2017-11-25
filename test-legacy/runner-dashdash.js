var t = require('../')
var cp = require('child_process')
var spawn = cp.spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')

t.test('separate filename args with --', function (t) {
  var args = [ run, '--', '-xyz', ok ]
  var child = spawn(node, args)
  child.on('close', function (code, signal) {
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

