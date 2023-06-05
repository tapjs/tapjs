import { Box } from 'ink'
import React, { FC } from 'react'
import { useSubtests } from '../../hooks/use-subtests.js'
import { TapReportOpts } from '../../index.js'
import { TestSummary } from './test-summary.js'

// Every time a test ends, print just the summary
export const Runs: FC<Pick<TapReportOpts, 'tap'>> = ({ tap }) => {
  const t = useSubtests(tap, 'active')
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
