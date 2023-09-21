import {
  DiagnosticData,
  TestStreamDeserialize,
  TestStreamSerialize,
} from '@tapjs/error-serdes'
import t, { Minimal } from 'tap'
import { fileURLToPath } from 'url'
import { commentMethod } from '../src/comment.js'
import { TestMap } from '../src/test-map.js'

t.test('override the comment() method, not in map', async t => {
  const ser = new TestStreamSerialize()
  const results = ser.pipe(new TestStreamDeserialize()).collect()
  const test = new Minimal({ name: 'commentariat' })
  const diagsMap = new TestMap<DiagnosticData[]>()
  test.comment = commentMethod(ser, diagsMap)
  test.comment('hello')
  test.pass('this is fine')
  test.end()
  await test.concat()
  ser.end()
  const messages = await results
  t.match(messages, [
    {
      type: 'test:diagnostic',
      data: {
        file: fileURLToPath(import.meta.url),
        line: Number,
        column: Number,
        nesting: 0,
        message: 'hello',
      },
    },
  ])
})

t.test('override the comment() method, in map', async t => {
  const ser = new TestStreamSerialize()
  const results = ser.pipe(new TestStreamDeserialize()).collect()
  const test = new Minimal({ name: 'commentariat' })
  const diagsMap = new TestMap<DiagnosticData[]>([[test, []]])
  test.comment = commentMethod(ser, diagsMap)
  test.comment('hello')
  test.pass('this is fine')
  test.end()
  await test.concat()
  ser.end()
  const messages = await results
  t.strictSame(messages, [])
  t.match(diagsMap.get(test), [
    {
      file: fileURLToPath(import.meta.url),
      line: Number,
      column: Number,
      nesting: 0,
      message: 'hello',
    },
  ])
})
