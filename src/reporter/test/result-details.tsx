import chalk from './fixtures/chalk.js'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'

const { ResultDetails } = (await t.mockImport(
  '../dist/result-details.js',
  {
    chalk,
    '../dist/stack.js': {
      Stack: ({ stack }: { stack: string }) => (
        <Box>
          <Text>STACK {stack}</Text>
        </Box>
      ),
    },
    '../dist/source.js': {
      Source: ({ at, source }: { at: any; source: string }) => (
        <Box flexDirection="column">
          <Text>AT {JSON.stringify(at)}</Text>
          <Text>SOURCE {source}</Text>
        </Box>
      ),
    },
    '../dist/diff.js': {
      Diff: ({ diff }: { diff: string }) => (
        <Box>
          <Text>DIFF {diff}</Text>
        </Box>
      ),
    },
  }
)) as typeof import('../dist/result-details.js')

import { Result } from 'tap-parser'

t.test('result without diags, nothing to print', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: null,
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.equal(
    render(<ResultDetails result={res} />).lastFrame(),
    '',
    'no diags, no details'
  )
  t.end()
})

t.test('result with only known diags', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      diff: 'mock diff',
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details'
  )
  t.end()
})

t.test('diff and compare ===', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      diff: 'mock diff',
      compare: '===',
      some: {
        other: {
          diags: true,
        },
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details'
  )
  t.end()
})
