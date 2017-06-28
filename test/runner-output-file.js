var t = require('../')
var spawn = require('child_process').spawn
var run = require.resolve('../bin/run.js')
var fs = require('fs')
var node = process.execPath
var ok = require.resolve('./test/ok.js')

var args = [
  '-ofile.txt',
  '-Co file.txt',
  '-bCco=file.txt',
  '-o=file.txt',
  '--output-file=file.txt',
  '--output-file file.txt'
]

args.forEach(function (arg) {
  t.test(arg, function (t) {
    try { fs.unlinkSync('file.txt') } catch (er) {}
    arg = arg.split(' ')
    var child = spawn(node, [run, '-c', ok].concat(arg))
    var gotStdout = false
    child.stdout.on('data', function (c) {
      gotStdout = true
    })
    child.stderr.on('data', function (c) {
      throw new Error('should not write to stderr')
    })
    child.on('close', function (code, sig) {
      t.equal(code, 0)
      t.equal(sig, null)
      t.ok(gotStdout, 'got standard output')
      t.match(fs.readFileSync('file.txt', 'utf8'), /^TAP version 13\n/)
      t.end()
    })
  })
})

t.test('cleanup', function (t) {
  try { fs.unlinkSync('file.txt') } catch (er) {}
  t.done()
})

