import { Base, TapBaseEvents, TestBase } from '@tapjs/core'
import { Box } from 'ink'
import React, { FC } from 'react'
import { useIsDone } from './hooks/use-is-done.js'
import { useSubtests } from './hooks/use-subtests.js'

import { TestSummary } from './test-summary.js'

export const ResultDetailList: FC<{
  test: TestBase
  Banner?: FC<{}>
  filter?: (t: Base<TapBaseEvents>) => boolean
}> = ({
  test,
  Banner,
  filter = ({ counts, parser }) =>
    !!counts.fail || !!counts.skip || !!counts.todo || !parser.ok,
}) => {
  const tests = useSubtests(test, 'finished')
  const t = tests.filter(filter)
  const done = useIsDone(test)

  return !done ? (
    <></>
  ) : (
    <Box flexDirection="column">
      {Banner ? <Banner /> : <></>}
      {t.map((test, key) => (
        <Box key={key} flexDirection="column" marginTop={1}>
          <TestSummary test={test} details />
        </Box>
      ))}
    </Box>
  )
}
