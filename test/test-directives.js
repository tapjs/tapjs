var execFile = require('child_process').execFile
var node = process.execPath
var bin = require.resolve('../bin/tap.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('captures test descriptions', function (t) {
  var useConsole = path.resolve(fixtures, 'todo-skip-descriptions.js')
  var useTap = require.resolve('./test-assert-todo-skip.js')

  t.test('raw TAP > TAP consumer > TAP producer', function(t) {
    var args = [bin, '--tap', useConsole]
    execFile(node, args, assertTapDirectives.bind(this, t))
  })

  t.test('raw TAP > TAP consumer > summary', function(t) {
    var args = [bin, '--no-tap', useConsole]
    execFile(node, args, assertDirectivesSummary.bind(this, t))
  })

  t.test('TAP producer via require("tap")', function(t) {
    var args = [useTap]
    execFile(node, args, assertTapDirectives.bind(this, t))
  })

  function assertTapDirectives(t, err, stdout, stderr) {
    t.ifError(err, 'overall result is PASS')
    t.assert(/passes # SKIP skip/i.test(stdout), 'captures ok SKIP')
    t.assert(/false # SKIP always/i.test(stdout), 'captures not ok SKIP')
    t.assert(!/skipped: \d+/.test(stdout), 'skip summary not in TAP output')
    t.assert(/bonus # TODO remove/i.test(stdout), 'captures ok TODO')
    t.assert(/expected # TODO implem/i.test(stdout), 'captures not ok TODO')
    t.assert(!/todo: \d+/.test(stdout), 'todo summary is not in TAP output')
    t.assert(!/undefined/.test(stdout), 'no ugly "undefined" in output')
    t.end()
  }

  function assertDirectivesSummary(t, err, stdout, stderr) {
    t.ifError(err, 'overall result is PASS')
    t.assert(!/# SKIP/i.test(stdout), 'no SKIP in summary')
    t.assert(/skipped: 2/.test(stdout), 'skip summary is not in TAP output')
    t.assert(!/# TODO/i.test(stdout), 'no TODO in summary')
    t.assert(/todo: 2/.test(stdout), 'todo summary is not in TAP output')
    t.assert(!/undefined/.test(stdout), 'no ugly "undefined" in output')
    t.end()
  }
})
