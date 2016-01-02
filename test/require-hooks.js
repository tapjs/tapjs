var bin = require.resolve('../bin/run.js')
var execFile = require('child_process').execFile
var path = require('path')
var test = require('../').test

var fixtures = path.resolve(__dirname, 'fixtures')
var node = process.execPath

test('compile-to-js require hook', function (t) {
  t.plan(1)

  t.test('failing test with unmatched stack-trace', function (t) {
    t.plan(6)

    function verifyOutput (err, stdout, stderr) {
      t.ok(!!err, 'Should have failed to run')
      t.match(stdout, /file: .*[\\\/]using-require-hook\.faux/,
        'error happened in the *.faux file')
      t.notMatch(stdout, 'source:',
        'omits the source because the line cannot be resolved')
    }

    var file = path.resolve(fixtures, 'using-require-hook.js')
    execFile(node, [bin, file], verifyOutput)
    execFile(node, [file], verifyOutput)
  })
})
