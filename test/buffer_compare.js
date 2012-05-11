var test = require("../").test

test("compare two buffers", function (t) {
  t.same(new Buffer([3,4,243]), new Buffer([3,4,243]))
  t.end()
})
