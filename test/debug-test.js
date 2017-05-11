var t = require('../')
var cp = require('child_process')
var main = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var node = process.execPath

if (!process.version.match(/^v[046]\./))
  return t.plan(0, '--debug flag removed in node 8')

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
