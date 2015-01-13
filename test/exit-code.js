var spawn = require('child_process').spawn
var node = process.execPath
var bin = require.resolve('../bin/tap.js')
var test = require('../').test
var path = require('path')
var fixtures = path.resolve(__dirname, 'fixtures')

test('exit code 1 when tap results show failure', function (t) {
  t.plan(3)

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
