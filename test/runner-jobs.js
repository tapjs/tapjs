var t = require('../')
var spawn = require('child_process').spawn
var expect = {
  jobs: require('os').cpus().length
}
var node = process.execPath
var run = require.resolve('../bin/run.js')

var args = [
  ['-J'],
  ['--jobs=99999', '-J'],
  ['--jobs-auto'],
  ['--jobs=99999', '--jobs-auto']
]

t.plan(args.length)

args.forEach(function (arg) {
  t.test(arg.join(' '), function (t) {
    var child = spawn(node, [run, '-J', '--dump-config'])
    var out = ''
    child.stdout.on('data', function (c) {
      out += c
    })
    child.on('close', function (code, signal) {
      t.notOk(code)
      t.notOk(signal)
      t.match(JSON.parse(out), expect)
      t.end()
    })
  })
})

