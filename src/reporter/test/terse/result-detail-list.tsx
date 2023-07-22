import chalk from 'chalk'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { getTest } from '../fixtures/get-test.js'
chalk.level = 3

t.cleanSnapshot = s => s.replace(/[0-9.]+m?s/g, '{TIME}')

const { ResultDetailList } = (await t.mockImport(
  '../../dist/terse/result-detail-list.js',
  {
    chalk,
    '../../dist/stack.js': {
      Stack: () => (
        <Box>
          <Text>XXX mock stack XXX</Text>
        </Box>
      ),
    },
  }
)) as typeof import('../../dist/terse/result-detail-list.js')

const tb = getTest()
const app = render(<ResultDetailList test={tb} />)
tb.go()
await tb.concat()
t.matchSnapshot(app.lastFrame())
