import { ChildProcess } from 'child_process'
import { basename } from 'path'
import t from 'tap'
import { Spawn } from '../dist/cjs/spawn.js'
import { TestBase } from '../dist/cjs/test-base.js'

t.test('procName', t => {
  const { procName } = Spawn
  const cases: [
    cwd: string,
    cmd: string,
    args: string[],
    expect: string
  ][] = [
    [
      '/some/path',
      process.execPath,
      ['/some/path/to/test.js'],
      basename(process.execPath) + ' ./to/test.js',
    ],
    [
      '/some/path',
      process.execPath,
      ['/x/y/z.js'],
      basename(process.execPath) + ' /x/y/z.js',
    ],
    [
      '/',
      'command',
      ['some random', 'args'],
      'command some random args',
    ],
  ]
  t.plan(cases.length)
  for (const [cwd, cmd, args, expect] of cases) {
    t.equal(procName(cwd, cmd, args), expect, { cwd, cmd, args })
  }
  t.end()
})

t.test('basic instantiation', t => {
  t.throws(() => new Spawn({}), {
    message: 'no command provided for t.spawn()',
  })
  const s = new Spawn({
    command: 'command',
    bail: false,
  })
  t.match(s, {
    cwd: process.cwd(),
    command: 'command',
    args: [],
    stdio: [0, 'pipe', 2, 'ipc'],
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
  const command = process.execPath
  const args = [
    '-e',
    `
      (function log (...a) { return (console.log(...a), log) })
      ('TAP version 14')
      ('1..3')
      ('ok 1 - this is fine')
      ('ok 2 - later maybe # TODO')
      ('not ok 3 - ' + process.env.x)
    `,
  ]
  const s = new Spawn({
    command,
    args,
    env: { x: 'y' },
    stdio: [0, 1, 2],
  })
  t.strictSame(s.stdio, [0, 'pipe', 2, 'ipc'])
  t.equal(s.proc, null)
  s.on('preprocess', options => {
    t.matchOnly(options, {
      cwd: process.cwd(),
      env: {
        x: 'y',
        TAP_CHILD_ID: String,
        TAP: '1',
        TAP_BAIL: '0',
        TAP_ABORT_KEY: String,
      },
      stdio: [0, 'pipe', 2, 'ipc'],
      externalID: String,
    })
  })
  s.on('process', proc => t.type(proc, ChildProcess))
  s.main(async () => {
    t.match(s.results, {
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
      await s.concat(),
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
  const parent = new TestBase({})
  parent.main(() => {})
  const s = new Spawn({
    command: process.execPath,
    args: ['-e', 'setTimeout(() => {}, 10000)'],
    timeout: 1,
    parent,
  })
  setTimeout(() => {}, 100)
  s.main(async () => {
    parent.end()
    t.equal(
      await s.concat(),
      'TAP version 14\n1..0 # no tests found\n'
    )

    t.equal(
      await parent.concat(),
      `TAP version 14
not ok 1 - timeout!
  ---
  expired: ${s.name}
  message: timeout!
  ...

1..1
`
    )
    t.end()
  })
})

t.test('no tests', t => {
  const s = new Spawn({
    command: process.execPath,
    args: ['-e', 'console.log("TAP version 14\\n1..0 # no tests")'],
    stdio: 'pipe',
  })
  t.strictSame(s.stdio, ['pipe', 'pipe', 'pipe', 'ipc'])
  s.main(async () => {
    t.equal(await s.concat(), 'TAP version 14\n1..0 # no tests\n')
    t.equal(s.options.skip, 'no tests')
    t.equal(s.results?.plan.skipAll, true)
    t.equal(s.results?.plan.skipReason, 'no tests')
    t.end()
  })
})

t.test('no tests, no reason', t => {
  const s = new Spawn({
    command: process.execPath,
    args: ['-e', 'console.log("TAP version 14\\n1..0")'],
    stdio: 'pipe',
  })
  t.strictSame(s.stdio, ['pipe', 'pipe', 'pipe', 'ipc'])
  s.main(async () => {
    t.equal(await s.concat(), 'TAP version 14\n1..0\n')
    t.equal(s.options.skip, true)
    t.equal(s.results?.plan.skipAll, true)
    t.end()
  })
})

t.test('abort unfinished', t => {
  const s = new Spawn({
    command: process.execPath,
    args: ['-e', 'setTimeout(() => {}, 100)'],
  })
  s.main(async () => {
    t.equal(
      await s.concat(),
      `TAP version 14

not ok 1 - test unfinished

1..1
`
    )
    t.end()
  })
  s.endAll()
})

t.test('parse timeout comment', t => {
  const s = new Spawn({
    command: process.execPath,
    cwd: t.testdir(),
    bail: true,
    args: [
      '-e',
      `
      console.log('TAP version 14')
      console.log('# ' + process.env.TAP_BAIL)
      console.log('# timeout=1234')
      setTimeout(() => {
        console.log('1..1')
        console.log('ok 1 - this is fine')
      }, 200)
    `,
    ],
    timeout: 200,
  })
  s.on('process', () => {
    const { setTimeout } = s
    s.setTimeout = (n: number) => {
      setTimeout.call(s, n)
      t.equal(n, 1234)
      t.end()
      s.setTimeout = setTimeout
    }
  })
  s.main(() => {})
})
