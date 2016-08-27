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

t.test('handle EPIPE gracefully', function (t) {
  if (process.platform === 'win32') {
    t.plan(0, 'signals on windows are weird')
    return
  }

  t.comment('start epipe test')
  var nodeHead = [
    'var lines = 0',
    'process.stdin.on("data", function (c) {',
    '  c = c.toString()',
    '  lines += c.split("\\n").length - 1',
    '  if (lines > 5) {',
    '    process.exit()',
    '  }',
    '})'
  ].join('\n')
  var head = spawn(node, ['-e', nodeHead], {
    stdio: [ 'pipe', 'pipe', 2 ]
  })
  head.stdout.on('data', function (c) {
    t.comment('got output from head bin: %j', c.toString())
  })
  t.comment('start child')
  var child = spawn(node, [run, ok], {
    stdio: [ 0, 'pipe', 'pipe' ]
  })
  child.stdout.pipe(head.stdin)
  var err = ''
  child.stderr.on('data', function (c) {
    console.error('got er data', c+'')
    err += c
  })
  child.on('close', function (code, signal) {
    t.equal(err, '', 'should not spew errors')
    head.kill('SIGKILL')
    t.end()
  })
})
