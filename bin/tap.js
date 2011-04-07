#!/usr/bin/env node

var argv = process.argv.slice(2)
  , path = require("path")
  , dir = path.resolve(argv[0])
  , Runner = require("tap-runner")
  , r = new Runner(dir)

r.pipe(process.stdout)
r.on("end", function () {
  process.exit(r.results.tests - r.results.pass)
})
