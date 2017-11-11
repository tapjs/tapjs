var t = require('../')
var cp = require('child_process')
var spawn = cp.spawn
var execFile = cp.execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var notok = require.resolve('./test/not-ok.js')
var colorRe = new RegExp('\u001b\\[[0-9;]+m') // eslint-disable-line
var bailRe = new RegExp('^Bail out! # this is not ok$', 'm')
var okre = new RegExp('test[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10( [0-9\.]+m?s)?$', 'm')
var notokre = new RegExp('test[\\\\/]test[/\\\\]not-ok\\.js \\.+ 0/[12]( [0-9\.]+m?s)?$', 'm')
var fs = require('fs')
var which = require('which')

t.test('non-zero exit is reported as failure', function (t) {
  var file = require.resolve('./test/ok-exit-fail.js')
  var args = [run, file, '-Rclassic']
  var child = spawn(node, args, { env: { TAP: 0 } })
  var out = ''
  child.stdout.on('data', function (c) {
    out += c
  })
  child.on('close', function (code, signal) {
    t.equal(code, 1)
    t.equal(signal, null)
    t.match(out, '  not ok ' + file)
    t.match(out, /\n+\s+exitCode: 1\n/)
    t.end()
  })
})

