import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useCountsLists } from '../hooks/use-counts-lists.js'
import { useTestTime } from '../hooks/use-test-time.js'
import { ms } from '../ms.js'
import { TestBadge } from '../test-badge.js'
import { TestResultsList } from '../test-results-list.js'

export interface TestSummaryOpts {
  test: Base
  details?: boolean
  showCallsite?: boolean
}

export const TestSummary: FC<TestSummaryOpts> = ({
  test,
  details = false,
  showCallsite = false
}) => {
  const [counts, lists] = useCountsLists(test)
  const time = useTestTime(test)

  const { total, todo, skip, fail } = counts
  return test.parser.ok ? (
    <></>
  ) : (
    <Box flexDirection="column">
      <Box gap={1}>
        <TestBadge test={test} />
        <Text>{test.name}</Text>
        {!!fail && <Text color="red">{fail} failed</Text>}
        {!!todo && <Text color="magenta">{todo} todo</Text>}
        {!!(fail || skip) && <Text>of</Text>}
        <Text bold>{total}</Text>
        <Text bold dimColor>
          {ms(time)}
        </Text>
      </Box>
      <TestResultsList test={test} lists={lists} details={details} showCallsite={showCallsite} />
    </Box>
  )
}
