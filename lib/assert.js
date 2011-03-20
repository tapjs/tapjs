// an assert module that outputs tap data for each assertion.

module.exports = assert

var tap = require("./tap")
  , id = 0

function assert (ok, message, extra) {
  // get the first file/line that isn't this file.
  var stack = new Error().stack
  stack = stack.split(/\n/)
  for (var i = 1, l = stack.length; i < l; i ++) {
    var s = stack[i].match(/\(([^):]+):([0-9]+):([0-9]+)\)$/)
    if (!s) continue
    var file = s[1]
      , line = s[2]
      , col = s[3]
    if (file === __filename) continue
    else break
  }

  var res = { id : id ++ }
  if (file && file !== __filename) {
    res.file = file
    res.line = line
    res.column = col
  }

  res.stack = stack.slice(s)

  res.ok = ok

  res.name = message || "(unnamed assert)"

  if (extra) Object.keys(extra).forEach(function (k) {
    if (!res.hasOwnProperty(k)) res[k] = extra[k]
  })

  // strings and objects are hard to diff by eye
  if (!ok &&
      res.hasOwnProperty("found") &&
      res.hasOwnProperty("wanted") &&
      res.found !== res.wanted) {
    if (typeof res.wanted !== typeof res.found ||
        typeof res.wanted === "object" && (!res.found || !res.wanted)) {
      res.type = { found: typeof found
                 , wanted: typeof wanted }
    } else if (typeof res.wanted === "string") {
      res.diff = diffString(res.found, res.wanted)
    } else if (typeof res.wanted === "object") {
      res.diff = diffObject(res.found, res.wanted)
    }
  }

  console.log(tap(res))
}
assert.ok = assert


function notOk (ok, message, extra) {
  return assert(!ok, message, extra)
}
assert.notOk = notOk


function fail (message, extra) {
  return assert(false, message, extra)
}
assert.fail = fail


function throws (fn, wanted, message, extra) {
  if (typeof expected === "string") {
    extra = message
    message = wanted
    wanted = null
  }

  var found = null
  try {
    fn()
  } catch (e) {
    found = { name: e.name, message: e.message }
  }

  extra = extra || {}

  extra.found = found
  if (wanted) {
    wanted = { name: wanted.name, message: wanted.message }
    extra.wanted = wanted
  }

  if (!message) {
    message = "Expected to throw"
    if (wanted) message += ": "+wanted.name + " " + wanted.message
  }

  if (wanted) assert.equal(found, wanted, message, extra)
  else assert.ok(found, message, extra)
}
assert.throws = throws


function doesNotThrow (fn, message, extra) {
  var found = null
  try {
    fn()
  } catch (e) {
    found = {name: e.name, message: e.message}
  }
  message = message || "Should not throw"

  assert.equal(found, null, message, extra)
}
assert.doesNotThrow = assert.doesntThrow = doesNotThrow


function equal (a, b, message, extra) {
  extra = extra || {}
  message = message || "should be equal"
  extra.found = a
  extra.wanted = b
  return assert(a === b, message, extra)
}
assert.equal = assert.equals = assert.isEqual = equal


function equivalent (a, b, message, extra) {
  var extra = extra || {}
  message = message || "should be equivalent"
  extra.found = a
  extra.wanted = b
  return assert(stringify(a) === stringify(b), message, extra)
}
assert.equivalent = assert.isEquivalent = equivalent


function inequal (a, b, message, extra) {
  extra = extra || {}
  message = message || "should not be equal"
  extra.found = a
  extra.doNotWant = b
  return assert(a !== b, message, extra)
}
assert.inequal = assert.notEqual = assert.notEquals =
  assert.isNotEqual = assert.doesNotEqual = assert.isInequal = inequal


function inequivalent (a, b, message, extra) {
  extra = extra || {}
  message = message || "should not be equal"
  extra.found = a
  extra.doNotWant = b
  return assert(stringify(a) !== stringify(b), message, extra)
}
assert.inequivalent = assert.notEquivalent =
  assert.isNotEquivalent = assert.isInequivalent = inequivalent


// helpers below

function stringify (a) {
  return JSON.stringify(a, (function () {
    var seen = []
      , keys = []
    return function (key, val) {
      console.error([key, val])
      var s = seen.indexOf(val)
      if (s !== -1) {
        return "[Circular: "+keys[s]+"]"
      }
      if (val && typeof val === "object" || typeof val === "function") {
        seen.push(val)
        keys.push(val["!"] || val.name || key || "<root>")
        if (typeof val === "function") {
          return val.toString().split(/\n/)[0]
        }
        var proto = Object.getPrototypeOf(val)
        if (proto && proto !== Object.prototype &&
            !Array.isArray(val) &&
            proto.constructor && proto.constructor.name) {
          val.constructor = proto.constructor
        }
      }
      return val
  }})())
}

function diffString (f, w) {
  if (w === f) return null
  var p = 0
  while (w.charAt(p) === f.charAt(p)) p ++
  w = stringify(w).substr(1).replace(/"$/, "")
  f = stringify(f).substr(1).replace(/"$/, "")
  return diff(f, w, p)
}

function diffObj (f, w) {
  var f = stringify(f)
    , w = stringify(w)
  if (f === w) return null
  var p = 0
  while (f.charAt(p) === w.charAt(p)) p ++
  return diff(f, w, p)
}

function diff (f, w, p) {
  if (w === f) return null
  var i = p || 0 // it's going to be at least p. JSON can only be bigger.
  while (w.charAt(i) === f.charAt(i)) i ++
  var pos = Math.max(0, i - 20)
  w = w.substr(pos, 40)
  f = f.substr(pos, 40)
  return "FOUND:  "+f+"\n"
       + "WANTED: "+w+"\n"
       + (new Array(Math.min(20, pos) + 1).join(" "))
       + "^ (at position = "+p+")"
}

