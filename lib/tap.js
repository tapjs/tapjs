
var yamlish = require("./yamlish")
module.exports = tap

function tap (res, count, diag) {
  if (typeof res === "string") {
    return "\n# "+res.split(/\r?\n/).join("\n# ")+"\n"
  }

  var output = ""
  output += ( !res.ok ? "not " : "") + "ok " + count
             + ( !res.name ? ""
               : " - " + res.name.replace(/[\r\n]/, " ") ) + "\n"

  if (!diag) return output
  output += "  ---"+yamlish.encode(res)+"\n  ...\n"
  return output
}

