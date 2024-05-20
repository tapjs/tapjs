import { CallSiteLike } from '@tapjs/stack'
import t from 'tap'
import { extraFromError } from '../dist/esm/extra-from-error.js'

t.matchOnly(
  extraFromError(new Error('hello')),
  {
    at: CallSiteLike,
    stack: String,
  },
  'basic error handling, captures stack and callsite',
)

t.matchOnly(extraFromError({ stack: 'just\nsome\nstring\n' }), {
  stack: 'just\nsome\nstring\n',
  at: null,
})

t.matchOnly(
  extraFromError('hello'),
  {
    error: 'hello',
  },
  'not an error',
)

const er = new Error('cause cycle a', {
  cause: new Error('cause cycle b')
})
;(er.cause as Error).cause = er

t.match(extraFromError(er), {
  stack: String,
  at: CallSiteLike,
  cause: {
    message: 'cause cycle b',
    stack: String,
    cause: {
      message: 'cause cycle a',
      stack: String,
      cause: Object,
    }
  }
}, 'recursion')

t.matchOnly(
  extraFromError(
    Object.assign(new Error('src ctx'), {
      source: {
        code: 'some codes',
        context: { big: 'object' },
      },
    }),
  ),
  {
    at: CallSiteLike,
    stack: String,
    source: { code: 'some codes' },
  },
  'remove source.context',
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
  'remove tapChild from test options',
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
    },
  ),
  {
    at: CallSiteLike,
    stack: String,
    other: 'thing',
    conflict: 'from extra',
  },
  'remove tapChild and preexisting fields from test options',
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

t.test('internal error', t => {
  const er = Object.assign(new Error('internal stuff'), {
    stack: `Error: internal stuff
    at InternalFunction (node:internal/blah:420:69)
    at node:child_process:1:3333
`,
  })
  t.matchOnly(extraFromError(er), {
    at: null,
    stack: '',
  })
  t.end()
})

t.test('find a useful call site', t => {
  let er!: Error
  try {
    //@ts-expect-error
    new Date({}).toISOString()
  } catch (e) {
    if (!(e instanceof Error)) {
      throw new Error('expected an error object to be thrown')
    }
    er = e
  }
  const ex = extraFromError(er)
  t.match(
    ex,
    {
      at: {
        constructor: CallSiteLike,
        fileName: 'test/extra-from-error.ts',
        lineNumber: Number,
        columnNumber: Number,
      },
      stack: String,
    },
    'found a useful callsite below the top site',
  )

  const notUseful = Object.assign(new Error('no good'), {
    stack: `RangeError: no good
    at Some.method (<anonymous>)
    at OtherThing (<native>)
    at whybother (<anonymous>)
    at Object.<anonymous> (<native>)
`,
  })
  const nex = extraFromError(notUseful)
  t.matchStrict(
    nex,
    {
      at: {
        constructor: CallSiteLike,
        lineNumber: null,
        columnNumber: null,
        fileName: null,
        typeName: 'Some',
        methodName: 'method (<anonymous>)',
        functionName: 'Some.method (<anonymous>)',
      },
      stack: String,
    },
    'did not find a useful site, use the top site',
  )
  t.end()
})
