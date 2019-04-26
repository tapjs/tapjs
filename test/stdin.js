const t = require('../')
const Stdin = require('../lib/stdin.js')
const MP = require('minipass')

process.env.TAP_BAIL = ''
process.env.TAP_BUFFER = ''

t.test('uses stdin if no stream provided', t => {
  const s = new Stdin()
  t.equal(s.stream, process.stdin)
  t.equal(s.name, '/dev/stdin')
  t.end()
})

t.test('basic test', t => {
  const stream = new MP()
  const s = new Stdin({
    tapStream: stream,
    name: 'foo',
    buffered: true
  })
  t.equal(s.stream, stream)
  t.equal(s.name, 'foo')

  s.main(_ => {
    t.match(s.results, {
      ok: true,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: false,
      plan: {
        start: 1,
        end: 1,
        skipAll: false
      },
      failures: []
    })
    t.end()
  })

  s.stream.end(`TAP version 13
1..1
ok 1 - this is fine
`)
})

t.test('failure test', t => {
  const stream = new MP()
  const s = new Stdin({
    tapStream: stream
  })

  s.main(_ => {
    t.match(s.results, {
      ok: false,
      count: 2,
      pass: 1,
      fail: 1,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: {
        start: 1,
        end: 2,
        skipAll: false
      },
      failures: [{
        ok: false,
        id: 2,
        name: 'oops'
      }]
    })
    t.end()
  })

  s.stream.write(`TAP version 13
ok 1 - this is fine
`)

  s.threw(new Error('oops'))
})

t.test('stream failure', t => {
  const stream = new MP()
  const s = new Stdin({
    tapStream: stream
  })

  s.main(_ => {
    t.match(s.results, {
      ok: false,
      count: 2,
      pass: 1,
      fail: 1,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: {
        start: 1,
        end: 2,
        skipAll: false
      },
      failures: [{
        ok: false,
        id: 2,
        name: 'oops',
        diag: { tapCaught: 'stdinError' },
      }]
    })
    t.end()
  })

  s.stream.write(`TAP version 13
ok 1 - this is fine
`)

  s.stream.emit('error', new Error('oops'))
})

t.test('doting parent', t => {
  const EE = require('events').EventEmitter
  const parent = new EE()
  const tapStream = new MP()
  parent.on('stdin', child => {
    t.equal(child, s)
    t.end()
  })
  const s = new Stdin({tapStream, parent})
  s.main(() => {})
})
