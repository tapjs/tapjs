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
  ['--jobs=99999', '--jobs-auto'],
  [ '-JbC', { jobs: expect.jobs, bail: true, reporter: 'tap', color: false } ]
]

t.plan(args.length)

args.forEach(function (arg) {
  var ex = expect
  if (typeof arg[arg.length - 1] !== 'string')
    ex = arg.pop()
  t.test(arg.join(' '), function (t) {
    var child = spawn(node, [run].concat(arg).concat('--dump-config'))
    var out = ''
    child.stdout.on('data', function (c) {
      out += c
    })
    child.on('close', function (code, signal) {
      t.notOk(code)
      t.notOk(signal)
      t.match(JSON.parse(out), ex)
      t.end()
    })
  })
})

