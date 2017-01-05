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
  var bails = [true, false]
  var white = [true, false]
  var omitv = [true, false]
  bails.forEach(function (bail) {
    white.forEach(function (white) {
      omitv.forEach(function (omitv) {
        generate_(file, {
          bail: bail,
          preserveWhiteSpace: white,
          omitVersion: omitv
        })
      })
    })
  })
}

function generate_ (file, opts) {
  var outfile = file.replace(/\.tap$/, '')
  if (outfile === file)
    throw new Error('incorrect file (should end in .tap) ' + file)

  outfile += opts.bail ? '--bail': ''
  outfile += opts.preserveWhiteSpace ? '--preservewhite': ''
  outfile += opts.omitVersion ? '--omitversion' : ''

  outfile += '.json'

  var output = ''
  var p = new Parser(opts)
  fs.createReadStream(file, { encoding: 'utf8' }).pipe(p)
  var events = etoa(p, [ 'pipe', 'unpipe', 'prefinish', 'finish' ])
  p.on('complete', function () {
    var f = JSON.stringify(events, null, 2) + '\n'
    fs.writeFileSync(outfile, f)
  })
}
