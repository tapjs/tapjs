"use strict"

var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var environments = [
  { COVERALLS_REPO_TOKEN: 'coveralls_token' },
  { CODECOV_TOKEN: 'codecov_token' }
]

var lcovRe = /TN:\nSF:.[\\\/]bin[\\\/]run.js\n/
var testRe = /COVERAGE_SERVICE_TEST/
var args = [run, ok, '--coverage']

t.test('no coverage export when no tokens in env', function (tt) {
  doTest(tt, {}, function (actual) {
    tt.notMatch(actual, testRe)
    tt.notMatch(actual, /Codecov:codecov_token\n/)
    tt.notMatch(actual, /Coveralls:coveralls_token\n/)
    tt.notMatch(lcovRe)
    tt.end()
  })
})

return

t.test('coverage to Coveralls', function (tt) {
  var env = {
    COVERALLS_REPO_TOKEN: 'coveralls_token'
  }
  doTest(tt, env, function(actual) {
    tt.match(actual, testRe)
    tt.notMatch(actual, /Codecov:codecov_token\n/)
    tt.match(actual, /Coveralls:coveralls_token\n/)
    tt.match(actual, lcovRe)
    tt.end()
  })
})

t.test('coverage to Codecov', function (tt) {
  var env = {
    CODECOV_TOKEN: 'codecov_token'
  }
  doTest(tt, env, function(actual) {
    tt.match(actual, testRe)
    tt.match(actual, /Codecov:codecov_token\n/)
    tt.notMatch(actual, /Coveralls:coveralls_token\n/)
    tt.match(actual, lcovRe)
    tt.end()
  })
})

t.test('coverage to both Codecov and Coveralls', function (tt) {
  var env = {
    COVERALLS_REPO_TOKEN: 'coveralls_token',
    CODECOV_TOKEN: 'codecov_token'
  }
  doTest(tt, env, function(actual) {
    tt.match(actual, testRe)
    tt.match(actual, /Codecov:codecov_token\n/)
    tt.match(actual, /Coveralls:coveralls_token\n/)
    tt.match(actual, lcovRe)
    tt.end()
  })
})

function doTest (tt, env, cb) {
  env.COVERAGE_SERVICE_TEST = true

  var output = ''
  var child = spawn(node, args, {
    stdio: ['ignore', 'pipe', 'ignore'],
    env: env
  })
  child.stdout.setEncoding('utf-8')
  child.stdout.on('data', function(data) {
    output += data
  })
  child.on('close', function (code, signal) {
    tt.equal(code, 0)
    tt.equal(signal, null)

    cb(output.toString().split('FN:27,parseArgs')[0])
  })
}
