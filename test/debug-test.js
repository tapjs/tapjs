var t = require('../')
var cp = require('child_process')
var main = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var node = process.execPath

t.plan(1)
var child = cp.spawn(node, [main, '--debug', ok])
var stde = ''
var done = false
child.stderr.on('data', function (c) {
  stde += c
})
child.stderr.on('end', function () {
  t.match(stde, /debugger listening on/i, 'got debugger message')
})
