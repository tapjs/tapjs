const {
  escapeNYC,
  tmpfile,
  node,
  dir,
  bin,
  tap,
  t,
} = require('./')

const { execFile } = require('child_process')
const {dirname, basename} = require('path')

const clean = t.cleanSnapshot
t.cleanSnapshot = str => clean(str).replace(/[0-9\.]+m?s/g, '{TIME}')

escapeNYC()

const escapePath = `${dirname(process.execPath)}:${process.env.PATH}`
const esc = tmpfile(t, 'runtest.sh',
`#!/bin/bash
export PATH=${escapePath}
"${node}" "${bin}" "\$@" \\
  --cov \\
  --nyc-arg=--temp-dir="${dir}/.nyc_output" \\
  --nyc-arg=--cache=false
`)

const escape = (args, cb) => {
  const options = {
    cwd: dir,
    env: Object.keys(process.env).filter(
      k => !/^TAP|NYC|SW_ORIG|PWD/.test(k)
    ).reduce((env, k) => {
      if (!env.hasOwnProperty(k))
        env[k] = process.env[k]
      return env
    }, {}),
  }
  const a = [basename(esc)].concat(
    args.map(a => !/^-/.test(a) ? basename(a) : a)
  )
  return execFile('bash', a, options, cb)
}

const branch = tmpfile(t, 'branch.js', `
const ok = n => {
  if (n) {
    console.log('truthy')
    if (n > 5)
      console.log('gt 5')
  } else {
    console.log('falsey')
  }
}
const notCalled = () => {}
module.exports = ok
`)

const test = tmpfile(t, 't.js', `
const ok = require('./branch.js')
ok(1)
ok(6)
const t = require(${tap})
t.pass('this is fine')
`)

const args = [
  test,
  '-Rtap',
  '-c',
  '--cov',
  '--nyc-arg=--include=' + branch,
  '--coverage-report=text',
]

t.test('default watermarks, all set at 100, red', t =>
  escape(['--no-check-coverage', ...args, '-c'], (er, o, e) => {
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }))

t.test('unmet, red', t =>
  escape([
    '--no-check-coverage',
    ...args,
    '-c',
    '--branches=76',
    '--statements=88',
    '--functions=51',
    '--lines=88',
  ], (er, o, e) => {
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }))


t.test('less than halfway to 100, yellow', t =>
  escape([
    '--no-check-coverage',
    ...args,
    '-c',
    '--branches=51',
    '--statements=76',
    '--functions=1',
    '--lines=76',
  ], (er, o, e) => {
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }))

t.test('more than halfway to 100, green', t =>
  escape([
    '--no-check-coverage',
    ...args,
    '-c',
    '--branches=49',
    '--statements=71',
    '--functions=0',
    '--lines=71'
  ], (er, o, e) => {
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }))
