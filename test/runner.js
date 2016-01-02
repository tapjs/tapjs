var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var notok = require.resolve('./test/not-ok.js')
var colorRe = new RegExp('\u001b\\[[0-9;]+m') // eslint-disable-line
var bailRe = new RegExp('^Bail out! # this is not ok$', 'm')
var okre = new RegExp('test[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10( [0-9\.]+m?s)?$', 'm')
var notokre = new RegExp('test[\\\\/]test[/\\\\]not-ok\\.js \\.+ 0/1( [0-9\.]+m?s)?$', 'm')
var fs = require('fs')
var which = require('which')

t.test('usage', function (t) {
  function usageTest (t, child, c) {
    var out = ''
    var std = c === 0 ? 'stdout' : 'stderr'
    child[std].on('data', function (o) {
      out += o
    })
    child.on('close', function (code) {
      t.equal(code, c, 'code should be ' + c)
      t.match(out, /^Usage:\r?\n/, 'should print usage')
      t.end()
    })
  }

  var stdin = 0
  if (!process.stdin.isTTY) {
    try {
      stdin = fs.openSync('/dev/tty', 'r')
    } catch (er) {
      stdin = null
    }
  }
  var opt = { skip: stdin === null ? 'could not load tty' : false }
  t.test('shows usage when stdin is a tty', opt, function (t) {
    var child = spawn(node, [run], { stdio: [ stdin, 'pipe', 'pipe' ] })
    usageTest(t, child, 1)
  })

  t.test('shows usage with -h (even with file)', function (t) {
    var child = spawn(node, [run, '-h', __filename])
    usageTest(t, child, 0)
  })

  t.test('shows usage with --help (even with file)', function (t) {
    var child = spawn(node, [run, '--help', __filename])
    usageTest(t, child, 0)
  })

  t.end()
})

t.test('colors', function (t) {
  function colorTest (args, env, hasColor) {
    return function (t) {
      var out = ''
      env = env || {}
      env.TAP = 0
      args = [run, ok].concat(args || [])
      var child = spawn(node, args, { env: env })
      child.stdout.on('data', function (o) {
        out += o
      })
      child.on('close', function (code) {
        t.equal(code, 0, 'code should be 0')
        if (hasColor) {
          t.match(out, colorRe)
        } else {
          t.notMatch(out, colorRe)
        }
        t.end()
      })
    }
  }

  t.test('no colors by default for non-TTY',
    colorTest([], {}, false))

  t.test('force colors with -c or --color', function (t) {
    ;[ '-c', '--color' ].forEach(function (c) {
      t.test(c, colorTest([c], {}, true))
    })
    t.end()
  })

  t.test('force no colors with -C or --no-color', function (t) {
    ;[ '-C', '--no-color' ].forEach(function (c) {
      t.test(c, colorTest([c], {}, false))
    })
    t.end()
  })

  t.test('env.TAP_COLORS', function (t) {
    t.test('0', colorTest([], { TAP_COLORS: 0 }, false))
    t.test('1', colorTest([], { TAP_COLORS: 1 }, true))
    t.end()
  })

  t.end()
})

t.test('bailout args', function (t) {
  function bailTest (args, env, bail) {
    return function (t) {
      var out = ''
      env = env || {}
      env.TAP = 0
      env.TAP_COLORS = 0
      args = [run, notok, ok, '-C', '-Rclassic'].concat(args || [])
      var child = spawn(node, args, { env: env })
      child.stdout.on('data', function (o) {
        out += o
      })
      child.on('close', function (code) {
        t.equal(code, 1, 'code should be 1')
        if (bail) {
          t.match(out, bailRe, 'should show bail out')
          t.notMatch(out, okre, 'should not run second test')
        } else {
          t.notMatch(out, bailRe, 'should not bail out')
          t.match(out, okre, 'should run second test')
        }
        t.end()
      })
    }
  }

  t.test('force bailout with -b or --bail', function (t) {
    t.test('-b', bailTest(['-b'], {}, true))
    t.test('-Bb', bailTest(['-Bb'], {}, true))
    t.test('--bail', bailTest(['--bail'], {}, true))
    t.test('--no-bail --bail', bailTest(['--no-bail', '--bail'], {}, true))
    t.test('TAP_BAIL=1', bailTest([], { TAP_BAIL: 1 }, true))
    t.end()
  })

  t.test('do not bail out with -B or --no-bail', function (t) {
    t.test('-B', bailTest(['-B'], {}, false))
    t.test('-bB', bailTest(['-bB'], {}, false))
    t.test('--no-bail', bailTest(['--no-bail'], {}, false))
    t.test('--bail --no-bail', bailTest(['--bail', '--no-bail'], {}, false))
    t.test('TAP_BAIL=0', bailTest([], { TAP_BAIL: 0 }, false))
    t.end()
  })

  t.end()
})

