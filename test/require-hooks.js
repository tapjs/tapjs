var execFile = require('child_process').execFile
var node = process.execPath
var bin = require.resolve('../bin/run.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('compile-to-js require hook', function (t) {
  t.plan(1)

  t.test('failing test with unmatched stack-trace', function (t) {
    t.plan(6)

    function verifyOutput(err, stdout, stderr) {
      t.ok(!!err, 'Should have failed to run')
      t.ok(stdout.indexOf('file: test/fixtures/using-require-hook.faux') !== -1,
        'error happened in the *.faux file')
      t.ok(stdout.indexOf('source:') === -1,
        'omits the source because the line cannot be resolved')
    }

    var file = path.resolve(fixtures, 'using-require-hook.js')
    execFile(node, [bin, file], verifyOutput)
    execFile(node, [file], verifyOutput)
  })
})
