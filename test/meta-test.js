var tap = require("../")
  , test = tap.test

test("meta success", { skip: false }, function (t) {

  // this also tests the ok/notOk functions
  t.once("end", section2)
  t.ok(true, "true is ok")
  t.ok(function () {}, "function is ok")
  t.ok({}, "object is ok")
  t.ok(t, "t is ok")
  t.ok(100, "number is ok")
  t.ok("asdf", "string is ok")
  t.notOk(false, "false is notOk")
  t.notOk(0, "0 is notOk")
  t.notOk(null, "null is notOk")
  t.notOk(undefined, "undefined is notOk")
  t.notOk(NaN, "NaN is notOk")
  t.notOk("", "empty string is notOk")
  t.end()

  function section2 () {
    var results = t.results
    t.clear()
    t.ok(true, "ok")
    t.ok(results.ok, "ok")
    t.equal(results.tests, 12, "12 tests.")
    t.equal(results.passTotal, 12, "12 pass total")
    t.equal(results.fail, 0, "0 fail")
    t.type(results.ok, "boolean", "ok is boolean")
    t.type(results.skip, "number", "skip is number")
    t.type(results, "Results", "results isa Results")
    t.type(t, "Test", "test isa Test")
    t.type(t, "Harness", "test isa Harness")
    t.end()
  }
})


