import { Minipass } from 'minipass'
import t from 'tap'
import { FinalResults } from 'tap-parser'
import { Counts } from '../dist/esm/counts.js'
import { IMPLICIT } from '../dist/esm/implicit-end-sigil.js'
import { Minimal as T } from '../dist/esm/minimal.js'
import { TestBase, TestBaseOpts } from '../dist/esm/test-base.js'

const clean = (s: string): string =>
  s
    .replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
    .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')

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
              tt.cb,
            )
            tt.end()
          },
        },
        tcb,
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
`,
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
        tcb,
      )
      rt.end()
    },
  })
  const expect = `TAP version 14
# Subtest: subtest
    ok 1 - in subtest
      ---
      at:
        fileName: `
  tb.runMain(async () => {
    const res = clean(String(await tb.concat()))
    // prints diags for all points in a diagnostic: true test
    t.equal(res.substring(0, expect.length), expect)
    // also prints diags for the test itself
    t.match(res, 'ok 1 - subtest # time={TIME}\n  ---\n  at:\n')
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
    },
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
  t.test('after getting results, write to parent', async t => {
    const tb = new T({ name: 'comment' })
    tb.test('child', t => {
      t.test('fast', t => t.end())
      t.on('complete', () => t.comment('oncomplete', { world: true }))
      t.end()
    })
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('oncomplete, no parent, write to stream', async t => {
    // simulates behavior of the TAP class which writes its
    // summary comments oncomplete.
    const tb = new (class extends T {
      oncomplete(results: FinalResults) {
        this.comment('oncomplete', { world: true })
        return super.oncomplete(results)
      }
    })({ name: 'comment' })
    tb.pass('this is fine')
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
    t.strictSame(logs.args(), [['# after end { lost: false }']])
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
      '\nnot ok 2 - test assertion after end() was called\n',
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
      '\nnot ok 2 - test assertion after Promise resolution\n',
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
      '\nnot ok 2 - test assertion count exceeds plan\n',
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
`,
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
`,
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
`,
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
`,
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
`,
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
`,
  )
})

t.test(
  'push awaited assertion to top if ended implicitly',
  async t => {
    const tb = new T({ name: 'waiter push' })
    tb.test('child test', async t => {
      t.waitOn(
        new Promise<void>(r => setTimeout(r)).then(() => {
          t.pass('this is fine')
        }),
      )
    })
    tb.end()
    t.matchSnapshot(await tb.concat())
  },
)

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
`,
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
`,
    )
    t.notMatch(res, ' - this is fine')
  })
  t.test('bailing sub', async t => {
    const tb = new T({ name: 'parent', bail: false })
    tb.test('bailer', { bail: true }, tb => {
      tb.fail('nope')
      tb.pass('this is fine')
      tb.end()
    })
    tb.end()
    const res = await tb.concat()
    t.match(
      res,
      `
      source: |2
            const tb = new T({ name: 'parent', bail: false })
            tb.test('bailer', { bail: true }, tb => {
              tb.fail('nope')
        ---------^
              tb.pass('this is fine')
              tb.end()
      ...
    
    Bail out! nope
Bail out! nope
`,
    )
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
`,
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
`,
    )
    t.equal(
      res.split('test end() method called more than once').length,
      2,
      'only warn one time',
    )
  })
  t.end()
})

t.test('fullname when mainScript not available', async t => {
  const { TestBase } = await t.mockImport<
    typeof import('../dist/esm/index.js')
  >('../dist/esm/index.js', {
    '../dist/esm/main-script.js': {
      mainScript: (def: string) => def,
    },
  })
  const tb = new TestBase({ name: 'full name' })
  t.equal(tb.fullname, 'TAP > full name')
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
    t.match(
      await tb.concat(),
      `
          throw new Error('nope')
    ------------^
`,
    )
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
  t.test(
    'multiple parallel buffered tests, then bailout',
    async t => {
      const tb = new T({ name: 'root', jobs: 2 })
      tb.test('one', { buffered: true }, t =>
        setTimeout(() => t.end()),
      )
      tb.test('two', { buffered: true }, t =>
        setTimeout(() => t.end()),
      )
      tb.test('tre', { buffered: true }, t =>
        setTimeout(() => t.end()),
      )
      tb.test('for', { buffered: true }, t =>
        setTimeout(() => t.end()),
      )
      tb.bailout()
      tb.end()
      t.matchSnapshot(await tb.concat())
    },
  )
  t.end()
})

t.test('buffered test that runs long', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('buffered', { buffered: true }, t => {
    t.options.timeout = 1
    setTimeout(() => t.end(), 50)
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
not ok 2 - timeout!
  ---
  expired: buffered
  test: buffered
  ...

1..2
`,
  )
})

