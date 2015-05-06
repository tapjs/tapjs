var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var notok = require.resolve('./test/not-ok.js')
var colorRe = new RegExp('\u001b\\[[0-9;]+m')
var bailRe = new RegExp('^Bail out! # this is not ok$', 'm')
var okre = new RegExp('test[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10$', 'm')

t.test('colors', function (t) {
  function colorTest(args, env, hasColor) { return function (t) {
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
      if (hasColor)
        t.match(out, colorRe)
      else
        t.notMatch(out, colorRe)
      t.end()
    })
  }}

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
  function bailTest(args, env, bail) { return function (t) {
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
  }}

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
