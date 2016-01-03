var tap = require('../')
var cp = require('child_process')
var node = process.execPath
var run = require.resolve('../bin/run.js')
var path = require('path')
var dir = path.resolve(__dirname, '..')
var gcScript = require.resolve('./fixtures/gc-script.js')
var opt = { cwd: dir }

tap.test("gc test when the gc isn't there", function (t) {
  t.plan(1)
  var args = [run, gcScript]
  cp.execFile(node, args, opt, function (err, stdo, stde) {
    if (err) throw err
    t.equal(stde, 'false\n')
  })
})

tap.test('gc test when the gc should be there', function (t) {
  t.plan(2)
  t.test('test for gc using --gc', function (t) {
    t.plan(1)

    var args = [run, '--gc', gcScript]
    cp.execFile(node, args, opt, function (err, stdo, stde) {
      if (err) throw err
      t.equal(stde, 'true\n')
    })
  })

  t.test('test for gc using --expose-gc', function (t) {
    t.plan(1)

    var args = [run, '--expose-gc', gcScript]
    cp.execFile(node, args, opt, function (err, stdo, stde) {
      if (err) throw err
      t.equal(stde, 'true\n')
    })
  })
})
