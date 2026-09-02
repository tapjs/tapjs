import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useTestTime } from '../../dist/esm/hooks/use-test-time.js'
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
  tb.test('one', () => sleep(1))
  tb.test('two', () => sleep(2))
  const { subtest: tre } = tb.test('tre', () => sleep(32))
  tb.test('fur', () => sleep(4))
  if (!tre) throw new Error('did not get subtest')
  const app = render(<Tag test={tre} />)
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  app.unmount()
  const f = app.frames.filter(n => n.trim()).map(n => +n)
  t.equal(f[0], 0, 'first time is 0')
  t.ok(f.length > 1, 'got some time numbers')
  t.equal(f[f.length - 1], tre.time, 'settles on recorded duration')
})

t.test('finished test just returns test.time', async t => {
  const tb = new Minimal({ name: 'parent' })
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  const app = render(<Tag test={tb} />)
  app.unmount()
  const f = app.frames.filter(n => n.trim()).map(n => +n)
  for (const i of f) {
    t.equal(i, tb.time, 'reported time is test.time')
  }
})

t.test('complete replaces the running timer with test.time', async t => {
  const tb = new Minimal({ name: 'parent' })
  const app = render(<Tag test={tb} />)
  await sleep(64)
  tb.time = 12.5
  tb.emit('complete', { time: 12.5 })
  await sleep(10)
  app.unmount()
  const f = app.frames.filter(n => n.trim()).map(n => +n)
  t.equal(f[f.length - 1], 12.5, 'recorded duration wins over elapsed')
})
