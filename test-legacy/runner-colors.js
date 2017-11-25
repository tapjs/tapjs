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
