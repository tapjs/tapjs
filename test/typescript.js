'use strict'
var t = require('../')

var spawn = require('child_process').spawn
var path = require('path')
var fs = require('fs')
var fixdir = path.resolve(__dirname, 'ts')
var ts = path.resolve(fixdir, 'test.ts')
var run = require.resolve('../bin/run.js')
var node = process.execPath

function cleanup () {
  try { fs.unlinkSync(ts) } catch (e) {}
  try { fs.rmdirSync(fixdir) } catch (e) {}
}

t.test('setup', function (t) {
  cleanup()
  fs.mkdirSync(fixdir, '0755')
  fs.writeFileSync(
    ts,
    'import * as tap from \'../../\';\n' +
    'tap.test(\'TS Works\', (t) => {\n' +
    '  t.equals(2, 1 + 1);\n' +
    '  t.end();\n' +
    '});'
  )
  t.end()
})

t.test('run tap bin on ts', function (t) {
  var args = [run, ts, '--bail', '--no-color', '-Rtap', '--ts']
  var child = spawn(node, args)
  var output = ''
  child.stdout.on('data', function (c) {
    output += c
  })

  child.on('close', function (code, signal) {
    t.equal(code, 0, 'exit 0')
    t.equal(signal, null, 'no signal exit')
    t.match(output, /test\.ts/, 'test.ts was seen')
    t.end()
  })
})

t.tearDown(cleanup)