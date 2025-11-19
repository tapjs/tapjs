import { LoadedConfig } from '@tapjs/config'
import chalk from './fixtures/chalk.js'

import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { getTest } from './fixtures/get-test.js'

const { Base } = await t.mockImport<typeof import('../dist/esm/base.js')>(
  '../dist/esm/base.js',
  {
    chalk,
    '../dist/esm/ms.js': {
      ms: () => '{TIME}',
    },
    '../dist/hooks/use-test-time.js': {
      useTestTime: () => {
        return 123
      },
    },
    '../dist/esm/stack.js': {
      Stack: () => (
        <Box>
          <Text>{'XXX mock stack XXX'}</Text>
        </Box>
      ),
    },
  },
)

t.test('no comments or passes', async t => {
  const tb = getTest()
  const app = render(
    <Base
      test={tb}
      config={{ get: () => false } as unknown as LoadedConfig}
    />,
  )
  tb.go()
  await tb.concat()
  t.matchSnapshot(app.lastFrame())
})

t.test('yes comments and passes', async t => {
  const tb = getTest()
  const app = render(
    <Base
      test={tb}
      config={{ get: () => true } as unknown as LoadedConfig}
    />,
  )
  tb.go()
  await tb.concat()
  t.matchSnapshot(app.lastFrame())
})
