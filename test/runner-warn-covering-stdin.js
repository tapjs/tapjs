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

t.test('warns when trying to cover stdin', function (t) {
  var args = [run, '-', '--coverage']
  var out = ''
  var err = ''
  var expect = 'Coverage disabled because stdin cannot be instrumented\n'
  var child = spawn(node, args)
  child.stdout.on('data', function (c) {
    out += c
  })
  child.stderr.on('data', function (c) {
    err += c
  })
  child.on('close', function (code, signal) {
    t.equal(err, expect)
    t.end()
  })
  child.stdin.end()
})

