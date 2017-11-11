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
  var options = [
    '--gc',
    '--expose-gc',
    '--node-arg=--expose_gc'
  ]

  t.plan(options.length)
  options.forEach(function (option) {
    t.test('test for gc using ' + option, function (t) {
      t.plan(1)

      var args = [run, option, gcScript]
      cp.execFile(node, args, opt, function (err, stdo, stde) {
        if (err) throw err
        t.equal(stde, 'true\n')
      })
    })
  })
})
