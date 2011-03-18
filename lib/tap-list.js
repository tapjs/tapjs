module.exports = tapList

var tap = require("./tap")

function tapList (res, diag) {
  var output = []
    , count = 0

  res.forEach(function (res) {
    if (typeof res !== "string") count ++
    output.push(tap(res, count, diag))
  })

  return "\n1.." + count + "\n" + output.join("\n")
}
