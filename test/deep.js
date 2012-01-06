var tap = require("../")
  , test = tap.test

test("deepEquals shouldn't care about key order", function (t) {
  t.deepEqual({ a : 1, b : 2 }, { b : 2, a : 1 })
  t.end()
})

test("deepEquals shouldn't care about key order recursively", function (t) {
  t.deepEqual(
    { x : { a : 1, b : 2 }, y : { c : 3, d : 4 } },
    { y : { d : 4, c : 3 }, x : { b : 2, a : 1 } }
  )
  t.end()
})
