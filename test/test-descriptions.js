var execFile = require('child_process').execFile
var node = process.execPath
var bin = require.resolve('../bin/tap.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('captures test descriptions', function (t) {
  t.plan(13)

  var file = path.resolve(fixtures, 'todo-skip-descriptions.js')

  execFile(node, [bin, file], function (err, stdout, stderr) {
    t.ifError(err, 'exit cleanly')
    t.assert(/skip it good/.test(stdout), 'captures SKIP description')
    t.assert(!/skipped: 1/.test(stdout), 'skip summary is not in TAP output')
    t.assert(!/todo: 1/.test(stdout), 'todo summary is not in TAP output')
    t.assert(/something/.test(stdout), 'captures TODO description')
  })

  execFile(node, [bin, '--no-tap', '--no-diag', file], function (err, stdout, stderr) {
    t.ifError(err, 'exit cleanly')
    t.assert(/ +skipped: 1/.test(stdout), 'summarizes skipped count')
    t.assert(/ +todo: 1/.test(stdout), 'summarizes todo count')
  })

  execFile(node, [file], function (err, stdout, stderr) {
    t.ifError(err, 'exit cleanly')
    t.assert(/skip it good/.test(stdout), 'captures SKIP description')
    t.assert(!/skipped: 1/.test(stdout), 'skip summary is not from file')
    t.assert(!/todo: 1/.test(stdout), 'todo summary is not from file')
    t.assert(/something/.test(stdout), 'captures TODO description')
  })

})
