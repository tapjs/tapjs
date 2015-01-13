var tap = require("../")

tap.test("trap result", function (t0) {

  var t1 = new(tap.Harness)(tap.Test).test()

  var emitted = false
  t1.on("result", function (res) {
    if (!emitted) {
      emitted = true
      t0.equal(res.found, 3)
      t0.equal(res.wanted, 4)

      t0.end()
      t1.end()
    }
  })

  t1.equal(1 + 2, 4)
})
