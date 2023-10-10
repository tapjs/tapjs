import t from 'tap'
import { isMessageFail } from '../src/messages.js'

t.equal(
  isMessageFail({
    type: 'test:pass',
    data: {
      name: 'x',
      testNumber: 1,
      nesting: 1,
      file: 'x',
      line: 1,
      column: 1,

      details: {
        duration_ms: 123,
      },
    },
  }),
  false
)

t.equal(
  isMessageFail({
    type: 'test:fail',
    data: {
      name: 'x',
      testNumber: 1,
      nesting: 1,
      file: 'x',
      line: 1,
      column: 1,

      details: {
        error: new Error('yolo'),
        duration_ms: 123,
      },
    },
  }),
  true
)

//@ts-expect-error
t.equal(
  isMessageFail({
    type: 'test:pass',
    data: {
      name: 'x',
      testNumber: 1,
      nesting: 1,
      file: 'x',
      line: 1,
      column: 1,

      details: {
        error: new Error('yolo'),
        duration_ms: 123,
      },
    },
  }),
  false
)
