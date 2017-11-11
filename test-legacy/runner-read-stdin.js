var t = require('../')
var cp = require('child_process')
var spawn = cp.spawn
var execFile = cp.execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var notok = require.resolve('./test/not-ok.js')
var colorRe = new RegExp('\u001b\\[[0-9;]+m') // eslint-disable-line
var bailRe = new RegExp('^Bail out! # this is not ok$', 'm')
var okre = new RegExp('test[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10( [0-9\.]+m?s)?$', 'm')
var notokre = new RegExp('test[\\\\/]test[/\\\\]not-ok\\.js \\.+ 0/[12]( [0-9\.]+m?s)?$', 'm')
var fs = require('fs')
var which = require('which')

t.test('read from stdin', { skip: process.platform === 'win32' && 'skip stdin test on windows' }, function (t) {
  t.jobs = 4

  function stripTime (s) {
    return s.split(ok).join('test/test/ok.js')
      .replace(/[0-9\.]+m?s/g, '{{TIME}}')
      .replace(/\n\r/g, '\n')
  }

  var opt = { buffered: true }

  var defaultExpect = ''
  t.test('generated expected output', { buffered: false }, function (t) {
    var args = [run, ok, '--reporter', 'spec']
    var child = spawn(node, args, {
      env: {
        TAP: 0,
        TAP_BAIL: 0
      }
    })
    child.stdout.on('data', function (c) {
      defaultExpect += c
    })
    child.on('close', function (code, signal) {
      defaultExpect = stripTime(defaultExpect)
      t.equal(code, 0)
      t.equal(signal, null)
      t.end()
    })
  })

  function pipeTest (t, warn, repArgs, expect) {
    var args = [run, ok]
    var err = ''
    var out = ''
    var expectError = ''
    if (warn) {
      expectError = 'Reading TAP data from stdin (use "-" argument to suppress)\n'
    }

    var repClosed = false
    var runClosed = true
    var repChild = spawn(node, repArgs, {
      env: {
        TAP: 0,
        TAP_BAIL: 0
      }
    })
    var runChild = spawn(node, args, {
      stdio: [ 0, repChild.stdin, 2 ],
      env: {
        TAP_BAIL: 0
      }
    })
    repChild.stderr.on('data', function (c) {
      err += c
    })
    repChild.stdout.on('data', function (c) {
      out += c
    })
    runChild.on('exit', function (code, signal) {
      t.equal(code, 0)
      t.equal(signal, null)
      t.notOk(repClosed)
      repChild.stdin.end()
      runClosed = true
    })
    repChild.on('close', function (code, signal) {
      repClosed = true
      t.ok(runClosed)
      t.equal(code, 0)
      t.equal(signal, null)
      t.equal(err, expectError)
      t.equal(stripTime(out), expect || defaultExpect)
      t.end()
    })
  }

  t.test('warns if - is not an arg', opt, function (t) {
    pipeTest(t, true, [run, '--reporter=spec'])
  })

  t.test('does not warn if - is present', opt, function (t) {
    pipeTest(t, false, [run, '--reporter=spec', '-'])
  })

  t.test('stdin along with files', opt, function (t) {
    var expect = '\n' +
      'test/test/ok.js\n' +
      '  nesting\n' +
      '    first\n' +
      '      ✓ true is ok\n' +
      '      ✓ doag is also okay\n' +
      '    second\n' +
      '      ✓ but that is ok\n' +
      '      ✓ this passes\n' +
      '      ✓ nested ok\n' +
      '\n' +
      '  ✓ this passes\n' +
      '  ✓ this passes too\n' +
      '  async kid\n' +
      '    ✓ timeout\n' +
      '    ✓ timeout\n' +
      '\n' +
      '  ✓ pass after async kid\n' +
      '/dev/stdin\n' +
      '  test/test/ok.js\n' +
      '    nesting\n' +
      '      first\n' +
      '        ✓ true is ok\n' +
      '        ✓ doag is also okay\n' +
      '      second\n' +
      '        ✓ but that is ok\n' +
      '        ✓ this passes\n' +
      '        ✓ nested ok\n' +
      '    ✓ this passes\n' +
      '    ✓ this passes too\n' +
      '    async kid\n' +
      '      ✓ timeout\n' +
      '      ✓ timeout\n' +
      '    ✓ pass after async kid\n' +
      '\n' +
      '\n' +
      '  20 passing ({{TIME}})\n'

    pipeTest(t, false, [run, '--reporter', 'spec', '-', ok], expect)
  })

  t.end()
})
