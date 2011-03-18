exports.encode = encode
//exports.decode = decode

function encode (obj, indent) {
  if (!indent) indent = "  "

  // take out the easy ones.
  switch (typeof obj) {
    case "string":
      obj = obj.trim()
      if (obj.indexOf("\n") !== -1) {
        return "|\n" + indent + obj.split(/\r?\n/).join("\n"+indent)
      } else return obj

    case "number":
      return obj.toString(10)

    case "function":
      return encode(obj.toString(), indent, true)

    case "boolean":
      return obj.toString()

    case "undefined":
      // fallthrough
    case "object":
      // at this point we know it types as an object
      if (!obj) return "~"

      if (Array.isArray(obj)) {
        return "\n" + indent + "- " +obj.map(function (item) {
          return encode(item, indent + "  ", true)
        }).join("\n"+indent + "- ")
      }

      // an actual object
      var keys = Object.keys(obj)
        , niceKeys = keys.map(function (k) {
            return (k.match(/^[a-zA-Z0-9_]+$/) ? k : JSON.stringify(k)) + ": "
          })
        , maxLength = Math.max.apply(Math, niceKeys.map(function (k) {
            return k.length
          }))
        , spaces = new Array(maxLength + 1).join(" ")

      return "\n" + indent + keys.map(function (k, i) {
        var niceKey = niceKeys[i]
        return niceKey + spaces.substr(niceKey.length)
                       + encode(obj[k], indent + "  ", true)
      }).join("\n" + indent)

    default: return ""
  }

}

//function decode (str, indent) {
//  var lines = str.split(/\r?\n/)
//  indent = indent || lines[0].match(/^\s*/)[0]
//
//  var out = {}
//  for (var i = 0, l = lines.length; i < l; i ++) {
//    // pull off the key first.
//    var line = lines[i]
//      , kv = line.split(":")
//      , key = kv.shift().trim()
//      , val = kv.join(":").trim()
//
//
//  }
