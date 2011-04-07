module.exports = Runner

var fs = require("fs")
  , child_process = require("child_process")
  , path = require("path")
  , chain = require("slide").chain
  , TapProducer = require("tap-producer")
  , TapConsumer = require("tap-consumer")
  , assert = require("tap-assert")
  , inherits = require("inherits")

inherits(Runner, TapProducer)

function Runner (dir, diag) {
  Runner.super.call(this, diag)

  if (dir) this.run(dir)
}

Runner.prototype.run = function (dir) {

  var self = this
  fs.readdir(dir, function (er, files) {
    if (er) {
      self.write(assert.fail("failed to readdir "+dir,
                           { error: er }))
      self.end()
      return
    }
    files = files.sort(function (a,b) {return a>b ? 1 : -1})
    chain(files.map(function (f) { return function (cb) {
      self.write(f)
      f = path.resolve(dir, f)
      fs.lstat(f, function (er, st) {
        if (er) {
          self.write(assert.fail("failed to stat "+f,
                                 {error: er}))
          return cb()
        }

        var cmd = f
          , args = []

        if (path.extname(f) === ".js") {
          cmd = "node"
          args = [f]
        }
        if (st.isDirectory()) {
          return self.run(dir, cb)
        }

        var env = {}
        for (var i in process.env) env[i] = process.env[i]
        env.TAP = 1

        var cp = child_process.spawn(cmd, args, { env: env })
          , out = ""
          , err = ""
          , tc = new TapConsumer
          , childTests = [f]

        tc.on("data", function (c) {
          self.write(c)
        })

        cp.stdout.pipe(tc)
        cp.stdout.on("data", function (c) { out += c })
        cp.stderr.on("data", function (c) { err += c })

        cp.on("exit", function (code) {
          //console.error(childTests)
          //childTests.forEach(function (c) { self.write(c) })
          var res = { name: f.substr(dir.length + 1)
                    , ok: !code }
          if (err) res.stderr = err
          res.command = [cmd].concat(args).map(JSON.stringify).join(" ")
          self.write(res)
          self.write("\n")
          cb()
        })
      })
    }}), function (er) {
      if (er) self.emit("error", er)
      self.end()
    })
  })

  return self
}
