module.exports = testDir

var fs = require("fs")
  , child_process = require("child_process")
  , path = require("path")
  , chain = require("slide").chain
  , TapProducer = require("./tap-producer")
  , TapConsumer = require("./tap-consumer")
  , assert = require("./assert")

function testDir (dir, diag) {
  var tp = new TapProducer(diag)

  fs.readdir(dir, function (er, files) {
    if (er) {
      tp.write(assert.fail("failed to readdir "+dir,
                           { error: er }))
      tp.end()
      return
    }
    files = files.sort(function (a,b) {return a>b ? 1 : -1})
    chain(files.map(function (f) { return function (cb) {
      f = path.resolve(dir, f)
      fs.lstat(f, function (er, st) {
        if (er) {
          tp.write(assert.fail("failed to stat "+f,
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
          return testDir(dir, diag, cb)
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
          tp.write(c)
        })

        cp.stdout.pipe(tc)
        cp.stdout.on("data", function (c) { out += c })
        cp.stderr.on("data", function (c) { err += c })

        cp.on("exit", function (code) {
          //console.error(childTests)
          //childTests.forEach(function (c) { tp.write(c) })
          tp.write({ name: f.substr(dir.length + 1)
                   , ok: !code
                   //, stdout: out
                   , stderr: err
                   })
          tp.write("\n")
          cb()
        })
      })
    }}), function (er) {
      if (er) tp.emit("error", er)
      tp.end()
    })
  })

  return tp
}
