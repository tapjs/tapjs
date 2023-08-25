import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useSuiteTotals } from '../../dist/hooks/use-suite-totals.js'
import { sleep } from '../fixtures/sleep.js'
import { reduce } from '../fixtures/reduce.js'

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const suiteTotals = useSuiteTotals(test)
  return (
    <Box>
      <Text>{JSON.stringify(suiteTotals, null, 2)}</Text>
    </Box>
  )
}

t.test('suite totals', async t => {
  const tb = new Minimal({ name: 'parent' })
  tb.jobs = 4
  const app = render(<Tag test={tb} />)
  sleep(64).then(async () => {
    // children end out of order
    const { subtest: zro } = tb.test('zro', t => t.plan(0))
    const { subtest: one } = tb.test('one', t => t.fail('nope'))
    const { subtest: two } = tb.test('two', t => t.pass('fine'))
    const { subtest: tre } = tb.test('tre', () => {})
    const { subtest: fur } = tb.test('fur', t =>
      t.pass('skip', { skip: true })
    )
    const { subtest: fiv } = tb.test('fiv', t =>
      t.plan(0, 'no tests found')
    )
    const { subtest: six } = tb.test('six', t =>
      t.pass('todo', { todo: true })
    )
    const { subtest: svn } = tb.test('svn', t =>
      t.fail('todo', { todo: true })
    )
    const { subtest: eit } = tb.test('eit', t => t.pass('fine'))
    const { subtest: nin } = tb.test('nin', t => t.pass('nope'))
    if (
      !zro ||
      !one ||
      !two ||
      !tre ||
      !fur ||
      !fiv ||
      !six ||
      !svn ||
      !eit ||
      !nin
    ) {
      throw new Error('failed to get one or more subtests')
    }

    tb.end()
    one.end()
    two.end()
    fur.end()
    tre.end()
    svn.end()
    eit.end()
    nin.end()
    six.end()
  })

  await tb.concat()

  const frames = reduce(app.frames).map(j => JSON.parse(j))
  t.strictSame(frames, [
    { total: 0, pass: 0 },
    { total: 1, pass: 0, skip: 1, complete: 1 },
    { total: 3, pass: 0, skip: 1, complete: 1 },
    { total: 4, pass: 0, skip: 1, complete: 1 },
    { total: 5, pass: 0, skip: 1, complete: 1 },
    { total: 6, pass: 0, skip: 1, complete: 1 },
    { total: 7, pass: 0, skip: 1, complete: 1 },
    { total: 8, pass: 0, skip: 1, complete: 1 },
    { total: 9, pass: 0, skip: 1, complete: 1 },
    { total: 10, pass: 0, skip: 1, complete: 1 },
    { total: 10, pass: 0, fail: 1, skip: 1, complete: 2 },
    { total: 10, pass: 0, fail: 1, skip: 2, complete: 3 },
    { total: 10, pass: 1, fail: 1, skip: 2, complete: 4 },
    { total: 10, pass: 2, fail: 1, skip: 2, complete: 5 },
    { total: 10, pass: 2, fail: 1, skip: 3, complete: 6 },
    { total: 10, pass: 3, fail: 1, skip: 3, complete: 7 },
    { total: 10, pass: 4, fail: 1, skip: 3, complete: 8 },
    { total: 10, pass: 5, fail: 1, skip: 3, complete: 9 },
    { total: 10, pass: 6, fail: 1, skip: 3, complete: 10 },
  ])
})
