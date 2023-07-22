import { Base } from '@tapjs/core'
import { Test } from '@tapjs/test'
import chalk from 'chalk'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { TestBadge } from '../dist/test-badge.js'

chalk.level = 3

const run = async (t: Test, test: any) =>
  t.matchSnapshot(
    render(<TestBadge test={test as unknown as Base} />).lastFrame()
  )

t.test('test in progress', t => run(t, {}))
t.test('pass', t =>
  run(t, { results: { ok: true, plan: {} }, counts: {} })
)
t.test('fail ok=false', t =>
  run(t, { results: { ok: false, plan: {} }, counts: {} })
)
t.test('fail counts.fail', t =>
  run(t, { results: { ok: true, plan: {} }, counts: { fail: 1 } })
)
t.test('todo', t =>
  run(t, { results: { ok: true, plan: {} }, counts: { todo: 1 } })
)
t.test('skip results.skip', t =>
  run(t, {
    results: { ok: true, skip: 3, plan: {} },
    counts: { skip: 3 },
  })
)
t.test('skip counts.skip', t =>
  run(t, { results: { ok: true, plan: {} }, counts: { skip: 3 } })
)
t.test('skip plan.skipAll', t =>
  run(t, {
    results: { ok: true, plan: { skipAll: true } },
    counts: {},
  })
)
