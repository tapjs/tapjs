import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { Reporter } from './index.js'
import { Log } from './log.js'
import { ResultDetailList } from './result-detail-list.js'
import { Runs } from './runs.js'
import { SuiteSummary } from './suite-summary.js'

const bannerWords = '  🌈 TEST COMPLETE 🌈  '
const Banner: FC<{}> = () => (
  <Box flexDirection="column" marginTop={1}>
    <Text backgroundColor="#fff">{' '.repeat(bannerWords.length)}</Text>
    <Text bold color="black" backgroundColor="#fff">
      {bannerWords}
    </Text>
    <Text backgroundColor="#fff">{' '.repeat(bannerWords.length)}</Text>
  </Box>
)

export const Base: Reporter = ({ test, config }) => (
  <Box flexDirection="column">
    <Log test={test} config={config} includeTests />
    <Runs test={test} />
    <ResultDetailList {...{ test, Banner }} />
    <SuiteSummary test={test} />
  </Box>
)
