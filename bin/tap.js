#!/usr/bin/env node

var argv = process.argv.slice(2)
  , path = require("path")
  , dir = path.resolve(argv[0])
  , testDir = require("../lib/test-dir")

testDir(dir, !process.env.nodiag, function (er, total, ok) {
  if (er) throw er
  process.exit(total - ok)
}).pipe(process.stdout)
