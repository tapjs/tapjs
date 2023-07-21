import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { promisify } from 'util'
import { useIsDone } from '../../dist/hooks/use-is-done.js'
const sleep = promisify(setTimeout)

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const done = useIsDone(test)
  return (
    <Box flexDirection="column">
      <Text>{JSON.stringify(done)}</Text>
    </Box>
  )
}

t.test('check if test is done', async t => {
  const tb = new Minimal({ name: 'done test' })
  const app = render(<Tag test={tb} />)
  await sleep(64)
  tb.pass('this is fine')
  tb.test('child test', async () => sleep(64))
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  app.unmount()

  const red = (list: string[]) =>
    list.reduce((list: string[], entry) => {
      if (entry !== list[list.length - 1]) list.push(entry)
      return list
    }, [])
  t.strictSame(red(app.frames), ['false', 'true'])
})
