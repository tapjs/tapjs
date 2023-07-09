import { Minipass } from 'minipass'
import t from 'tap'
import {
  parseTestArgs,
  TestArgs,
} from '../dist/cjs/parse-test-args.js'
import {
  PromiseWithSubtest,
  TestBase,
  TestBaseOpts,
} from '../dist/cjs/test-base.js'

// A utility class to use because the TestBase class doens't have
// the t.test() method, and calling t.sub() directly is awkward af

class T extends TestBase {
  constructor(opts: TestBaseOpts) {
    super(opts)
    if (!this.parent) this.runMain(() => {})
  }
  test(
    name: string,
    extra: TestBaseOpts,
    cb: (t: T) => any
  ): PromiseWithSubtest<T>
  test(name: string, cb: (t: T) => any): PromiseWithSubtest<T>
  test(extra: TestBaseOpts, cb: (t: T) => any): PromiseWithSubtest<T>
  test(cb: (t: T) => any): PromiseWithSubtest<T>
  test(...args: TestArgs<T, TestBaseOpts>): PromiseWithSubtest<T> {
    const extra = parseTestArgs<T, TestBaseOpts>(...args)
    return this.sub(T, extra, this.test) as PromiseWithSubtest<T>
  }
}

const clean = (s: string): string =>
  s
    .replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
    .replace(/lineNumber: [0-9]+/, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/, 'columnNumber: ##')

t.cleanSnapshot = clean

t.test('TAP generation', t => {
  const tcb = t.cb
  if (!tcb) throw new Error('wat??')
  const tb = new TestBase({
    name: 'root',
    jobs: 2,
    cb: (rt: TestBase) => {
      t.equal(rt, tb, 'root test is tb object')
      // this is such an absurdly terrible interface for actually
      // writing tests lol
      tb.sub<TestBase, TestBaseOpts>(
        TestBase,
        {
          name: 'parent',
          cb: (tt: TestBase) => {
            if (!tt.cb) throw new Error('wat??')
            t.equal(tt.name, 'parent')
            t.equal(tt.fullname, tb.fullname + ' > parent')
            tt.pass('in parent')
            tt.sub<TestBase, TestBaseOpts>(
              TestBase,
              {
                name: 'child',
                cb: (ttt: TestBase) => {
                  t.equal(ttt.name, 'child')
                  t.equal(ttt.fullname, tt.fullname + ' > child')
                  ttt.pragma({ strict: true, blarg: false })
                  ttt.pass('in child')
                  ttt.end()
                },
              },
              tt.cb
            )
            tt.end()
          },
        },
        tcb
      )
      rt.end()
    },
  })

  t.equal(tb.name, 'root')
  t.equal(tb.fullname, 'test/test-base.ts > root')
  t.equal(tb.printedResult, false)
  t.equal(tb.printedOutput, false)
  t.equal(tb.occupied, false)
  t.equal(tb.jobs, 2)

  tb.main(async () => {
    t.equal(
      clean(String(await tb.concat())),
      `TAP version 14
# Subtest: parent
    ok 1 - in parent
    # Subtest: child
        pragma +strict
        pragma -blarg
        ok 1 - in child
        1..1
    ok 2 - child # time={TIME}
    
    1..2
ok 1 - parent # time={TIME}

1..1
`
    )
    t.end()
  })
})

t.test('diagnostic', t => {
  const tcb = t.cb
  if (!tcb) throw new Error('wat??')
  const tb = new TestBase({
    name: 'root',
    jobs: 2,
    cb: (rt: TestBase) => {
      rt.sub<TestBase, TestBaseOpts>(
        TestBase,
        {
          name: 'subtest',
          diagnostic: true,
          cb: (tt: TestBase) => {
            tt.pass('in subtest')
            tt.end()
          },
        },
        tcb
      )
      rt.end()
    },
  })
  const expect = `TAP version 14
# Subtest: subtest
    ok 1 - in subtest
    
    1..1
ok 1 - subtest # time={TIME}
  ---
  at:
    fileName: src/test-base.ts
    lineNumber: `
  tb.runMain(async () => {
    const res = clean(String(await tb.concat()))
    t.equal(res.substring(0, expect.length), expect)
    t.end()
  })
})

