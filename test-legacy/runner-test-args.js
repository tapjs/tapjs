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

t.test('--test-args', function (t) {
  var file = require.resolve('./fixtures/dump-args.js')
  var args = [
    run,
    '--test-arg=--x=y',
    '--test-arg=-q',
    '--test-arg=x',
    file
  ]

  execFile(node, args, function (err, stdout, stderr) {
    if (err) {
      throw err
    }
    t.equal(stderr, '')
    var re = /ok 1 - .*[\/\\](node(js)?|iojs)(\.exe)? ".*[\\\/]dump-args.js" "--x=y" "-q" "x"$/im
    t.match(stdout, re)
    t.match(stdout, /^ok 1 - .*[\\\/]dump-args.js/m)
    t.end()
  })
})
