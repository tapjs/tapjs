var cp = require('child_process')
var spawn = cp.spawn
var exec = cp.execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var t = require('../')

t.test('generate some coverage data', function (tt) {
  spawn(node, [run, ok, '--coverage', '--no-coverage-report'], {
    stdio: 'ignore'
  }).on('close', function (code, signal) {
    tt.equal(code, 0)
    tt.equal(signal, null)
    tt.end()
  })
})

var passes = [
  '--lines=1',
  '--lines=1 --check-coverage',
  '--lines 1 --statements 1 --functions 1 --branches 1'
]

var fails = [
  '--100',
  '--branches 1', // default lines is 90
  '--branches=100 --lines=0',
  '--check-coverage'
]

var failPattern = new RegExp(
  'ERROR: Coverage for (lines|branches|statements|functions) ' +
  '\\([0-9\.]+%\\) ' +
  'does not meet global threshold \\([0-9]+%\\)'
)
var banner =
  '--------------|----------|----------|----------|' +
  '----------|----------------|\n' +
  'File          |  % Stmts | % Branch |  % Funcs |' +
  '  % Lines |Uncovered Lines |\n' +
  '--------------|----------|----------|----------|' +
  '----------|----------------|\n'

t.test('fails', function (t) {
  t.plan(fails.length)
  fails.forEach(function (f) {
    var args = [run].concat(f.split(' '))
    t.test(f, function (t) {
      exec(node, args, { env: {} }, function (err, stdout, stderr) {
        t.ok(err)
        t.equal(err.code, 1)
        t.match(stderr, failPattern)
        t.match(stdout, banner)
        t.end()
      })
    })
  })
})

t.test('passes', function (t) {
  t.plan(passes.length)
  passes.forEach(function (p) {
    t.test(p, function (t) {
      var args = [run].concat(p.split(' '))
      exec(node, args, { env: {} }, function (err, stdout, stderr) {
        t.notOk(err)
        t.notMatch(stderr, failPattern)
        t.match(stdout, banner)
        t.end()
      })
    })
  })
})
