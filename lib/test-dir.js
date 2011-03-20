module.exports = testDir

var fs = require("fs")
  , child_process = require("child_process")
  , path = require("path")
  , chain = require("slide").chain
  , TapStream = require("./tap-stream")
  , TapConsumer = require("./tap-consumer")

function testDir (dir, diag, cb) {
  if (typeof cb !== "function") cb = diag, diag = false
  var ts = new TapStream(diag)
  ts.on("error", cb)
  ts.on("end", function () {
    console.error("TS END")
  })
  ts.on("end", cb)

  fs.readdir(dir, function (er, files) {
    if (er) return cb(er)
    chain(files.map(function (f) { return function (cb) {
      f = path.resolve(dir, f)
      fs.lstat(f, function (er, st) {
        if (er) throw er

        var cmd = f
          , args = []

        if (path.extname(f) === ".js") {
          cmd = "node"
          args = [f]
        }
        if (st.isDirectory()) {
          return testDir(dir, diag, cb)
        }
        var cp = child_process.spawn(cmd, args)
          , out = ""
          , err = ""
          , tc = new TapConsumer
          , childTests = [f]

        tc.on("data", function (c) { childTests.push(c) })
        cp.stdout.pipe(tc)
        cp.stdout.on("data", function (c) { out += c })
        cp.stderr.on("data", function (c) { err += c })

        cp.on("exit", function (code) {
          console.error(childTests)
          childTests.forEach(function (c) { ts.write(c) })
          ts.write({ name: f.substr(dir.length + 1)
                   , ok: !code
                   //, stdout: out
                   , stderr: err })
          cb()
        })
      })
    }}), function (er) {
      if (er) ts.emit("error", er)
      ts.end()
    })
  })

  return ts
}
