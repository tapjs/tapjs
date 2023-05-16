const {
  tmpfile,
  run,
  tap,
  dir,
  t,
} = require('./')

tmpfile(t, '1.js', `
console.log('start one')
const t = require(${tap})
setTimeout(() => {
  t.pass('fine in 1')
  t.end()
}, 250)
`)
tmpfile(t, '2.js', `
console.log('start two')
const t = require(${tap})
t.pass('fine in 2')
t.end()
`)

t.plan(3)
run(['1.js', '2.js', '-j1'], { cwd: dir }, (er, o, e) => {
  t.equal(er, null)
  t.matchSnapshot(o, 'output')
  t.matchSnapshot(e, 'stderr')
})
