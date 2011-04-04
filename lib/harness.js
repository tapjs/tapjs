// a thing that runs tests.
// Every "test" is also a harness.  If they do not have a harness,
// then they are attached to the defaut "global harness",
// which writes its results to stdout.


// TODO:
// - Bailout should stop running any tests.
// - "skip" in the test config obj should skip it.

module.exports = Harness

var inherits = require("./inherits")
  , EventEmitter = require("events").EventEmitter
  , Test = require("./test")
  , Results = require("./results")
  , TapProducer = require("./tap-producer")

inherits(Harness, EventEmitter)
function Harness () {
  if (!(this instanceof Harness)) return new Harness()

  this._plan = null
  this._children = []
  this._processing = false

  this._testCount = 0
  this._planSum = 0

  this.results = new Results()

  var p = this.process.bind(this)
  this.process = function () {
    process.nextTick(p)
  }

  this.output = new TapProducer
  Harness.super.call(this)
}

// this function actually only gets called bound to
// the Harness object, and on process.nextTick.  Even if
// passed as an event handler, everything *else* will
// happen before it gets called.
Harness.prototype.process = function () {
  // "end" can emit multiple times, so only actually move on
  // to the next test if the current one is actually over.
  // TODO: multiple in-process tests, if all are marked "async"
  if (this._current) {
    if (!this._current._ended) return
    // handle the current one before moving onto the next.
    this.childEnd(this._current)
  }
  var current = this._current = this._children.shift()

  // keep processing through skipped tests, instead of running them.
  if (current.skip || this._bailedOut) {
    return this.process()
  }

  if (current) {
    current.on("end", this.process)
    current.emit("ready")
  } else {
    this.emit("childrenEnd")
  }
}

Harness.prototype.childEnd = function (child) {
  this._testCount ++
  this._planSum += child._plan
  this.results.addSet(child.results)
  this.emit("childEnd", child)
}

Harness.prototype.test = function test (name, conf, cb) {
  if (this._bailedOut) return

  if (typeof conf === "function") cb = conf, conf = null
  if (typeof name === "object") conf = name, name = null
  if (typeof name === "function") cb = name, name = null

  conf = conf || {}
  name = name || ""

  var t = new Test(this, name, conf)
  if (cb) t.on("ready", cb.bind(t, t))
  return t
}

Harness.prototype.bailout = function (message) {
  message = message || ""
  this.results.add({bailout: message})
  this._bailedOut = true
  this.emit("bailout", message)
}

Harness.prototype.add = function (child) {
  this._children.push(child)
  process.nextTick(this.process)
}
