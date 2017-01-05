var Parser = require('../')
var etoa = require('events-to-array')

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener' ]
var glob = require('glob')
var test = require('tap').test
var path = require('path')
var fs = require('fs')

glob.sync(__dirname + '/fixtures/*.tap').forEach(function (tapfile) {
  test(path.basename(tapfile), function (t) {
    var bails = [true, false]
    var white = [true, false]
    var omitv = [true, false]
    var tapContent = fs.readFileSync(tapfile, 'utf8')

    t.plan(bails.length * white.length * omitv.length)

    bails.forEach(function (bail) {
      white.forEach(function (white) {
        omitv.forEach(function (omitv) {
          var opts = {
            bail: bail,
            preserveWhiteSpace: white,
            omitVersion: omitv
          }

          t.test(JSON.stringify(opts), function (t) {
            var outfile = tapfile.replace(/\.tap$/, '')
            outfile += opts.bail ? '--bail': ''
            outfile += opts.preserveWhiteSpace ? '--preservewhite': ''
            outfile += opts.omitVersion ? '--omitversion' : ''
            outfile += '.json'

            var wanted = require(outfile)
            var parser = new Parser(opts)
            var found = etoa(parser, ignore)
            parser.on('complete', function () {
              t.same(found, wanted)
              t.end()
            })
            parser.end(tapContent)
          })
        })
      })
    })
  })
})
