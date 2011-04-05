// this is just a harness that pipes to stdout.
// It's the default one.
module.exports = GlobalHarness

var globalHarness
  , inherits = require("./inherits")
  , Results = require("./results")
  , Harness = require("./harness")

inherits(GlobalHarness, Harness)
function GlobalHarness () {
  //console.error("calling GlobalHarness")
  if (globalHarness) return globalHarness
  if (!(this instanceof GlobalHarness)) {
    return globalHarness = new GlobalHarness
  }
  globalHarness = this
  GlobalHarness.super.apply(this, arguments)

  this.output.pipe(process.stdout)

  this.test = this.test.bind(this)

  this.plan = this.plan.bind(this)

  var output = this.output
  this.on("childEnd", function (child) {
    //console.error("childEnd in global harness")
    //console.error(child.results)
    // write out the stuff for this child.
    //console.error("child.conf", child.conf)
    output.write(child.conf.name || "(unnamed test)")
    // maybe write some other stuff about the number of tests in this
    // thing, etc.  I dunno.
    //console.error("child results", child.results)
    this.results.list.forEach(function (res) {
      //delete res.error
      //console.error("child resuilt", res)
      output.write(res)
    })
    //console.error("wrote child results")
    this.results.list.length = 0
  })

  var streamEnded = false
  this.on("end", function () {
    console.error("global ending the stream")
    if (!streamEnded) {
      this.results.list.forEach(function (res) {
        output.write(res)
      })
      this.results.list.length = 0
      // summary trailer.
      var trailer = "tests "+this.results.testsTotal + "\n"
                  + "pass  "+this.results.pass + "\n"
                  + "fail  "+this.results.fail + "\n"
      if (this.results.skip) {
        trailer += "skip  "+this.results.skip + "\n"
      }
      if (this.results.todo) {
        trailer += "todo  "+this.results.todo + "\n"
      }
      if (this.results.bailedOut) {
        trailer += "bailed out" + "\n"
      }

      if (this.results.testsTotal === this.results.pass) {
        trailer += "\nok\n"
      }
      //console.error("Set trailer: "+JSON.stringify(trailer))
      output.trailer = trailer
      output.end()
      streamEnded = true
    }
  })

  //this.on("end", this.output.end.bind(this.output))

  process.on("unhandledException", function (e) {
    this.bailout("unhandled exception: " + e.message)
  })
}
