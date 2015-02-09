var tap = require("../")
  , fs = require("fs")
  , cp = require("child_process")
  , util = require("util")

tap.test("debug test", function (t) {
  console.error("debug test")
  t.plan(1)
  console.error("t.plan="+t._plan)

  cp.exec("../bin/tap.js --debug meta-test.js", function (err, stdo, stde) {
    console.error(util.inspect(stde))
    // node 0.10 print "debugger", 0.12 and iojs are printing "Debugger"
    t.notEqual(stde.indexOf("ebugger listening on port"), -1, "Should output debugger message")
    t.end();
  })
})
