const Spawn = require('../lib/spawn.js')
const t = require('../')
const Test = t.Test
const Parser = require('tap-parser')
const node = process.execPath
const file = __filename

const main = () => {
  t.test('basic child process', t =>
    t.spawn(node, [ file, 'ok' ]))

  t.test('using a plan', t =>
    t.spawn(node, [ file, 'plan-ok' ]))

  t.test('hard quit', t =>
    t.spawn(node, [ file, 'sigself' ],
      { expectFail: true }))

  t.test('failing process', t =>
    t.spawn(node, [ file, 'not-ok' ],
            { expectFail: true }))

  t.test('timeout', t =>
    t.spawn(node, [ file, 'timeout' ], {
      expectFail: true,
      timeout: 1
    }))

  t.test('timeout KILL', t => {
    const s = new Spawn({
      command: node,
      args: [ file, 'catch-term' ],
      timeout: 500,
      buffered: true,
      name: 'killa'
    })
    s.main(_ => {
      t.equal(s.output, `
not ok 1 - timeout!
  ---
  expired: killa
  ...
1..1
# failed 1 test
`)
      t.end()
    })
  })

  t.test('skip stuff', t => {
    const tt = new Test({ buffered: true })
    tt.spawn(node, [ file, 'skip' ], {
      bail: true
    }, 'skipper')
    tt.spawn(node, [ file, 'skip-reason' ])
    tt.test('check it', ttt => {
      const output = tt.output
      t.match(output, 'skipper # SKIP')
      t.match(output,
        'spawn.js skip-reason # SKIP for no raisins')
      t.end()
    })
  })

  t.test('timeout before spawn is no-op', t => {
    const s = new Spawn({
      command: node,
      args: [ file, 'timeout' ]
    })
    s.timeout()
    t.end()
  })

  t.test('failure to spawn', t => {
    const s = new Spawn({
      command: 'something that does not exist',
      args: [],
      buffered: true,
      stdio: [0, 1, 2]
    })
    s.main(_ => {
      t.match(s.output,
        'not ok 1 - spawn something that does not exist ENOENT\n')
      t.end()
    })
  })

  t.test('failure to spawn even harder', t => {
    const cp = require('child_process')
    const spawn = cp.spawn
    const poop = new Error('poop error')
    cp.spawn = () => { throw poop }
    t.teardown(_ => cp.spawn = spawn)
    const s = new Spawn({
      command: 'poop',
      args: [],
      buffered: true,
      stdio: 'inherit'
    })
    s.main(_ => {
      t.match(s.output, 'not ok 1 - poop error\n')
      t.match(s.output, 'command: poop\n')
      t.end()
    })
  })

  t.throws(_ => new Spawn(),
           new TypeError('no command provided'))

  t.test('endAll called', t => {
    t.test('call proc', t => {
      const s = new Spawn({
        command: node,
        args: [ file, 'timeout' ],
        buffered: true
      })
      s.main(_ => {
        t.match(s.output, 'not ok 1 - test unfinished')
        t.end()
      })
      setTimeout(_ => s.endAll())
    })

    t.test('pre-call', t => {
      const cp = require('child_process')
      const spawn = cp.spawn
      const poop = new Error('poop error')
      cp.spawn = () => { throw poop }
      t.teardown(_ => cp.spawn = spawn)
      const s = new Spawn({
        command: node,
        args: [ file, 'timeout' ],
        buffered: true
      })
      s.endAll()
      t.match(s.output, 'not ok 1 - test unfinished')
      t.end()
    })
    t.end()
  })
}

switch (process.argv[2]) {
  case 'ok':
    t.pass('this is fine')
    break

  case 'plan-ok':
    t.plan(1)
    t.pass('this is fine')
    setTimeout(_ => _, 200)
    break

  case 'sigself':
    setTimeout(_ =>
      process.kill(process.pid, 'SIGQUIT'), 300)
    break

  case 'not-ok':
    process.exit(1)
    break

  case 'skip':
    t.plan(0)
    break

  case 'skip-reason':
    t.plan(0, 'for no raisins')
    break

  case 'catch-term':
    process.on('SIGTERM', _ => _)
  case 'timeout':
    setTimeout(_ => _, 5000)
    break

  default:
    main()
}
