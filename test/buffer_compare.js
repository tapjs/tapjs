var test = require("../").test

test("similar buffers", function (t) {
  t.similar(new Buffer([3,4,243]), new Buffer([3,4,243]))
  t.end()
})

test("dissimilar buffers", function (t) {
  t.dissimilar(new Buffer([3,5,243]), new Buffer([3,4,243]))
  t.end()
})
