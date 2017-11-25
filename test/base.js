'use strict'
const t = require('../')
const Base = require('../lib/base.js')

t.test('basic base', t => {
  const b = new Base()
  t.ok(b.passing())
  b.parser.end('TAP version 13\nok\n1..1\n')
  b.setEncoding('utf8')
  t.equal(b.read(), 'TAP version 13\nok\n1..1\n')
  t.end()
})

t.test('skip + debug', t => {
  const b = new Base({ skip: true, debug: true, name: 'name' })

  const error = console.error
  t.teardown(() => console.error = error)
  let output
  console.error = msg => output = msg

  t.equal(b.main, Base.prototype.main)
  t.notEqual(b.debug, Base.prototype.debug)
  b.debug('hello', { world: '420' })
  console.error = error
  t.match(output.trim(), /^TAP [0-9]+ name: hello \{ world: '420' \}$/)
  t.test('call main', t => b.main(t.end))
  t.end()
})

t.test('name with carriage return', t => {
  const b = new Base({ name: 'foo\nbar', buffered: true })
  t.equal(b.name, 'foo bar')
  b.parser.write('TAP version 13\nok\n1..1\n')
  b.setEncoding('utf8')
  t.equal(b.read(), null)
  t.equal(b.output, 'TAP version 13\nok\n1..1\n')
  t.end()
})

t.test('timeouts', t => {
  const b = new Base()
  t.equal(b.timer, null)
  t.equal(b.time, null)
  t.equal(b.hrtime, null)
  t.equal(b.start, 0)
  b.setTimeout(1)
  const hr = b.hrtime
  t.ok(b.timer)
  b.setTimeout(2)
  t.equal(b.hrtime, hr, 'do not reset hrtime on subsequent timeout call')
  b.setTimeout(0)
  t.equal(b.timer, null)
  b.setTimeout(1)
  // process will end otherwise, because timer is unrefed
  setTimeout(_ => _, 10)
  return new Promise(resolve => {
    b.on('timeout', _ => {
      t.notOk(b.parser.ok)
      resolve()
    })
  })
})

t.test('bailout', t => {
  t.plan(4)
  const b1 = new Base()
  b1.on('bailout', reason => t.equal(reason, 'fire'))

  const b2 = new Base()
  b2.on('bailout', reason => t.equal(reason, ''))

  b1.parser.write('TAP version 13\nBail out! fire\n')
  b2.parser.write('TAP version 13\nBail out!\n')

  t.equal(b1.bailedOut, 'fire')
  t.equal(b2.bailedOut, true)
})

t.test('throwing stuff', t => {
  const util = require('util')
  const sign = {
    name: 'ace',
    at: {
      line: Number,
      column: Number,
      file: 'test/base.js'
    },
    stack: String,
    test: 'ace'
  }

  t.test('domain error', t => {
    const b = new Base({ name: 'ace', buffered: true })
    b.domain.emit('error', new Error('this is fine'))
    t.notOk(b.parser.ok)
    t.end()
  })

  t.test('calling .threw', t => {
    const b = new Base({ name: 'ace' })
    const result = b.threw(new Error('this is fine'))
    t.match(result, sign)
    t.notOk(b.parser.ok)
    t.end()
  })

  const c = new Base()
  c.parser.end('TAP version 13\nok\n1..1\n')
  t.match(c.results, {
    ok: true,
    count: 1,
    pass: 1,
    fail: 0,
    bailout: false,
    todo: 0,
    skip: 0,
    plan: {
      start: 1,
      end: 1,
      skipAll: false,
      skipReason: '',
      comment: ''
    },
    failures: []
  })


  const ce = console.error
  const logs = []
  const expect = []
  console.error = function () {
    const message = util.format.apply(util, arguments)
    logs.push(message)
  }

  expect.push(
    'Error: ok c',
    /^    at /,
    '{}'
  )
  c.threw(new Error('ok c'))

  expect.push('{ not: \'really an error\' }')
  c.threw({ not: 'really an error' })

  expect.push(
    'RangeError:',
    /^    at /,
    '{ type: \'RangeError\' }'
  )
  c.threw(new RangeError())

  expect.push(
    'Error: ',
    /^    at /,
    '{ foo: \'bar\' }'
  )
  const namelessOne = new TypeError()
  Object.defineProperty(namelessOne, 'name', { value: undefined })
  namelessOne.foo = 'bar'
  c.threw(namelessOne)


  const d = new Base({ name: 'duh' })
  d.parent = c
  d.parser.end('TAP version 13\nok\n1..1\n')

  expect.push(
    'ReferenceError: get it?',
    /^    at /,
    '{ name: \'duh\', type: \'ReferenceError\', test: \'duh\' }'
  )
  d.threw(new ReferenceError('get it?'))

  console.error = ce
  t.match(logs, expect)
  t.end()
})

t.test('inspect', t => {
  const util = require('util')
  const b = new Base({ name: 'ace', exitCode: 999 })
  const ins = util.inspect(b)
  t.match(ins, /^Base ./)
  t.match(ins, 'exitCode: 999')
  t.match(ins, 'buffered: false')
  t.match(ins, 'todo: false')
  t.match(ins, 'skip: false')
  t.match(ins, 'only: false')
  t.match(ins, 'buffered: false')
  t.end()
})

t.test('oncomplete', t => {
  const cases = [
    ['TAP version 13\nok\n1..1\n', {}, {
      ok: true,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: {
        start: 1,
        end: 1
      }
    }],
    ['TAP version 13\npragma +strict\nwitaf\nok\n1..1\n', {}, {
      ok: false,
      count: 1,
      pass: 1,
      fail: 1,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: {
        start: 1,
        end: 1
      },
      failures: [
        { tapError: 'Non-TAP data encountered in strict mode',
          data: 'witaf\n' }
      ]
    }],
    ['TAP version 13\n1..0\n', { results: { foo: 'bar' }}, {
      foo: 'bar',
      plan: {
        start: 1,
        end: 0
      }
    }],
    ['TAP version 13\n1..1\nok\n', { timeout: 999 }, {
      time: Number
    }]
  ]

  return Promise.all(cases.map(c => t.resolveMatch(new Promise(done => {
    const b = new Base(c[1])
    b.on('complete', results => results.time = b.time)
    b.on('end', _ => done(b.results))
    if (c[1].results)
      b.results = c[1].results
    if (c[1].timeout)
      b.setTimeout(c[1].timeout)
    b.parser.end(c[0])
  }), c[2])))
})
