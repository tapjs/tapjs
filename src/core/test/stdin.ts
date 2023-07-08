import { Minipass } from 'minipass'
import t from 'tap'
import { Stdin } from '../dist/cjs/stdin.js'
import { TestBase } from '../dist/cjs/test-base.js'

t.test('basic instantiation uses process.stdin', t => {
  const s = new Stdin({})
  t.equal(s.inputStream, process.stdin)
  t.end()
})

t.test('process some tap', t => {
  const parent = new TestBase({})
  const tapStream = new Minipass()
  t.equal(tapStream.paused, false)
  let emitted!: Stdin
  parent.on('stdin', s => {
    emitted = s
  })
  const s = new Stdin({ tapStream, parent })
  t.equal(emitted, undefined)
  t.equal(s.inputStream, tapStream)
  t.equal(tapStream.paused, true)
  tapStream.write('TAP version 14\n1..3\n')
  s.main(() => {
    t.match(s.results, {
      ok: false,
      count: 3,
      pass: 2,
      fail: 1,
      skip: 1,
      failures: [
        {
          ok: false,
          name: 'fail',
          id: 3,
        },
      ],
      plan: {
        start: 1,
        end: 3,
      },
      skips: [
        {
          ok: true,
          name: 'yes',
          id: 2,
          skip: true,
          fullname: '/dev/stdin > yes',
        },
      ],
    })
    t.end()
  })
  t.equal(emitted, s)
  t.equal(tapStream.flowing, true)

  tapStream.write(
    'ok 1 - this is fine\nok 2 - yes # SKIP\nnot ok 3 - fail\n'
  )
  tapStream.end()
})

t.test('timeout', t => {
  const tapStream = new Minipass()
  const s = new Stdin({ timeout: 1, tapStream })
  s.timeout = () => {
    t.pass('got timeout')
    t.end()
  }
  s.main(() => {})
  setTimeout(() => {}, 10)
})

t.test('stream error', t => {
  const tapStream = new Minipass()
  const s = new Stdin({ tapStream })
  s.main(() => {})
  const er = new Error('yoooooo')
  tapStream.emit('error', er)
  t.match(s.results?.failures[0], {
    ok: false,
    name: 'yoooooo',
    id: 1,
    buffered: false,
    tapError: null,
    skip: false,
    todo: false,
    previous: null,
    plan: null,
    diag: {
      stack: String,
      at: {
        fileName: 'test/stdin.ts',
        lineNumber: Number,
        columnNumber: Number,
        typeName: 'Test',
        methodName: '<anonymous>',
        functionName: 'Test.<anonymous>',
      },
      tapCaught: 'stdinError',
      test: '/dev/stdin',
    },
    time: null,
    fullname: '/dev/stdin > yoooooo',
  })
  t.match(er, {
    test: '/dev/stdin',
    tapCaught: 'stdinError',
  })
  t.end()
})
