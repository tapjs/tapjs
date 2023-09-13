import { spawn } from 'child_process'
import { Minipass } from 'minipass'
import stripAnsi from 'strip-ansi-cjs'
import { fileURLToPath } from 'url'
import { env } from '../dist/esm/proc.js'
import { tap } from '../dist/esm/tap.js'

const __filename = fileURLToPath(import.meta.url)

// force this because otherwise the output will be different
// in all the tests we run.
process.env.TAP_BAIL = '0'
env.TAP_BAIL = '0'

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
    stripAnsi(s)
      .replace(/# time=[0-9.]+m?s\n/g, '# time={TIME}\n')
      .replace(/(\n    at [^\n]+)+/g, '\n    {JS STACK}')
      .replace(/connectionKey: [0-9a-z:.]+/g, 'connectionKey: {...}')
      .replace(/^TAP [0-9]+ /gm, 'TAP {PID} ')
      .replace(/\(([^:]+):[0-9]+:[0-9]+\)/g, '($1:##:##)')
      .replace(/([^:]+):[0-9]+:[0-9]+/g, '$1:##:##')
      .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
      .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
      .replace(
        /After\.#callTeardown \([^)]+\)/g,
        'After.#callTeardown (...)'
      )
      .replace(/TAP\.#t\.onEOF \([^)]+\)/g, 'TAP.#t.onEOF (...)')
      // node 16 puts this here and node 18 doesn't
      .replace(/^\s*Function\.all\n/gm, '')
      .replace(/^\s*async Promise\.all[^\n]*\n/gm, '')
      // node 20 puts <anonymous> on some stack trace frames
      .replace(
        /(\s|^)<anonymous> \(test\/tap\.ts:##:##\)\n/g,
        '$1test/tap.ts:##:##\n'
      )
      // node 20 puts cruft around thrown strings
      .replace(
        /^\s*node:internal[^:]+:[0-9]+\s+internalBinding[^\n]+\s+\^\s+([^\n]+)(.|\s)*$/,
        "'$1'\n"
      )
      // non-deterministic and version-specific
      .replace(/ +requests:\n +- type: FileHandleCloseReq\n/g, '')
      .replace(/requests:\n( {6,}[^\n]+\n)+/g, '__REQUESTS__')
      .replace(/handles:\n( {6,}[^\n]+\n)+/g, '__HANDLES__')
      .replace(/(__REQUESTS__|__HANDLES__)+/g, '{{OPEN THINGS}}\n')

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
      let outEnded = false
      child.stdout.on('end', () => outEnded = true)
      const res = await new Promise<Result>(res => {
        child.on('close', (code, signal) => {
          t.equal(outEnded, true, 'output ended')
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
  topLevel: () => {
    delete process.env.TAP_CHILD_ID
    delete env.TAP_CHILD_ID
    const t = tap()
    t.pass('this is fine')
  },

  timeoutSigalrm: () => {
    const t = tap()
    t.pass('this is fine')
    process.emit('SIGALRM')
    setTimeout(() => {}, 10000)
  },

  timeoutSigalrmWithChild: () => {
    const t = tap()
    t.test('child test', () => {})
    process.emit('SIGALRM')
    setTimeout(() => {}, 10000)
  },

  timeoutSigalrmWithHandle: () => {
    const t = tap()
    t.test('server', async t => {
      t.pass('this is fine')
      const http = await import('http')
      const s = http.createServer(() => {})
      s.listen(13245)
      process.emit('SIGALRM')
      setTimeout(() => s.close(), 10000)
    })
  },

  timeoutMessage: () => {
    process.env.TAP_CHILD_KEY = 'tap abort key'
    process.env.TAP_CHILD_ID = 'tap child id'
    const t = tap()
    t.pass('this is fine')
    setTimeout(() => {}, 10000)
    //@ts-ignore
    process.emit('message', {
      tapAbort: 'timeout',
      key: process.env.TAP_CHILD_KEY,
      child: process.env.TAP_CHILD_ID,
    })
    setTimeout(() => {}, 10000)
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

  bailoutKillsProcess: () => {
    const t = tap()
    t.pass('this is fine')
    setInterval(() => {}, 10000)
    t.bailout('do not continue')
  },

  bailoutSubtestKillsProcess: () => {
    const t = tap()
    t.test('bailer', t => {
      t.pass('this is fine')
      setInterval(() => {}, 10000)
      t.bailout()
    })
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

  setTimeoutInSpawn: () => {
    const t = tap()
    const { subtest } = t.spawn(
      process.execPath,
      [
        '-e',
        `
    const t = require('tap')
    t.setTimeout(12345)
    // give the message time to land
    setTimeout(() => {}, 100)
    t.pass('this is fine')
        `,
      ],
      {
        timeout: 4321,
      }
    )
    subtest!.on('end', () => {
      t.equal(subtest?.options.timeout, 12345, 'updated timeout')
    })
  },

  setTimeoutInWorker: () => {
    const t = tap()
    const { subtest } = t.worker(
      `
    const t = require('tap')
    t.setTimeout(12345)
    // give the message time to land
    setTimeout(() => {}, 100)
    t.pass('this is fine')
        `,
      {
        eval: true,
        timeout: 4321,
      }
    )
    subtest!.on('end', () => {
      t.equal(subtest?.options.timeout, 12345, 'updated timeout')
    })
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

  boundMethods: () => {
    const t = tap()
    const { test, end, beforeEach, afterEach } = t
    beforeEach(t => console.error('beforeEach', t.name))
    afterEach(t => console.error('afterEach', t.name))
    test('child test', t => {
      const { test, end } = t
      test('second child', t => {
        const { pass, end } = t
        pass('this is fine')
        end()
      })
      end()
    })
    end()
  },
}

const fn = process.argv[2] ? cases[process.argv[2]] : main
if (!fn) throw new Error('unknown test case: ' + process.argv[2])
fn()
