var glob = require('glob')
var t = require('../lib/root.js')
var spawn = require('child_process').spawn
var node = process.execPath
var fs = require('fs')
var dir = __dirname + '/errors/'
var etoa = require('events-to-array')
var Consumer = require('../lib/consumer')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish' ]

// strip stacks since they'll have local path info
// just keep the top line, with the error message
function stripStack (arr) {
  arr.forEach(function (item) {
    if (Array.isArray(item))
      stripStack(item)
    else if (item && item.diag && item.diag.stack) {
      if (typeof item.diag.stack === 'string')
        item.diag.stack = item.diag.stack.split('\n').slice(0, 1)
      else
        item.diag.stack = item.diag.stack.slice(0, 1)
    }
  })
}

glob.sync(dir + '*.js').forEach(function (file) {
  var resfile = file.replace(/\.js$/, '\.tap')

  try {
    var tapdata = fs.readFileSync(resfile, 'utf8')
  } catch (er) {
    console.error(er)
    console.error(file)
    console.error(resfile)
    return
  }

  var consumer = new Consumer()
  var want = etoa(consumer, ignore)
  consumer.end(tapdata)
  stripStack(want)

  t.test(file.substr(dir.length), function (t) {
    var child = spawn(node, [file], {
      stdio: [ 0, 'pipe', 2 ]
    })

    var foundTapdata = ''

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', function (c) {
      foundTapdata += c
    })
    child.on('close', function (er) {
      if (er)
        throw er

      var consumer = new Consumer()
      var found = etoa(consumer, ignore)
      consumer.end(foundTapdata)
      stripStack(found)
      t.same(found, want)
      t.end()
    })
  })
})
