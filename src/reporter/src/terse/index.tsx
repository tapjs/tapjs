import { Box } from 'ink'
import React, { FC } from 'react'
import { TapReportOpts } from '../index.js'
import { SuiteSummary } from '../suite-summary.js'
import { ResultDetailList } from './result-detail-list.js'

export const Terse: FC<TapReportOpts> = ({ test }) => (
  <Box flexDirection="column">
    <ResultDetailList test={test} />
    <SuiteSummary test={test} />
  </Box>
)
