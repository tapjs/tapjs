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
  for (let i = 1; i < f.length; i++) {
    const n = f[i]
    const p = f[i - 1]
    t.ok(
      typeof n === 'number' && typeof p === 'number' && n >= p,
      'numbers inreasing',
    )
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
  const f = app.frames.filter(n => n.trim()).map(n => +n)
  for (const i of f) {
    t.equal(i, tb.time, 'reported time is test.time')
  }
})
