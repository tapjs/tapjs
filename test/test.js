var glob = require('glob')
var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var fs = require('fs')
var dir = __dirname + '/test/'

glob.sync(dir + '*.js').forEach(function (file) {
  var resfile = file.replace(/\.js$/, '\.tap')
  try {
    var want = fs.readFileSync(resfile, 'utf8')
  } catch (er) {
    console.error(er)
    console.error(file)
    console.error(resfile)
    return
  }

  t.test(file.substr(dir.length), function (t) {
    var child = spawn(node, [file], {
      stdio: [ 0, 'pipe', 2 ]
    })

    var found = ''

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', function (c) {
      found += c
    })
    child.on('close', function (er) {
      if (er)
        throw er

      t.equal(found.trim(), want.trim())
      t.end()
    })
  })
})
