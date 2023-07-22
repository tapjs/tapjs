import { TestBase } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useIsDone } from '../hooks/use-is-done.js'
import { useSubtests } from '../hooks/use-subtests.js'

import { TestSummary } from './test-summary.js'

const bannerWords = '  🌈 TEST COMPLETE 🌈  '
const Banner: FC<{}> = () => (
  <Box flexDirection="column">
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

export const ResultDetailList: FC<{ test: TestBase }> = ({ test }) => {
  const tests = useSubtests(test, 'finished')
  const t = tests.filter(
    t =>
      t.lists.fail.length ||
      t.lists.skip.length ||
      t.lists.todo.length
  )
  const done = useIsDone(test)

  return !done ? (
    <></>
  ) : (
    <Box flexDirection="column" marginTop={1}>
      <Banner />
      {t.map((test, key) => (
        <Box key={key} flexDirection="column" marginTop={1}>
          <TestSummary test={test} details={true} />
        </Box>
      ))}
    </Box>
  )
}
