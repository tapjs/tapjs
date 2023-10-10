import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { Result } from 'tap-parser'
import { useCountsLists } from '../../dist/esm/hooks/use-counts-lists.js'
import { reduce } from '../fixtures/reduce.js'

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const [counts, lists] = useCountsLists(test)
  const l = Object.fromEntries(
    Object.entries(lists).map(([k, list]) => [
      k,
      list.map((r: Result) => ({
        name: r.name,
        ok: r.ok,
        skip: !!r.skip,
        todo: !!r.todo,
      })),
    ])
  )
  return (
    <Box>
      <Text>{JSON.stringify({ counts, lists: l }, null, 2)}</Text>
    </Box>
  )
}

t.test('show counts and lists', async t => {
  const tb = new Minimal({ name: 'commenter' })
  const app = render(<Tag test={tb} />)
  tb.pass('this is fine')
  tb.comment('before child test')
  tb.test('child test', async tb => {
    tb.pass('this is fine')
    tb.fail('not quite as fine')
    tb.comment('child comment')
    tb.parent?.comment('comment while occupied')
    tb.pass('will be fine', { todo: true })
    tb.pass('dont care if its fine', { skip: true })
    tb.pass('this is fine also')
    tb.fail('second fail')
  })
  tb.comment('after child test')
  tb.end()
  await tb.concat()
  app.unmount()

  t.strictSame(
    reduce(app.frames)
      .filter(j => j.trim())
      .map(j => JSON.parse(j)),
    [
      {
        counts: { total: 0, pass: 0 },
        lists: { fail: [], todo: [], skip: [], pass: [] },
      },
      {
        counts: { total: 1, pass: 1 },
        lists: { fail: [], todo: [], skip: [], pass: [] },
      },
      {
        counts: { total: 2, pass: 2 },
        lists: { fail: [], todo: [], skip: [], pass: [] },
      },
      {
        counts: { total: 3, pass: 2, fail: 1 },
        lists: {
          fail: [
            {
              name: 'not quite as fine',
              ok: false,
              skip: false,
              todo: false,
            },
          ],
          todo: [],
          skip: [],
          pass: [],
        },
      },
      {
        counts: { total: 4, pass: 2, fail: 1, todo: 1 },
        lists: {
          fail: [
            {
              name: 'not quite as fine',
              ok: false,
              skip: false,
              todo: false,
            },
          ],
          todo: [
            {
              name: 'will be fine',
              ok: true,
              skip: false,
              todo: true,
            },
          ],
          skip: [],
          pass: [],
        },
      },
      {
        counts: { total: 5, pass: 2, fail: 1, todo: 1, skip: 1 },
        lists: {
          fail: [
            {
              name: 'not quite as fine',
              ok: false,
              skip: false,
              todo: false,
            },
          ],
          todo: [
            {
              name: 'will be fine',
              ok: true,
              skip: false,
              todo: true,
            },
          ],
          skip: [
            {
              name: 'dont care if its fine',
              ok: true,
              skip: true,
              todo: false,
            },
          ],
          pass: [],
        },
      },
      {
        counts: { total: 6, pass: 3, fail: 1, todo: 1, skip: 1 },
        lists: {
          fail: [
            {
              name: 'not quite as fine',
              ok: false,
              skip: false,
              todo: false,
            },
          ],
          todo: [
            {
              name: 'will be fine',
              ok: true,
              skip: false,
              todo: true,
            },
          ],
          skip: [
            {
              name: 'dont care if its fine',
              ok: true,
              skip: true,
              todo: false,
            },
          ],
          pass: [],
        },
      },
      {
        counts: {
          total: 7,
          pass: 3,
          fail: 2,
          todo: 1,
          skip: 1,
        },
        lists: {
          fail: [
            {
              name: 'not quite as fine',
              ok: false,
              skip: false,
              todo: false,
            },
            {
              name: 'second fail',
              ok: false,
              skip: false,
              todo: false,
            },
          ],
          todo: [
            {
              name: 'will be fine',
              ok: true,
              skip: false,
              todo: true,
            },
          ],
          skip: [
            {
              name: 'dont care if its fine',
              ok: true,
              skip: true,
              todo: false,
            },
          ],
          pass: [],
        },
      },
    ]
  )
})
