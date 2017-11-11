var t = require('../')

if (process.platform === 'win32') {
  t.plan(0, 'shebangs and exe bits are unix only')
  process.exit(0)
}

var spawn = require('child_process').spawn
var path = require('path')
var fs = require('fs')
var fixdir = path.resolve(__dirname, 'executable-scripts')
var executed = path.resolve(fixdir, 'executed.sh')
var notExecuted = path.resolve(fixdir, 'not-executed.sh')
var run = require.resolve('../bin/run.js')
var node = process.execPath

function cleanup () {
  try { fs.unlinkSync(executed) } catch (e) {}
  try { fs.unlinkSync(notExecuted) } catch (e) {}
  try { fs.rmdirSync(fixdir) } catch (e) {}
}

t.test('setup', function (t) {
  cleanup()
  fs.mkdirSync(fixdir, '0755')
  fs.writeFileSync(
    executed,
    '#!/bin/sh\n' +
    'echo 1..1\n' +
    'echo ok 1 File with executable bit should be executed\n'
  )
  fs.chmodSync(executed, '0755')
  fs.writeFileSync(
    notExecuted,
    '#!/bin/sh\n' +
    'echo 1..1\n' +
    'echo not ok 1 File without executable bit should not be run\n' +
    'exit 1\n'
  )
  fs.chmodSync(notExecuted, '0644')
  t.end()
})

t.test('run tap bin on shell scripts', function (t) {
  var args = [run, fixdir, '--bail', '--no-color', '-Rtap']
  var child = spawn(node, args)
  var output = ''
  child.stdout.on('data', function (c) {
    output += c
  })

  child.on('close', function (code, signal) {
    t.equal(code, 0, 'exit 0')
    t.equal(signal, null, 'no signal exit')
    t.notMatch(output, /not-executed\.sh/, 'not-executed.sh not seen')
    t.match(output, /executed\.sh/, 'executed.sh was seen')
    t.end()
  })
})

t.tearDown(cleanup)