t.test('path globbing', function (t) {
  var glob = 'fixtures/*-success.js'
  var opt = { env: { TAP: 1 }, cwd: __dirname }
  var child = spawn(node, [run, glob], opt)
  var out = ''
  child.stdout.on('data', function (c) {
    out += c
  })
  child.on('close', function (code) {
    t.equal(code, 0, 'exits successfully')
    t.match(out, /trivial-success.js/g, 'includes a matched file')
    t.end()
  })
})

t.test('save-file', function (t) {
  var saveFile = 'runner-save-test-' + process.pid
  var n = 0
  function saveFileTest (cb) {
    var args = [run, '-s' + saveFile, ok, notok, '-CRclassic']
    // also test the expanded versions for added coverage
    if (++n === 1) {
      args = [
        run, '--save', saveFile,
        ok, notok, '-C', '--reporter', 'classic'
      ]
    }

    var child = spawn(node, args, { env: { TAP: 0 }, stdio: [0, 'pipe', 2] })
    var out = ''
    child.stdout.on('data', function (c) {
      out += c
    })
    child.on('close', function (code) {
      cb(code, out)
    })
  }

  t.test('run with "ok.js" in save file', function (t) {
    fs.writeFileSync(saveFile, ok + '\n')
    saveFileTest(function (code, out) {
      t.equal(code, 0, 'should exit successfully')
      t.match(out, okre, 'should run ok.js test')
      t.notMatch(out, notokre, 'should not run not-ok.js test')
      t.throws(function () {
        fs.statSync(saveFile)
      }, 'should delete save file')
      t.end()
    })
  })

  t.test('run with empty save file', function (t) {
    saveFileTest(function (code, out) {
      t.equal(code, 1, 'should fail test')
      t.match(out, okre, 'should run ok.js test')
      t.match(out, notokre, 'should run not-ok.js test')
      t.equal(fs.readFileSync(saveFile, 'utf8'), notok + '\n',
        'should save not-ok.js')
      t.end()
    })
  })

  t.test('run with "not-ok.js" in save file', function (t) {
    saveFileTest(function (code, out) {
      t.equal(code, 1, 'should fail test')
      t.notMatch(out, okre, 'should not run ok.js test')
      t.match(out, notokre, 'should run not-ok.js test')
      t.equal(fs.readFileSync(saveFile, 'utf8'), notok + '\n',
        'should save not-ok.js')
      t.end()
    })
  })

  t.test('cleanup', function (t) {
    fs.unlinkSync(saveFile)
    t.end()
  })

  t.end()
})

t.test('version', function (t) {
  var version = require('../package.json').version
  function versionTest (arg) {
    return function (t) {
      var child = spawn(node, [run].concat(arg))
      var out = ''
      child.stdout.on('data', function (o) {
        out += o
      })
      child.on('close', function (code, signal) {
        t.equal(code, 0)
        t.equal(signal, null)
        t.equal(out, version + '\n')
        t.end()
      })
    }
  }
  t.test('-v', versionTest('-v'))
  t.test('--version', versionTest('--version'))
  t.test('--version', versionTest(['--version', __filename]))
  t.end()
})

;(function () {
  try {
    var headBin = which.sync('head')
  } catch (er) {}

  var skip = false
  if (!headBin) {
    skip = 'head program not available'
  } else if (process.platform === 'win32') {
    skip = 'signals on windows are weird'
  }

  t.test('handle EPIPE gracefully', { skip: skip }, function (t) {
    var head = spawn(headBin, ['-5'])
    var child = spawn(node, [run, ok], {
      stdio: [ 0, head.stdin, 'pipe' ]
    })
    var err = ''
    child.stderr.on('data', function (c) {
      err += c
    })
    child.on('close', function (code, signal) {
      t.equal(err, '', 'should not spew errors')
      t.end()
    })
  })
})()

