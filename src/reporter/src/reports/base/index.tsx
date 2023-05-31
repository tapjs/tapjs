import { Box, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'
import { Log } from './log.js'
import { Runs } from './runs.js'
import { SuiteSummary } from './suite-summary.js'
import { ResultDetailList } from './result-detail-list.js'

// We can sometimes get multiple comments all synchronously in the
// same tick, which would mean multiple state updates from the same
// starting state, and what we want is a consistent append-only list,
// so stash it outside of the react component.
let comments_: string[]
export const Base: FC<TapReportOpts> = ({ tap, config }) => {
  const [comments, updateComments] = useState<string[]>([])
  comments_ = comments
  useEffect(
    () =>
      listenCleanup(tap.parser, 'comment', (c: string) => {
        c = c.trim()
        if (/^# Subtest($|: )/.test(c) || !c) return
        comments_.push(c)
        updateComments([...comments_])
      }),
    [comments]
  )

  return (
    <Box flexDirection="column">
      <Log tap={tap} config={config} />
      <ResultDetailList tap={tap} />
      <Runs tap={tap} />
      <SuiteSummary tap={tap} />
      <Box flexDirection="column">
        {comments.map((c, key) => (
          <Box key={key}>
            <Text dimColor>{c}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
