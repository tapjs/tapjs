import { Box } from 'ink'
import React, { FC } from 'react'
import { useIsDone } from '../hooks/use-is-done.js'
import { useSubtests } from '../hooks/use-subtests.js'

import { TapReportOpts } from '../index.js'
import { TestSummary } from './test-summary.js'

export const ResultDetailList: FC<Pick<TapReportOpts, 'tap'>> = ({
  tap,
}) => {
  const tests = useSubtests(tap, 'finished')
  const t = tests.filter(t => t.lists.fail.length)
  const done = useIsDone(tap)

  return !done ? (
    <></>
  ) : (
    <Box flexDirection="column" gap={1}>
      {t.map((test, key) => (
        <Box key={key} flexDirection="column">
          <TestSummary test={test} />
        </Box>
      ))}
    </Box>
  )
}
