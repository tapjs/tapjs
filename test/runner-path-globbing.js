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

t.test('path globbing', function (t) {
  var glob = 'fixtures/*-success.js'
  var opt = { env: { TAP: 1 }, cwd: __dirname }
  var child = spawn(node, [run, glob], opt)
  var out = ''
  child.stdout.on('data', function (c) {
    out += c
  })
  child.on('close', function (code) {
    t.equal(code, 0, 'exits successfully')
    t.match(out, /trivial-success.js/g, 'includes a matched file')
    t.end()
  })
})
