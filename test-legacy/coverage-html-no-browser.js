var cp = require('child_process')
var spawn = cp.spawn
var exec = cp.execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var t = require('../')

var fs = require('fs')
var mkdirp = require('mkdirp')
var rimraf = require('rimraf')

var dir = __dirname + '/coverage-html-no-browser'
var htmlfile = dir + '/coverage/lcov-report/bin/run.js.html'

t.test('setup a working dir', function (t) {
  mkdirp.sync(dir)
  t.end()
})

t.test('generate some coverage data', function (t) {
  spawn(node, [run, ok, '--coverage', '--no-coverage-report'], {
    cwd: dir,
    stdio: 'ignore'
  }).on('close', function (code, signal) {
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

t.test('generate html, but do not open in a browser', function (t) {
  spawn(node, [run, '--coverage-report=html', '--no-browser'], {
    cwd: dir,
    stdio: 'ignore'
  }).on('close', function (code, signal) {
    var output = fs.readFileSync(htmlfile, 'utf8')
    t.match(output, /^<!doctype html>/)
    t.match(output, /Code coverage report for bin[\\\/]run\.js/)
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

t.test('cleanup', function (t) {
  rimraf.sync(dir)
  t.end()
})
