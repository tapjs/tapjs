'use strict'
const t = require('../')
const fs = require('fs')
const path = require('path')
const Test = t.Test
const util = require('util')
const assert = require('assert')
const EE = require('events').EventEmitter
const MiniPass = require('minipass')
const rimraf = require('rimraf')

process.env.TAP_DEV_SHORTSTACK = '1'

// set this forcibly so it doesn't interfere with other tests.
process.env.TAP_DIAG = ''
process.env.TAP_BAIL = ''

t.cleanSnapshot = require('./clean-stacks.js')

t.test('short output checks', t => {
  const env = process.env.TAP_BUFFER
  delete process.env.TAP_BUFFER
  t.teardown(_ => process.env.TAP_BUFFER = env)

  const cases = {
    'no plan': tt => {
      tt.pass('this is fine')
      tt.end()
    },

    'plan': tt => {
      tt.plan(1)
      tt.pass('this is fine')
    },

    'comment': tt => {
      tt.comment('this is fine')
      tt.end()
    },

    'pragma': tt => {
      tt.pragma({ strict: true })
      tt.pragma({ strict: false })
      tt.end()
    },

    'todo': tt => {
      tt.notOk(true, 'i will do this later', { todo: true })
      tt.notOk(true, { todo: 'later' })
      tt.notOk(false)
      tt.todo('i will do this later', tt => {
        throw 'oh no'
      })
      tt.ok(false, { message: 'this is fine', skip: true })
      tt.skip('i did not do this later', tt => {
        throw 'oops'
      })
      tt.end()
    },

    'only': tt => {
      tt.runOnly = false
      tt.only('run this with a comment', tt => tt.end())
      tt.test('this is a child test', tt => tt.end())
      tt.test('run this with a comment', { only: true },
              tt => tt.end())
      tt.end()
    },

    'no plan fail': tt => {
      tt.fail('this is fine', { diagnostic: false })
      tt.fail({ todo: true })
      tt.fail('this is fine')
      tt.end()
    },

    'plan fail': tt => {
      tt.plan(1, 'expect some failure here')
      tt.fail('this is fine', { diagnostic: false })
    },

    'fail then end': tt => {
      tt.test('child', tt => {
        tt.fail('this is not ok')
        tt.end()
      })
      tt.end()
    },

    'planned skip': tt => {
      tt.plan(0, 'skip this one')
    },

    'multi-plan throws': tt => {
      tt.plan(1)
      tt.throws(() => tt.plan(1))
    },

    'negative plan throws': tt => {
      tt.throws(() => tt.plan(-1))
      tt.end()
    },

    'expect fail': tt => {
      tt.plan(1)
      tt.fail('this is fine', { expectFail: true })
    },

    'sub': tt => {
      tt.test('named child', { buffered: true }, tt => {
        tt.pass('this is fine')
        tt.pass()
        tt.pass({ todo: true })
        tt.end()
      })
      tt.test(function named_function (tt) {
        tt.plan(1)
        tt.pass('also fine')
      })
      tt.test('promisey', tt => new Promise(resolve => {
        tt.pass('i promise, it is fine')
        resolve()
      }))
      tt.end()
    },

    'parallel sub': tt => {
      tt.jobs = 2
      tt.plan(2)
      let slowGoing = true
      tt.test('slow child', tt => setTimeout(_ => {
        slowGoing = false
        tt.end()
      }, 200))
      tt.test('fast child', tt => setTimeout(_ => {
        tt.ok(slowGoing, 'slow is going')
        tt.end()
      }))
    },

    'reasoned bailout': tt => {
      tt.test(tt => {
        tt.pass('this is fine')
        tt.bailout('not fine')
      })
      tt.end()
    },

    'unreasonable bailout': tt => {
      tt.test(tt => {
        tt.pass('this is fine')
        tt.bailout()
      })
      tt.end()
    },

    'bailout after end': tt => {
      tt.test(tt => {
        tt.pass('this is fine')
        tt.end()
        tt.bailout('not fine')
      })
      tt.end()
    },

    'diags': tt => {
      tt.pass('has diags', { diagnostic: true, foo: 1 })
      tt.fail('fails without diag', { diagnostic: false, foo: 1 })
      process.env.TAP_DIAG = '1'
      tt.pass('has diags', { foo: 1 })
      tt.fail('fails without diag', { diagnostic: false, foo: 1 })
      process.env.TAP_DIAG = '0'
      tt.pass('has diags', { diagnostic: true, foo: 1 })
      tt.fail('fails without diag', { foo: 1 })
      process.env.TAP_DIAG = ''
      tt.end()
    },

    'gentle thrower': tt => tt.threw(new Error('ok')),
    'gentle thrower nonerror': tt => tt.threw('ok'),
    'child thrower': tt => tt.test('child test', tt =>
      tt.threw(new Error('ok'))).then(tt.end),

    'child thrower nonerror': tt => tt.test('child test', tt =>
      tt.threw('ok')).then(tt.end),

    'child end event thrower': tt => {
      tt.test(tt => {
        tt.plan(1)

        tt.on('end', function () {
          tt.comment('end() event')
          throw new Error('beep')
        })

        tt.equal(3, 3)
      })
      tt.end()
    },

    'child end event throw nonerror': tt => {
      tt.test(tt => {
        tt.plan(1)

        tt.on('end', function () {
          tt.comment('end() event')
          throw 'boop'
        })

        tt.equal(3, 3)
      })
      tt.end()
    },

    'simulated uncaughtException throwing': tt => {
      tt.test('parent', tt => {
        tt.expectUncaughtException()
        const e = new Error('foo')
        e.tapCaught = 'uncaughtException'
        tt.threw(e)
        tt.test('wrong error', tt => {
          tt.expectUncaughtException({ message: 'bar' })
          const e = new Error('foo is not a bear')
          e.tapCaught = 'uncaughtException'
          tt.threw(e)
          tt.end()
        })
        tt.test('nothing uncaught', tt => {
          tt.expectUncaughtException(/bar/)
          tt.expectUncaughtException(/anotehr one/, 'expect a second one')
          const e = new Error('bar is a bar')
          e.tapCaught = 'uncaughtException'
          tt.threw(e)
          tt.end()
        })
        tt.end()
      })
      tt.end()
    },
  }

  const keys = Object.keys(cases)
  t.plan(keys.length)

  for (let i in cases) {
    t.test(i, t => {
      const go = (t, tt) => new Promise(resolve => {
        let out = ''
        tt.on('data', c => out += c)
        let didIt = false
        const done = reason => {
          // make sure we don't test on BOTH bailout and end
          // as that is unnecessary
          if (didIt)
            return
          didIt = true

          if (tt.output)
            out = tt.output

          if (reason)
            out = out.trim() + '\nBAILOUT: ' + JSON.stringify(reason)

          t.matchSnapshot(out, i)
          resolve()
        }
        tt.on('end', done)
        tt.on('bailout', done)
        cases[i](tt)
      })

      t.test('no options', t =>
        go(t, new Test()))
      t.test('bailout', t =>
        go(t, new Test({ bail: true })))
      t.test('runOnly', t =>
        go(t, new Test({ runOnly: true })))
      t.end()
    })
  }
})

