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
var okre = new RegExp('[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10( [0-9\.]+m?s)?$', 'm')
var notokre = new RegExp('[\\\\/]test[/\\\\]not-ok\\.js \\.+ 0/[12]( [0-9\.]+m?s)?$', 'm')
var fs = require('fs')
var which = require('which')

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
