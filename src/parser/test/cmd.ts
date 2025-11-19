import t, { Test } from 'tap'
// This is kind of hacky and clever, but SOOOOO
// much faster than running real child procs.
import EE from 'events'
import { readFileSync } from 'fs'
import { Minipass } from 'minipass'
import { createRequire } from 'module'
import { runInThisContext } from 'vm'

const require = createRequire(import.meta.url)
const bin = require.resolve('../bin/cmd.cjs')
const node = process.execPath

const code = readFileSync(bin, 'utf8').replace(/^#!.*/, '')
class MockProc extends EE {
  public exitCode: number = 0
  public exited: boolean = false
  public stdio: Minipass[] = [
    new Minipass(),
    new Minipass(),
    new Minipass(),
  ]
  public stdin: Minipass
  public stdout: Minipass
  public stderr: Minipass
  public _stdout: string = ''
  public _stderr: string = ''
  public cb: (code: number, stdout: string, stderr: string) => void
  public argv: string[]
  constructor(
    args: string[],
    input: string,
    cb: (code: number, stdout: string, stderr: string) => void,
  ) {
    super()
    this.argv = [node, bin].concat(args)
    this.stdin = this.stdio[0]
    this.stdout = this.stdio[1]
    this.stderr = this.stdio[2]
    this.stdout.on('data', c => (this._stdout += c))
    this.stderr.on('data', c => (this._stderr += c))
    this.stdin.pause()
    this.stdin.end(input)
    this.cb = cb
  }

  exit(code: number) {
    this.exitCode = code || 0
    if (!this.exited) {
      this.exited = true
      this.cb(code, this._stdout, this._stderr)
    }
  }
}
const run = (
  input: string,
  args: string[],
  cb: (code: number, stdout: string, stderr: string) => void,
) => {
  let exitCode = 0
  let stdout = ''
  let stderr = ''

  const proc = new MockProc(args, input, cb)

  const cons = {
    log: (c: string) => proc.stdio[1].write(c + '\n'),
    error: (c: string) => proc.stdio[2].write(c + '\n'),
  }

  const fn = runInThisContext(
    '(function (process, console, require) {' + code + '\n})',
    bin,
  )
  fn(proc, cons, require)
  proc.emit('exit')

  if (!proc.exited) {
    proc.exited = true
    proc.cb(exitCode, stdout, stderr)
  }
}

t.test('basic', t => {
  const taps: { [k: string]: string } = {
    // one that passes, at least, mostly
    pass_mostly: `TAP version 13
ok 1 - this is fine
ok 2 - child {
    ok 1 - this is fine
    blearajn9aefnzxrfoas
               
    pragma +strict
    ok 2 - also fine
    ok
    # some comment
    1..3
}
1..2
`,
    // one that doesn't pass
    fail: `TAP version 13
ok 1 - this is fine
# Subtest: child
    not ok 1 - this is fine
      ---
      not: ok
      this: is fine
      ...
    blearajn9aefnzxrfoas
               
    pragma +strict
    pragma -blerg
    ok 2 - also fine # TODO
    ok 3 - do later # TODO later is never
    ok 4 - rope # SKIP
    ok 1 - piks # SKIP is piks backward
    # some comment
    1..4 # plan comment
not ok 2 - child # time=420ms
1..2
`,

    // one that bails out
    bail: `TAP version 13
ok 1 - i'm sure this will be fine
Bail out!
`,

    // bail out with reason
    bail_reason: `TAP version 13
Bail out! i have my reasons
`,
    failing_child_with_broken_tap: `TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
      ...
      hello: world
not ok 1 - child
1..1
`,
    passing_child_with_broken_tap: `TAP version 13
pragma +strict
# Subtest: child
    ok 1 - test point in child
      ...
      hello: world
ok 1 - child
1..1
`,
  }

  const runTest = (tap: string) => (t: Test, args: string[]) => {
    run(tap, args, (er, o, e) => {
      t.matchSnapshot(er, 'error')
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  }

  Object.keys(taps).forEach(name => {
    const tap = taps[name]
    t.test(name, t => {
      const test = runTest(tap)
      t.test('no args', t => test(t, []))
      t.test('b w', t => test(t, ['-b', '-w', '--ignore-all-whitespace']))
      t.test('t', t => test(t, ['-t', '--tap', '-f', '--no-flat']))
      t.test('flat', t => test(t, ['-B', '-f', '--flat', '-o']))
      t.test('flat tap', t => test(t, ['-t', '--flat']))
      t.test('lines', t => test(t, ['--no-strict', '-l', '--lines']))
      t.test('strict', t => test(t, ['--strict']))
      t.test('silent', t => test(t, ['-s', '--silent']))
      t.test('silent strict', t => test(t, ['-s', '--strict']))
      t.end()
    })
  })

  t.end()
})

t.test('json output formatting', t => {
  const tap = `TAP version 13
# Subtest: child
    ok 1 - this is fine
    1..1
ok 1 - child
1..1
`
  const test = (t: Test, args: string[]) => {
    run(tap, args, (er, o, e) => {
      t.matchSnapshot(er, 'error')
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  }
  t.test('-j', t => test(t, ['-j']))
  t.test('-j 1', t => test(t, ['-j', '1']))
  t.test('--json=1', t => test(t, ['--json=1']))
  t.test('--json 1', t => test(t, ['--json', '1']))
  t.test('--json -f', t => test(t, ['--json', '-f']))
  t.end()
})

t.test('unrecognized arg', t =>
  run('', ['--blarg'], (er, o, e) => {
    t.matchSnapshot(er, 'error')
    t.matchSnapshot(o, 'output')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }),
)

t.test('help', t =>
  run('', ['--help'], (er, o, e) => {
    t.matchSnapshot(er, 'error')
    t.matchSnapshot(o, 'output')
    t.matchSnapshot(e, 'stderr')
    t.end()
  }),
)

t.test('version', t => {
  const cases = ['-v', '--version']
  t.plan(cases.length)
  for (const c of cases) {
    t.test(c, t => {
      run('', [c], (er, o, e) => {
        t.notOk(er)
        t.equal(o.trim(), require('../package.json').version)
        t.equal(e, '')
        t.end()
      })
    })
  }
})
