var fs = require('fs')
var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')

// fake this one in case you have some weird stuff in ~/.taprc
var path = require('path')
process.env.HOME = path.resolve(__dirname, 'fixtures')
var osHomedir = require('os-homedir')

var defaults = {
  grep: [],
  grepInvert: false,
  nodeArgs: [],
  nycArgs: [],
  testArgs: [],
  timeout: 30,
  color: false,
  reporter: 'tap',
  files: [],
  bail: false,
  saveFile: null,
  pipeToService: false,
  coverageReport: null,
  browser: true,
  coverage: false,
  checkCoverage: false,
  branches: 0,
  functions: 0,
  jobs: 1,
  lines: 0,
  statements: 0,
  rcFile: osHomedir() + '/.taprc',
  outputFile: null
}

function runTest (rcFile, expect) { return function (t) {
  var env = {
    HOME: process.env.HOME,
    TAP_TIMEOUT: 30
  }

  if (rcFile) {
    env.TAP_RCFILE = rcFile
    expect.rcFile = rcFile
  }

  var child = spawn(node, [ run, '--dump-config' ], { env: env })

  var out = ''
  child.stdout.on('data', function (c) {
    out += c
  })

  child.stderr.pipe(process.stderr)

  t.plan(3)
  child.on('close', function (code, sig) {
    t.equal(code, 0)
    t.equal(sig, null)
    Object.keys(defaults).forEach(function (k) {
      if (!expect.hasOwnProperty(k)) {
        expect[k] = defaults[k]
      }
    })

    t.strictSame(JSON.parse(out), expect)
  })
}}

t.test('parseRcFile', function (t) {
  t.test('nonexistent rc file uses defaults', runTest('./does/not/exist', {}))
  t.test('invalid rc file uses defaults',
         runTest('./test-legacy/fixtures/invalid-rc-file.yml', {}))

  t.test('parses when valid yaml',
    runTest('./test-legacy/fixtures/valid-rc-file.yml', {
      timeout: 9999,
      coverage: false,
      coverageReport: false,
      reporter: 'classic'
    }))

  t.test('uses homedir rcfile when none provided', runTest(null, {}))

  t.end()
})
