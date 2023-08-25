import chalk from './fixtures/chalk.js'

import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { getTest } from './fixtures/get-test.js'

const { ResultDetailList } = (await t.mockImport(
  '../dist/result-detail-list.js',
  {
    '../dist/ms.js': {
      ms: () => '{TIME}',
    },
    '../dist/hooks/use-test-time.js': {
      useTestTime: () => 123,
    },
    chalk,
    '../dist/stack.js': {
      Stack: () => (
        <Box>
          <Text>XXX mock stack XXX</Text>
        </Box>
      ),
    },
  }
)) as typeof import('../dist/result-detail-list.js')

const Banner: FC<{}> = () => (
  <Box>
    <Text>hello</Text>
  </Box>
)

t.test('no banner', async t => {
  const tb = getTest()
  const app = render(<ResultDetailList test={tb} />)
  tb.go()
  await tb.concat()
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('with banner', async t => {
  const tb = getTest()
  const app = render(<ResultDetailList test={tb} Banner={Banner} />)
  tb.go()
  await tb.concat()
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})
