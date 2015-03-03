var Consumer = require('../lib/consumer.js')
var etoa = require('events-to-array')

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish' ]
var glob = require('glob')
var test = require('../lib/root.js').test
var path = require('path')
var fs = require('fs')

glob.sync(__dirname + '/consumer/*.tap').forEach(function (tapfile) {
  try {
    var wanted = require(tapfile.replace(/\.tap$/, '.js'))
  } catch (er) {
    console.error(tapfile)
    return
  }

  test(path.basename(tapfile), function (t) {
    var consumer = new Consumer
    var found = etoa(consumer, ignore)
    consumer.on('complete', function () {
      t.same(found, wanted)
      t.end()
    })

    fs.createReadStream(tapfile).pipe(consumer)
  })
})
