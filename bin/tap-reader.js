#!/usr/bin/env node

// read a tap stream from stdin.

var TapConsumer = require("../lib/tap-consumer")
  , TapStream = require("../lib/tap-stream")

var tc = new TapConsumer
  , ts = new TapStream(!process.env.nodiag)

//process.stdin.pipe(tc)
process.stdin.on("data", function (c) {
  c = c + ""
  // console.error(JSON.stringify(c).substr(0, 100))
  tc.write(c)
})
process.stdin.on("end", function () { tc.end() })
process.stdin.resume()
//tc.pipe(ts)
tc.on("data", function (c) {
  ts.write(c)
})
tc.on("end", function () { ts.end() })

ts.on("data", function (c) {
  console.error(["output write", c])
  process.stdout.write(c)
})

ts.on("end", function (er, total, ok) {
  if (er) throw er
  process.exit(total - ok)
})
