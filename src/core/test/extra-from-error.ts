import { CallSiteLike } from '@tapjs/stack'
import t from 'tap'
import { extraFromError } from '../dist/cjs/extra-from-error.js'

t.matchOnly(
  extraFromError(new Error('hello')),
  {
    at: CallSiteLike,
    stack: String,
  },
  'basic error handling, captures stack and callsite'
)

t.matchOnly(
  extraFromError('hello'),
  {
    error: 'hello',
  },
  'not an error'
)

t.matchOnly(
  extraFromError(
    Object.assign(new Error('src ctx'), {
      source: {
        code: 'some codes',
        context: { big: 'object' },
      },
    })
  ),
  {
    at: CallSiteLike,
    stack: String,
    source: { code: 'some codes' },
  },
  'remove source.context'
)

t.matchOnly(
  extraFromError(new Error('tapChild'), undefined, {
    tapChildName: 'tap child',
    tapChildAge: 7,
    other: 'thing',
  }),
  {
    at: CallSiteLike,
    stack: String,
    other: 'thing',
  },
  'remove tapChild from test options'
)

t.matchOnly(
  extraFromError(
    new Error('tapChild'),
    {
      conflict: 'from extra',
    },
    {
      tapChildName: 'tap child',
      tapChildAge: 7,
      other: 'thing',
      conflict: 'from options',
    }
  ),
  {
    at: CallSiteLike,
    stack: String,
    other: 'thing',
    conflict: 'from extra',
  },
  'remove tapChild and preexisting fields from test options'
)

t.test('custom error', t => {
  class MyError extends Error {
    name = 'MyError'
    customErrorProperty = true
  }
  const er = new MyError('some message')
  t.matchOnly(extraFromError(er), {
    at: CallSiteLike,
    stack: String,
    customErrorProperty: true,
    type: 'MyError',
  })
  t.end()
})

t.test('nameless error', t => {
  const er = new Error()
  t.matchOnly(extraFromError(er), {
    at: CallSiteLike,
    stack: String,
  })
  t.equal(er.message, '')
  t.end()
})