t.test('bailout', async t => {
  t.test('bail with message', async t => {
    const tb = new TestBase({ name: 'bailer' })
    tb.bailout('bail message')
    t.matchSnapshot(await tb.concat(), 'bailout with message')
  })

  t.test('bail no message', async t => {
    const tb = new TestBase({ name: 'bailer' })
    tb.bailout()
    t.matchSnapshot(await tb.concat(), 'bailout no message')
  })

  t.test('bail passed to parent, child has results', async t => {
    const parent = new TestBase({ name: 'parent' })
    const tb = new TestBase({ name: 'bailer', parent })
    tb.pass('pass')
    tb.end()
    tb.bailout()
    t.matchSnapshot(await tb.concat(), 'child')
    t.matchSnapshot(await parent.concat(), 'parent')
  })

  t.test(
    'bail passed to parent, child ended, no results yet',
    async t => {
      const parent = new TestBase({ name: 'parent' })
      const tb = new TestBase({ name: 'bailer', parent })
      tb.pass('pass')
      const { onEOF } = tb
      tb.onEOF = async () => {
        await new Promise<void>(res => setTimeout(res))
        tb.onEOF = onEOF
        return tb.onEOF()
      }
      tb.end()
      tb.bailout()
      t.matchSnapshot(await tb.concat(), 'child')
      t.matchSnapshot(await parent.concat(), 'parent')
    }
  )

  t.end()
})

