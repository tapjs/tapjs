const t = require('../')
const Test = t.Test
const assert = require('assert')

const clean = out => out
  .replace(/ # time=[0-9\.]+m?s( \{.*)?\n/g, ' # {time}$1\n')
  .replace(/\n( {2})+stack: \|-?\n((\1  .*).*\n)+/gm,
    '\n$1stack: |\n{STACK}\n')
  .replace(/:[0-9]+:[0-9]+(\)?\n)/g, '#:#$1')
  .replace(/(line|column): [0-9]+/g, '$1: #')
  .split(process.cwd()).join('{CWD}')


t.test('short output checks', t => {
  const env = process.env.TAP_BUFFER
  process.env.TAP_BUFFER = '0'
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
      tt.end()
    },

    'todo': tt => {
      tt.notOk(true, 'i will do this later', { todo: true })
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
      tt.end()
    },

    'plan fail': tt => {
      tt.plan(1)
      tt.fail('this is fine', { diagnostic: false })
    },

    'expect fail': tt => {
      tt.plan(1)
      tt.fail('this is fine', { expectFail: true })
    },

    'sub': tt => {
      tt.test('named child', { buffered: true }, tt => {
        tt.pass('this is fine')
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
      }, 100))
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

    // _actually_ throwing is only handled by root TAP test
    // using a Domain to catch beyond async stack drops
    'gentle thrower': tt => tt.threw(new Error('ok')),
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
            out = out.trim() + '\n' + JSON.stringify(reason)

          t.matchSnapshot(clean(out), i)
          resolve()
        }
        tt.on('end', done)
        tt.on('bailout', done)
        cases[i](tt)
      })

      t.test('no options', t =>
        go(t, new Test()))
      t.test('buffered', t =>
        go(t, new Test({ buffered: true })))
      t.test('bailout', t =>
        go(t, new Test({ bail: true })))
      t.test('runOnly', t =>
        go(t, new Test({ runOnly: true })))
      t.end()
    })
  }
})

t.test('assertion checks', t => {
  const env = process.env.TAP_BUFFER
  process.env.TAP_BUFFER = '0'
  t.teardown(_ => process.env.TAP_BUFFER = env)

  const cases = {
    'error': tt => {
      tt.error(null, 'this is not an error')
      tt.error(new Error('poop'), 'this error is poop')
      tt.error('poop', 'this error is "poop"')
      tt.end()
    },

    equal: tt => {
      tt.equal(1, 2)
      tt.equal(1, '1', { skip: true })
      tt.equal(1, 1, 'one is one')
      // fails, but with the special note
      tt.equal({foo: 1}, {foo: 1})
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
  }

  const keys = Object.keys(cases)
  t.plan(keys.length)

  for (let i in cases) {
    t.test(i, t => {
      t.plan(1)
      const tt = new Test()
      let out = ''
      tt.on('data', c => out += c)
      tt.on('end', _ => t.matchSnapshot(clean(out), i))
      cases[i](tt)
    })
  }
})
