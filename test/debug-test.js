var tap = require("../")
  , fs = require("fs")
  , cp = require("child_process")
  , util = require("util")

process.chdir(__dirname)
tap.test("debug test", function (t) {
  t.plan(1)

  cp.exec("../bin/tap.js --debug meta-test.js", function (err, stdo, stde) {
    // node 0.10 print "debugger", 0.12 and iojs are printing "Debugger"
    t.notEqual(stde.indexOf("ebugger listening on port"), -1, "Should output debugger message")
    t.end();
  })
})
