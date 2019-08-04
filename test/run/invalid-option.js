const {
  run,
  t,
} = require('./')

t.test('print a nicer message on invalid argument errors', t => {
  t.plan(1)
  run(['-R'], {}, (er, o, e) =>
    t.matchSnapshot(e))
})
