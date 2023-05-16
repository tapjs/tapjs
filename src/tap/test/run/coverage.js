const {
  escapeNYC,
  tmpfile,
  bin,
  tap,
  node,
  dir,
  t,
  winSkip,
} = require('./')

const { execFile } = require('child_process')
const path = require('path')

tmpfile(t, 'ok.js', `'use strict'
  module.exports = (x, y) => {
    if (x)
      return y || x
    else
      return y
  }`)

const t1 = tmpfile(t, '1.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1), 1)`)

const t2 = tmpfile(t, '2.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1, 2), 2)`)

tmpfile(t, '3.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(0, 3), 3)`)

escapeNYC()

const escapePath = `${path.dirname(process.execPath)}:${process.env.PATH}`
const esc = tmpfile(t, 'runtest.sh',
`#!/bin/bash
export PATH=${escapePath}
"${node}" "${bin}" "\$@" \\
  --cov \\
  --nyc-arg=--temp-dir="${dir}/.nyc_output" \\
  --nyc-arg=--cache=false
`)

// convince nyc this is our new home
tmpfile(t, 'package.json', JSON.stringify({
  name: 'escape-from-new-york',
  nyc: {
    include: 'ok.js'
  }
}))

const escape = (args, options, cb) => {
  options = options || {}
  options.cwd = dir
  const env = Object.keys(process.env).filter(
    k => !/^TAP|NYC|SW_ORIG|PWD/.test(k)
  ).reduce((env, k) => {
    if (!env.hasOwnProperty(k))
      env[k] = process.env[k]
    return env
  }, options.env || {})
  options.env = env
  const a = [path.basename(esc)].concat(
    args.map(a => path.basename(a)))
  return execFile('bash', a, options, cb)
}

t.test('generate some coverage', t => {
  escape([t1, t2, '--no-check-coverage'], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('use a coverage map', t => {
  const map = tmpfile(t, 'coverage-map.js', `
module.exports = () => 'ok.js'
`)
  escape(['--no-check-coverage', t1, t2, '-M', map], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('report only', t => {
  escape(['--no-check-coverage', '--coverage-report=text-lcov'], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'lcov output', { skip: winSkip })
    t.end()
  })
})

t.test('report with checks', t => {
  escape(['--100', '--coverage-report=text-lcov'], null, (er, o) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(o, 'lcov output and 100 check', { skip: winSkip })
    t.end()
  })
})

t.test('in 100 mode, <100 is red, not yellow', t => {
  escape(['--100', '--coverage-report=text', '--color'], null, (er, o) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(o, 'text output and 100 check', { skip: winSkip })
    t.end()
  })
})

t.test('pipe to service', t => {
  tmpfile(t, 'piper.js', `
    process.stdin.pipe(process.stderr)
  `)
  escape(['--no-check-coverage', '--coverage-report=text'], { env: {
    __TAP_COVERALLS_TEST__: 'piper.js',
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(e, 'piped to coverage service cat', { skip: winSkip })
    t.matchSnapshot(o, 'human output', { skip: winSkip })
    t.end()
  })
})

t.test('pipe to service along with tests', t => {
  tmpfile(t, 'piper.js', `
    process.stdin.pipe(process.stderr)
  `)
  escape(['--no-check-coverage', t1, t2, '--coverage-report=text'], { env: {
    __TAP_COVERALLS_TEST__: 'piper.js',
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(e, 'piped to coverage service cat', { skip: winSkip })
    t.matchSnapshot(o, 'human output', { skip: winSkip })
    t.end()
  })
})

t.test('borked coverage map means no includes', t => {
  const map = tmpfile(t, 'coverage-map.js', `
module.exports = () => {}
`)
  escape([t1, t2, '-M', map], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})
