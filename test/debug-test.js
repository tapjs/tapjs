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
    t.assert(/debugger listening on port/gi.test(stde), "Should output debugger message")
    t.end();
  })
})
