import { Counts, CountsJSON } from '@tapjs/core'
import { Test } from '@tapjs/test'
import chalk from 'chalk'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'

chalk.level = 3

const run = async (
  t: Test,
  suites: CountsJSON,
  asserts: CountsJSON
) => {
  const { SuiteSummary } = (await t.mockImport(
    '../dist/suite-summary.js',
    {
      chalk,
      '../dist/hooks/use-test-time.js': {
        useTestTime: () => 123,
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
