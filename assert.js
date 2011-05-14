// an assert module that returns tappable data for each assertion.

module.exports = assert

var syns = {}
  , id = 1

function assert (ok, message, extra) {
  //console.error("assert %j", [ok, message, extra])
  //if (extra && extra.skip) return assert.skip(message, extra)
  //console.error("assert", [ok, message, extra])
  var res = { id : id ++, ok: ok }

  var caller = getCaller(extra && extra.error)
  if (extra && extra.error) {
    res.type = extra.error.name
    res.message = extra.error.message
    res.code = extra.error.code
             || extra.error.type
    res.errno = extra.error.errno
    delete extra.error
  }
  if (caller.file) {
    res.file = caller.file
    res.line = +caller.line
    res.column = +caller.column
  }
  res.stack = caller.stack

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

  //console.error("assert return", res)

  return res
}
assert.ok = assert


function notOk (ok, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  return assert(!ok, message, extra)
}
assert.notOk = notOk


function fail (message, extra) {
  //console.error("assert.fail", [message, extra])
  //if (extra && extra.skip) return assert.skip(message, extra)
  return assert(false, message, extra)
}
assert.fail = fail

function skip (message, extra) {
  //console.error("assert.skip", message, extra)
  if (!extra) extra = {}
  return { id: id ++, skip: true, name: message || "" }
}
assert.skip = skip

function throws (fn, wanted, message, extra) {
  if (typeof wanted === "string") {
    extra = message
    message = wanted
    wanted = null
  }

  if (extra && extra.skip) return assert.skip(message, extra)

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

  if (wanted) assert.similar(found, wanted, message, extra)
  else assert.ok(found, message, extra)
}
assert.throws = throws


function doesNotThrow (fn, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  var found = null
  try {
    fn()
  } catch (e) {
    found = {name: e.name, message: e.message}
  }
  message = message || "Should not throw"

  assert.equal(found, null, message, extra)
}
assert.doesNotThrow = doesNotThrow


function equal (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  extra = extra || {}
  message = message || "should be equal"
  extra.found = a
  extra.wanted = b
  return assert(a === b, message, extra)
}
assert.equal = equal
syns.equal = ["equals"
             ,"isEqual"
             ,"is"
             ,"strictEqual"
             ,"strictEquals"]


function equivalent (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  var extra = extra || {}
  message = message || "should be equivalent"
  extra.found = a
  extra.wanted = b
  return assert(stringify(a) === stringify(b), message, extra)
}
assert.equivalent = equivalent
syns.equivalent = ["isEquivalent"
                  ,"looseEqual"
                  ,"looseEquals"
                  ,"isDeeply"
                  ,"same"
                  ,"deepEqual"
                  ,"deepEquals"]


function inequal (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  extra = extra || {}
  message = message || "should not be equal"
  extra.found = a
  extra.doNotWant = b
  return assert(a !== b, message, extra)
}
assert.inequal = inequal
syns.inequal = ["notEqual"
               ,"notEquals"
               ,"isNotEqual"
               ,"isNot"
               ,"not"
               ,"doesNotEqual"
               ,"isInequal"]


function inequivalent (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  extra = extra || {}
  message = message || "should not be equivalent"
  extra.found = a
  extra.doNotWant = b
  return assert(stringify(a) !== stringify(b), message, extra)
}
assert.inequivalent = inequivalent
syns.inequivalent = ["notEquivalent"
                    ,"notDeepEqual"
                    ,"notDeeply"
                    ,"isNotDeepEqual"
                    ,"isNotDeeply"
                    ,"isNotEquivalent"
                    ,"isInequivalent"]

function similar (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  // test that a has all the fields in b
  message = message || "should be similar"
  return equivalent(selectFields(a, b), b, message, extra)
}
assert.similar = similar
syns.similar = ["isSimilar"
               ,"has"
               ,"hasFields"
               ,"like"
               ,"isLike"]

function dissimilar (a, b, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  // test that a has all the fields in b
  message = message || "should be dissimilar"
  return inequivalent(selectFields(a, b), b, message, extra)
}
assert.dissimilar = dissimilar
syns.dissimilar = ["unsimilar",
                  ,"notSimilar"
                  ,"unlike"
                  ,"isUnlike"
                  ,"notLike"
                  ,"isNotLike"
                  ,"doesNotHave"
                  ,"isNotSimilar"
                  ,"isDissimilar"]

function type (thing, t, message, extra) {
  if (extra && extra.skip) return assert.skip(message, extra)
  message = message || "type is "+t
  var type = typeof thing
  if (!thing && type === "object") type = "null"
  if (type === "object" && t !== "object") {
    // check against classnames in prototype chain, as well.
    // type(new Error("asdf"), "Error")
    var p = thing
    while (p = Object.getPrototypeOf(p)) {
      if (p.constructor && p.constructor.name === t) {
        type = t
        break
      }
    }
  }
  return assert.equal(type, t, message, extra)
}
assert.type = type

// synonyms are helpful.
Object.keys(syns).forEach(function (c) {
  syns[c].forEach(function (s) {
    Object.defineProperty(assert, s, { value: assert[c], enumerable: false })
  })
})

// helpers below

function selectFields (a, b) {
  // get the values in A of the fields in B
  var ret = Array.isArray(b) ? [] : {}
  Object.keys(b).forEach(function (k) {
    if (!a.hasOwnProperty(k)) return
    var v = b[k]
      , av = a[k]
    if (v && av && typeof v === "object" && typeof av === "object") {
      ret[k] = selectFields(av, v)
    } else ret[k] = av
  })
  return ret
}

function stringify (a) {
  return JSON.stringify(a, (function () {
    var seen = []
      , keys = []
    return function (key, val) {
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
    , l = w.length
  while (p < l && w.charAt(p) === f.charAt(p)) p ++
  w = stringify(w).substr(1).replace(/"$/, "")
  f = stringify(f).substr(1).replace(/"$/, "")
  return diff(f, w, p)
}

function diffObject (f, w) {
  var f = stringify(f)
    , w = stringify(w)
    , l = w.length
  if (f === w) return null
  var p = 0
  while (p < l && f.charAt(p) === w.charAt(p)) p ++
  return diff(f, w, p)
}

function diff (f, w, p) {
  if (w === f) return null
  var i = p || 0 // it's going to be at least p. JSON can only be bigger.
    , l = w.length
  while (i < l && w.charAt(i) === f.charAt(i)) i ++
  var pos = Math.max(0, i - 20)
  w = w.substr(pos, 40)
  f = f.substr(pos, 40)
  return "FOUND:  "+f+"\n"
       + "WANTED: "+w+"\n"
       + (new Array(Math.min(20, pos) + 9).join(" "))
       + "^ (at position = "+p+")"
}

function getCaller (er) {
  // get the first file/line that isn't this file.
  if (!er) er = new Error
  var stack = er.stack
  stack = stack.split(/\n/)
  for (var i = 1, l = stack.length; i < l; i ++) {
    var s = stack[i].match(/\(([^):]+):([0-9]+):([0-9]+)\)$/)
    if (!s) continue
    var file = s[1]
      , line = +s[2]
      , col = +s[3]
    if (file.indexOf(__dirname) === 0) continue
    else break
  }
  var res = {}
  if (file && file !== __filename) {
    res.file = file
    res.line = line
    res.column = col
  }

  res.stack = stack.slice(i).map(function (s) {
    return s.replace(/^\s*at\s*/, "")
  })

  return res
}


