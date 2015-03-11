#!/usr/bin/env node

var spawn = require('child_process').spawn
var path = require('path')
var fs = require('fs')
var etoa = require('events-to-array')
var Parser = require('../')
var util = require('util')

for (var i = 2; i < process.argv.length; i++) {
  generate(process.argv[i])
}

function generate(file) {
  file = path.resolve(file)
  console.error(file)
  var outfile = file.replace(/\.tap$/, '.js')
  if (outfile === file)
    throw new Error('incorrect file (should end in .tap) ' + file)

  var output = ''
  var p = new Parser()
  fs.createReadStream(file, { encoding: 'utf8' }).pipe(p)
  var events = etoa(p, [ 'pipe', 'unpipe', 'prefinish', 'finish' ])
  p.on('complete', function () {
    var f = util.inspect(events, null, Infinity)
    fs.writeFileSync(outfile, 'module.exports =\n' + f + '\n')
  })
}
