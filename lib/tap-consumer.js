module.exports = TapConsumer

// pipe a stream into this that's emitting tap-formatted data,
// and it'll emit "data" events with test objects or comment strings
// and an "end" event with the final results.

var tap = require("./tap")
  , yamlish = require("./yamlish")

var Stream = require("stream").Stream
function TapConsumer () {
  this.count = 0
  this.ok = 0
  Stream.call(this)
  this.readable = this.writable = true
  this._buffer = ""
  this._indent = []
  this._current = null
}

TapConsumer.prototype = Object.create(Stream.prototype)

TapConsumer.prototype.write = function (chunk) {
  if (!this.writable) this.emit("error", new Error("not writable"))
  this._buffer = this._buffer + chunk
  // split it up into lines.
  var lines = this._buffer.split(/\r?\n/)
  // ignore the last line, since it might be incomplete.
  this._buffer = lines.pop()

  for (var i = 0, l = lines.length; i < l; i ++) {
    //console.error([i, lines[i]])
    // see if it's indented.
    var line = lines[i]
      , spaces = (this._indent.length && !line.trim())
               || line.match(/^\s/)
    // at this level, only interested in fully undented stuff.
    if (spaces) {
      var c = i
      while (c < l && (!lines[c].trim() || lines[c].match(/^\s/))) {
        this._indent.push(lines[c++])
      }
      //console.error(c-i, "indented", this._indent, this._current)
      i = c - 1
      continue
    }
    // some kind of line.  summary, ok, notok, comment, or garbage.
    // this also finishes parsing any of the indented lines from before
    this._parseLine(line)
  }
}

TapConsumer.prototype.end = function () {
  // finish up any hanging indented sections or final buffer
  if (this._buffer.match(/^\s/)) this._indent.push(this.buffer)
  else this._parseLine(this._buffer)

  this._parseLine("")
  this._buffer = ""
  this.writable = false
  this.emit("end", null, this.count, this.ok)
}

TapConsumer.prototype._parseLine = function (line) {
  //console.error("_parseLine", [line])
  // if there are any indented lines, and there is a
  // current object already, then they belong to it.
  // if there is not a current object, then they're garbage.
  if (this._current && this._indent.length) {
    this._parseIndented()
  }
  this._indent.length = 0
  if (this._current) this.emit("data", this._current)
  this._current = null
  line = line.trim()
  if (!line) return
  // try to see what kind of line this is.

  if (line.match(/^#/)) { // just a comment
    line = line.replace(/^#+/, "").trim()
    // console.error("outputting comment", [line])
    if (line) this.emit("data", line)
    return
  }

  if (line.match(/^[0-9]+\.\.[0-9]+$/)) {
    var plan = line.split("..")
    this.count = (+plan[1]) - (+plan[0])
    return
  }

  if (line.match(/^(not )?ok(?: ([0-9]+))?(?: - (.*))?$/)) {
    this._parseResultLine(line)
    return
  }

  // garbage.  emit as a comment.
  //console.error("emitting", [line.trim()])
  if (line.trim()) this.emit("data", line.trim())
}

TapConsumer.prototype._parseDirective = function (line) {
  line = line.trim()
  if (line.match(/^TODO\b/)) {
    return { todo:true, explanation: line.replace(/^TODO\s*/, "") }
  } else if (line.match(/^SKIP\b/)) {
    return { skip:true, explanation: line.replace(/^SKIP\s*/, "") }
  }
}

TapConsumer.prototype._parseResultLine = function (line) {
  var parsed = line.match(/^(not )?ok(?: ([0-9]+))?(?: - (.*))?$/)
    , literalOk = !parsed[1]
    , ok = literalOk
    , id = +(parsed[2] || NaN)
    , rest = parsed[3] || ""
    , name
    , res = { literalOk:literalOk, id:id, ok:ok }

  // split on un-escaped # characters
  rest = rest.replace(/([^\\])((?:\\\\)*)#/g, "$1\n$2").split("\n")
  name = rest.shift()
  rest = rest.join("#")
  // now, let's see if there's a directive in there.
  var dir = this._parseDirective(rest.trim())
  if (!dir) name += "#" + rest
  else {
    res.ok = true
    if (dir.skip) res.skip = true
    else if (dir.todo) res.todo = true
    res.explanation = dir.explanation
  }
  res.name = name

  //console.error(line, [ok, id, name])
  this._current = res
}

TapConsumer.prototype._parseIndented = function () {
  // pull yamlish block out
  var ind = this._indent
    , ys
    , ye
    , yind
    , diag
  //console.error(ind, this._indent)
  for (var i = 0, l = ind.length; i < l; i ++) {
    var line = ind[i]
    if (!ys) {
      ys = line.match(/^(\s*)---(.*)$/)
      if (ys) {
        yind = ys[1]
        diag = [ys[2]]
        //console.error([line,ys, diag])
        continue
      } else if (line.trim()) this.emit("data", line.trim())
    } else if (ys && !ye) {
      if (line === yind + "...") ye = true
      else {
        diag.push(line.substr(yind.length))
      }
    } else if (ys && ye) if (line.trim()) this.emit("data", line.trim())
  }
  if (diag) {
    //console.error('about to parse', diag)
    diag = yamlish.decode(diag.join("\n"))
    //console.error('parsed', diag)
    Object.keys(diag).forEach(function (k) {
      //console.error(this._current, k)
      if (!this._current.hasOwnProperty(k)) this._current[k] = diag[k]
    }, this)
  }
}
