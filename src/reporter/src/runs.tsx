import { TestBase } from '@tapjs/core'
import { Box } from 'ink'
import React, { FC } from 'react'
import { useSubtests } from './hooks/use-subtests.js'
import { TestSummary } from './test-summary.js'

// show the tests currently running
export const Runs: FC<{ test: TestBase }> = ({ test }) => {
  const t = useSubtests(test, 'active')
  return !t.length ? (
    <></>
  ) : (
    <Box flexDirection="column" marginTop={1}>
      {t.map(test => (
        <Box key={test.childId}>
          <TestSummary test={test} />
        </Box>
      ))}
    </Box>
  )
}
