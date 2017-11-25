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

t.test('--nyc stuff', function (t) {
  t.test('--nyc-version', function (t) {
    var expect = require('nyc/package.json').version + '\n'
    execFile(node, [run, '--nyc-version'], function (err, stdout, stderr) {
      if (err) {
        throw err
      }
      t.equal(stderr, '')
      t.equal(stdout, expect)
      t.end()
    })
  })

  t.test('--nyc-help', function (t) {
    execFile(node, [run, '--nyc-help'], function (err, stdout, stderr) {
      if (err) {
        throw err
      }
      t.equal(stderr, '')
      t.match(stdout, /check-coverage/)
      t.end()
    })
  })

  t.end()
})

