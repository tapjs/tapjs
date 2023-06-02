import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'

import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'
import { TestSummary } from './test-summary.js'

const bannerWords = '  🌈 TEST COMPLETE 🌈  '
const Banner: FC<{}> = () => (
  <Box flexDirection="column">
    <Text backgroundColor="#fff">{' '.repeat(bannerWords.length)}</Text>
    <Text bold color="black" backgroundColor="#fff">
      {bannerWords}
    </Text>
    <Text backgroundColor="#fff">{' '.repeat(bannerWords.length)}</Text>
  </Box>
)

export const ResultDetailList: FC<Pick<TapReportOpts, 'tap'>> = ({
  tap,
}) => {
  const [tests, updateTests] = useState<Base[]>([])
  useEffect(
    () =>
      listenCleanup(tap, 'subtestAdd', (t: Base) =>
        updateTests(tests.concat(t))
      ),
    [tap, tests, updateTests]
  )
  const t = tests.filter(
    t =>
      !!t.results &&
      (t.lists.fail.length || t.lists.skip.length || t.lists.todo.length)
  )
  let [done, setDone] = useState<boolean>(false)
  useEffect(
    () => listenCleanup(tap, 'complete', () => setDone(true)),
    [tap, setDone]
  )

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
