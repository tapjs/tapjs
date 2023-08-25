import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useCountsLists } from './hooks/use-counts-lists.js'
import { useTestTime } from './hooks/use-test-time.js'
import { ms } from './ms.js'
import { TestBadge } from './test-badge.js'
import { TestResultsList } from './test-results-list.js'

export interface TestSummaryOpts {
  /**
   * The test being summarized
   */
  test: Base
  /**
   * Set to show assertion details.
   *
   * This is left unset in the log component, then set to true when
   * summarizing at the end of the run.
   */
  details?: boolean
}

export const TestSummary: FC<TestSummaryOpts> = ({
  test,
  details = false,
}) => {
  const [counts] = useCountsLists(test)
  const time = useTestTime(test)

  const { total, todo, skip, fail } = counts
  const { exitCode, signal } = test.options
  const ok = !todo && !skip && !fail && !exitCode && !signal

  return (
    <Box flexDirection="column">
      <Box gap={1}>
        <TestBadge test={test} />
        <Text>{test.name}</Text>
        {!!fail && <Text color="red">{fail} failed</Text>}
        {!!todo && <Text color="magenta">{todo} todo</Text>}
        {!!skip && <Text color="cyan">{skip} skip</Text>}
        {!!(fail || todo || skip) && <Text>of</Text>}
        <Text bold>{total}</Text>
        {ok && <Text color="green">OK</Text>}
        {time !== 0 && (
          <Text bold dimColor>
            {ms(time)}
          </Text>
        )}
      </Box>
      <TestResultsList test={test} details={details} />
    </Box>
  )
}