t.test('assertions and weird stuff', t => {
  const env = process.env.TAP_BUFFER
  process.env.TAP_BUFFER = '0'
  t.teardown(_ => process.env.TAP_BUFFER = env)

  const cases = {
    'error': tt => {
      tt.error(null, 'this is not an error')
      tt.error(new Error('fail: poop'), 'this error is poop')
      tt.error(new Error('fail: poop'))
      tt.error('fail: poop', 'this error is "poop"')
      tt.error('fail: poop')
      tt.error(null, { todo: true })
      tt.error(null)
      tt.end()
    },

    equal: tt => {
      tt.equal(1, 2)
      tt.equal(1, '1', { skip: true })
      tt.equal(1, 1, 'one is one')
      // fails, but with the special note
      tt.equal({foo: 1}, {foo: 1})
      // fails, showing a diff
      tt.equal({foo: 1}, {foo: 2})
      tt.end()
    },

    not: tt => {
      tt.not(1, 2)
      tt.not(1, '1', { skip: true })
      tt.not(1, 1, 'one is not one')
      tt.not({}, {})
      tt.end()
    },

    same: tt => {
      const o = { foo: 1 }
      tt.same([1, 2, 3], ['1', '2', '3'])
      tt.same(o, o)
      tt.same({ foo: 1 }, { foo: 1 }, 'object exactness')
      tt.same({ foo: 2 }, { foo: 1 }, { skip: true })
      tt.notSame({ foo: 2 }, { foo: 1 }, 'this one passes')
      tt.notSame({ foo: 2 }, { foo: 1 }, { skip: true })
      tt.notSame({ foo: { bar: 2 } }, { foo: { bar: '2' } },
                 'this one fails')

      tt.strictSame({ foo: 2 }, { foo: 1 }, { skip: true })
      tt.strictSame([1, 2, 3], ['1', '2', '3'])
      tt.strictSame(o, { foo: 1 })
      tt.strictSame(o, o)
      tt.notStrictSame({ foo: 2 }, { foo: 1 }, { skip: true })
      tt.notStrictSame({ foo: 2 }, { foo: 1 }, 'this one passes')
      tt.notStrictSame({ foo: { bar: 2 } }, { foo: { bar: '2' } },
                       'this one passes')
      tt.notStrictSame({ foo: { bar: 2 } }, { foo: { bar: 2 } },
                       'this one fails')

      tt.end()
    },

    hasStrict: tt => {
      tt.hasStrict({ a: 'b', c: '1' }, { a: 'b', c: 1 }, 'should fail')
      tt.hasStrict({ a: 1, b: 2, c: 3 }, { b: 2 }, 'should pass')
      tt.hasStrict({ a: 'b', c: '1' }, { a: 'b', c: 1 }, { todo: true })
      tt.end()
    },

    match: tt => {
      tt.match({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
      tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
      tt.match({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
               'a message')
      tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
               { todo: true })
      tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
      tt.notMatch({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
      tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
                  'a message')
      tt.notMatch({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
                  { todo: true })

      tt.end()
    },

    type: tt => {
      tt.type(null, 'object', 'this fails')
      tt.type(null, 'object', { expectFail: true })
      tt.type(1234, 'number')
      tt.type(tt, Test)
      tt.type({}, function () {}, 'fails, anonymously')
      const o = {}
      tt.type(o, o, 'a thing is a thing')
      tt.type(() => {}, 'function', 'arrows are functions')
      tt.type(() => {}, Function, 'arrows are functions')
      tt.type(() => {}, Object, 'fail: arrows are not objects')
      tt.type({}, 'object')
      tt.type(tt, 'Test')
      tt.type(tt, 'EventEmitter')
      tt.end()
    },

    throws: tt => {
      tt.match(tt.throws(() => { throw new TypeError('x') }, TypeError),
        new TypeError('x'), 'returns the error that was thrown')
      tt.throws(() => { throw new TypeError('x') }, TypeError)
      tt.throws(() => { throw new TypeError('x') },
                new TypeError('x'))
      tt.throws(() => { throw new TypeError('x') },
                { message: 'x' })

      const nameless = new Error('x')
      Object.defineProperty(nameless, 'name', {
        value: undefined
      })
      nameless.stack = /^.*$/
      tt.throws(() => { throw new Error('x') }, nameless)
      tt.throws(() => { throw nameless }, { message: 'x' })
      tt.throws(() => { throw nameless }, /^.$/)
      tt.match(tt.throws(() => { throw nameless }), nameless,
        'returns the error that was thrown')

      const prop = new Error('noent')
      prop.code= 'ENOENT'
      tt.throws(() => {
        const er = new Error('noent')
        er.code = 'ENOENT'
        er.path = __filename
        throw er
      }, prop)

      tt.throws(() => 'doesnt tho', 'fail: does not throw actually')

      tt.throws(() => { throw new Error('x') }, {}, { skip: true })
      tt.throws(() => { throw new Error('x') }, {},
                {}, {}, 1)
      tt.throws(() => { throw new Error('x') },
                () => {}, () => {}, () => {},
                'extra functions are no-ops for bw comp')
      tt.throws('todo')
      tt.end()
    },

    doesNotThrow: tt => {
      tt.doesNotThrow(() => {}, 'this is fine')
      tt.doesNotThrow(() => {}, { todo: true })
      tt.doesNotThrow('reverse args', () => {})
      tt.doesNotThrow('this is todo')
      tt.doesNotThrow('fail', () => {
        throw new Error('ouch')
      })
      tt.end()
    },

    rejects: tt => {
      tt.rejects('promise', new Promise((_, reject) => {
        reject(new Error('expected'))
      }))
      tt.rejects(() => new Promise((_, reject) => {
        reject(new Error('expected'))
      }), 'fn returns promise')
      tt.rejects(new Promise((_, reject) => {
        reject(new Error('expected'))
      }))
      tt.rejects(() => new Promise((_, reject) => {
        reject(new Error('expected'))
      }))
      tt.rejects('todo because no fn/promise', { foo: 'bar' })
      tt.comment('next 2 also todo, no message')
      tt.rejects({ x: 1 })
      tt.rejects()
      tt.rejects(() => new Promise((_, reject) => {
        reject(new Error('expected'))
      }), new Error('expected'), 'throws expected error')
      tt.rejects(() => new Promise((_, reject) => {
        reject(new TypeError('expected'))
      }), TypeError, 'throws expected error type')
      tt.rejects(() => new Promise((_, reject) => {
        reject(new TypeError('expected'))
      }), TypeError, ()=>{}, _=>_, 'extra functions are no-ops')
      tt.rejects(() => new Promise((_, reject) => {
        reject(new TypeError('expected'))
      }), TypeError, 1, 2, {}, {}, 'extra args are no-ops')

      const prop = new Error('noent')
      prop.code= 'ENOENT'
      tt.rejects(new Promise((_, reject) => {
        const er = new Error('noent')
        er.code = 'ENOENT'
        er.path = __filename
        reject(er)
      }), prop)

      const nameless = new Error('x')
      Object.defineProperty(nameless, 'name', {
        value: undefined
      })
      nameless.stack = /^.*$/
      tt.rejects(new Promise((_,r) => r(new Error('x'))), nameless)
      tt.rejects(new Promise((_,r) => r(nameless)), { message: 'x' })
      tt.rejects(new Promise((_,r) => r(nameless)), /^.$/)
      tt.rejects(new Promise((_,r) => r(nameless)))

      tt.rejects(() => {}, 'fail: no promise')
      tt.rejects(() => ({}), 'fail: no promise')

      tt.rejects(new Promise(r => r(420)), 'fail: passing promise')

      tt.rejects(() => Promise.reject(), 'empty rejection')

      tt.end()
    },

    resolves: tt => {
      tt.resolves(new Promise(r => r(420)))
      tt.resolves(new Promise(r => r(420)), { todo: true })
      tt.resolves(new Promise(r => r(420)), 'passing promise')
      tt.resolves(() => new Promise(r => r(420)), 'passing promise fn')
      tt.resolves(() => {}, 'fail: no promise')
      tt.end()
    },

    resolveMatch: tt => {
      tt.resolveMatch(new Promise(r => r(420)), Number)
      tt.resolveMatch(new Promise(r => r(420)), 'asdf', { todo: true })
      tt.resolveMatch(new Promise(r => r(420)), 420, 'promise')
      tt.resolveMatch(() => new Promise(r => r(420)), 420, 'promise fn')
      tt.resolveMatch(() => {}, {}, 'fail: no promise')
      tt.resolveMatch(Promise.reject('n'), 'y', 'fail: rejected promise')
      tt.end()
    },

    'test after end fails': tt => {
      tt.end()
      tt.pass('failing pass')
    },

    'plan excess': tt => {
      tt.plan(1)
      tt.pass('fine')
      tt.pass('not fine')
    },

    'plan excess, ignored when failing': tt => {
      tt.plan(1)
      tt.fail('expected fail', { diagnostic: false })
      tt.pass('not fine')
    },

    'using the assertAt field': tt => {
      const stack = require('../lib/stack.js')
      const foo = () => tt.fail('expect fail')
      const bar = () => foo()
      const baz = () => { tt.assertAt = stack.at(); bar() }

      tt.plan(1)
      baz()
    },

    'using the assertStack field': tt => {
      const stack = require('../lib/stack.js')
      const foo = () => tt.fail('expect fail')
      const bar = () => foo()
      const baz = () => { tt.assertStack = stack.captureString(80); bar() }

      tt.plan(1)
      baz()
    },

    printResult: tt => {
      // super low-level
      tt.printResult(true, 'this is fine')
      tt.end()
    },

    'printResult after plan end': tt => {
      // super low-level
      tt.end()
      tt.printResult(true, 'this is fine')
    },

    'plan, child test, explicit end': tt => {
      tt.plan(1)
      tt.test(tt => Promise.resolve('ok'))
      tt.end()
    },

    'end multiple times': tt => {
      tt.plan(1)
      tt.pass('yes')
      tt.end()
      tt.end()
    },

    'thrower after end': tt => {
      tt.test('child', tt => {
        tt.plan(1)
        tt.pass('this is fine')
        tt.threw(new Error('catch it in the parent'))
      })
      tt.end()
    },

    'child breaks a promise': tt => {
      tt.test('child', () => new Promise((_, r) => r(new Error('poop'))))
      tt.end()
    },

    'child breaks a promise nonerror': tt => {
      tt.test('child', () => new Promise((_, r) => r('poop')))
      tt.end()
    },

    'child teardown throw': tt => {
      tt.test('child', tt => {
        tt.teardown(() => { throw new Error('fail') })
        tt.end()
      })
      tt.end()
    },

    'child teardown throw nonerror': tt => {
      tt.test('child', tt => {
        tt.teardown(() => { throw 'fail' })
        tt.end()
      })
      tt.end()
    },

    'teardown promise': tt => {
      tt.test('parent', tt => {
        tt.teardown(() => new Promise(res => {
          tt.comment('parent teardown')
          res()
        }))
        tt.pass('this is fine')
        tt.end()
      })
      tt.end()
    },

    'teardown promise fail': tt => {
      tt.test('parent', tt => {
        tt.teardown(() => new Promise((_, rej) => {
          tt.comment('parent teardown')
          rej(new Error('did not tear down proper'))
        }))
        tt.pass('this is fine')
        tt.end()
      })
      tt.end()
    },

    'teardown promise fail nonerror': tt => {
      tt.test('parent', tt => {
        tt.teardown(() => new Promise((_, rej) => {
          tt.comment('parent teardown')
          rej('did not tear down proper')
        }))
        tt.pass('this is fine')
        tt.end()
      })
      tt.end()
    },

    'fullname without main': tt => {
      const main = process.argv[1]
      process.argv[1] = ''
      tt.test('child', tt => {
        tt.pass(tt.fullname)
        tt.end()
      })
      tt.pass(tt.fullname)
      process.argv[1] = main
      tt.end()
    },

    'comment after end': tt => {
      tt.end()
      tt.comment('this is fine')
    },

    grep: tt => {
      tt.test('parent', { grep: [ /x$/, /y$/ ] }, tt => {
        tt.test('do not run this', tt => tt.threw('no'))
        tt.test('but do run this x', tt => {
          tt.test('do not run this', tt => tt.threw('stop'))
          tt.test('but do run this y', tt => {
            tt.test('grand kids', tt => tt.end())
            tt.test('get all the', tt => tt.end())
            tt.test('goodies', tt => {
              tt.pass('this is good')
              tt.end()
            })
            tt.end()
          })
          tt.end()
        })
        tt.end()
      })
      tt.end()
    },

    grepInvert: tt => {
      tt.test('parent', { grepInvert: true, grep: [ /x$/, /y$/ ] }, tt => {
        tt.test('do not run this x', tt => tt.threw('no'))
        tt.test('but do run this', tt => {
          tt.test('do not run this y', tt => tt.threw('stop'))
          tt.test('but do run this', tt => {
            tt.test('grand kids', tt => tt.end())
            tt.test('get all the', tt => tt.end())
            tt.test('goodies', tt => {
              tt.pass('this is good')
              tt.end()
            })
            tt.end()
          })
          tt.end()
        })
        tt.end()
      })
      tt.end()
    },

    autoEnd: tt => {
      tt.options.autoend = true
      tt.test('this should automatically end', { autoend: true }, t => {
        t.pass('this is fine')
        setTimeout(() => t.pass('also fine'))
      })
      tt.test('this should also end', t => {
        t.pass('this is fine')
        setTimeout(() => t.pass('also fine'))
        t.autoend()
      })
      tt.test('autoend async 1', t => {
        setTimeout(() =>
          t.test('st', t => setTimeout(() => t.end())))
        t.autoend()
      })
      tt.test('autoend async 2', t => {
        setTimeout(() => setTimeout(() =>
          t.test('st', t => setTimeout(() => t.end()))))
        t.autoend()
      })
      tt.test('autoend async limit', t => {
        setTimeout(() => setTimeout(() => setTimeout(() =>
          t.test('st', t => setTimeout(() => t.end())))))
        t.autoend()
      })

    },

    'autoend(false)': tt => {
      tt.autoend()
      tt.autoend(false)
      setTimeout(() => {
        tt.pass('this is fine')
        tt.end()
      }, 50)
    },

    'endAll with test children': tt => {
      tt.test('this is the test that never ends', tt => {
        tt.test('it goes on and on my friend', tt => {
          tt.pass('this is ok')
          tt.test('misbehaving child', () => new Promise(()=>{}))
        })
        tt.pass('some queue stuff')
      })
      tt.endAll()
    },

    'endAll with unresolved t.resolveMatch': tt => {
      tt.test('this is the test that never ends', tt => {
        tt.test('it goes on and on my friend', tt => {
          tt.pass('this is ok')
          tt.resolveMatch(() => new Promise(()=>{}), {})
        })
        tt.pass('some queue stuff')
      })
      tt.endAll()
    },

    'endAll with stdin': tt => {
      const s = new MiniPass()
      tt.stdin({ tapStream: s })
      s.write('TAP version 13\nok - but not ended\n')
      tt.endAll()
    },

    'endAll with bailout': tt => {
      tt.on('bailout', reason => tt.endAll())
      tt.test('child', { bail: true }, tt => {
        tt.fail('not fine')
        tt.end()
      })
    },

    stdinOnly: tt => {
      const s = new MiniPass()
      tt.plan(8)
      tt.test('the stdinOnly test', ttt => {
        let sub = null
        ttt.stdinOnly({ tapStream: s })
        tt.throws(() => ttt.stdinOnly())
        tt.throws(() => ttt.pass('this is fine'))
        tt.throws(() => ttt.test('hello', () => {}))
        tt.throws(() => ttt.end())
        tt.throws(() => tt.stdinOnly())
        ttt.on('subtestAdd', s => sub = s)
        s.end(`
          TAP version 13
          # Subtest: child
              ok - this child is in a subtest
              1..1
          ok 1 - child
          ok 2 - just a normal assertion
          not ok 3 - this is not ok
          not ok 4 - this will be ok later # TODO
          1..4
          `.replace(/^          /gm, '')
        )
        tt.ok(sub, 'got a sub')
        tt.same(ttt.counts, {
          total: 3,
          pass: 1,
          fail: 1,
          skip: 0,
          todo: 1
        })
      })
    },

    'bailout with indented subs': tt => {
      tt.test('1', tt => tt.end())
      tt.test('2', tt => Promise.resolve(null))
      tt.test('3', tt => setTimeout(() => tt.end()))
      tt.end()
      tt.bailout('whoops')
    },

    'bailout with buffered subs': tt => {
      const o = { buffered: true }
      tt.test('1', o, tt => tt.end())
      tt.test('2', o, tt => Promise.resolve(null))
      tt.test('3', o, tt => setTimeout(() => tt.end()))
      process.nextTick(() => tt.bailout('whoops'))
      tt.end()
    },

    'bailout in first sub': t => {
      t.test('one', t => t.bailout('bail me out'))
      t.test('two', t => t.end())
      t.end()
    },

    'bailout in first buffered sub': t => {
      const o = { buffered: true }
      t.test('one', o, t => t.bailout('bail me out'))
      t.test('two', o, t => t.end())
      t.end()
    },

    'bailout in nested sub': t => {
      t.test('one', t => t.test('1.5', t => t.bailout('bail me out')))
      t.test('two', t => t.end())
      t.end()
    },

    'bailout in first buffered sub': t => {
      const o = { buffered: true }
      t.test('one', t => t.test('1.5', o, t => t.bailout('bail me out')))
      t.test('two', o, t => t.end())
      t.end()
    },

    'implicit bailout with parallel subs': t => {
      t.bail = true
      t.jobs = 2
      const tests = []
      t.test('zro', { buffered: true }, t => tests.push(t))
      t.test('one', { buffered: true }, t => tests.push(t))
      t.test('two', { buffered: true }, t => tests.push(t))
      t.test('tre', { buffered: true }, t => tests.push(t))
      t.test('for', { buffered: true }, t => tests.push(t))
      t.end()
      tests[1].end()
      tests[2].fail('two fail 0')
      tests[2].fail('two fail 1')
      tests[2].fail('two fail 2')
      tests[2].fail('two fail 3')
      tests[0].end()
    },

    'implicit bailout without ending parent': t => {
      t.bail = true
      t.jobs = 4
      const tests = []
      t.test('zro', { buffered: true }, t => tests.push(t))
      t.test('one', { buffered: true }, t => tests.push(t))
      t.test('two', { buffered: true }, t => tests.push(t))
      t.test('tre', { buffered: true }, t => tests.push(t))
      t.test('for', { buffered: true }, t => tests.push(t))

      tests[0].end()
      tests[2].end()
      tests[3].fail('not fine')
      tests[1].end()
    },

    'silent subs': tt => {
      tt.test('child', tt => Promise.resolve(null))
      tt.test('shhh', { silent: true }, tt => tt.end())
      tt.test('child 2', tt => tt.end())
      tt.end()
    },

    'beforeEach afterEach': tt => {
      tt.beforeEach(function (cb) {
        console.error('parent be', this.name)
        cb()
      })
      tt.afterEach(function (cb) {
        console.error('parent ae', this.name)
        cb()
      })
      tt.test('child', tt => {
        tt.beforeEach(function (cb) {
          console.error('child be', this.name)
          cb()
        })
        tt.afterEach(function (cb) {
          console.error('child ae', this.name)
          cb()
        })
        tt.test('grandkid', tt => Promise.resolve(console.error('in test')))
        tt.end()
      })
      tt.end()
    },

    'throw in child beforeEach': tt => {
      tt.test('child', async tt => {
        tt.beforeEach(async () => {
          throw new Error('poop')
        })
        tt.test('grandkid', tt => Promise.resolve(console.error('in test')))
        tt.end()
      })
      tt.test('next kid', async tt => {})
      tt.end()
    },

    'throw in root beforeEach': tt => {
      tt.beforeEach(async cb => {
        throw new Error('poop')
      })
      tt.test('child', tt => {
        tt.test('grandkid', tt => Promise.resolve(console.error('in test')))
        tt.end()
      })
      tt.test('next kid', async tt => {})
      tt.end()
    },

    'timeout expiration': t => {
      const buf = [ false, true ]
      buf.forEach(buf => {
        t.test('get lost buf=' + buf, { buffered: buf, timeout: 50 }, t => {
          const timer = setTimeout(() => {}, 10000)
          t.on('timeout', () => clearTimeout(timer))
        })
      })
      t.end()
    },

    'timeout with subs': t => {
      const buf = [ false, true ]
      buf.forEach(buf => {
        t.test('get lost buf=' + buf, { buffered: buf, timeout: 50 }, t => {
          const timer = setTimeout(() => {}, 10000)
          t.test('carry on', t => t.on('timeout', () => clearTimeout(timer)))
        })
      })
      t.end()
    },

    'timeout at the last tick': t => {
      const buf = [ false, true ]
      buf.forEach(buf => {
        t.test('work it harder buf=' + buf, { buffered: buf, timeout: 1 }, t => {
          t.plan(1)
          const start = Date.now()
          const finish = start + 10
          while (finish > Date.now()) {
            fs.readFileSync(__filename)
          }
          t.pass('this is fine')
        })
      })
      t.end()
    },

    't.emits': t => {
      const EE = require('events').EventEmitter
      const ee = new EE()
      t.emits(ee, 'fail', 'this one will fail')
      t.emits(ee, 'pass', { extra: 'some stuff' })
      ee.emit('pass')
      t.end()
    },
  }

  const keys = Object.keys(cases)
  t.plan(keys.length)

  for (let i in cases) {
    t.test(i, t => {
      t.plan(1)

      const error = console.error
      t.teardown(() => console.error = error)
      let err = ''
      console.error = function () {
        err += util.format.apply(util, arguments) + '\n'
      }

      const tt = new Test()
      let out = ''
      tt.on('data', c => out += c)
      tt.on('end', _ => {
        setTimeout(() => {
          if (err)
            out = out.trim() + '\n' + 'STDERR:\n' + err
          t.matchSnapshot(out, 'output')
        })
      })
      cases[i](tt)
    })
  }
})

t.test('addAssert', t => {
  t.throws(() => t.addAssert(null), new TypeError('name is required'))
  t.throws(() => t.addAssert('x'), new TypeError('number of args required'))
  t.throws(() => t.addAssert('x', -1),
           new TypeError('number of args required'))
  t.throws(() => t.addAssert('x', 1),
           new TypeError('function required for addAssert'))
  t.throws(() => t.addAssert('ok', 1, () => {}),
           new TypeError('attempt to re-define `ok` assert'))

  const url = require('url')
  const tt = new Test({ buffered: true })
  tt.addAssert('isUrl', 1, function isUrl (u, message, extra) {
    return this.match(url.parse(u), {
      protocol: /^https?:$/,
      slashes: true,
      host: String,
      path: /^\/.*$/
    }, message || 'expect a valid http/https url', extra)
  })
  tt.isUrl('hello is not a url')
  tt.isUrl('http://x', 'x is a url!')
  tt.isUrl('https://skip:420/', { skip: 420 })
  tt.end()

  t.matchSnapshot(tt.output, 'using the custom isUrl assertion')
  return t.end()
})

t.test('addAssert on prototype', t => {
  function foobar (found, message, extra) {
    return this.ok(found, message, extra)
  }
  Test.prototype.addAssert('foobar', 1, foobar)
  t.foobar(true, 'this is fine')
  t.end()
})

t.test('spawn', t => {
  const okjs = path.resolve(__dirname, '../ok.test.js')
  t.teardown(() => fs.unlinkSync(okjs))
  fs.writeFileSync(okjs, "require('./').pass('this is fine')\n")
  t.spawn(process.execPath, okjs)
  t.spawn(process.execPath, okjs, 'a string as options')
  t.spawn(process.execPath, okjs, { name: 'a name as an option' })

  t.test('kitty pipe', t => {
    t.on('spawn', t =>
      t.proc.stdin.end('TAP version 13\n1..1\nok\n'))
    t.spawn('cat', [], { stdio: 'pipe' })
    t.spawn('cat', null, { stdio: 'pipe' }, 'aggreeable kitten')
    t.end()
  })

  t.end()
})

t.test('snapshots', async t => {
  const Snapshot = require('../lib/snapshot.js')
  const snap = [ true, false ]
  const fn = async snap => {
    const tt = new Test({
      snapshot: snap,
      name: 'deleteme',
      buffered: true
    })
    await tt.test('child test', { snapshot: snap, buffered: false }, tt => {
      tt.matchSnapshot({ foo: 'bar' }, 'an object')
      tt.formatSnapshot = o => JSON.stringify(o, null, 2)
      tt.matchSnapshot({ foo: 'bar' }, 'a jsonic object')
      tt.formatSnapshot = o => ({ ...o, mutated: true })
      tt.matchSnapshot({ foo: 'bar' }, 'a mutated object')
      delete tt.formatSnapshot
      tt.matchSnapshot('some string \\ \` ${process.env.FOO}', 'string')
      tt.matchSnapshot('do this eventually', { todo: 'later' })
      tt.resolveMatchSnapshot(Promise.resolve(true), { todo: 'later' }, 'later')
      tt.resolveMatchSnapshot({ fo: 'not a promise' }, 'message about promise')
      tt.resolveMatchSnapshot(Promise.reject('rejected promise'))
      tt.resolveMatchSnapshot(() => Promise.resolve(420), 'promise fn')
      return tt.resolveMatchSnapshot(Promise.resolve({a:1, b:2})
        .then(a => `a: ${a.a}`), 'modify the promise result')
    })
    tt.emit('teardown')
    tt.end()
    return tt.output
  }
  const outputs = [await fn(true), await fn(false) ]

  t.matchSnapshot(outputs[0], 'saving the snapshot')
  t.matchSnapshot(outputs[1], 'verifying the snapshot')

  const snapFile = path.resolve(__dirname, '..',
    'tap-snapshots', 'test-test.js-deleteme.test.js')
  t.matchSnapshot(fs.readFileSync(snapFile, 'utf8'), 'snapshot file')
  fs.unlinkSync(snapFile)

  t.end()
})

t.test('endAll direct while waiting on a resolving promise', t => {
  t.plan(1)
  const tt = new Test()
  tt.setEncoding('utf8')
  const buf = []
  tt.on('data', c => buf.push(c))
  tt.on('end', () => {
    const result = buf.join('')
    t.matchSnapshot(result, 'result')
  })
  tt.resolveMatch(() => new Promise(() => {}), 'never resolves')
  setTimeout(() => tt.endAll())
})

t.test('endAll direct while waiting on Promise rejection', t => {
  t.plan(1)
  const tt = new Test()
  tt.setEncoding('utf8')
  const buf = []
  tt.on('data', c => buf.push(c))
  tt.on('end', () => {
    const result = buf.join('')
    t.matchSnapshot(result, 'result')
  })
  tt.rejects(() => new Promise(() => {}), { message: 'never resolves' })
  setTimeout(() => tt.endAll())
})

t.test('endAll with sub while waiting on a resolving promise', t => {
  t.plan(1)
  const tt = new Test()
  tt.setEncoding('utf8')
  const buf = []
  tt.on('data', c => buf.push(c))
  tt.on('end', () => {
    const result = buf.join('')
    t.matchSnapshot(result, 'result')
  })
  tt.test(t => t.resolveMatch(() => new Promise(() => {}), 'never resolves'))
  setTimeout(() => tt.endAll())
})

t.test('throw while waiting on a resolving promise', t => {
  t.plan(1)
  const tt = new Test()
  tt.setEncoding('utf8')
  const buf = []
  tt.on('data', c => buf.push(c))
  tt.on('end', () => {
    const result = buf.join('')
    t.matchSnapshot(result, 'result')
  })
  tt.test(t => {
    setTimeout(() => t.threw(new Error('poop')))
    return t.resolveMatch(() => new Promise(() => {}), 'never resolves')
  })
  tt.end()
})

t.test('test dir name does not throw when no main module is present', t => {
  const {spawn} = require('child_process')
  const tap = JSON.stringify(require.resolve('../'))
  const c = spawn(process.execPath, ['-p', `require(${tap}).testdirName`])
  const out = []
  const err = []
  c.stdout.on('data', c => out.push(c))
  c.stderr.on('data', c => err.push(c))
  c.on('close', (code, signal) => {
    t.equal(code, 0)
    t.equal(signal, null)
    t.matchSnapshot(Buffer.concat(out).toString('utf8'), 'stdout')
    t.matchSnapshot(Buffer.concat(err).toString('utf8'), 'stderr')
    t.end()
  })
})

t.test('fixture dir stuff', t => {
  const tdn = t.testdirName
  t.throws(() => fs.statSync(tdn), 'doesnt exist yet')
  t.teardown(() => fs.statSync(tdn), 'exists in teardown')
  const dir = t.testdir()
  t.teardown(() => fs.statSync(tdn), 'exists in teardown scheduled after testdir')
  t.equal(dir, tdn)
  t.ok(fs.statSync(dir).isDirectory(), 'made directory')
  t.testdir({ file: 'contents' })
  t.equal(fs.readFileSync(`${dir}/file`, 'utf8'), 'contents', 'made file')
  t.testdir({
    file2: 'contents',
    link: t.fixture('symlink', 'file2'),
  })
  t.throws(() => fs.statSync(`${dir}/file`), 'old dir cleared out')
  t.equal(fs.readFileSync(`${dir}/file2`, 'utf8'), 'contents', 'made file')
  t.equal(fs.readlinkSync(`${dir}/link`), 'file2', 'made symlink')
  let removeDir
  t.test('remove the dir when its done', t => {
    removeDir = t.testdir()
    t.end()
  })
  let leaveDir
  t.test('leave the dir behind', { saveFixture: true }, t => {
    t.throws(() => fs.statSync(removeDir), 'previous dir was removed')
    leaveDir = t.testdir()
    t.parent.teardown(() => rimraf.sync(leaveDir))
    t.end()
  })
  t.test('check leaveDir is still there', t => {
    t.ok(fs.statSync(leaveDir).isDirectory(), 'left dir behind')
    t.end()
  })
  t.end()
})
