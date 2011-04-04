// this is just a harness that pipes to stdout.
// It's the default one that's used when 
module.exports = GlobalHarness

var globalHarness
  , inherits = require("./inherits")
  , Results = require("./results")
  , Harness = require("./harness")

inherits(GlobalHarness, Harness)
function GlobalHarness () {
  if (globalHarness) return globalHarness
  if (!(this instanceof GlobalHarness)) {
    return globalHarness = new GlobalHarness
  }
  globalHarness = this
  GlobalHarness.super.apply(this, arguments)

  this.output.pipe(process.stdout)

  this.test = this.test.bind(this)

  this.plan = this.plan.bind(this)

  this.on("childEnd", function (child) {
    // write out the stuff for this child.
    this.output.write(child.name)
    // maybe write some other stuff about the number of tests in this
    // thing, etc.  I dunno.
    child.results.list.forEach(function (res) {
      this.output.write(res)
    })
  })

  this.on("childrenEnd", this.emit.bind(this, "end"))
  this.on("end", this.output.end.bind(this.output))

  process.on("unhandledException", function (e) {
    this.bailout("unhandled exception: " + e.message)
  })
}
