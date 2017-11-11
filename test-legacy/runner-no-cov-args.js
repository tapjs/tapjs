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

t.test('--no-cov args', function (t) {
  // this is a weird test, because we want to cover the
  // --no-cov case, but still get coverage for it, so
  // we test with --no-cov --coverage so it switches back.
  var args = [
    run, ok,
    '--no-cov', '--no-coverage',
    '--cov', '--coverage'
  ]
  spawn(node, args).on('close', function (code, signal) {
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

