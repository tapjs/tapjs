import t from 'tap'
import { messageFromError } from '../dist/esm/message-from-error.js'

t.equal(messageFromError('string'), 'string')
t.equal(messageFromError(new Error('err obj')), 'err obj')
t.equal(messageFromError({ message: 'message' }), 'message')
t.equal(
  messageFromError({
    name: 'Name',
    stack: `Name: error string
    at some-file:420:69
`,
  }),
  'error string',
)
t.equal(
  messageFromError({
    stack: `nameless error string
    at some-file:420:69
`,
  }),
  'nameless error string',
)
t.equal(messageFromError(123), 'unhandled error')
t.equal(messageFromError({ error: 'err prop' }), 'err prop')

t.test('node errnoExceptions have coded messages', t => {
  const er: NodeJS.ErrnoException = Object.assign(new TypeError('blah'), {
    code: 'ERR_BLAH_DEE_BLOO',
  })
  er.stack = String(er.stack).replace(
    /^TypeError:/,
    'TypeError [ERR_BLAH_DEE_BLOO]:',
  )
  t.equal(messageFromError(er), 'blah')
  //@ts-ignore
  er.message = undefined
  t.equal(messageFromError(er), 'blah')
  t.end()
})
