import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useBailedOut } from '../../dist/esm/hooks/use-bailed-out.js'
import { reduce } from '../fixtures/reduce.js'
import { sleep } from '../fixtures/sleep.js'

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const bailedOut = useBailedOut(test)
  return (
    <Box flexDirection="column">
      <Text>{JSON.stringify(bailedOut)}</Text>
    </Box>
  )
}

t.test('already bailed test is just true', async t => {
  const tb = new Minimal({ name: 'bailer' })
  tb.bailout('bailout reason')
  await tb.concat()
  const app = render(<Tag test={tb} />)
  app.unmount()
  t.strictSame(
    reduce(app.frames).filter(f => f.trim()),
    ['"bailout reason"'],
  )
})

t.test('note when test bails out', async t => {
  const tb = new Minimal({ name: 'bailer' })
  const app = render(<Tag test={tb} />)
  tb.pass('this is fine')
  tb.test('child test', async () => sleep(64))
  tb.pass('this is fine')
  tb.bailout()
  await tb.concat()
  app.unmount()
  t.strictSame(
    reduce(app.frames).filter(f => f.trim()),
    ['false', 'true'],
  )
})
