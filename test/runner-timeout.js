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

t.test('-t or --timeout to set timeout', function (t) {
  var nf = require.resolve('./fixtures/never-finish.js')
  var args = [run, nf]
  var dur = '.2'
  if (global.__coverage__) {
    dur = '.9'
  }
  var timers = [
    '-t' + dur,
    ['-t', '0' + dur],
    '-t=' + dur,
    '--timeout=' + dur,
    ['--timeout', dur]
  ]
  timers.forEach(function (timer) {
    t.test([].concat(timer).join(' '), function (t) {
      var child = spawn(node, args.concat(timer))
      var out = ''
      child.stdout.on('data', function (c) {
        out += c
      })
      child.on('close', function (code, signal) {
        var skip =
          process.platform === 'win32' ? 'SIGTERM on windows is weird'
        : process.version.match(/^v0\.10\./) ? 'v0.10 reports signals wrong'
        : false
        t.equal(code, 1)
        t.equal(signal, null)
        t.match(
          out,
          /signal: SIG(TERM|KILL)/,
          { skip: skip }
        )
        t.end()
      })
    })
  })
  t.end()
})

