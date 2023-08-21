import { Base } from '@tapjs/core'
import { Test } from '@tapjs/test'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { TestBadge } from '../dist/test-badge.js'
import './fixtures/chalk.js'

const run = async (t: Test, test: any) =>
  t.matchSnapshot(
    render(<TestBadge test={test as unknown as Base} />).lastFrame()
  )

t.test('test in progress', t => run(t, { options: {} }))
t.test('pass', t =>
  run(t, { results: { ok: true, plan: {} }, counts: {}, options: {} })
)
t.test('fail ok=false', t =>
  run(t, {
    results: { ok: false, plan: {} },
    counts: {},
    options: {},
  })
)
t.test('fail counts.fail', t =>
  run(t, {
    results: { ok: true, plan: {} },
    counts: { fail: 1 },
    options: {},
  })
)
t.test('todo', t =>
  run(t, {
    results: { ok: true, plan: {} },
    counts: { todo: 1 },
    options: {},
  })
)
t.test('skip results.skip', t =>
  run(t, {
    results: { ok: true, skip: 3, plan: {} },
    counts: { skip: 3 },
    options: {},
  })
)
t.test('skip counts.skip', t =>
  run(t, {
    results: { ok: true, plan: {} },
    counts: { skip: 3 },
    options: {},
  })
)
t.test('skip plan.skipAll', t =>
  run(t, {
    results: { ok: true, plan: { skipAll: true } },
    counts: {},
    options: {},
  })
)
t.test('ok, but exited with signal', t =>
  run(t, {
    results: { ok: true, plan: { skipAll: true } },
    counts: {},
    options: { signal: 'SIGINT' },
  })
)
t.test('bailed out for no raisin', t =>
  run(t, {
    results: { bailout: true },
    options: {},
    bailedOut: true,
  })
)
t.test('bailed out with reason', t =>
  run(t, {
    results: { bailout: 'i have my reasons' },
    options: {},
    bailedOut: 'i have my reasons',
  })
)
