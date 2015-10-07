var spawn = require('child_process').spawn
var node = process.execPath
var bin = require.resolve('../bin/run.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('exit code 1 when tap results show failure', function (t) {
  t.plan(4)

  t.test('test exits 0, has failures', function (t) {
    t.plan(2)
    var file = path.resolve(fixtures, 'fail-zero-exit.js')
    spawn(node, [bin, file]).on('exit', function (code) {
      t.equal(code, 1)
    })
    spawn(node, [file]).on('exit', function (code) {
      t.equal(code, 0)
    })
  })

  t.test('test exits 1, has failures', function (t) {
    t.plan(2)
    var file = path.resolve(fixtures, 'fail-correct-exit.js')
    spawn(node, [bin, file]).on('exit', function (code) {
      t.equal(code, 1)
    })
    spawn(node, [file]).on('exit', function (code) {
      t.equal(code, 1)
    })
  })

  t.test('test exits 1, has no failures', function (t) {
    t.plan(2)
    var file = path.resolve(fixtures, 'fail-exit.js')
    spawn(node, [bin, file]).on('exit', function (code) {
      t.equal(code, 1)
    })
    spawn(node, [file]).on('exit', function (code) {
      t.equal(code, 1)
    })
  })

  t.test('test sets custom exit code (2) in process#exit handler', function (t) {
    if (!/^v(0\.12|[1-9])/.test(process.version)) {
      t.comment('Skip on node 0.x because process.exitCode isn\'t supported')
      return t.end()
    }

    t.plan(1)
    var file = path.resolve(fixtures, 'fail-custom-exit-code.js')
    spawn(node, [file]).on('exit', function (code) {
      // The exit code is just a proxy for the fact that the process.on('exit')
      // handler was executed.
      t.equal(code, 2, 'executes the exit handler')
    })
  })
})

test('successes exit 0', function (t) {
  t.plan(2)

  t.test('test that does nothing, but exits 0', function (t) {
    t.plan(2)
    var file = path.resolve(fixtures, 'trivial-success.js')
    spawn(node, [bin, file]).on('exit', function (code) {
      t.equal(code, 0)
    })
    spawn(node, [file]).on('exit', function (code) {
      t.equal(code, 0)
    })
  })

  t.test('test that succeeds, and exits 0', function (t) {
    t.plan(2)
    var file = path.resolve(fixtures, 'success.js')
    spawn(node, [bin, file]).on('exit', function (code) {
      t.equal(code, 0)
    })
    spawn(node, [file]).on('exit', function (code) {
      t.equal(code, 0)
    })
  })
})
