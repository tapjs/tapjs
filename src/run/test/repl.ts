import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

// use clean env in tests
const originalEnv = { ...process.env }
originalEnv._TAP_REPL = '0'
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } }),
)

t.test('do not run if already in the repl', async t => {
  process.env._TAP_REPL = '1'
  const errs = t.capture(console, 'error')
  const { repl } = await t.mockImport<
    typeof import('../dist/esm/repl.js')
  >('../dist/esm/repl.js')
  await repl([], {} as unknown as LoadedConfig)
  t.strictSame(errs.args(), [['you are already in the tap repl']])
  t.equal(process.exitCode, 1)
  process.exitCode = 0
})

class MockRepl {
  parsed?: string
  result?: any
  running: boolean = false
  displayPromptCalled = false
  async parseCommand(cmd: string) {
    this.parsed = cmd
    return this.result
  }
  repl?: { displayPrompt: () => any }
  start() {
    this.running = true
    this.repl = {
      displayPrompt: () => (this.displayPromptCalled = true),
    }
  }
  close() {
    this.running = false
  }
}

t.test('run a repl with no args', async t => {
  const r = new MockRepl()
  const logs = t.capture(console, 'log')
  const errs = t.capture(console, 'error')
  const { repl } = await t.mockImport<
    typeof import('../dist/esm/repl.js')
  >('../dist/esm/repl.js', {
    '@tapjs/processinfo': {
      ProcessInfo: {
        load: () => ({}),
      },
    },
    '../dist/esm/repl/index.js': {
      Repl: class Repl {
        constructor() {
          return r
        }
      },
    },
  })
  r.result = 'result'
  await repl([], { projectRoot: 'cwd' } as unknown as LoadedConfig)
  t.equal(r.parsed, undefined)
  t.equal(r.running, true)
  t.strictSame(logs(), [])
  t.strictSame(errs(), [])
})

t.test('run a repl with args', async t => {
  const r = new MockRepl()
  const logs = t.capture(console, 'log')
  const errs = t.capture(console, 'error')
  const { repl } = await t.mockImport<
    typeof import('../dist/esm/repl.js')
  >('../dist/esm/repl.js', {
    '@tapjs/processinfo': {
      ProcessInfo: {
        load: () => ({}),
      },
    },
    '../dist/esm/repl/index.js': {
      Repl: class Repl {
        constructor() {
          return r
        }
      },
    },
  })
  r.result = 'result'
  await repl(['a', 'b', 'c'], {
    projectRoot: 'cwd',
  } as unknown as LoadedConfig)
  t.equal(r.parsed, 'a b c')
  t.equal(r.running, true)
  t.strictSame(logs.args(), [['result\n']])
  t.strictSame(errs(), [])
  t.equal(r.displayPromptCalled, true, 'displayed the prompt')
})
