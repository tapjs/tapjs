import { spawn } from 'child_process'
import { Minipass } from 'minipass'
import { tap } from '../dist/cjs/tap.js'

type Result = {
  code: number | null
  signal: NodeJS.Signals | null
  stdout: string
  stderr: string
  name: string
}

const main = () => {
  const t = tap({ some: 'options' })
  t.equal(t.options.some, 'options')
  const clean = (s: string) =>
    s
      .replace(/# time=[0-9.]+m?s\n/g, '# time={TIME}\n')
      .replace(/(\n    at [^\n]+)+/g, '\n    {JS STACK}')
      .replace(/connectionKey: [0-9a-z:.]+/g, 'connectionKey: {...}')
      .replace(/^TAP [0-9]+ /gm, 'TAP {PID} ')
      .replace(/\(([^:]+):[0-9]+:[0-9]+\)/g, '($1:##:##)')
      .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
      .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
      .replace(
        /After\.#callTeardown \([^)]+\)/g,
        'After.#callTeardown (...)'
      )
      .replace(/TAP\.#t\.onEOF \([^)]+\)/g, 'TAP.#t.onEOF (...)')
  t.formatSnapshot = (res: Result) => {
    return {
      ...res,
      // have to rig this one for windows, because we won't actually exit
      // with the same signal we expect in those cases.
      signal: res.signal === null ? null : 'SIGNAL',
      stdout: clean(res.stdout),
      stderr: clean(res.stderr),
    }
  }

  t.jobs = 5
  t.equal(tap(), t)

  for (const c of Object.keys(cases)) {
    t.test(c, async t => {
      const child = spawn(process.execPath, [
        ...process.execArgv,
        __filename,
        c,
      ])
      const out: Buffer[] = []
      const err: Buffer[] = []
      child.stdout.on('data', c => out.push(c))
      child.stderr.on('data', c => err.push(c))
      const res = await new Promise<Result>(res => {
        child.on('close', (code, signal) => {
          res({
            name: c,
            code,
            signal,
            stdout: Buffer.concat(out).toString(),
            stderr: Buffer.concat(err).toString(),
          })
        })
      })
      t.matchSnapshot(res)
    })
  }
}

const cases: Record<string, () => any> = {
  timeoutSigalrm: () => {
    const t = tap()
    t.pass('this is fine')
    process.emit('SIGALRM')
  },

  timeoutSigalrmWithHandle: () => {
    const t = tap()
    t.pass('this is fine')
    require('http')
      .createServer(() => {})
      .listen(13245)
    process.emit('SIGALRM')
  },

  timeoutSigint: () => {
    delete process.env.TAP_CHILD_ID
    const t = tap()
    t.pass('this is fine')
    process.emit('SIGINT')
  },

  timeoutMessage: () => {
    process.env.TAP_ABORT_KEY = 'tap abort key'
    process.env.TAP_CHILD_ID = 'tap child id'
    const t = tap()
    t.pass('this is fine')
    //@ts-ignore
    process.emit('message', {
      tapAbort: 'timeout',
      key: process.env.TAP_ABORT_KEY,
      child: process.env.TAP_CHILD_ID,
    })
  },

  ok: () => tap().pass('this is fine'),
  notOk: () => tap().fail('not fine'),

  teardown: () => {
    const t = tap()
    t.teardown(() => {
      console.log('teardown running')
    })
    t.pass('fine')
  },

  teardownServer: () => {
    const t = tap()
    const i = setInterval(() => {}, 30000)
    t.teardown(() => clearInterval(i))
    t.pass('fine')
  },

  bailout: () => {
    const t = tap()
    t.bailout('cannot proceed')
  },

  closeEvenIfExitingHard: () => {
    const t = tap()
    process.on('exit', code => process.exit(code))
    t.pass('make sure, really')
  },

  nodeDebugTap: () => {
    process.env.NODE_DEBUG = 'tap'
    const t = tap()
    t.plan(0)
  },

  tapDebug: () => {
    process.env.TAP_DEBUG = '1'
    const t = tap()
    t.plan(0)
  },

  doubleRegister: () => {
    const t = tap()
    t.register()
    t.register()
  },

  planUnsatisfied: () => tap().plan(99),
  planExceeded: () => {
    const t = tap()
    t.plan(1)
    t.pass('fine')
    t.pass('not fine')
  },

  processMissing: () => {
    const { process } = globalThis
    //@ts-ignore
    globalThis.process = null
    const t = tap()
    t.pass('this is fine')
    // XXX: https://github.com/cspotcode/node-source-map-support/pull/48
    t.teardown(() => (globalThis.process = process))
  },

  pipe: () => {
    const mp = new Minipass()
    mp.pipe(process.stdout)
    const t = tap()
    t.resume()
    t.pause()
    mp.write('1\n')
    t.pipe(mp)
    t.pass('2')
    t.pause()
    t.pass('4')
    mp.write('3\n')
    t.pass('5')
    t.resume()
    t.end()
  },

  setTimeout: () => {
    const t = tap()
    t.setTimeout(1234)
    t.pass('fine')
  },

  stdoutEpipe: () => {
    const t = tap()
    t.pass('this is fine')
    const er: NodeJS.ErrnoException = new Error('fake pipe')
    er.code = 'EPIPE'
    process.stdout.emit('some other event')
    setTimeout(() => process.stdout.emit('error', er))
  },

  teardownThrowNonerror: () => {
    const t = tap()
    t.teardown(() => {
      throw 'poop'
    })
    t.pass('x')
  },

  teardownThrowError: () => {
    const t = tap()
    t.teardown(() => {
      throw new Error('poop')
    })
    t.pass('x')
  },

  teardownReject: () => {
    const t = tap()
    t.teardown(async () => {
      throw new Error('poop')
    })
    t.pass('x')
  },

  throwNonError: () => {
    const t = tap()
    t.pass('this is fine')
    throw 'not an error'
  },

  throwError: () => {
    const t = tap()
    t.pass('this is fine')
    throw new Error('poop')
  },

  throwBeforeRegister: () => {
    throw 'not yet registered'
  },

  unfinished: () => {
    const t = tap()
    t.test('child test', () => {})
  },
}

const fn = process.argv[2] ? cases[process.argv[2]] : main
if (!fn) throw new Error('unknown test case: ' + process.argv[2])
fn()
