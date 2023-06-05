import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useComments } from '../../hooks/use-comments.js'
import { TapReportOpts } from '../../index.js'
import { SuiteSummary } from '../../suite-summary.js'
import { Log } from './log.js'
import { ResultDetailList } from './result-detail-list.js'
import { Runs } from './runs.js'

export const Base: FC<TapReportOpts> = ({ tap, config }) => (
  <Box flexDirection="column">
    <Log tap={tap} config={config} />
    <ResultDetailList tap={tap} />
    <Runs tap={tap} />
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
