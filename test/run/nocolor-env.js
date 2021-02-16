process.env.TAP_COLORS = '1'

const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const ok = tmpfile(t, 'ok.js', `
  const t = require(${tap})
  t.equal(process.env.TAP_COLORS, '0')
`)

t.plan(3)
run([ok], {
  env: {
    NO_COLOR: '1'
  }
}, (er, o, e) => {
  t.notOk(er)
  t.equal(e, '')
  t.matchSnapshot(o)
})
