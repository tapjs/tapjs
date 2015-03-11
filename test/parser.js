var Parser = require('../')
var etoa = require('events-to-array')

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish' ]
var glob = require('glob')
var test = require('tape')
var path = require('path')
var fs = require('fs')

glob.sync(__dirname + '/fixtures/*.tap').forEach(function (tapfile) {
  try {
    var wanted = require(tapfile.replace(/\.tap$/, '.js'))
  } catch (er) {
    console.error(tapfile)
    return
  }

  test(path.basename(tapfile), function (t) {
    var parser = new Parser
    var found = etoa(parser, ignore)
    parser.on('complete', function () {
      t.same(found, wanted)
      t.end()
    })

    fs.createReadStream(tapfile).pipe(parser)
  })
})
