var tap = require("../")
  , test = tap.test

test("deepEquals shouldn't care about key order", function (t) {
  t.deepEqual({ a : 1, b : 2 }, { b : 2, a : 1 })
  t.end()
})
