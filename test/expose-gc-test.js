var tap = require("../")
var fs = require("fs")
var cp = require("child_process")
var path = require("path")
var dir = path.resolve(__dirname, "..")
var script = require.resolve('./fixtures/gc-script.js')
var opt = { cwd: dir }

tap.test("gc test when the gc isn't there", function (t) {
  t.plan(1)
  cp.exec("bin/run.js test/fixtures/gc-script.js", opt, function (err, stdo, stde) {
    t.equal(stde, "false\n")
  })
})

tap.test("gc test when the gc should be there", function (t) {
  t.plan(2)
  t.test("test for gc using --gc", function (t) {
    t.plan(1)

    cp.exec("bin/run.js --gc test/fixtures/gc-script.js", opt, function (err, stdo, stde) {
      t.equal(stde, "true\n")
    })
  })

  t.test("test for gc using --expose-gc", function (t) {
    t.plan(1)

    cp.exec("bin/run.js --expose-gc test/fixtures/gc-script.js", opt, function (err, stdo, stde) {
      t.equal(stde, "true\n")
    })
  })
})
