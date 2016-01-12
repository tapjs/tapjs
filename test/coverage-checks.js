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

t.test('--lines 100', function (t) {
  var args = [run, '--lines=100']
  exec(node, args, { env: {} }, function (err, stdout, stderr) {
    t.ok(err)
    t.equal(err.code, 1)
    var pattern = new RegExp(
      'ERROR: Coverage for lines \\([0-9\.]+%\\) ' +
      'does not meet global threshold \\(100%\\)'
    )
    t.match(stderr, pattern)
    var banner =
      '--------------|----------|----------|----------|' +
      '----------|----------------|\n' +
      'File          |  % Stmts | % Branch |  % Funcs |' +
      '  % Lines |Uncovered Lines |\n' +
      '--------------|----------|----------|----------|' +
      '----------|----------------|\n'
    t.match(stdout, banner)
    t.end()
  })
})

t.test('--lines 1', function (t) {
  var args = [run, '--lines=1']
  exec(node, args, { env: {} }, function (err, stdout, stderr) {
    t.notOk(err)
    var pattern = new RegExp(
      'ERROR: Coverage for lines \\([0-9\.]+%\\) ' +
      'does not meet global threshold \\(100%\\)'
    )
    t.notMatch(stderr, pattern)
    var banner =
      '--------------|----------|----------|----------|' +
      '----------|----------------|\n' +
      'File          |  % Stmts | % Branch |  % Funcs |' +
      '  % Lines |Uncovered Lines |\n' +
      '--------------|----------|----------|----------|' +
      '----------|----------------|\n'
    t.match(stdout, banner)
    t.end()
  })
})
