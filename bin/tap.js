#!/usr/bin/env node

var argv = process.argv.slice(2)
  , path = require("path")
  , dir = path.resolve(argv[0])
  , testDir = require("../lib/test-dir")
  , ts = testDir(dir)

ts.pipe(process.stdout)
ts.on("end", function () {
  process.exit(ts.results.tests - ts.results.pass)
})
