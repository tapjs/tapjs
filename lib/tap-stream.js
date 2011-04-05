module.exports = TapStream

var tap = require("./tap")

var Stream = require("stream").Stream
function TapStream (diag) {
  this.diag = diag
  this.count = 0
  this.ok = 0
  Stream.call(this)
  this.readable = this.writable = true
}

TapStream.prototype = Object.create(Stream.prototype)

TapStream.prototype.trailer = true

TapStream.prototype.write = function (res) {
  // console.error("TapStream.write", res)
  if (typeof res === "function") throw new Error("wtf?")
  if (!this.writable) this.emit("error", new Error("not writable"))
  // if (typeof res === "string") {
  //   console.error("tap string", [res, tap(res, this.count + 1, this.diag)])
  // }
  var diag = res.diag
  if (diag === undefined) diag = this.diag
  this.emit("data", tap(res, this.count + 1, diag))
  if (typeof res === "string") return true
  this.count ++
  if (res.ok) this.ok ++
}

TapStream.prototype.end = function (res) {
  if (res) this.write(res)
  this.emit("data", "\n1.."+this.count+"\n")
  if (this.trailer && typeof this.trailer !== "string") {
    this.trailer = (this.count) + " tests\n"
                 + (this.ok) + " passed\n"
                 + (this.count - this.ok) + " failed"
  }
  if (this.trailer) this.write(this.trailer)
  this.writable = false
  this.emit("end", null, this.count, this.ok)
}
