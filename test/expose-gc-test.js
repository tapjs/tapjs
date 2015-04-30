var tap = require("../")
var fs = require("fs")
var cp = require("child_process")
var path = require("path")
var dir = path.resolve(__dirname, "..")
var script = path.resolve(dir, "gc-script.js")
var opt = { cwd: dir }

fs.writeFileSync(script, "console.error(!!global.gc)", "utf8")

tap.test("gc test when the gc isn't there", function (t) {
  t.plan(1)
  cp.exec("bin/run.js ./gc-script.js", opt, function (err, stdo, stde) {
    t.equal(stde, "false\n")
  })
})

tap.test("gc test when the gc should be there", function (t) {
  t.plan(2)
  t.test("test for gc using --gc", function (t) {
    t.plan(1)

    cp.exec("bin/run.js --gc ./gc-script.js", opt, function (err, stdo, stde) {
      t.equal(stde, "true\n")
    })
  })

  t.test("test for gc using --expose-gc", function (t) {
    t.plan(1)

    cp.exec("bin/run.js --expose-gc ./gc-script.js", opt, function (err, stdo, stde) {
      t.equal(stde, "true\n")
    })
  })
})

tap.test("cleanup", function (t) {
  fs.unlinkSync(script)
  t.end()
});
