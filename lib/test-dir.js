module.exports = testDir

var fs = require("fs")
  , child_process = require("child_process")
  , path = require("path")
  , chain = require("slide").chain
  , TapStream = require("./tap-stream")

function testDir (dir, diag, cb) {
  if (typeof cb !== "function") cb = diag, diag = false
  var ts = new TapStream(diag)
  ts.on("error", cb)
  ts.on("end", cb)

  fs.readdir(dir, function (er, files) {
    if (er) return cb(er)
    chain(files.map(function (f) { return function (cb) {
      f = path.resolve(dir, f)
      fs.stat(f, function (er, st) {
        if (er) throw er
        if (st.isDirectory()) {
          ts.write({ name: f.substr(dir.length + 1)
                   , ok: false
                   , reason: "Nested dirs not yet supported" })
          return cb()
        }
        var cmd = f
          , args = []
        if (path.extname(f) === ".js") {
          cmd = "node"
          args = [f]
        }
        var cp = child_process.spawn(cmd, args)
          , out = ""
          , err = ""
        cp.stdout.on("data", function (c) { out += c })
        cp.stderr.on("data", function (c) { err += c })
        cp.on("exit", function (code) {
          if (ts.diag) ts.write(f)
          // TODO: If the output is TAP, then be smart with it.
          // If the output is a yamlish object, then parse that, too.
          ts.write({ name: f.substr(dir.length + 1)
                   , ok: !code
                   , output: out
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
