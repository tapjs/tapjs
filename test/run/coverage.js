const {
  tmpfile,
  clean,
  bin,
  tap,
  node,
  dir,
  t,
  winSkip,
} = require('./')

const { execFile } = require('child_process')
const path = require('path')


const ok = tmpfile(t, 'ok.js', `'use strict'
  module.exports = (x, y) => {
    if (x)
      return y || x
    else
      return y
  }`)

tmpfile(t, 'package.json', '{"name":"just a placeholder"}')

const t1 = tmpfile(t, '1.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1), 1)`)

const t2 = tmpfile(t, '2.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1, 2), 2)`)

const t3 = tmpfile(t, '3.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(0, 3), 3)`)

// escape from new york
const esc = tmpfile(t, 'runtest.sh',
`"${node}" "${bin}" "\$@" --cov --nyc-arg=--include="ok.js"
`)

const escape = (args, options, cb) => {
  options = options || {}
  options.cwd = dir
  const env = Object.keys(process.env).filter(
    k => !/TAP|NYC|SW_ORIG/.test(k)
  ).reduce((env, k) => {
    if (!env.hasOwnProperty(k))
      env[k] = process.env[k]
    return env
  }, options.env || {})
  options.env = env
  options.env.TAP_NO_ESM = '1'
  const a = [path.basename(esc)].concat(
    args.map(a => path.basename(a)))
  return execFile('bash', a, options, cb)
}

t.test('generate some coverage', t => {
  escape([t1, t2, '--cov'], null, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), '100 pass')
    t.end()
  })
})

t.test('report only', t => {
  escape(['--coverage-report=text-lcov'], null, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'lcov output', { skip: winSkip })
    t.end()
  })
})

t.test('report with checks', t => {
  escape(['--100', '--coverage-report=text-lcov'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(clean(o), 'lcov output and 100 check', { skip: winSkip })
    t.end()
  })
})

t.test('pipe to service', t => {
  const piper = tmpfile(t, 'piper.js', `
    process.stdin.pipe(process.stdout)
  `)
  escape(['--coverage-report=text-lcov'], { env: {
    __TAP_COVERALLS_TEST__: piper
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'piped to coverage service cat'), { skip: winSkip }
    t.end()
  })
})
