import { Box } from 'ink'
import React from 'react'
import { Reporter } from './index.js'
import { ResultDetailList } from './result-detail-list.js'

export const Min: Reporter = ({ test }) => (
  <Box flexDirection="column">
    <ResultDetailList
      test={test}
      filter={({ parser, counts }) =>
        !parser.ok || !!counts.todo || !!counts.fail
      }
    />
  </Box>
)
