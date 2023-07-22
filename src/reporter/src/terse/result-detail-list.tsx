import { TestBase } from '@tapjs/core'
import { Box } from 'ink'
import React, { FC } from 'react'
import { useIsDone } from '../hooks/use-is-done.js'
import { useSubtests } from '../hooks/use-subtests.js'
import { TestSummary } from './test-summary.js'

export const ResultDetailList: FC<{ test: TestBase }> = ({
  test,
}) => {
  const tests = useSubtests(test, 'finished')
  const t = tests.filter(t => t.lists.fail.length)
  const done = useIsDone(test)

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
