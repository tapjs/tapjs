#!/usr/bin/env node

var fs = require("fs")
  , argv = process.argv.slice(2)
  , child_process = require("child_process")
  , path = require("path")
  , TapStream = require("../lib/tap-stream")
  , ts = new TapStream()
  , dir = path.resolve(argv[0])

ts.pipe(process.stdout)

fs.readdir(dir, function (er, files) {
  if (er) throw er
  var count = files.length

  files.forEach(function (f) {
    f = path.resolve(dir, f)
    fs.stat(f, function (er, st) {
      if (er) throw er
      if (st.isDirectory()) {
        console.error("nested dirs not supported yet.")
        return
      }
      var cmd = f
        , args = []
      if (path.basename(f) === ".js") {
        cmd = "node"
        args = [f]
      }
      var cp = child_process.spawn(cmd, args, { cwd: dir })
        , out = ""
        , err = ""
      cp.stdout.on("data", function (c) { out += c })
      cp.stderr.on("data", function (c) { err += c })
      cp.on("exit", function (code) {
        ts.write(f)
        // TODO: If the output is TAP, then be smart with it.
        // If the output is a yamlish object, then parse that, too.
        ts.write({ name: f.substr(dir.length + 1)
                 , ok: !code
                 , output: out
                 , stderr: err })
        if (-- count === 0) ts.end()
      })
    })
  })
})