t.test('--no-cov args', function (t) {
  // this is a weird test, because we want to cover the
  // --no-cov case, but still get coverage for it, so
  // we test with --no-cov --coverage so it switches back.
  var args = [
    run, ok,
    '--no-cov', '--no-coverage',
    '--cov', '--coverage'
  ]
  spawn(node, args).on('close', function (code, signal) {
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

t.test('unknown arg throws', function (t) {
  // { arg: unknown }
  var cases = {
    '--wtf': '--wtf',
    '-Bcav': '-a',
    '-wtf': '-w'
  }
  Object.keys(cases).forEach(function (c) {
    t.test(c, function (t) {
      badArgTest(t, c, cases[c])
    })
  })
  t.end()

  function badArgTest (t, arg, error) {
    var expectCode = process.version.match(/^v0\.10/) ? 8 : 1
    var child = spawn(node, [run, arg])
    var err = ''
    child.stderr.on('data', function (c) {
      err += c
    })
    child.on('close', function (code, signal) {
      t.match(err, new RegExp('Error: Unknown argument: ' + error))
      t.equal(code, expectCode)
      t.equal(signal, null)
      t.end()
    })
  }
})

t.test('read from stdin', { skip: process.platform === 'win32' && 'skip stdin test on windows' }, function (t) {
  function stripTime (s) {
    return s.split(ok).join('test/test/ok.js')
      .replace(/[0-9\.]+m?s/g, '{{TIME}}')
      .replace(/\n\r/g, '\n')
  }

  var expect = ''
  t.test('generated expected output', function (t) {
    var args = [run, ok, '--reporter', 'spec']
    var child = spawn(node, args, {
      env: {
        TAP: 0,
        TAP_BAIL: 0
      }
    })
    child.stdout.on('data', function (c) {
      expect += c
    })
    child.on('close', function (code, signal) {
      expect = stripTime(expect)
      t.equal(code, 0)
      t.equal(signal, null)
      t.end()
    })
  })

  function pipeTest (t, warn, repArgs) {
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
      t.equal(stripTime(out), expect)
      t.end()
    })
  }

  t.test('warns if - is not an arg', function (t) {
    pipeTest(t, true, [run, '--reporter=spec'])
  })

  t.test('does not warn if - is present', function (t) {
    pipeTest(t, false, [run, '--reporter=spec', '-'])
  })

  t.test('stdin along with files', function (t) {
    expect = '\n' +
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

    pipeTest(t, false, [run, '--reporter', 'spec', '-', ok])
  })
  t.end()
})

t.test('separate filename args with --', function (t) {
  var args = [ run, '--', '-xyz', ok ]
  var child = spawn(node, args)
  child.on('close', function (code, signal) {
    t.equal(code, 0)
    t.equal(signal, null)
    t.end()
  })
})

t.test('-t or --timeout to set timeout', function (t) {
  var nf = require.resolve('./fixtures/never-finish.js')
  var args = [run, nf]
  var dur = '.2'
  if (global.__coverage__) {
    dur = '.9'
  }
  var timers = [
    '-t' + dur,
    ['-t', '0' + dur],
    '-t=' + dur,
    '--timeout=' + dur,
    ['--timeout', dur]
  ]
  timers.forEach(function (timer) {
    t.test([].concat(timer).join(' '), function (t) {
      var child = spawn(node, args.concat(timer))
      var out = ''
      child.stdout.on('data', function (c) {
        out += c
      })
      child.on('close', function (code, signal) {
        var skip = process.platform === 'win32' && 'SIGTERM on windows is weird'
        t.equal(code, 1)
        t.equal(signal, null)
        t.match(
          out,
          /received SIGTERM with pending event queue activity/,
          { skip: skip }
        )
        t.end()
      })
    })
  })
  t.end()
})

t.test('non-zero exit is reported as failure', function (t) {
  var file = require.resolve('./test/ok-exit-fail.js')
  var args = [run, file, '-Rclassic']
  var child = spawn(node, args, { env: { TAP: 0 } })
  var out = ''
  child.stdout.on('data', function (c) {
    out += c
  })
  child.on('close', function (code, signal) {
    t.equal(code, 1)
    t.equal(signal, null)
    t.match(out, '  not ok ' + file)
    t.match(out, /\n+\s+exitCode: 1\n/)
    t.end()
  })
})