t.test('indented test that runs long', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('buffered', t => {
    t.options.timeout = 1
    setTimeout(() => t.end(), 50)
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
not ok 2 - timeout!
  ---
  expired: buffered
  test: buffered
  ...

1..2
`,
  )
})

t.test('child test with rejected async method', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', async () => {
    throw new Error('nope')
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
      tapCaught: returnedPromiseRejection
      source: |2
          const tb = new T({ name: 'parent' })
          tb.test('child', async () => {
            throw new Error('nope')
        ----------^
          })
          tb.end()
`,
  )
})

t.test('child test with thrown string', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', async () => {
    throw 'nope'
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
# Subtest: child
    not ok 1 - nope
      ---
      tapCaught: returnedPromiseRejection
      ...
`,
  )
})

t.test('child test with thrown other kind of thing', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', async () => {
    throw 7
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
# Subtest: child
    not ok 1 - unhandled error
      ---
      error: 7
      tapCaught: returnedPromiseRejection
      ...
`,
  )
})

t.test('child test with throwing function', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', () => {
    throw new Error('nope')
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
      tapCaught: testFunctionThrow
      source: |2
          const tb = new T({ name: 'parent' })
          tb.test('child', () => {
            throw new Error('nope')
        ----------^
          })
          tb.end()
`,
  )
})

t.test('child test with non-error throw', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('child', () => {
    throw 'nope'
  })
  tb.end()
  t.match(
    await tb.concat(),
    `
# Subtest: child
    not ok 1 - nope
      ---
      tapCaught: testFunctionThrow
      ...
`,
  )
})

t.test('subtest stuff', t => {
  t.test('sub after bailout', async t => {
    const tb = new T({ name: 'subber' })
    tb.bailout()
    const p = tb.test(t => t.end())
    t.hasStrict(p, { subtest: null })
    t.equal(await p, null)
    t.matchSnapshot(await tb.concat())
  })
  t.test('sub after end', async t => {
    const tb = new T({ name: 'root' })
    tb.test('extra subtest with plan', t => {
      t.plan(1)
      t.test('first subtest', t => t.end())
      t.test('second subtest', t => t.end())
    })
    tb.test('extra subtest with t.end()', t => {
      t.test('first subtest', t => t.end())
      t.end()
      t.test('second subtest', t => t.end())
    })
    const p = tb.test('extra subtest with promise', async t => {
      t.test('first subtest', t => t.end())
    })
    await p
    p.subtest?.test('second subtest', t => t.end())
    tb.end()
    const out = await tb.concat()
    t.matchSnapshot(
      out.replace(
        /stack: \|((?:.|\n)*?)(\n\s+at:)/g,
        'stack: {STACK}$2',
      ),
    )
  })
  t.test('skipped sub', async t => {
    const tb = new T({ name: 'skipsub' })
    const p = tb.test('blah', { skip: true }, async () => {})
    t.hasStrict(p, { subtest: null })
    t.equal(await p, null)
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.test('skipped sub, no name', async t => {
    const tb = new T({ name: 'skipsub' })
    const p = tb.test({ skip: true }, async () => {})
    t.hasStrict(p, { subtest: null })
    t.equal(await p, null)
    tb.end()
    t.matchSnapshot(await tb.concat())
  })
  t.end()
})

t.test('threw stuff', t => {
  t.test('threw before start', async t => {
    const tb = new T({ name: 'parent' })
    tb.waitOn(new Promise<void>(r => setTimeout(r)))
    const p = tb.test('child', t => t.end())
    p.subtest?.threw('nope')
    tb.end()
    t.match(
      await tb.concat(),
      `TAP version 14
# Subtest: child
    not ok 1 - nope
    
    1..1
not ok 1 - child`,
    )
  })
  t.test('threw after plan end', async t => {
    const tb = new T({ name: 'parent' })
    tb.test('child', tb => {
      tb.plan(1)
      tb.pass('ok')
      tb.threw('yolo')
    })
    tb.end()
    t.match(
      await tb.concat(),
      `
not ok 2 - yolo
  ---
  test: child
  ...

1..2
`,
    )
  })
  t.test('threw no message, but has stack', async t => {
    const tb = new T({ name: 'thrower' })
    const stack = new Error('hello').stack
    tb.threw({ stack })
    tb.end()
    const res = await tb.concat()
    t.match(
      res,
      `TAP version 14
not ok 1 - Error: hello
  ---
  stack: |
    Test.<anonymous> (test/test-base.ts:`,
    )
  })
  t.test('no message of any kind', async t => {
    const tb = new T({ name: 'thrower' })
    tb.threw({ a: 1 })
    tb.end()
    t.equal(
      await tb.concat(),
      `TAP version 14
not ok 1 - unhandled error
  ---
  a: 1
  test: thrower
  ...

1..1
`,
    )
  })
  t.end()
})

t.test('endAll', t => {
  t.test('waiter', async t => {
    const tb = new T({ name: 'waiter' })
    tb.waitOn(new Promise<void>(r => setTimeout(r)), w => {
      t.equal(w.done, true)
      t.match(w.value, new Error('test unfinished'))
    })
    tb.endAll()
  })
  t.test('sub in progress', async t => {
    const tb = new T({ name: 'subs' })
    tb.test('subtest', t => setTimeout(() => t.end()))
    tb.endAll()
    t.match(
      await tb.concat(),
      `TAP version 14
# Subtest: subtest
    not ok 1 - test unfinished
`,
    )
  })
  t.test('async sub in progress', async t => {
    const tb = new T({ name: 'subs' })
    tb.test('subtest', () => new Promise<void>(r => setTimeout(r)))
    tb.endAll()
    t.match(
      await tb.concat(),
      `TAP version 14
# Subtest: subtest
    not ok 1 - test unfinished
`,
    )
  })
  t.test('sub without endAll method', async t => {
    const tb = new T({ name: 'subs' })
    tb.test('subtest', t => {
      //@ts-expect-error
      t.endAll = null
      setTimeout(() => t.end())
    })
    tb.endAll()
    t.match(
      await tb.concat(),
      `TAP version 14
# Subtest: subtest
    
    not ok 1 - test unfinished
    
    1..1
not ok 1 - subtest`,
    )
  })
  t.test('subs left in queue', async t => {
    const tb = new T({ name: 'subs' })
    tb.test('one', () => {})
    tb.test('two', () => {})
    tb.test('tre', () => {})
    tb.test('for', () => {})
    tb.endAll()
    t.match(
      await tb.concat(),
      `
not ok 2 - child test left in queue: two
not ok 3 - child test left in queue: tre
not ok 4 - child test left in queue: for
1..4
`,
    )
  })
  t.end()
})

t.test('subtest start/end/active behavior', async t => {
  const tb = new T({ name: 'parent' })
  let sawSubtestStarts = 0
  let sawSubtestEnds = 0
  tb.on('subtestStart', sub => {
    sawSubtestStarts++
    t.equal(tb.activeSubtests.has(sub), true)
  })
  tb.on('subtestEnd', sub => {
    sawSubtestEnds++
    t.equal(tb.activeSubtests.has(sub), false)
  })
  tb.jobs = 4
  const childHandler = (tb: T) => {
    setTimeout(() => tb.end(), Math.random() * 100)
  }
  tb.test('one', childHandler)
  tb.test('two', childHandler)
  tb.test('tre', childHandler)
  tb.test('for', childHandler)
  t.equal(tb.activeSubtests.size, 4)
  tb.end()
  await tb.concat()
  t.equal(tb.activeSubtests.size, 0)
  t.equal(sawSubtestStarts, 4)
  t.equal(sawSubtestEnds, 4)
})

t.test('child asserts and assertTotals', async t => {
  const tb = new T({ name: 'root' })
  type R = {
    name: string
    ok: boolean
    todo: boolean
    skip: boolean
    counts: {
      total: number
      pass: number
      fail: number
      skip: number
      todo: number
    }
  }
  const seen: R[] = []

  tb.on('assert', r => {
    const { pass, fail, todo, skip, total } = tb.assertTotals
    t.equal(pass + fail + todo + skip, total, 'total is sum')
    seen.push({
      name: r.name,
      ok: r.ok,
      todo: !!r.todo,
      skip: !!r.skip,
      counts: { ...tb.assertTotals },
    })
  })

  tb.pass('zro before children')

  tb.test('parent', async tb => {
    tb.jobs = 2
    tb.test('one', async tb => {
      tb.pass('one this is fine')
      await new Promise<void>(r => setTimeout(r))
      tb.fail('two not ok')
      tb.fail('tre not ok but todo', { todo: true })
      tb.fail('for not ok but skip', { skip: true })
    })
    tb.test('two', async tb => {
      tb.fail('fiv not alright')
      tb.pass('six passing todo', { todo: true })
      tb.pass('svn passing skip', { skip: true })
      tb.pass('eit yes alright')
    })
  })
  tb.pass('nin after children')

  tb.end()
  await tb.concat()

  const expect = [
    {
      name: 'zro before children',
      ok: true,
      todo: false,
      skip: false,
      counts: {
        total: 1,
        pass: 1,
        fail: 0,
        skip: 0,
        todo: 0,
        complete: 0,
      },
    },
    {
      name: 'one this is fine',
      ok: true,
      todo: false,
      skip: false,
      counts: {
        total: 2,
        pass: 2,
        fail: 0,
        skip: 0,
        todo: 0,
        complete: 0,
      },
    },
    {
      name: 'two not ok',
      ok: false,
      todo: false,
      skip: false,
      counts: {
        total: 3,
        pass: 2,
        fail: 1,
        skip: 0,
        todo: 0,
        complete: 0,
      },
    },
    {
      name: 'tre not ok but todo',
      ok: false,
      todo: true,
      skip: false,
      counts: {
        total: 4,
        pass: 2,
        fail: 1,
        skip: 0,
        todo: 1,
        complete: 0,
      },
    },
    {
      name: 'for not ok but skip',
      ok: false,
      todo: false,
      skip: true,
      counts: {
        total: 5,
        pass: 2,
        fail: 1,
        skip: 1,
        todo: 1,
        complete: 0,
      },
    },
    {
      name: 'fiv not alright',
      ok: false,
      todo: false,
      skip: false,
      counts: {
        total: 6,
        pass: 2,
        fail: 2,
        skip: 1,
        todo: 1,
        complete: 0,
      },
    },
    {
      name: 'six passing todo',
      ok: true,
      todo: true,
      skip: false,
      counts: {
        total: 7,
        pass: 2,
        fail: 2,
        skip: 1,
        todo: 2,
        complete: 0,
      },
    },
    {
      name: 'svn passing skip',
      ok: true,
      todo: false,
      skip: true,
      counts: {
        total: 8,
        pass: 2,
        fail: 2,
        skip: 2,
        todo: 2,
        complete: 0,
      },
    },
    {
      name: 'eit yes alright',
      ok: true,
      todo: false,
      skip: false,
      counts: {
        total: 9,
        pass: 3,
        fail: 2,
        skip: 2,
        todo: 2,
        complete: 0,
      },
    },
    {
      name: 'nin after children',
      ok: true,
      todo: false,
      skip: false,
      counts: {
        total: 10,
        pass: 4,
        fail: 2,
        skip: 2,
        todo: 2,
        complete: 0,
      },
    },
  ]

  t.strictSame(seen, expect)
  t.strictSame(
    tb.assertTotals,
    new Counts({
      total: 10,
      pass: 4,
      fail: 2,
      skip: 2,
      todo: 2,
      complete: 0,
    }),
  )
})

t.test('passes:true gets passed down', async t => {
  const tb = new T({ name: 'passer', passes: true })
  const { subtest } = tb.test('child passer', tb => {
    t.equal(tb.options.passes, true)
    tb.pass('this is fine')
    tb.end()
  })
  tb.end()
  await tb.concat()
  t.same(subtest?.lists.pass, [
    {
      ok: true,
      name: 'this is fine',
      id: 1,
      buffered: false,
      tapError: null,
      skip: false,
      todo: false,
      previous: null,
      plan: null,
      diag: null,
      time: null,
      fullname: 'child passer > this is fine',
      closingTestPoint: false,
    },
  ])
})

t.test('throw an error with entirely internal frames', async t => {
  const er = Object.assign(new Error('internal stuff'), {
    stack: `Error: internal stuff
    at InternalFunction (node:internal/blah:420:69)
    at node:child_process:1:3333
`,
  })
  const tb = new T({ name: 'internal thrower' })
  tb.test('child', t => {
    t.pass('about to throw')
    throw er
  })
  tb.end()
  t.matchSnapshot(await tb.concat())
})

t.test('debug is inherited', async t => {
  t.capture(console, 'error')
  const tb = new T({ name: 'parent', debug: true, jobs: 4 })
  const { subtest: wd } = tb.test('with debug', async () => {})
  const { subtest: wod } = tb.test(
    'without debug',
    { debug: false },
    async () => {},
  )
  t.match(wd, { options: { debug: true } })
  t.match(wod, { options: { debug: false } })
})

t.test('asserts while occupied and ended', async t => {
  let tb!: typeof t
  t.test('parent', t => {
    tb = t
    const x = (a: any, b: any) => {
      t[a == 'a' ? 'pass' : 'fail']('should be equal', {
        found: a,
        wanted: 'a',
      })
      t[b == 'b' ? 'pass' : 'fail']('should be equal', {
        found: b,
        wanted: 'b',
      })
    }
    t.once('idle', () => {
      tb.end()
      setTimeout(() => tb.endAll())
    })
    t.test('parent', async t => {
      t.test('child', async t => {
        await Promise.resolve(true)
        t.pass('this is fine')
        x('a', 'b')
        await Promise.resolve(true)
        t.pass('this is fine')
      })
      tb.test('child 2', async t => {
        await Promise.resolve(true)
        t.pass('this is fine')
        x('a', 'b')
        await Promise.resolve(true)
        t.pass('this is fine')
      })
    })
  })
})

t.test('wait for waiters before entering subtests', async t => {
  // this simulates a before() that returns a promise, followed
  // by some parallel subtests.
  const tb = new T({ name: 'waiter test', jobs: 8 })
  const log: string[] = []
  const wait =
    (msg: string, n = 100) =>
    async () => {
      log.push('start ' + msg)
      await new Promise<void>(r => setTimeout(r, n))
      log.push('end ' + msg)
    }

  // t.before(wait('before', 100))
  tb.waitOn(wait('before', 100)())

  const sub = (msg: string, n = 10, opts: TestBaseOpts = {}) =>
    tb.test(msg, opts, wait(msg, n))
  sub('zro')
  sub('one')
  sub('noparallel 12', 100, { buffered: false })
  sub('two')
  sub('tre')
  sub('fur')
  sub('fiv')
  // t.before() adds a roadblock test like this
  tb.test('pause', { silent: true, buffered: false }, t => t.end())
  tb.queue.push(wait('second before', 100))
  sub('six')
  sub('svn')
  sub('eit')
  sub('shhh', 10, { silent: true })
  sub('nin')
  tb.end()

  t.matchSnapshot(await tb.concat(), 'output')
  t.matchSnapshot(log, 'log')
})

t.test('failing silent unbuffered subtest', async t => {
  const tb = new T({ name: 'parent' })
  tb.test('one', t => t.end())
  tb.test('silent fail', { silent: true, buffered: false }, t => {
    t.fail('nope', { stack: '', at: null })
    t.end()
  })
  tb.test('silent pass', { silent: true, buffered: false }, t =>
    t.end(),
  )
  tb.test('two', t => t.end())
  tb.end()
  t.matchSnapshot(await tb.concat())
})

t.test('job id generation edge case', async t => {
  // every even-numberred childId is slow, ensuring that they
  // conflict with the first pick of jobId and have to cycle
  // at least once.
  // This is just a coverage test.
  const tb = new T({ name: 'parent', jobs: 2 })
  const { subtest: one } = tb.test('one', async () => {})
  const { subtest: two } = tb.test('two', t =>
    setTimeout(() => t.end(), 10),
  )
  const { subtest: tre } = tb.test('tre', async () => {})
  const { subtest: fur } = tb.test('fur', t =>
    setTimeout(() => t.end(), 10),
  )
  const { subtest: fiv } = tb.test('fiv', async () => {})
  const { subtest: six } = tb.test('six', t =>
    setTimeout(() => t.end(), 10),
  )
  tb.end()
  await tb.concat()
  t.pass('this is fine')
  t.match(
    [one, two, tre, fur, fiv, six].map(
      t => t && [t.name, t.options.childId, t.options.jobId],
    ),
    [
      ['one', 1, Number],
      ['two', 2, Number],
      ['tre', 3, Number],
      ['fur', 4, Number],
      ['fiv', 5, Number],
      ['six', 6, Number],
    ],
    'all child tests created with jobId numbers',
  )
  for (const sub of [one, two, tre, fur, fiv, six]) {
    t.ok(
      sub &&
        typeof sub.options.jobId === 'number' &&
        sub.options.jobId < 2,
      'jobId less than parent.jobs',
    )
  }
})

t.test('failSkip', async t => {
  const tb = new T({ name: 'root', failSkip: true })
  tb.test('empty', t => t.end())
  tb.test('skipped', { skip: true }, t => t.end())
  tb.test('skipped message', { skip: 'message' }, t => t.end())
  tb.end()
  const res = clean(await tb.concat())
  const expects = [
    'ok 1 - empty # time={TIME}',
    'not ok 2 - skipped',
    'not ok 3 - skipped message',
  ]
  for (const e of expects) {
    t.match(res, e)
  }
})

t.test('failTodo', async t => {
  const tb = new T({ name: 'root', failTodo: true })
  tb.test('empty', t => t.end())
  tb.test('todo', { todo: true }, t => t.end())
  tb.test('todo message', { todo: 'message' }, t => t.end())
  tb.end()
  const res = clean(await tb.concat())
  const expects = [
    'ok 1 - empty # time={TIME}',
    'not ok 2 - todo',
    'not ok 3 - todo message',
  ]
  for (const e of expects) {
    t.match(res, e)
  }
})

t.test('failOnly', async t => {
  const tb = new T({ name: 'root', failOnly: true })
  tb.test('empty', t => t.end())
  tb.test('todo', { only: true }, t => t.end())
  tb.test('todo message', { todo: 'message' }, t => t.end())
  tb.end()
  const res = clean(await tb.concat())
  const expects = [
    'ok 1 - empty # time={TIME}',
    'not ok 2',
  ]
  for (const e of expects) {
    t.match(res, e)
  }
})

t.test('plan plus promise', async t => {
  const tb = new T({ name: 'root' })
  tb.test('parent', async t => {
    t.plan(2)
    t.test('child', async t => {
      await new Promise<void>(res => setTimeout(res))
      t.pass('this is fine')
    })
    t.test('sync child', t => {
      t.pass('this is fine')
      t.end()
    })
  })
  tb.end()
  t.matchSnapshot(await tb.concat())
  t.ok(tb.passing())
})

t.test('unmet plan plus async and sync children', async t => {
  const tb = new T({ name: 'root' })
  // tb.pipe(process.stderr)
  // simulate an async action that keeps the process open, then
  // the root TAP object calling endAll on process exit.
  tb.test('parent', async t => {
    t.plan(6)
    t.jobs = 2
    // suppress the stack trace for this test
    t.test('asdfasdf child', { at: null }, async t => {
      t.pass('this is fine')
    })
    t.test('buffered child', { buffered: true }, t => {
      t.pass('this is fine')
      t.end()
    })
    t.test('sync child', t => {
      t.pass('this is fine')
      t.end()
    })
  })
  tb.end(IMPLICIT)
  if (!tb.results) tb.endAll()
  t.matchSnapshot(await tb.concat())
  t.equal(tb.passing(), false)
})

t.test('unmet plan plus async children with delay', async t => {
  const tb = new T({ name: 'root' })
  // simulate an async action that keeps the process open, then
  // the root TAP object calling endAll on process exit.
  tb.test('parent', async t => {
    t.plan(6)
    t.jobs = 2
    // suppress the stack trace for this test
    t.test('unfinished child', { at: null }, async t => {
      t.plan(3)
      t.pass('this is fine')
    })
    t.test('buffered child', { buffered: true }, t => {
      t.pass('this is fine')
      t.end()
    })
    t.test('sync child', t => {
      t.pass('this is fine')
      t.end()
    })
  })
  tb.end(IMPLICIT)
  await new Promise<void>(r => setTimeout(r))
  if (!tb.results) tb.endAll()
  const res = await tb.concat()
  t.matchSnapshot(res)
  t.equal(tb.passing(), false)
})

t.test('every combination of awaiting, async, plan, end()', t => {
  for (const end of [true, false]) {
    for (const p of [true, false]) {
      for (const aw of [true, false]) {
        t.test(`end=${end} await=${aw} plan=${p}`, async t => {
          if (p) t.plan(1)
          if (aw)
            await t.resolves(new Promise<void>(r => setTimeout(r)))
          else t.resolves(new Promise<void>(r => setTimeout(r)))
          if (end) t.end()
        })
      }
    }
  }

  for (const p of [true, false]) {
    t.test(`sync return, plan=${p}`, t => {
      if (p) t.plan(1)
      t.resolves(new Promise<null>(r => setTimeout(r)))
      if (!p) t.end()
    })
  }

  t.end()
})

t.test('cannot create subtest after promise resolves', async t => {
  const tb = new T({ name: 'root', diagnostic: false })
  tb.test('parent', async t => {
    const p = t.test('child', async () => {})
    const { subtest } = p
    if (!subtest) throw new Error('did not get subtest')
    await p
    subtest.test('this should not work', async () => {})
  })
  tb.end()
  const output = await tb.concat()
  t.matchSnapshot(output)
})

t.test('diagnostic is inherited', async t => {
  t.capture(console, 'error')
  const tb = new T({ name: 'parent', diagnostic: true, jobs: 4 })
  const { subtest: wd } = tb.test('with diagnostic', async () => {})
  const { subtest: wod } = tb.test(
    'without diagnostic',
    { diagnostic: false },
    async () => {},
  )
  t.match(wd, { options: { diagnostic: true } })
  t.match(wod, { options: { diagnostic: false } })
})

t.test('can set a context field without context option', async t => {
  const now = Date.now()
  t.context.when = now
  t.test('child test', t => {
    t.equal(t.context.when, now, 'the time is now!')
    t.end()
  })
})

t.test('can set context in async before hook', async t => {
  t.before(async () => {
    await new Promise<void>(res => setTimeout(res, 10))
    t.context = { foo: 'bar' }
  })
  t.test('child test', t => {
    t.equal(t.context.foo, 'bar')
    t.end()
  })
})
