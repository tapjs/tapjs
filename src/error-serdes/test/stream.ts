import t from 'tap'
import { Message } from '../src/messages.js'
import { TestStreamDeserialize } from '../src/test-stream-deserialize.js'
import { TestStreamSerialize } from '../src/test-stream-serialize.js'

TestStreamSerialize
TestStreamDeserialize

const messages: Message[] = [
  {
    type: 'test:diagnostic',
    data: {
      nesting: 0,
      message: 'hello',
    },
  },
  {
    type: 'test:enqueue',
    data: {
      name: 'x',
      file: 'x.js',
      line: 1,
      column: 2,
      nesting: 0,
    },
  },
  {
    type: 'test:dequeue',
    data: {
      name: 'x',
      file: 'x.js',
      line: 1,
      column: 2,
      nesting: 0,
    },
  },
  {
    type: 'test:start',
    data: {
      name: 'x',
      file: 'x.js',
      line: 1,
      column: 2,
      nesting: 0,
    },
  },
  {
    type: 'test:pass',
    data: {
      name: 'x',
      file: 'x.js',
      line: 1,
      column: 2,
      nesting: 0,
      details: { duration_ms: 123 },
      testNumber: 1,
    },
  },
  {
    type: 'test:pass',
    data: {
      name: 'y',
      file: 'y.js',
      line: 1,
      column: 2,
      nesting: 0,
      details: { duration_ms: 123, type: 'suite' },
      testNumber: 1,
    },
  },
  {
    type: 'test:fail',
    data: {
      name: 'z',
      file: 'z.js',
      line: 1,
      column: 2,
      nesting: 0,
      details: {
        duration_ms: 123,
        type: 'suite',
        error: new Error('z'),
      },
      testNumber: 1,
    },
  },
  {
    type: 'test:plan',
    data: {
      count: 3,
      nesting: 0,
    },
  },
  {
    type: 'test:stdout',
    data: {
      file: 'z.js',
      line: 1,
      column: 2,
      message: 'z',
    },
  },
  {
    type: 'test:stderr',
    data: {
      file: 'z.js',
      line: 1,
      column: 2,
      message: 'z',
    },
  },
]

const writeAll = (ser: TestStreamSerialize) => {
  for (const m of messages) {
    switch (m.type) {
      case 'test:diagnostic':
        ser.diagnostic(m.data)
        break
      case 'test:dequeue':
        ser.dequeue(m.data)
        break
      case 'test:enqueue':
        ser.enqueue(m.data)
        break
      case 'test:fail':
        ser.fail(m.data)
        break
      case 'test:pass':
        ser.pass(m.data)
        break
      case 'test:plan':
        ser.plan(m.data)
        break
      case 'test:start':
        ser.start(m.data)
        break
      case 'test:stderr':
        ser.stderr(m.data)
        break
      case 'test:stdout':
        ser.stdout(m.data)
        break
      default:
        throw new Error('unknown message type', { cause: m })
    }
  }
  ser.end()
}

t.test('pipe', async t => {
  const ser = new TestStreamSerialize()
  const des = new TestStreamDeserialize()

  ser.pipe(des)
  writeAll(ser)
  ser.end()

  t.throws(() => ser.write(), {
    message: 'not directly writable, use message methods',
  })
  t.strictSame(await des.collect(), messages, 'got all messages')
})

t.test('pipe while reading', async t => {
  const ser = new TestStreamSerialize()
  const des = new TestStreamDeserialize()

  const actual = des.collect()
  ser.pipe(des)
  writeAll(ser)
  ser.end()

  t.throws(() => ser.write(), {
    message: 'not directly writable, use message methods',
  })
  t.strictSame(await actual, messages, 'got all messages')
})

t.test('write all at once', async t => {
  const ser = new TestStreamSerialize()
  const des = new TestStreamDeserialize()

  writeAll(ser)
  ser.end()
  const data = await ser.concat()
  des.end(data)

  t.strictSame(await des.collect(), messages, 'got all messages')
})

t.test('write one byte at a time', async t => {
  const ser = new TestStreamSerialize()
  const des = new TestStreamDeserialize()

  writeAll(ser)
  ser.end()
  const data = await ser.concat()
  for (let i = 0; i < data.length; i++) {
    des.write(data.subarray(i, i + 1))
  }
  des.end()

  t.strictSame(await des.collect(), messages, 'got all messages')
})

t.test('end mid-message', async t => {
  const ser = new TestStreamSerialize()
  const des = new TestStreamDeserialize()

  writeAll(ser)
  ser.end()
  const data = await ser.concat()
  des.write(data.subarray(0, data.length - 1))
  t.throws(() => des.end(), {
    message: 'deserialize ended mid-message',
  })
})
