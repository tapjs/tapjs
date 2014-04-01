var execFile = require('child_process').execFile
var node = process.execPath
var bin = require.resolve('../bin/tap.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('captures test descriptions', function (t) {
  t.plan(6)

  var file = path.resolve(fixtures, 'todo-skip-descriptions.js')

  execFile(node, [bin, file], function (err, stdout, stderr) {
    t.ifError(err, 'exit cleanly')
    t.assert(/skip it good/.test(stdout), 'captures SKIP description')
    t.assert(/something/.test(stdout), 'captures TODO description')
  })

  execFile(node, [file], function (err, stdout, stderr) {
    t.ifError(err, 'exit cleanly')
    t.assert(/skip it good/.test(stdout), 'captures SKIP description')
    t.assert(/something/.test(stdout), 'captures TODO description')
  })

})
