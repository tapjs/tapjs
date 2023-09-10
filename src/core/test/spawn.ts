import '../dist/mjs/index.js'
import '../dist/cjs/index.js'

import { ChildProcess } from 'child_process'
import { basename } from 'path'
import t from 'tap'
import { Spawn as SpawnCJS } from '../dist/cjs/spawn.js'
import { TestBase as TestBaseCJS } from '../dist/cjs/test-base.js'
import { Spawn as SpawnMJS } from '../dist/mjs/spawn.js'
import { TestBase as TestBaseMJS } from '../dist/mjs/test-base.js'

const classes = [
  ['cjs', SpawnCJS, TestBaseCJS],
  ['mjs', SpawnMJS, TestBaseMJS],
] as const


t.plan(2)
for (const [dialect, Spawn, TestBase] of classes) {
  t.test(dialect, t => {
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
          TAP_CHILD_KEY: String,
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
        externalID: 'yolo',
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
            TAP_CHILD_KEY: String,
            TAP_JOB_ID: String,
          },
          stdio: [0, 'pipe', 2, 'ipc'],
          externalID: 'yolo',
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
        //@ts-ignore
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
  ...

1..1
`
        )
        t.end()
      })
    })

    t.test('more time plz', t => {
      const parent = new TestBase({})
      parent.main(() => {})
      const s = new Spawn({
        command: process.execPath,
        args: [
          '-e',
          `
    const t = require('tap')
    t.setTimeout(12345)
    // give the message time to land
    setTimeout(() => {}, 100)
    t.pass('this is fine')
    `,
        ],
        timeout: 4321,
        //@ts-ignore
        parent,
      })
      s.main(async () => {
        parent.end()
        t.equal(s.options.timeout, 12345)
        t.end()
      })
    })

    t.test('other ipc becomes comments', t => {
      const parent = new TestBase({})
      parent.main(() => {})
      const s = new Spawn({
        command: process.execPath,
        args: [
          '-e',
          `
    const t = require('tap')
    process.send(['this is %j', { a: { formatted: 'message' }}])
    process.send({ but: { 'this is': [ 'just', 'an', 'object'] }})
    // give the message time to land
    setTimeout(() => {}, 100)
    t.pass('this is fine')
    `,
        ],
        //@ts-ignore
        parent,
      })
      s.main(async () => {
        parent.end()
        // messages can occur out of order from stdio
        const found = new Set((await s.concat()).trim().split('\n'))
        const wanted = new Set([
          `# this is {"a":{"formatted":"message"}}`,
          `# { but: { 'this is': [ 'just', 'an', 'object' ] } }`,
          'TAP version 14',
          'ok 1 - this is fine',
          '1..1',
        ])
        t.strictSame(found, wanted, 'output lines, in any order')
        t.end()
      })
    })

    t.test('no tests', t => {
      const s = new Spawn({
        command: process.execPath,
        args: [
          '-e',
          'console.log("TAP version 14\\n1..0 # no tests")',
        ],
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

    t.test('no tests, no reason, no TAP at all', t => {
      const s = new Spawn({
        command: process.execPath,
        args: ['-e', ''],
        stdio: 'pipe',
      })
      t.strictSame(s.stdio, ['pipe', 'pipe', 'pipe', 'ipc'])
      s.main(async () => {
        t.equal(
          await s.concat(),
          'TAP version 14\n1..0 # no tests found\n'
        )
        t.equal(s.options.skip, 'no tests found')
        t.match(s.results?.plan, {
          start: 1,
          end: 0,
          skipAll: true,
          skipReason: 'no tests found',
          comment: 'no tests found',
        })
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
      }, 300)
    `,
        ],
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
    t.end()
  })
}
