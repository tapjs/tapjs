import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useComments } from '../hooks/use-comments.js'
import { TapReportOpts } from '../index.js'
import { SuiteSummary } from '../suite-summary.js'
import { TimedOut } from '../timed-out.js'
import { ResultDetailList } from './result-detail-list.js'

export const Terse: FC<TapReportOpts> = ({ test }) => (
  <Box flexDirection="column">
    <ResultDetailList test={test} />
    <SuiteSummary test={test} />
    <Box flexDirection="column">
      {useComments(test).map((c, key) => (
        <Text key={key} dimColor>
          {c}
        </Text>
      ))}
      <TimedOut test={test} />
    </Box>
  </Box>
)
