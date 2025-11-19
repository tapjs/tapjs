import chalk from './fixtures/chalk.js'

import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'

const { TestSummary } = await t.mockImport<
  typeof import('../dist/esm/test-summary.js')
>('../dist/esm/test-summary.js', {
  chalk,
  '../dist/esm/ms.js': { ms: () => '{TIME}' },
  '../dist/esm/hooks/use-test-time.js': {
    useTestTime: () => 123,
  },
  '../dist/esm/stack.js': {
    Stack: () => (
      <Box>
        <Text>XXX mock stack XXX</Text>
      </Box>
    ),
  },
})

t.test('simple passing', async t => {
  const tb = new Minimal({ name: 'pass' })
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary test={tb} />).lastFrame())
})

t.test('simple passing, but omit passing', async t => {
  const tb = new Minimal({ name: 'pass' })
  tb.pass('this is fine')
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary test={tb} />).lastFrame())
})

t.test('failing test', async t => {
  const tb = new Minimal({ name: 'failer' })
  tb.fail('expected failure')
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary test={tb} />).lastFrame())
})

t.test('failing test with details', async t => {
  const tb = new Minimal({ name: 'failer' })
  tb.fail('expected failure')
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary details test={tb} />).lastFrame())
})

t.test('all the things', async t => {
  const tb = new Minimal({ name: 'all the things' })
  tb.pass('fine')
  tb.fail('nope')
  tb.pass('skip', { skip: true })
  tb.fail('skip msg', { skip: 'message' })
  tb.fail('todo', { todo: true })
  tb.pass('todo msg', { todo: 'message' })
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary test={tb} />).lastFrame())
  t.end()
})

t.test('all the details', async t => {
  const tb = new Minimal({ name: 'all the things' })
  tb.pass('fine')
  tb.fail('nope')
  tb.pass('skip', { skip: true })
  tb.fail('skip msg', { skip: 'message' })
  tb.fail('todo', { todo: true })
  tb.pass('todo msg', { todo: 'message' })
  tb.end()
  await tb.concat()
  t.matchSnapshot(render(<TestSummary details test={tb} />).lastFrame())
  t.end()
})
