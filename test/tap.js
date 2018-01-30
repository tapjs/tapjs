'use strict'
const node = process.execPath

const clean = require('./clean-stacks.js')

const cases = {
  ok: t => t.pass('fine'),
  notOk: t => t.fail('expected'),
  bail: t => t.bailout('cannot proceed'),
  'plan 0': t => t.plan(0, 'skip it all'),
  'plan unsatisied': t => t.plan(99),
  'too much': t => {
    t.plan(1)
    t.pass('a little')
    t.pass('a lot')
  },
  'stdout epipe': t => {
    t.pass('this is fine')
    const er = new Error('fake pipe')
    er.code = 'EPIPE'
    process.stdout.emit('some other event')
    setTimeout(() => process.stdout.emit('error', er))
  },
  'close even if exiting hard': t => {
    process.on('exit', (code) => process.exit(code))
    t.pass('make sure, really')
  },
  'unhandled promise': t => {
    t.pass('fine, i promise')
    Promise.reject(new Error('broken'))
  },
  'teardown event loop': t => {
    t.pass('fine')
    const interval = setInterval(() => {}, 10000)
    t.tearDown(() => clearInterval(interval))
  },
  'teardown throw': t => {
    t.on('teardown', () => { throw new Error('poop') })
    t.pass('x')
  },
  'process.exitCode polyfill': t => {
    Object.defineProperty(process, 'version', { value: 'v0.10.420' })
    t.fail(process.version)
  },
  'TAP_DEBUG=1': [
    () => process.env.TAP_DEBUG = '1',
    t => t.comment('this is fine')
  ],
  'NODE_DEBUG=tap': [
    () => process.env.NODE_DEBUG = 'tap',
    t => t.plan(0)
  ],
  TAP_GREP: [
    () => process.env.TAP_GREP = 'x\n/^y$/i',
    t => {
      t.test('axo', t => {
        t.test('yellow', t => Promise.reject(new Error('no')))
        t.test('Y', t => t.end())
        return t.test('y', t => t.test('this too', t => t.end()))
      })
      t.test('nope', t => Promise.reject(new Error('no')))
    }
  ],
  TAP_GREP_INVERT: [
    () => {
      process.env.TAP_GREP = 'x\n/^y$/i'
      process.env.TAP_GREP_INVERT = 1
    },
    t => {
      t.test('yes this one', t => {
        t.test('Y', t => Promise.reject(new Error('no')))
        t.test('yellow', t => t.end())
        return t.test('apple', t => t.test('this too', t => t.end()))
      })
      t.test('axo', t => Promise.reject(new Error('no')))
    }
  ],
  TAP_ONLY: [
    () => process.env.TAP_ONLY = '1',
    t => {
      t.only('only this one', t => t.end())
      t.test('not this one', t => Promise.reject(new Error('no')))
    }
  ],
  'timeout sigterm': t => {
    t.pass('fine')
    process.kill(process.pid, 'SIGTERM')
    setTimeout(() => {}, 1000)
  },
  'timeout sigterm with handle': t => {
    setTimeout(() => {}, 10000)
    t.pass('fine')
    process.kill(process.pid, 'SIGTERM')
  },
  'timeout sigterm many times': t => {
    const fs = require('fs')
    fs.readFile(__filename, (er, data) => {})
    t.pass('fine')
    process.kill(process.pid, 'SIGTERM')
    process.kill(process.pid, 'SIGTERM')
    process.kill(process.pid, 'SIGTERM')
    process.kill(process.pid, 'SIGTERM')
    process.kill(process.pid, 'SIGTERM')
    process.kill(process.pid, 'SIGTERM')
  },
  'autoend(false) with teardown': t => {
    t.autoend(false)
    t.teardown(() => console.log('tear it down'))
    setTimeout(() => {
      t.pass('this is fine')
      t.end()
    }, 50)
  },
  'autoend=false with teardown': t => {
    t.options.autoend = false
    t.teardown(() => console.log('tear it down'))
    setTimeout(() => {
      t.pass('this is fine')
      t.end()
    }, 50)
  },
}

const main = t => {
  const spawn = require('child_process').spawn
  const keys = Object.keys(cases)
  t.plan(keys.length)
  const env = Object.keys(process.env).reduce((env, k) => {
    env[k] = env[k] || process.env[k]
    return env
  }, { TAP_BAIL: '0', TAP_BUFFER: '0' })
  keys.forEach(k => t.test(k, t => {
    t.plan(3)
    const c = spawn(node, [__filename, k], { env: env })
    let out = ''
    c.stdout.on('data', c => out += c)
    let err = ''
    c.stderr.on('data', c => err += c)
    c.on('close', (code, signal) => {
      t.matchSnapshot({
        code: code,
        signal: signal
      }, 'exit status')
      t.matchSnapshot(clean(out), 'stdout')
      t.matchSnapshot(clean(err), 'stderr')
    })
  }))
}

const c = cases[process.argv[2]]
if (Array.isArray(c)) {
  c[0]()
  c[1](require('../lib/tap.js'))
} else if (typeof c === 'function')
  c(require('../lib/tap.js'))
else
  main(require('../lib/tap.js'))
