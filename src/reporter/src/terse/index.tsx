import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useComments } from '../hooks/use-comments.js'
import { TapReportOpts } from '../index.js'
import { SuiteSummary } from '../suite-summary.js'
import { ResultDetailList } from './result-detail-list.js'

export const Terse: FC<Pick<TapReportOpts, 'tap'>> = ({ tap }) => (
  <Box flexDirection="column">
    <ResultDetailList tap={tap} />
    <SuiteSummary tap={tap} />
    <Box flexDirection="column">
      {useComments(tap).map((c, key) => (
        <Box key={key}>
          <Text dimColor>{c}</Text>
        </Box>
      ))}
    </Box>
  </Box>
)
