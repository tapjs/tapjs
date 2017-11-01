const t = require('../')
const Test = t.Test

t.test('short output checks', t => {
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
      tt.test('named child', { buffered: false }, tt => {
        tt.pass('this is fine')
        tt.end()
      })
      tt.test({ buffered: false }, function named_function (tt) {
        tt.plan(1)
        tt.pass('also fine')
      })
      tt.test('promisey', { buffered: false }, tt => new Promise(resolve => {
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
  }

  const keys = Object.keys(cases)
  t.plan(keys.length)

  for (let i in cases) {
    t.test(i, t => {
      t.plan(1)
      const tt = new Test()
      let out = ''
      tt.on('data', c => out += c)
      tt.on('end', _ => {
        out = out.replace(
          / # time=[0-9\.]+m?s( \{.*)?\n/g, ' # {time}$1\n')
        t.matchSnapshot(out, i)
      })
      cases[i](tt)
    })
  }
})
