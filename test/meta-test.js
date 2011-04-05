var tap = require("../")
  , test = tap.test

test("meta success", { skip: false }, function (t) {
  t.once("end", section2)
  t.ok(true, "true is ok")
  t.notOk(false, "false is notOk")
  t.end()

  function section2 () {
    var results = t.results
    t.clear()
    t.ok(true, "ok")
    t.ok(results.ok, "ok")
    t.equal(results.tests, 2, "2 tests.")
    t.equal(results.passTotal, 2, "2 pass total")
    t.equal(results.fail, 0, "0 fail")
    t.type(results.ok, "boolean", "ok is boolean")
    t.type(results.skip, "number", "skip is number")
    t.type(results, "Results", "results isa Results")
    t.type(t, "Test", "test isa Test")
    t.type(t, "Harness", "test isa Harness")
    t.end()
  }
})


