var Consumer = require('../lib/consumer.js')

function listen (consumer, ignore) {
  ignore = ignore || []
  var events = []
  consumer.emit = function (orig) {
    return function (ev) {
      if (ignore.indexOf(ev) === -1) {
        var l = arguments.length
        var args = new Array(l)
        for (var i = 0; i < l; i++) {
          var arg = arguments[i]
          args[i] = (arg instanceof Consumer) ?
            listen(arg, ignore) :
            arg
        }
        events.push(args)
      }

      return orig.apply(this, arguments)
    }
  }(consumer.emit)
  return events
}

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish' ]
var glob = require('glob')
var test = require('../').test
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
    var found = listen(consumer, ignore)
    consumer.on('complete', function () {
      t.same(found, wanted)
      t.end()
    })

    fs.createReadStream(tapfile).pipe(consumer)
  })
})
