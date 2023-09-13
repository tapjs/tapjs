import { CallSiteLike } from '@tapjs/stack'
import t from 'tap'
import { Base } from '../dist/esm/base.js'
import { Minimal } from '../dist/esm/minimal.js'

t.test('basic instantiation', t => {
  const b = new Base({})
  b.parser.end(`TAP version 14
ok 1 - this is fine
ok 2 - skipped test # SKIP
ok 3 - skipped with message # SKIP with a message
ok 4 - todo test # TODO
ok 5 - todo test with message # TODO with a message
not ok 6 - failed test
not ok 6 - failed skipped test # SKIP
not ok 8 - failed skipped with message # SKIP with a message
not ok 9 - failed todo test # TODO
not ok 10 - failed todo test with message # TODO with a message
ok 11 - skip for filter # SKIP filter: blarg
ok 12 - skip for grep # SKIP filter: only
1..12
`)

  t.matchSnapshot(b.results)
  t.matchSnapshot(b.lists)
  t.matchSnapshot(b.counts)
  t.matchSnapshot(b.context)
  t.equal(b.passing(), false)
  t.end()
})

t.test('non-object context', t => {
  const b = new Base({ context: 'hello' })
  t.equal(b.context, 'hello')
  t.end()
})

t.test('buffered writes get stored', t => {
  const b = new Base({ buffered: true })
  t.equal(b.printedOutput, false)
  t.equal(b.write('hello'), true)
  t.equal(b.printedOutput, true)
  t.equal(b.output, 'hello')
  t.end()
})

t.test('main(cb) calls cb', t => new Base({}).main(() => t.end()))

t.test('end() just returns this', t => {
  const b = new Base({})
  t.equal(b.end(), b)
  t.end()
})

t.test('handle throws in main function', t => {
  const b = new Base({ name: 'throw test' })
  const expect = new Error('oops')
  let er: Error | undefined = undefined
  b.threw = (e: Error) => {
    er = e
    t.equal(e, expect)
    b.parser.end()
  }

  // we have to defer because otherwise we're still in the
  // asyncScope of this test, not the Base's Domain
  b.main = () => {
    setTimeout(() => {
      throw expect
    })
  }

  t.equal(b.started, false)
  b.runMain(() => {})
  t.equal(b.started, true)
  b.concat().then(r => {
    t.equal(r, 'TAP version 14\n1..0 # no tests found\n')
    t.equal(er, expect)
    t.end()
  })
})

t.test('test Base.threw() handling', t => {
  const errs = t.capture(console, 'error')

  t.test('basic threw', t => {
    const b = new Base({ name: 'basic' })
    const er = new Error('oops')
    t.match(b.threw(er), {
      at: CallSiteLike,
      stack: String,
      test: 'basic',
    })
    t.same(errs.args(), [])
    t.equal((er as Error & { test: string }).test, 'basic')
    t.equal(b.parser.ok, false)
    t.end()
  })

  t.test('with extra', t => {
    const b = new Base({ name: 'basic' })
    const er = new Error('oops')
    t.matchOnly(
      b.threw(er, {
        some: 'diags',
      }),
      {
        some: 'diags',
        message: 'oops',
      }
    )
    t.equal((er as Error & { test: string }).test, 'basic')
    t.same(errs(), [])
    t.equal(b.parser.ok, false)
    t.end()
  })

  t.test('as proxy', t => {
    const b = new Base({ name: 'basic' })
    const er = new Error('oops')
    t.matchOnly(
      b.threw(
        er,
        {
          some: 'diags',
          test: 'child test',
        },
        true
      ),
      {
        some: 'diags',
        test: 'child test',
        message: 'oops',
      }
    )
    t.equal((er as Error & { test?: string }).test, undefined)
    t.same(errs(), [])
    t.equal(b.parser.ok, false)
    t.end()
  })

  t.test('throw after end, no parent', t => {
    const b = new Base({ name: 'basic' })
    b.parser.end('TAP version 14\n1..1\nok\n')
    t.equal(b.parser.ok, true)
    t.match(b.results, { ok: true })
    const er = new Error('oops')
    const threw = b.threw(er)
    t.equal(threw, undefined)
    t.equal((er as Error & { test?: string }).test, 'basic')
    t.match(errs.args(), [['%s: %s', 'Error', 'oops'], [String]])
    t.equal(b.parser.ok, false)
    t.match(b.results, { ok: false })
    t.end()
  })

  t.test('throw after end, no parent, no stack', t => {
    const b = new Base({ name: 'basic' })
    b.parser.end('TAP version 14\n1..1\nok\n')
    t.equal(b.parser.ok, true)
    t.match(b.results, { ok: true })
    const er = 'stack free'
    const threw = b.threw(er)
    t.equal(threw, undefined)
    t.match(errs.args(), [[{ message: 'stack free', test: 'basic' }]])
    t.equal(b.parser.ok, false)
    t.match(b.results, { ok: false })
    t.end()
  })

  t.test('throw after end, no parent, not an object', t => {
    const b = new Base({ name: 'basic' })
    b.parser.end('TAP version 14\n1..1\nok\n')
    t.equal(b.parser.ok, true)
    t.match(b.results, { ok: true })
    const er = 1234
    const threw = b.threw(er)
    t.equal(threw, undefined)
    t.match(errs.args(), [[{ error: 1234, test: 'basic' }]])
    t.equal(b.parser.ok, false)
    t.match(b.results, { ok: false })
    t.end()
  })

  t.test('throw after end, has parent', t => {
    const parent = new Base({ name: 'parent' })
    const b = new Base({ name: 'basic', parent })
    let calledParentThrew = false
    parent.threw = (e, extra, proxy) => {
      t.equal(calledParentThrew, false)
      calledParentThrew = true
      t.equal(e, er)
      t.match(extra, {
        at: CallSiteLike,
        stack: String,
        test: 'basic',
      })
      t.equal(proxy, true)
      t.same(errs(), [])
      t.equal((er as Error & { test?: string }).test, 'basic')
      t.equal(b.parser.ok, false)
      t.match(b.results, { ok: false })
    }
    b.parser.end('TAP version 14\n1..1\nok\n')
    t.equal(b.parser.ok, true)
    t.match(b.results, { ok: true })
    const er = new Error('oops')
    const threw = b.threw(er)
    t.equal(threw, undefined)
    t.equal(calledParentThrew, true)
    t.end()
  })

  t.test('throw after bailout', t => {
    const b = new Base({ name: 'basic' })
    b.parser.end('TAP version 14\n1..1\nBail out!\n')
    t.equal(b.parser.ok, false)
    t.match(b.results, { ok: false, bailout: true })
    const er = 'bail throw'
    const threw = b.threw(er)
    t.equal(threw, undefined)
    t.same(errs(), [])
    t.equal(b.parser.ok, false)
    t.match(b.results, { ok: false, bailout: true })
    t.end()
  })

  t.end()
})

