import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { TapReportOpts } from './index.js'
import { ResultDetailList } from './result-detail-list.js'
import { SuiteSummary } from './suite-summary.js'
import { Log } from './log.js'
import { Runs } from './runs.js'

const bannerWords = '  🌈 TEST COMPLETE 🌈  '
const Banner: FC<{}> = () => (
  <Box flexDirection="column" marginTop={1}>
    <Text backgroundColor="#fff">
      {' '.repeat(bannerWords.length)}
    </Text>
    <Text bold color="black" backgroundColor="#fff">
      {bannerWords}
    </Text>
    <Text backgroundColor="#fff">
      {' '.repeat(bannerWords.length)}
    </Text>
  </Box>
)

export const Base: FC<TapReportOpts> = ({ test, config }) => (
  <Box flexDirection="column">
    <Log test={test} config={config} includeTests />
    <Runs test={test} />
    <ResultDetailList {...{ test, Banner }} />
    <SuiteSummary test={test} />
  </Box>
)
