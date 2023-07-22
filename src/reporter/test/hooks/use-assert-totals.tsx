import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useAssertTotals } from '../../dist/hooks/use-assert-totals.js'
import { sleep } from '../fixtures/sleep.js'

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const totals = useAssertTotals(test)
  return (
    <Box>
      <Text>{JSON.stringify(totals)}</Text>
    </Box>
  )
}

t.test('log some assert totals', async t => {
  const tb = new Minimal({ name: 'totals test' })
  const app = render(<Tag test={tb} />)

  // app loading needs to be deferred for the lodash
  // debounce that ink does. Never a problem irl, because
  // the asserts all come from async child test processes.
  await sleep(32)
  tb.test('child test', async tb => {
    tb.pass('this is fine')
    tb.fail('not quite as fine')
    await sleep(32)
    tb.pass('will be fine', { todo: true })
    tb.pass('dont care if its fine', { skip: true })
    await sleep(32)
    tb.pass('this is fine also')
    tb.fail('second fail')
    await sleep(32)
  })
  tb.end()
  await tb.concat()

  app.unmount()

  t.strictSame(JSON.parse(String(app.lastFrame())), {
    total: 6,
    pass: 2,
    fail: 2,
    todo: 1,
    skip: 1,
  })
})
