const {
  tmpfile,
  run,
  t,
} = require('./')

t.test('cat', t => {
  const ok = tmpfile(t, 'ts/ok.tap', `
    TAP version 13
    1..1
    ok 1 - this is fine
  `)
  run([ok], {}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
