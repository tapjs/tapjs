import t from 'tap'
import { FinalResults } from '../src/final-results'
import Parser from '../src/index'

t.test('passing no options and cb works fine', function (t: Tap.Test) {
  //@ts-ignore
  const p = new Parser(() => t.end())
  p.emit('complete')
})

t.test('it has a name', t => {
  t.plan(1)
  const p = new Parser({ name: 'root' })
  p.on('child', c =>
    c.on('child', (c: Parser) => t.equal(c.fullname, 'root child grandchild'))
  )

  p.end(
    `TAP version 13
# Subtest: child
    1..2
    ok 1 - this is fine
    # Subtest: grandchild
        1..1
        ok 1 - this is fine
    ok 2 - grandchild
ok 1 - child
1..1
`,
    'utf8'
  )
})

t.test('end() can take chunk', function (t) {
  t.plan(2)
  t.test('string', function (t) {
    const p = new Parser()
    p.end('1..0\n', () => t.end())
  })
  t.test('encoding', function (t) {
    const p = new Parser()
    p.end(Buffer.from('1..0\n').toString('hex'), 'hex', t.end)
  })
})

t.test('takes a buffer just fine', function (t) {
  const p = new Parser(theEnd)
  p.write(Buffer.from('TAP version 13\n'))

  let calledme = false
  function callme() {
    calledme = true
  }

  let calledbail = false
  function bailcall() {
    calledbail = true
  }

  p.write('ok 1 i just met you\n')
  p.write('ok and this is crazy\n')
  p.write('ok 3 - but heres my number\n')
  p.write('6f6b2034202d20736f2063616c6c206d65206d61796265', 'hex', callme)
  p.write('Bail out! then call cb on next tick')
  p.write('bailouts make all writes ignored right away', bailcall)
  process.nextTick(function () {
    p.end()
  })

  function theEnd(results: FinalResults) {
    t.ok(calledme, 'called cb from normal write')
    t.ok(calledbail, 'called cb from post-bailout write')
    t.match(results, { ok: false, count: 4, pass: 4 })
    t.end()
  }
})
