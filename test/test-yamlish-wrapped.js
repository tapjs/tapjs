var tap = require("../")

tap.test("consume yaml with values wrapped onto next line", function (t) {
  t.plan(1)

  var s =
    [ "not ok 1 blip blop"
    , "  ---"
    , "    operator: oops"
    , "    expected:"
    , "      'something'"
    , "    actual:"
    , "      ['something', 'else']"
    , "    at:"
    , "      space"
    , "  ..."
    ].join("\n")
  , c = tap.createConsumer()

  c.on("data", function (res) {
    t.same(res, {
      id: 1
      , ok: false
      , name: " blip blop" // <-- should perhaps .trim() this?
      , operator: "oops"
      , expected: "'something'"
      , actual: "['something', 'else']"
      , at: "space"
    })
    t.end()
  })
  c.write(s)
  c.end()
})
