// This is a very simple test framework that leverages the tap framework
// to run tests and output tap-parseable results.

module.exports = Test

var Harness = require("./harness")
  , assert = require("./assert")

// tests are also test harnesses
inherits(Test, Harness)

function Test (harness, name, conf) {
  if (!(this instanceof Test)) return new Test(harness, name, conf)

  Test.super.call(this)

  conf.name = name || conf.name || "(anonymous)"
  this.conf = conf
  this.results = new Results()

  this.harness = harness
  this.harness.add(this)
}

Test.prototype.clear = function () {
  this._started = false
  this._ended = false
  this._plan = null
  this._bailedOut = false
  this.results = new Results()
}

Test.prototype.end = function () {
  if (this._bailedOut) return

  // can't call .end() more than once.
  if (this._ended) {
    this.fail("end called more than once")
  }

  // see if the plan is completed properly, if there was one.
  if (this._plan !== null) {
    var total = this.results.testsTotal
    if (total !== this._plan) {
      this.equal(total, this._plan, "test count != plan")
    }
    this._plan = total
  }

  this._ended = true
  this.emit("end")
}

// this gets called if a test throws ever
Test.prototype.threw = function (ex) {
  this.result({ ok: false
              , name: this.name
              , error: ex })
  // may emit further failing tests if the plan is not completed
  this.end()
}

Test.prototype.result = function (res) {
  this.results.add(res)
  this.ok = this.results.ok
  this.emit("result", res)
}

// parasitic
Object.getOwnPropertyNames(assert).forEach(function (k) {
  var d = Object.getOwnPropertyDescriptor(assert, k)
    , v = d.value
  if (!v) return
  d.value = assertParasite(v)
  Object.defineProperty(Test.prototype, k, d)
})

function assertParasite (fn) { return function _testAssert () {
  if (this._bailedOut) return
  this.result(fn.apply(assert, arguments))
}}

// a few tweaks on the EE emit function, because
// we want to catch all thrown errors and bubble up "bailout"
Test.prototype.emit = (function (em) { return function (t) {
  // bailouts bubble until handled
  if (t === "bailout" &&
      this.listeners(t).length === 0 &&
      this.harness) {
    return this.harness.bailout(arguments[1])
  }

  try {
    em.apply(this, arguments)
  } catch (ex) {
    // any exceptions in a test are a failure
    this.threw(ex)
  }
}})(EventEmitter.prototype.emit)
