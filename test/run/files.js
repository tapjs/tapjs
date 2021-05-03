const {
  tmpfile,
  run,
  tap,
  t,
  clean,
} = require('./')

const one = tmpfile(t, 'one.js', `
  const t = require(${tap})
  t.pass('one')
`)

const two = tmpfile(t, 'two.js', `
  const t = require(${tap})
  t.pass('two')
`)

const three = tmpfile(t, 'two.js', `
  const t = require(${tap})
  t.pass('three')
`)

t.test('--files work like explicit positional argument', t => {
  t.plan(3)
  run([`--files=${one}`, `--files=${two}`], {}, (er, o, e) => {
    t.notOk(er)
    t.equal(clean(e), '')
    t.matchSnapshot(o)
  })
})

t.test('--files do not override explicit positional argument', t => {
  t.plan(3)
  run([`--files=${one}`, `--files=${two}`, three], {}, (er, o, e) => {
    t.notOk(er)
    t.equal(clean(e), '')
    t.matchSnapshot(o)
  })
})
