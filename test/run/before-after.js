const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const ok = tmpfile(t, 'ok.js', `console.log('ok')`)
const loggy = tmpfile(t, 'loggy.js', `
  console.log('this is fine')
`)
const fail = tmpfile(t, 'fail.js', `
  throw new Error('fail')
`)
const slow = tmpfile(t, 'slow.js', `setTimeout(() => console.log('slow'))`)
const slowFail = tmpfile(t, 'slow-fail.js', `setTimeout(() => {
  throw new Error('slow fail')
})`)

const sigfail = tmpfile(t, 'sigfail.js', `
process.kill(process.pid, 'SIGKILL')
setTimeout(() => {}, 1000000)
`)

const t1 = tmpfile(t, 't1.js', `const t = require(${tap})
t.pass('this is fine')
`)
const t2 = tmpfile(t, 't2.js', `const t = require(${tap})
t.test('sub', async t => t.pass('this is fine'))
`)
const t3 = tmpfile(t, 't3.js', `const t = require(${tap})
t.test('sub', async t => t.fail('not fine'))
`)

t.test('basic', t => {
  t.plan(3)
  run([`--node-arg=-r`, `--node-arg=./${loggy}`, `--before=${slow}`, `--after=${ok}`, ok, slow, t1, t2, t3], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})

t.test('failing before', t => {
  t.plan(3)
  run([`--before=${fail}`, t1, t2, t3, fail], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})

t.test('failing after', t => {
  t.plan(3)
  run([`--after=${fail}`, t1, fail], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})

t.test('slow fail before', t => {
  t.plan(3)
  run([`--before=${slowFail}`, t1, t2, t3], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})

t.test('signal fail after', t => {
  t.plan(3)
  run([`--before=${sigfail}`, t1, t2, t3], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})

t.test('run after even on bailout', t => {
  t.plan(3)
  run(['--bail', `--after=${ok}`, t1, t2, t3], {}, (er, o, e) => {
    t.ok(er, 'error')
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
  })
})
