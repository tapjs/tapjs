const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const ok = tmpfile(t, 'ok.js', `
  const t = require(${tap})
  t.equal(process.env.glorp, 'foo')
  t.equal(process.env.USER, undefined)
  t.equal(process.env.TERM, '')
`)

t.plan(3)
run(['--test-env=USER', '--test-env=TERM=', '--test-env=glorp=foo', ok], {}, (er, o, e) => {
  t.notOk(er)
  t.equal(e, '')
  t.matchSnapshot(o)
})
