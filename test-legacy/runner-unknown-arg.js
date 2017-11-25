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

t.test('unknown arg throws', function (t) {
  // { arg: unknown }
  var cases = {
    '--wtf': '--wtf',
    '-Bcav': '-a',
    '-wtf': '-w'
  }
  Object.keys(cases).forEach(function (c) {
    t.test(c, function (t) {
      badArgTest(t, c, cases[c])
    })
  })
  t.end()

  function badArgTest (t, arg, error) {
    var expectCode = process.version.match(/^v0\.10/) ? 8 : 1
    var child = spawn(node, [run, arg])
    var err = ''
    child.stderr.on('data', function (c) {
      err += c
    })
    child.on('close', function (code, signal) {
      t.match(err, new RegExp('Error: Unknown argument: ' + error))
      t.equal(code, expectCode)
      t.equal(signal, null)
      t.end()
    })
  }
})
