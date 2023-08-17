import { Counts, CountsJSON } from '@tapjs/core'
import { Test } from '@tapjs/test'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import chalk from './fixtures/chalk.js'

const run = async (
  t: Test,
  suites: CountsJSON,
  asserts: CountsJSON,
  comments: string[] = [],
  timedOut: any = null
) => {
  const { SuiteSummary } = (await t.mockImport(
    '../dist/suite-summary.js',
    {
      chalk,
      '../dist/hooks/use-test-time.js': {
        useTestTime: () => 123,
      },
      '../dist/hooks/use-timed-out.js': {
        useTimedOut: () => timedOut,
      },
      '../dist/hooks/use-comments.js': {
        useComments: () => comments,
      },
      '../dist/ms.js': { ms: () => '{TIME}' },
      '../dist/hooks/use-assert-totals.js': {
        useAssertTotals: () => new Counts(asserts),
      },
      '../dist/hooks/use-suite-totals.js': {
        useSuiteTotals: () => new Counts(suites),
      },
    }
  )) as typeof import('../dist/suite-summary.js')
  t.matchSnapshot(render(<SuiteSummary test={t} />).lastFrame())
}

t.test('1 passing of 1', t =>
  run(t, { pass: 1, total: 1 }, { pass: 1, total: 1 })
)
t.test('1 fail of 1', t =>
  run(
    t,
    { pass: 0, fail: 1, total: 1 },
    { pass: 0, fail: 1, total: 1 }
  )
)
t.test('skip only', t =>
  run(
    t,
    { pass: 0, skip: 1, total: 10 },
    { pass: 0, skip: 1, total: 99 }
  )
)
t.test('all the things', t =>
  run(
    t,
    { pass: 1, fail: 1, skip: 1, total: 3 },
    { pass: 1, fail: 1, skip: 1, todo: 1, total: 4 }
  )
)

t.test('comments', t =>
  run(t, { pass: 1, total: 1 }, { pass: 0, total: 1 }, ['one', 'two'])
)

t.test('timed out with signal', t =>
  run(t, { pass: 1, total: 1 }, { pass: 0, total: 1 }, [], {
    signal: 'SIGALRM',
  })
)

t.test('timed out without signal', t =>
  run(t, { pass: 1, total: 1 }, { pass: 0, total: 1 }, [], {})
)
