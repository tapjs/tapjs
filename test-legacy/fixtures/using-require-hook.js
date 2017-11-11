// We're simulating that some test failed in `using-require-hook.faux`
// which was compiled to a js module with more lines than the file on disk.
var Module = require('module')
var path = require('path')

var filename = path.resolve(__dirname, 'using-require-hook.faux')
var m = new Module(filename, module)
m.filename = filename
m.paths = Module._nodeModulePaths(path.dirname(filename))
m._compile('(' + runTapTest.toString() + ')()', filename)

function runTapTest () {
  var tap = require('../..')

  tap.test(function (t) {
    t.plan(1)
    t.equal(1, 2) // failing test so tap tries to find the source code
  })
}
