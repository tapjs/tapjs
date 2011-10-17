#!/usr/bin/env node

// just an example, really

var argv = process.argv.slice(2)
  , path = require("path")
  , Runner = require("tap-runner")
  , TapProducer = require("tap-producer")

  , http = require("http")
  , server = http.createServer(function (req, res) {
  // it'd be nice to return a non-200 if the tests fail, but we don't
  // know the status until it's done, so that would mean not being able
  // to pipe the output
  res.writeHead(200, {'content-type': 'text/plain'})
  var r = new Runner(argv, null)
  r.pipe(res)
})

server.listen(1337)
