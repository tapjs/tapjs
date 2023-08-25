import { Box } from 'ink'
import React from 'react'
import { Reporter } from './index.js'
import { Log } from './log.js'
import { ResultDetailList } from './result-detail-list.js'
import { SuiteSummary } from './suite-summary.js'

export const Terse: Reporter = ({ test, config }) => (
  <Box flexDirection="column">
    <Log {...{ test, config }} />
    <ResultDetailList
      test={test}
      filter={({ counts, parser }) =>
        !!counts.fail || !!counts.todo || !parser.ok
      }
    />
    <SuiteSummary test={test} />
  </Box>
)
