'use strict'
const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
// const rimraf = { sync: () => {} }
const path = require('path')
const cp = require('child_process')
const execFile = cp.execFile
const node = process.execPath
const bin = require.resolve('../../bin/run.js')
const tap = JSON.stringify(path.join(__dirname, '../..') + '/')
const t = require('../../')

const dir = path.join(__dirname, `../../cli-tests-${process.pid}`)

// set this forcibly so it doesn't interfere with other tests.
delete process.env.TAP_DIAG
delete process.env.TAP_BAIL
delete process.env.TAP_COLORS
delete process.env.TAP_TIMEOUT

const winSkip = process.platform === 'win32' ? 'known windows failure' : false
const oldSkip = /^v10\./.test(process.version) ? 'known node v10 failure': false

const cleanStacks = require('../clean-stacks.js')
// also clean up NYC output a bit, because the line lengths
// in the text report can vary on different platforms.
const clean = string => cleanStacks(string)
  .replace(/uncovered line( #)?s/i, 'Uncovered Lines')
  .replace(/ +\|/g, ' |')
  .replace(/\| +/g, '| ')
  .replace(/-+\|/g, '-|')
  .replace(/\|-+/g, '|-')
  // two that show up in config dump snapshots
  .replace(/snapshot: (true|false)\n/, '')
  .replace(/cli-tests-[0-9]+/g, 'cli-tests')
  .split('\n').filter(l => !/ExperimentalWarning/.test(l)).join('\n')

t.cleanSnapshot = clean

const run = (args, options, cb) => {
  if (options && options.env)
    options.env = Object.keys(process.env).reduce((env, k) => {
      if (env[k] === undefined)
        env[k] = process.env[k]
      return env
    }, options.env)

  return execFile(node, [bin, '--no-coverage'].concat(args), options, cb)
}

const tmpfile = (t, filename, content) => {
  const parts = filename.split('/')
  // make any necessary dirs
  if (parts.length > 1)
    mkdirp.sync(path.join(dir, parts.slice(0, -1).join('/')))
  if (t.tmpfiles)
    t.tmpfiles.push(path.join(dir, parts[0]))
  else {
    t.tmpfiles = [path.join(dir, parts[0])]
    if (process.env._TAP_TEST_NO_TEARDOWN_TMP !== '1')
      t.teardown(() => t.tmpfiles.forEach(f => rimraf.sync(f)))
  }
  filename = path.join(dir, filename)
  fs.writeFileSync(filename, content)
  return path.relative('', filename)
}

const escapeNYC = () =>  {
  // This function is too intimate with nyc internals, could get broken by internal
  // changes to nyc.  Probably need an official istanbuljs API to unwrap.
  const nycWrap = require.resolve('nyc/lib/wrap.js')
  const preloadList = require('node-preload')
  const idx = preloadList.indexOf(nycWrap)
  if (idx === -1) {
    return
  }

  preloadList.splice(idx, 1)

  const processOnSpawn = require('process-on-spawn')
  const nycEnvs = [
    'NYC_CONFIG',
    'NYC_CWD',
    'NYC_PROCESS_ID',
    'BABEL_DISABLE_CACHE'
  ]
  processOnSpawn.addListener(({ env }) => {
    for (const key of nycEnvs) {
      delete env[key]
    }
  })
}

if (module === require.main)
  t.pass('this is fine')
else {
  mkdirp.sync(dir)
  if (process.env._TAP_TEST_NO_TEARDOWN_TMP !== '1') {
    t.teardown(() => rimraf.sync(dir))
    process.on('exit', () => rimraf.sync(dir))
  }
}

module.exports = {
  escapeNYC,
  tmpfile,
  run,
  bin,
  tap,
  node,
  clean,
  dir,
  t,
  winSkip,
  oldSkip,
}
