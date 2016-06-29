'use strict'

var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var testRe = /COVERAGE_SERVICE_TEST/

t.test('generate some coverage data', function (tt) {
  spawn(node, [run, ok, '--coverage'], {
    stdio: 'ignore'
  }).on('close', function (code, signal) {
    tt.equal(code, 0)
    tt.equal(signal, null)
    tt.end()
  })
})

t.test('no coverage export when no tokens in env', function (tt) {
  doTest(tt, {}, function (actual) {
    tt.notMatch(actual, /Coveralls:coveralls_token\n/)
    tt.end()
  })
})

t.test('coverage to Coveralls', function (tt) {
  var env = {
    COVERALLS_REPO_TOKEN: 'coveralls_token'
  }
  doTest(tt, env, function (actual) {
    tt.match(actual, /Coveralls:coveralls_token\n/)
    tt.end()
  })
})

function doTest (tt, env, cb) {
  var args = [ run, '--no-coverage', '--coverage-report=text-lcov' ]
  env.COVERAGE_SERVICE_TEST = 'true'
  var output = ''
  var child = spawn(node, args, {
    stdio: [0, 'pipe', 2],
    env: env
  })
  child.stdout.setEncoding('utf-8')
  child.stdout.on('data', function (data) {
    output += data
  })
  child.on('close', function (code, signal) {
    tt.equal(code, 0)
    tt.equal(signal, null)
    tt.match(output, testRe)
    cb(output.toString().split('FN:27,parseArgs')[0])
  })
}
