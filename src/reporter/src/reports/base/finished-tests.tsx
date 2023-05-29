import type { Base } from '@tapjs/core'
import { Box, Static } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { TapReportOpts } from '../../index.js'
import { TestSummary } from './test-summary.js'

// Every time a test ends, print just the summary
export const FinishedTests: FC<Pick<TapReportOpts, 'tap'>> = ({ tap }) => {
  const [tests, updateTests] = useState<Base[]>([])
  useEffect(() => {
    const u = (test: Base) => updateTests(tests.concat(test))
    tap.on('subtestEnd', u)
    return () => {
      tap.removeListener('subtestEnd', u)
    }
  }, [tests])
  return (
    <Static items={tests}>
      {test => (
        <Box key={test.childId}>
          <TestSummary test={test} />
        </Box>
      )}
    </Static>
  )
}
