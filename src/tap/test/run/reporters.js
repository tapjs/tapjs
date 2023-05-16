const {
  tmpfile,
  run,
  clean,
  tap,
  t,
} = require('./')
const path = require('path')

const ok = tmpfile(t, 'ok.js', `
require(${tap}).test(t => {
  t.pass('this is fine')
  t.end()
})
`)

const reactReporter = tmpfile(t, 'reporter.js', `
module.exports = class ReactyReporter extends require('treport').Base {}
`)

const check = t => (er, o, e) => {
  t.error(er)
  o = clean(o)
    .replace(/^[\S\s]*SUMMARY RESULTS[\S\s]*$/,'treport output')
    .replace(/^[\S\s]*✓[\S\s]*$/, 'spec output')
  t.matchSnapshot(o, 'stdout')
  t.equal(clean(e), '', 'stderr')
  t.end()
}

const opt = {env: {TAP_COLORS: 0, PATH: process.env.PATH}}

t.test('builtin reporter', t =>
  run([ok, '-Rbase'], opt, check(t)))

t.test('tmr builtin reporter', t =>
  run([ok, '-Rspec'], opt, check(t)))

// `-Rtap-parser` will use the version libtap installed
t.test('cli reporter', t =>
  run([ok, '-Rtap-parser', '-r-t', '-r-f'], opt, check(t)))

t.test('stream reporter', t =>
  run([ok, '-Rtap-mocha-reporter', '-rspec'], {
    ...opt,
    env: {
      ...opt.env,
      PATH: ''
    }
  }, check(t)))

t.test('react component', t =>
  run([ok, '-R', './' + reactReporter], opt, check(t)))

t.test('failures', t => {
  const nonfunc = tmpfile(t, 'nonfunc.js', `module.exports = "hello"`)
  const func = tmpfile(t, 'func.js', `module.exports = function () {}`)
  const {makeReporter} = require('../../bin/run.js')

  t.throws(() => makeReporter(t, {reporter: 'not a reporter actually'}),
    { message: `Cannot find module 'not a reporter actually'` })

  t.throws(() => makeReporter(t, {reporter: path.resolve(nonfunc)}),
    { message: 'Invalid reporter: non-class exported by ' })

  t.throws(() => makeReporter(t, {reporter: path.resolve(func)}),
    { message: 'Invalid reporter: not a stream or react component ' })

  t.end()
})
