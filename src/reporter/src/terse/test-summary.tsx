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
}

export const TestSummary: FC<TestSummaryOpts> = ({
  test,
  details = false,
}) => {
  const [counts, lists] = useCountsLists(test)
  const time = useTestTime(test)

  const { total, todo, fail, skip } = counts
  // terse only makes noise if something requires action,
  // either a failing test or todo item
  return !(fail || todo) ? (
    <></>
  ) : (
    <Box flexDirection="column">
      <Box gap={1}>
        <TestBadge test={test} />
        <Text>{test.name}</Text>
        {!!fail && <Text color="red">{fail} failed</Text>}
        {!!todo && <Text color="magenta">{todo} todo</Text>}
        {!!skip && <Text color="cyan">{skip} skip</Text>}
        <Text>of</Text>
        <Text bold>{total}</Text>
        <Text bold dimColor>
          {ms(time)}
        </Text>
      </Box>
      <TestResultsList test={test} lists={lists} details={details} />
    </Box>
  )
}