t.test('comments', t => {
  t.test('before end', async t => {
    const tb = new T({ name: 'comment' })
    tb.comment('before end', { world: true })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('while occupied, wait until clear', async t => {
    const tb = new T({ name: 'comment' })
    tb.test(t => setTimeout(() => t.end()))
    tb.comment('while occupied', { a: 1 })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('after end, comment at parent', async t => {
    const tb = new T({ name: 'comment' })
    tb.test('child', t => {
      t.test('fast', t => t.end())
      t.end()
      t.comment('after end', { world: true })
    })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('nowhere to go, writes to console', async t => {
    const tb = new T({ name: 'comment' })
    const logs = t.capture(console, 'log')
    tb.pass('this is fine')
    tb.end()
    tb.comment('after end', { lost: false })
    t.matchSnapshot(await tb.concat())
    t.strictSame(
      logs().map(({ args }) => args),
      [['# after end { lost: false }']]
    )
  })
  t.end()
})

t.test('timeouts', t => {
  t.test('unoccupied', async t => {
    const tb = new T({ name: 'timeout' })
    tb.timeout()
    t.matchSnapshot(await tb.concat())
  })
  t.test('occupied', async t => {
    const tb = new T({ name: 'timeout' })
    tb.test('child', t => setTimeout(() => t.end()))
    tb.timeout({ a: 1 })
    t.matchSnapshot(await tb.concat())
  })
  t.end()
})

t.test('plan', t => {
  t.test('no op after bailout', async t => {
    const tb = new T({ name: 'plan' })
    tb.bailout()
    tb.plan(10)
    t.matchSnapshot(await tb.concat())
  })
  t.test('cannot set more than once', t => {
    const tb = new T({ name: 'multiple explicit plans' })
    tb.plan(100)
    t.throws(() => tb.plan(44))
    t.end()
  })
  t.test('cannot set after test end', t => {
    const tb = new T({ name: 'plan after end' })
    tb.end()
    t.throws(() => tb.plan(392), {
      message: 'Cannot set plan after test has ended',
    })
    t.end()
  })
  t.test('plan must be non-negative integer', t => {
    const tb = new T({ name: 'invalid plans' })
    t.throws(() => tb.plan(-3))
    t.throws(() => tb.plan(0.2))
    //@ts-expect-error
    t.throws(() => tb.plan('hello'))
    t.end()
  })
  t.test('trailing plan triggers end', async t => {
    const tb = new T({ name: 'end via plan' })
    tb.pass('this is fine')
    tb.pass('also ok')
    tb.plan(2)
    t.matchSnapshot(await tb.concat())
  })
  t.test('plan 0 triggers end', async t => {
    const tb = new T({ name: 'end via zero plan' })
    tb.plan(0, 'skip everything')
    t.matchSnapshot(await tb.concat())
  })
  t.test('leading plan sets end count', async t => {
    const tb = new T({ name: 'end via plan' })
    tb.plan(2)
    tb.pass('this is fine')
    tb.pass('also ok')
    t.matchSnapshot(await tb.concat())
  })
  t.end()
})

t.test('assertions after end', t => {
  t.test('assertion after end called', async t => {
    // use a parent so that the threw has a place to go
    const tb = new T({ name: 'parent' })
    tb.test('child', t => {
      t.pass('this is fine')
      t.end()
      t.pass('assert after end')
    })
    tb.end()
    t.match(
      await tb.concat(),
      '\nnot ok 2 - test assertion after end() was called\n'
    )
  })
  t.test('assertion after promise end', async t => {
    const tb = new T({ name: 'parent' })
    let child!: T
    await tb.test('child', async t => (child = t))
    child.pass('assert after end')
    tb.end()
    t.match(
      await tb.concat(),
      '\nnot ok 2 - test assertion after Promise resolution\n'
    )
  })
  t.test('assertion after plan end', async t => {
    const tb = new T({ name: 'parent' })
    tb.test('child', t => {
      t.plan(1)
      t.pass('this is fine')
      t.pass('assert after plan end')
    })
    tb.end()
    t.match(
      await tb.concat(),
      '\nnot ok 2 - test assertion count exceeds plan\n'
    )
  })
  t.test('only report if not already failing', async t => {
    const tb = new T({ name: 'parent' })
    tb.test('child', t => {
      t.plan(1)
      t.fail('failing test')
      t.pass('excess assertion')
    })
    tb.end()
    const res = await tb.concat()
    t.notMatch(res, ' - test assertion count exceeds plan\n')
    t.notMatch(res, ' - excess assertion\n')
  })
  t.end()
})

t.test('expect fail assertion', async t => {
  const tb = new T({ name: 'expect fail' })
  tb.fail('double reverse fail', { expectFail: true })
  tb.end()
  t.matchSnapshot(await tb.concat())
})

t.test('capture at/stack for assertions', t => {
  t.test('capture at/stack for failing assertion', async t => {
    const tb = new T({ name: 'fail assert' })
    tb.fail('fail')
    tb.end()
    const res = await tb.concat()
    t.match(
      res,
      `
        tb.fail('fail')
    -------^
`
    )
    t.match(res, '  stack:')
    t.match(res, '  at:')
  })
  t.test('at:null to suppress callsite capture', async t => {
    const tb = new T({ name: 'no at' })
    tb.fail('no callsite', { at: null, other: 'diags' })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('stack, but no at', async t => {
    const tb = new T({ name: 'at from stack' })
    const stack = new Error('trace').stack
    // just a line here to take it to another line number
    tb.fail('at from stack', { stack })
    tb.end()
    const res = await tb.concat()
    t.match(res, '  stack:')
    t.match(res, '  at:')
    t.match(
      res,
      `
        const stack = new Error('trace').stack
    ------------------^
`
    )
  })
  t.test('capture at and stack', async t => {
    const tb = new T({ name: 'at from stack' })
    tb.fail('capture at')
    tb.end()
    const res = await tb.concat()
    t.match(res, '  stack:')
    t.match(res, '  at:')
    t.match(
      res,
      `
        tb.fail('capture at')
    -------^
`
    )
  })
  t.test('no stack for todo test', async t => {
    const tb = new T({ name: 'no stack for todo' })
    tb.fail('capture at, no stack', { todo: true, diagnostic: true })
    tb.end()
    const res = await tb.concat()
    t.notMatch(res, '  stack:')
    t.match(res, '  at:')
    t.match(
      res,
      `
        tb.fail('capture at, no stack', { todo: true, diagnostic: true })
    -------^
`
    )
  })
  t.test('no stack for passing test', async t => {
    const tb = new T({ name: 'no stack for passing' })
    tb.pass('capture at, no stack', { diagnostic: true })
    tb.end()
    const res = await tb.concat()
    t.notMatch(res, '  stack:')
    t.match(res, '  at:')
    t.match(
      res,
      `
        tb.pass('capture at, no stack', { diagnostic: true })
    -------^
`
    )
  })
  t.test('diagnostic defaults false for skip/todo', async t => {
    const tb = new T({ name: 'no diag skip' })
    tb.fail('skip this', { skip: true })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.end()
})

t.test('push awaited assertion to top of queue', async t => {
  const tb = new T({ name: 'waiter push' })
  tb.waitOn(new Promise<void>(r => setTimeout(() => r())), () => {
    tb.pass('waiter callback')
  })
  tb.pass('waiting for waiter')
  tb.end()
  t.equal(
    await tb.concat(),
    `TAP version 14
ok 1 - waiter callback
ok 2 - waiting for waiter
1..2
`
  )
})

t.test('bail on fail', t => {
  t.test('while occupied', async t => {
    const tb = new T({ name: 'bailer', bail: true })
    tb.waitOn(new Promise<void>(r => setTimeout(() => r())), () => {
      tb.fail('nope')
    })
    tb.pass('this is fine')
    tb.end()
    const res = await tb.concat()
    t.match(res, 'Bail out! nope')
    t.match(
      res,
      `
          tb.fail('nope')
    ---------^
`
    )
    t.notMatch(res, ' - this is fine')
  })
  t.test('not occupied', async t => {
    const tb = new T({ name: 'bailer', bail: true })
    tb.fail('nope')
    tb.pass('this is fine')
    tb.end()
    const res = await tb.concat()
    t.match(res, 'Bail out! nope')
    t.match(
      res,
      `
        tb.fail('nope')
    -------^
`
    )
    t.notMatch(res, ' - this is fine')
  })
  t.end()
})

t.test('stdinOnly mode', t => {
  t.test('basic stdinOnly mode', async t => {
    const tapStream = new Minipass<string>({
      encoding: 'utf8',
    })
    const tb = new T({ name: 'stdin only' })
    tb.stdinOnly({ tapStream })
    tapStream.end(`TAP version 14
1..2
ok 1
# Subtest: child
    1..1
    ok 1 - this is fine
ok 2 - child
`)
    t.matchSnapshot(await tb.concat())
  })
  t.test('cannot stdinOnly if in progress', t => {
    const tb = new T({ name: 'stdin in progress' })
    tb.pass('this is fine')
    t.throws(() => tb.stdinOnly())
    t.end()
  })
  t.test('cannot end stdinOnly test', t => {
    const tb = new T({ name: 'stdin explicit end' })
    const tapStream = new Minipass<string>({
      encoding: 'utf8',
    })
    tb.stdinOnly({ tapStream })
    t.throws(() => tb.end())
    t.end()
  })
  t.end()
})

t.test('end stuff', t => {
  t.test('onbeforeend awaits promise', async t => {
    const tb = new T({ name: 'obe promise' })
    tb.onbeforeend = () => new Promise<void>(r => setTimeout(r))
    tb.pass('this is fine')
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('onEOF awaits promise', async t => {
    const tb = new T({ name: 'oE promise' })
    const { onEOF } = tb
    tb.onEOF = async () => {
      tb.onEOF = onEOF
      await new Promise<void>(r => setTimeout(r))
      return onEOF()
    }
    tb.pass('this is fine')
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('onEOF rejected promise', async t => {
    const tb = new T({ name: 'oE promise' })
    tb.test(t => {
      const { onEOF } = t
      t.onEOF = async () => {
        t.onEOF = onEOF
        await new Promise<void>(r => setTimeout(r))
        throw new Error('nope')
      }
      t.pass('this is fine')
      t.end()
    })
    tb.end()
    t.match(
      await tb.concat(),
      `
            throw new Error('nope')
    --------------^
`
    )
  })
  t.test('multiple end failure', async t => {
    const tb = new T({ name: 'multi end' })
    tb.test('multiple end', { buffered: true }, t => {
      t.end()
      t.end()
      t.end()
    })
    tb.end()
    const res = String(await tb.concat())
    t.match(res, 'test end() method called more than once')
    t.match(
      res,
      `
  source: |2
        tb.test('multiple end', { buffered: true }, t => {
          t.end()
          t.end()
    --------^
          t.end()
`
    )
    t.equal(
      res.split('test end() method called more than once').length,
      2,
      'only warn one time'
    )
  })
  t.end()
})

t.test('fullname when mainScript not available', t => {
  const { TestBase } = t.mockRequire('../dist/cjs/test-base.js', {
    '../dist/cjs/main-script.js': {
      mainScript: (def: string) => def,
    },
  })
  const tb = new TestBase({ name: 'full name' })
  t.equal(tb.fullname, 'TAP > full name')
  t.end()
})

t.test('processing edge cases', t => {
  t.test('test point with tapChildBuffer', async t => {
    const tb = new T({ name: 'parent' })
    tb.pass('this is fine', {
      tapChildBuffer: `    TAP version 14
    1..1
    ok 1 - child test ok
`,
    })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('await async function', async t => {
    const tb = new T({ name: 'awaiter' })
    tb.pass('this is fine')
    tb.queue.push(async () => {
      tb.write('# write in async function\n')
      tb.comment('comment in async function')
    })
    tb.pass('after pushing async function on queue')
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('unknown method in queue is ignored', async t => {
    const tb = new T({ name: 'awaiter' })
    tb.pass('this is fine')
    tb.queue.push(['wat is this?'])
    tb.pass('after pushing unknown method on queue')
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('async method gets awaited', async t => {
    const tb = new T({ name: 'awaiter' }) as T & {
      asyncMethod: () => Promise<void>
    }
    tb.asyncMethod = async () => {
      tb.write('# write in async method\n')
      tb.comment('comment in async method')
    }
    tb.pass('this is fine')
    tb.queue.push(['asyncMethod'])
    tb.pass('after pushing async method on queue')
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('rejected async method fails test', async t => {
    const tb = new T({ name: 'awaiter' }) as T & {
      asyncMethod: () => Promise<void>
    }
    tb.asyncMethod = async () => {
      tb.write('# write in async method\n')
      tb.comment('comment in async method')
      throw new Error('nope')
    }
    tb.pass('this is fine')
    tb.queue.push(['asyncMethod'])
    tb.pass('after pushing async method on queue')
    tb.end()
    t.match(await tb.concat(), `
          throw new Error('nope')
    ------------^
`)
  })
  t.test('multiple parallel buffered tests', async t => {
    const tb = new T({ name: 'root', jobs: 2 })
    tb.test('one', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('two', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('tre', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('for', { buffered: true }, t => setTimeout(() => t.end()))
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('multiple parallel buffered tests, then bailout', async t => {
    const tb = new T({ name: 'root', jobs: 2 })
    tb.test('one', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('two', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('tre', { buffered: true }, t => setTimeout(() => t.end()))
    tb.test('for', { buffered: true }, t => setTimeout(() => t.end()))
    tb.bailout()
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.end()
})

t.test('buffered test that runs long', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('buffered', { buffered: true }, t => {
    t.options.timeout = 1
    setTimeout(() => t.end(), 50)
  })
  tb.end()
  t.match(await tb.concat(), `
not ok 2 - timeout!
  ---
  expired: buffered
  message: timeout!
  test: buffered
  ...

1..2
`)
})

t.test('indented test that runs long', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('buffered', t => {
    t.options.timeout = 1
    setTimeout(() => t.end(), 50)
  })
  tb.end()
  t.match(await tb.concat(), `
not ok 2 - timeout!
  ---
  expired: buffered
  message: timeout!
  test: buffered
  ...

1..2
`)
})

t.test('child test with rejected async method', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', async () => {
    throw new Error('nope')
  })
  tb.end()
  t.match(await tb.concat(), `
      tapCaught: returnedPromiseRejection
      test: child
      source: |2
          const tb = new T({ name: 'parent' })
          tb.test('child', async () => {
            throw new Error('nope')
        ----------^
          })
          tb.end()
`)
})

t.test('child test with non-error rejection', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', async () => {
    throw 'nope'
  })
  tb.end()
  t.match(await tb.concat(), `
# Subtest: child
    not ok 1 - nope
      ---
      error: nope
      tapCaught: returnedPromiseRejection
      test: child
      ...
`)
})

t.test('child test with throwing function', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', () => {
    throw new Error('nope')
  })
  tb.end()
  t.match(await tb.concat(), `
      tapCaught: testFunctionThrow
      test: child
      source: |2
          const tb = new T({ name: 'parent' })
          tb.test('child', () => {
            throw new Error('nope')
        ----------^
          })
          tb.end()
`)
})

t.test('child test with non-error throw', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', () => {
    throw 'nope'
  })
  tb.end()
  t.match(await tb.concat(), `
# Subtest: child
    not ok 1 - nope
      ---
      error: nope
      tapCaught: testFunctionThrow
      test: child
      ...
`)
})