t.test('setTimeout sets a timeout which calls timeout()', t => {
  const b = new Base({})
  b.timeout = () => t.end()
  b.setTimeout(10000)
  b.setTimeout(0)
  b.setTimeout(1)
  // don't exit from the unref
  setTimeout(() => {}, 10)
})

t.test('todo/skip tests get default Base.main always', t => {
  class SomeTest extends Base {
    main(cb: () => void) {
      t.fail('should not call this')
      cb()
    }
  }
  const b = new SomeTest({ todo: true })
  b.runMain(() => t.end())
})

t.test('debug debugs stuff', t => {
  const errs = t.capture(console, 'error')
  const b = new Base({ debug: true, name: 'debuggery' })
  b.runMain(() => {
    t.match(errs.args(), [[/TAP \d+ debuggery: BASE runMain/]])
    t.end()
  })
})

t.test('timeout method', t => {
  t.test('basic', t => {
    const b = new Base({ name: 'timer' })
    b.runMain(() => {})
    b.threw = (er, extra) => {
      t.matchOnly(er, { message: 'timeout!' })
      t.same(extra, {
        message: 'timeout!',
        at: {},
        stack: '',
        expired: 'timer',
      })
      return Base.prototype.threw.call(b, er, extra)
    }
    b.on('timeout', threw => {
      t.equal(b.timedOut, true)
      t.matchOnly(threw, {
        message: 'timeout!',
        expired: 'timer',
      })
      t.end()
    })
    t.equal(b.timedOut, false)
    b.timeout()
  })

  t.test('empty options', t => {
    const b = new Base({ name: 'timer' })
    b.runMain(() => {})
    b.threw = (er, extra) => {
      t.matchOnly(er, { message: 'timeout!' })
      t.same(extra, {
        message: 'timeout!',
        at: {},
        stack: '',
        expired: 'timer',
      })
      return Base.prototype.threw.call(b, er, extra)
    }
    b.on('timeout', threw => {
      t.matchOnly(threw, {
        message: 'timeout!',
        expired: 'timer',
      })
      t.end()
    })
    b.timeout({})
  })

  t.test('set expired option', t => {
    const b = new Base({ name: 'timer' })
    b.runMain(() => {})
    b.threw = (er, extra) => {
      t.matchOnly(er, { message: 'timeout!' })
      t.same(extra, {
        message: 'timeout!',
        at: {},
        stack: '',
        expired: 'other thing',
      })
      return Base.prototype.threw.call(b, er, extra)
    }
    b.on('timeout', threw => {
      t.matchOnly(threw, {
        message: 'timeout!',
        expired: 'other thing',
      })
      t.end()
    })
    b.timeout({ expired: 'other thing' })
  })

  t.end()
})

t.test('track passes in lists if passes:true in options', async t => {
  const b = new Base({ passes: true, name: 'passer' })
  b.parser.end(`TAP version 14
ok 1 - this is fine
ok 2 - skipped test # SKIP
ok 3 - skipped with message # SKIP with a message
ok 4 - todo test # TODO
ok 5 - todo test with message # TODO with a message
ok 6 - skip for filter # SKIP filter: blarg
ok 7 - skip for grep # SKIP filter: only
ok 8 - another normal pass
1..8
`)
  await b.concat()
  t.equal(b.results?.passes?.length, 2)
  t.equal(b.lists?.pass?.length, 2)
  t.strictSame(b.results?.passes, b.lists?.pass)
  t.matchSnapshot(b.results)
  t.matchSnapshot(b.lists)
  t.matchSnapshot(b.counts)
  t.matchSnapshot(b.context)
  t.equal(b.passing(), true)
  t.end()
})

t.test('silent test is silent, unless it fails', async t => {
  const tb = new Minimal({ name: 'parent' })
  tb.test('one', async () => {})
  tb.test('silent', { silent: true }, async tb => {
    t.equal(tb.buffered, true)
    t.equal(tb.silent, true)
  })
  tb.test('two', async () => {})
  tb.test('not so silent', { silent: true }, async tb => {
    t.equal(tb.buffered, true)
    t.equal(tb.silent, true)
    tb.fail('ohno')
  })
  tb.end()
  const res = await tb.concat()
  t.match(res, '\n# Subtest: not so silent\n    not ok 1 - ohno\n')
  t.notMatch(res, '\n# Subtest: silent\n')
  t.notMatch(res, /ok [0-9]+ - silent\n/)
})
