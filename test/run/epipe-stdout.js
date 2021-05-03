const {
  run,
  t,
} = require('./')

t.plan(2)
const c = run(['-', '-C'], { stdio: 'pipe' }, (er, o) => {
  t.equal(er, null)
  t.equal(o, str)
})
// comes in two chunks, because it's going through a parser
const str = 'TAP version 13\n1..9\nok\n'
let seen = ''
c.stdin.write(str)
c.stdout.on('data', chunk => {
  seen += chunk
  if (seen.length >= str.length) {
    c.stdout.destroy()
    c.stdin.write('ok\nok\nok\nok\n')
    c.stdin.write('ok\nok\nok\nok\n')
  }
})
