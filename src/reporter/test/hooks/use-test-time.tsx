import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useTestTime } from '../../dist/hooks/use-test-time.js'
import { sleep } from '../fixtures/sleep.js'

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const time = useTestTime(test, 32)
  return (
    <Box>
      <Text>{String(time)}</Text>
    </Box>
  )
}

t.test('get the time', async t => {
  const tb = new Minimal({ name: 'parent' })
  tb.jobs = 1
  tb.test('one', () => sleep(32))
  tb.test('two', () => sleep(32))
  const { subtest: tre } = tb.test('tre', () => sleep(128))
  tb.test('fur', () => sleep(32))
  if (!tre) throw new Error('did not get subtest')
  const app = render(<Tag test={tre} />)
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  app.unmount()
  const f = app.frames.map(n => +n)
  t.equal(f[0], 0, 'first time is 0')
  t.ok(f.length > 1, 'got some time numbers')
  for (let i = 1; i < f.length; i++) {
    t.ok(f[i] >= f[i - 1], 'numbers inreasing')
    t.ok(f[i] === f[i], 'not NaN')
  }
})

t.test('finished test just returns test.time', async t => {
  const tb = new Minimal({ name: 'parent' })
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  const app = render(<Tag test={tb} />)
  app.unmount()
  const f = app.frames.map(n => +n)
  for (const i of f) {
    t.equal(i, tb.time, 'reported time is test.time')
  }
})
