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

t.test('usage', function (t) {
  function usageTest (t, child, c) {
    var out = ''
    var std = c === 0 ? 'stdout' : 'stderr'
    child[std].on('data', function (o) {
      out += o
    })
    child.on('close', function (code) {
      t.equal(code, c, 'code should be ' + c)
      t.match(out, /^Usage:\r?\n/, 'should print usage')
      t.end()
    })
  }

  var stdin = 0
  if (!process.stdin.isTTY) {
    try {
      stdin = fs.openSync('/dev/tty', 'r')
    } catch (er) {
      stdin = null
    }
  }
  var opt = { skip: stdin === null ? 'could not load tty' : false }
  t.test('shows usage when stdin is a tty', opt, function (t) {
    var child = spawn(node, [run], { stdio: [ stdin, 'pipe', 'pipe' ] })
    usageTest(t, child, 1)
  })

  t.test('shows usage with -h (even with file)', function (t) {
    var child = spawn(node, [run, '-h', __filename])
    usageTest(t, child, 0)
  })

  t.test('shows usage with --help (even with file)', function (t) {
    var child = spawn(node, [run, '--help', __filename])
    usageTest(t, child, 0)
  })

  t.end()
})
