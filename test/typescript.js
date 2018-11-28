'use strict'
const t = require('../')
const
const spawn = require('child_process').spawn
const path = require('path')
const fs = require('fs')
const fixdir = path.resolve(__dirname, 'ts')
const ts = path.resolve(fixdir, 'test.ts')
const run = require.resolve('../bin/run.js')
const node = process.execPath

function cleanup () {
  try { fs.unlinkSync(ts) } catch (e) {}
  try { fs.rmdirSync(fixdir) } catch (e) {}
}

t.test('setup', function (t) {
  cleanup()
  fs.mkdirSync(fixdir, '0755')
  fs.writeFileSync(ts, `
import * as tap from '../../';
tap.test('TS Works', (t) => {
  t.equals(2, 1 + 1);
  t.end();
});
  `);
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