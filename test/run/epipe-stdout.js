const {
  run,
  t,
} = require('./')

t.plan(2)
const c = run(['-', '-C'], { stdio: 'pipe' }, (er, o, e) => {
  t.equal(er, null)
  t.equal(o, 'TAP version 13\n1..9\nok\n')
})
c.stdin.write('TAP version 13\n1..9\nok\n')
c.stdout.on('data', chunk => {
  c.stdout.destroy()
  c.stdin.write('ok\nok\nok\nok\n')
  c.stdin.write('ok\nok\nok\nok\n')
})
