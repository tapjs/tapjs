import { Worker as NodeWorker } from 'node:worker_threads'
import t from 'tap'
import { TestBase } from '../dist/cjs/test-base.js'
import { Worker } from '../dist/cjs/worker.js'

t.test('basic instantiation', t => {
  t.throws(() => new Worker({}), {
    message: 'no filename provided for t.worker()',
  })
  const w = new Worker({
    filename: __filename,
    bail: false,
  })
  t.match(w, {
    filename: __filename,
    env: {
      ...process.env,
      TAP_ABORT_KEY: String,
      TAP_CHILD_ID: String,
      TAP: '1',
      TAP_BAIL: '0',
    },
  })
  t.end()
})

t.test('spawn something', t => {
  const { TAP_CHILD_ID } = process.env
  t.teardown(() => (process.env.TAP_CHILD_ID = TAP_CHILD_ID))
  process.env.TAP_CHILD_ID = '99'
  const filename =
    t.testdir({
      'file.js': `
        (function log (...a) { return (console.log(...a), log) })
        ('TAP version 14')
        ('1..3')
        ('ok 1 - this is fine')
        ('ok 2 - later maybe # TODO')
        ('not ok 3 - ' + process.env.x)
      `,
    }) + '/file.js'
  const w = new Worker({
    filename,
    env: { x: 'y' },
  })
  t.equal(w.worker, null)
  w.on('preprocess', options => {
    t.matchOnly(options, {
      name: String,
      eval: false,
      filename,
      stdout: true,
      env: {
        x: 'y',
        TAP_CHILD_ID: '99',
        TAP: '1',
        TAP_BAIL: '0',
        TAP_ABORT_KEY: String,
      },
    })
  })
  w.on('process', worker => t.type(worker, NodeWorker))
  w.main(async () => {
    t.match(w.results, {
      ok: false,
      count: 3,
      pass: 2,
      fail: 1,
      todo: 1,
      failures: [
        {
          ok: false,
          name: 'y',
          id: 3,
          buffered: false,
          fullname: String,
        },
      ],
      plan: {
        start: 1,
        end: 3,
        skipAll: false,
      },
      todos: [
        {
          ok: true,
          name: 'later maybe',
          id: 2,
          todo: true,
          fullname: String,
        },
      ],
    })
    t.equal(
      await w.concat(),
      `TAP version 14
1..3
ok 1 - this is fine
ok 2 - later maybe # TODO
not ok 3 - y
`
    )

    t.end()
  })
})

t.test('timeout', t => {
  const { TAP_CHILD_ID } = process.env
  t.teardown(() => (process.env.TAP_CHILD_ID = TAP_CHILD_ID))
  delete process.env.TAP_CHILD_ID
  const parent = new TestBase({})
  parent.main(() => {})
  const filename =
    t.testdir({
      'file.js': 'setTimeout(() => {}, 10000)',
    }) + '/file.js'
  const w = new Worker({
    filename,
    timeout: 1,
    parent,
  })
  setTimeout(() => {}, 100)
  w.main(async () => {
    parent.end()
    t.equal(
      await w.concat(),
      'TAP version 14\n1..0 # no tests found\n'
    )
    t.equal(
      await parent.concat(),
      `TAP version 14
not ok 1 - timeout!
  ---
  expired: ${w.name}
  message: timeout!
  ...

1..1
`
    )

    t.end()
  })
})

t.test('no tests', t => {
  const w = new Worker({
    eval: true,
    filename: 'console.log("TAP version 14\\n1..0 # no tests")',
  })
  w.main(async () => {
    t.equal(await w.concat(), 'TAP version 14\n1..0 # no tests\n')
    t.equal(w.options.skip, 'no tests')
    t.equal(w.results?.plan.skipAll, true)
    t.equal(w.results?.plan.skipReason, 'no tests')
    t.end()
  })
})

t.test('no tests, no reason', t => {
  const w = new Worker({
    eval: true,
    filename: 'console.log("TAP version 14\\n1..0")',
  })
  w.main(async () => {
    t.equal(await w.concat(), 'TAP version 14\n1..0\n')
    t.equal(w.options.skip, true)
    t.equal(w.results?.plan.skipAll, true)
    t.end()
  })
})

t.test('abort unfinished', t => {
  const w = new Worker({
    eval: true,
    filename: 'setTimeout(() => {}, 100)',
  })
  w.main(async () => {
    t.equal(
      await w.concat(),
      `TAP version 14

not ok 1 - test unfinished

1..1
`
    )
    t.end()
  })
  w.endAll()
})

t.test('parse timeout comment', t => {
  const w = new Worker({
    eval: true,
    bail: true,
    filename: `
      console.log('TAP version 14')
      console.log('# ' + process.env.TAP_BAIL)
      console.log('# timeout=1234')
      setTimeout(() => {
        console.log('1..1')
        console.log('ok 1 - this is fine')
      }, 200)
    `,
    timeout: 200,
  })
  w.on('process', () => {
    const { setTimeout } = w
    w.setTimeout = (n: number) => {
      setTimeout.call(w, n)
      t.equal(n, 1234)
      t.end()
      w.setTimeout = setTimeout
    }
  })
  w.main(() => {})
})

t.test('send message from worker to make a comment', t => {
  const w = new Worker({
    eval: true,
    childId: 1234,
    filename: `
      const { parentPort } = require('node:worker_threads')
      console.log('TAP version 14')
      console.log('1..1')
      console.log('ok 1')
      parentPort.postMessage({
        hello: 'world',
        childId: process.env.TAP_CHILD_ID,
      })
      `,
  })
  w.main(async () => {
    // the message is async, so can come in arbitrary order when
    // putting the system under load by running entire suite.
    const res = String(await w.concat())
    t.match(res, `# { hello: 'world', childId: '1234' }\n`)
    t.equal(
      res.split(`# { hello: 'world', childId: '1234' }\n`).join(''),
      `TAP version 14
1..1
ok 1
`
    )
    t.end()
  })
})
