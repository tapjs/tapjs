import {
  TestStreamDeserialize,
  TestStreamSerialize,
} from '@tapjs/error-serdes'
import { Minipass } from 'minipass'
import t from 'tap'
import { serializeStdio } from '../src/stdio.js'

t.test('serialize stdio messages', async t => {
  const des = new TestStreamDeserialize()
  const results = des.collect()

  const stdout = new Minipass<string>({ encoding: 'utf8' })
  const proc = { stdout } as unknown as NodeJS.Process
  const ser = new TestStreamSerialize()
  ser.pipe(des)
  serializeStdio(ser, proc, 'stdout')
  t.not(proc.stdout, stdout)
  proc.stdout.write('hello, world')
  ser.end()
  t.matchOnly(await results, [
    {
      type: 'test:stdout',
      data: {
        file: String,
        line: Number,
        column: Number,
        message: 'hello, world',
      },
    },
  ])
})
