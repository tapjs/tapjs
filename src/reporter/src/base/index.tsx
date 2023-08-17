import { Box } from 'ink'
import React, { FC } from 'react'
import { TapReportOpts } from '../index.js'
import { SuiteSummary } from '../suite-summary.js'
import { Log } from './log.js'
import { ResultDetailList } from './result-detail-list.js'
import { Runs } from './runs.js'

export const Base: FC<TapReportOpts> = ({ test, config }) => (
  <Box flexDirection="column">
    <Log test={test} config={config} />
    <ResultDetailList test={test} />
    <Runs test={test} />
    <SuiteSummary test={test} />
  </Box>
)
