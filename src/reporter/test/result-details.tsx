import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import chalk from './fixtures/chalk.js'

const { ResultDetails } = await t.mockImport<
  typeof import('../dist/esm/result-details.js')
>('../dist/esm/result-details.js', {
  chalk,
  '../dist/esm/stack.js': {
    Stack: ({ stack }: { stack: string }) => (
      <Box>
        <Text>STACK {stack}</Text>
      </Box>
    ),
  },
  '../dist/esm/source.js': {
    Source: ({ at, source }: { at: any; source: string }) => (
      <Box flexDirection="column">
        <Text>AT {JSON.stringify(at)}</Text>
        <Text>SOURCE {source}</Text>
      </Box>
    ),
  },
  '../dist/esm/diff.js': {
    Diff: ({ diff }: { diff: string }) => (
      <Box>
        <Text>DIFF {diff}</Text>
      </Box>
    ),
  },
})

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
    'no diags, no details',
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
      error: 'message',
      code: 'ERR_EXPECTED',
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details',
  )
  t.end()
})

t.test('error without code', t => {
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
      error: 'message',
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details',
  )
  t.end()
})

t.test('error that is not a string', t => {
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
      error: {
        number: 42069,
        msg: 'lolz',
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details',
  )
  t.end()
})

t.test('diff', t => {
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
    'diags and details',
  )
  t.end()
})

t.test('no diff, but expected and actual', t => {
  // this handles node assert errors similarly
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
      operator: 'deepEqual',
      actual: {
        some: {
          thing: true,
        },
      },
      expected: {
        something: true,
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'generated diff',
  )
  t.end()
})

t.test('error with cause', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      stack: `Test.<anonymous> (ec.js:20:7)
ec.js:18:3`,
      at: {
        fileName: 'ec.js',
        lineNumber: 20,
        columnNumber: 7,
        typeName: 'Test',
      },
      source: `t.test('parent', t => {
  t.test('child', t => {
    t.error(e)
------^
    t.end()
  })
`,
      cause: {
        message: 'hello',
        stack: 'ec.js:2:11\n',
        at: {
          fileName: 'ec.js',
          lineNumber: 2,
          columnNumber: 11,
        },
        source: `import t from 'tap'
const e = new Error('hello', {
----------^
  cause: new Error('xyz', {
    cause: {
`,
        cause: {
          message: 'xyz',
          stack: 'ec.js:3:10\n',
          at: {
            fileName: 'ec.js',
            lineNumber: 3,
            columnNumber: 10,
          },
          source: `import t from 'tap'
const e = new Error('hello', {
  cause: new Error('xyz', {
---------^
    cause: {
      some: 'stuff',
`,
          cause: {
            stack: `just a string
not something we can parse
oh well
`,
            some: 'stuff',
            cause: {
              message: 'this is the message',
              a: 'cause',
              with: 'message',
              cause: {
                message: 'deeper',
                stack: 'ec.js:11:16\n',
                at: {
                  fileName: 'ec.js',
                  lineNumber: 11,
                  columnNumber: 16,
                },
                source: `with: 'message',
        message: 'this is the message',
        cause: new Error('deeper', {
---------------^
          cause: true,
        }),
`,
                cause: true,
              },
            },
          },
        },
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details',
  )
  t.end()
})
