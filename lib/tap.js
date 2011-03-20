
var yamlish = require("./yamlish")
module.exports = tap

function tap (res, count, diag) {
  if (typeof res === "string") {
    return "# "+res.split(/\r?\n/).join("\n# ")+"\n"
  }

  if (!!process.env.TAP_NODIAG) diag = false
  else if (!!process.env.TAP_DIAG) diag = true
  else if (diag === undefined) diag = !res.ok

  var output = ""
  output += ( !res.ok ? "not " : "") + "ok " + count
             + ( !res.name ? ""
               : " - " + res.name.replace(/[\r\n]/, " ") ) + "\n"

  if (!diag) return output
  var d = {}
    , dc = 0
  Object.keys(res).filter(function (k) {
    return k !== "ok" && k !== "name" && k !== "id"
  }).forEach(function (k) {
    dc ++
    d[k] = res[k]
  })
  if (dc > 0) output += "  ---"+yamlish.encode(d)+"\n  ...\n"
  return output
}

