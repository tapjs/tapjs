var t = require('../')
var fs = require('fs')
var cp = require('child_process')
var util = require('util')
var main = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var node = process.execPath
var fs = require('fs')

t.plan(1)
var child = cp.spawn(node, [main, '--debug', ok])
var stde = ''
var done = false
child.stderr.on('data', function (c) {
  stde += c
  if (stde.indexOf('ebugger listening on port') !== -1) {
    t.pass('Should output debugger message')
    done = true
    child.kill()
  }
})
child.stderr.on('end', function () {
  if (!done)
    throw new Error('did not find debugger message')
})
