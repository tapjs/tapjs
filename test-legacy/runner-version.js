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

t.test('version', function (t) {
  var version = require('../package.json').version
  function versionTest (arg) {
    return function (t) {
      var child = spawn(node, [run].concat(arg))
      var out = ''
      child.stdout.on('data', function (o) {
        out += o
      })
      child.on('close', function (code, signal) {
        t.equal(code, 0)
        t.equal(signal, null)
        t.equal(out, version + '\n')
        t.end()
      })
    }
  }
  t.test('-v', versionTest('-v'))
  t.test('--version', versionTest('--version'))
  t.test('--version', versionTest(['--version', __filename]))
  t.end()
})
