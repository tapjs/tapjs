import { Base } from '@tapjs/core'
import { Box } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'
import { TestSummary } from './test-summary.js'

// Every time a test ends, print just the summary
export const Runs: FC<Pick<TapReportOpts, 'tap'>> = ({ tap }) => {
  const [tests, updateTests] = useState<Base[]>([])
  const cleanup: (() => void)[] = []
  const doCleanup = () => {
    // console.error('CLEANUP RUNS')
    for (const c of cleanup) c()
    cleanup.length = 0
  }
  const remove = (test: Base) => updateTests(tests.filter(t => t !== test))
  const add = (test: Base) => updateTests(tests.concat(test))
  useEffect(() => {
    cleanup.push(listenCleanup(tap, 'subtestAdd', add))
    cleanup.push(listenCleanup(tap, 'subtestEnd', remove))
    return doCleanup
  }, [tests])
  return (
    <Box flexDirection="column" paddingTop={1}>
      {tests
        .filter(t => !t.results)
        .map(test => (
          <Box key={test.childId}>
            <TestSummary test={test} />
          </Box>
        ))}
    </Box>
  )
}
