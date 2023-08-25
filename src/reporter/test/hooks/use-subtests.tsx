import { Minimal } from '@tapjs/core'
import { Test } from '@tapjs/test'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { useSubtests } from '../../dist/hooks/use-subtests.js'

import { getTest } from '../fixtures/get-test.js'
import { reduce } from '../fixtures/reduce.js'

const Tag: FC<{
  test: Minimal
  which?: 'active' | 'finished' | 'all'
}> = ({ test, which = 'all' }) => {
  const subs = useSubtests(test, which).map(t => t.name)
  return (
    <Box>
      <Text>{JSON.stringify(subs, null, 2)}</Text>
    </Box>
  )
}

const containsPrevious = (t: Test, list: string[][]) => {
  for (let i = 1; i < list.length; i++) {
    t.strictSame(list[i - 1], list[i].slice(0, -1))
  }
}

t.test('all subtests', async t => {
  const tb = getTest()
  const app = render(<Tag test={tb} which="all" />)
  tb.go()
  await tb.concat()
  const frames = reduce(app.frames).map(j => JSON.parse(j))
  containsPrevious(t, frames)
  t.strictSame(frames[frames.length - 1], [
    'zro',
    'one',
    'two',
    'tre',
    'fur',
    'fiv',
    'six',
    'svn',
    'eit',
    'nin',
  ])
})

t.test('finished subtests', async t => {
  const tb = getTest()
  const app = render(<Tag test={tb} which="finished" />)
  tb.go()
  await tb.concat()
  const frames = reduce(app.frames).map(j => JSON.parse(j))
  containsPrevious(t, frames)
  t.strictSame(frames[frames.length - 1], [
    'one',
    'two',
    'fur',
    'fiv',
    'tre',
    'svn',
    'eit',
    'nin',
    'six',
    'zro',
  ])
})

t.test('active subtests', async t => {
  const tb = getTest()
  const app = render(<Tag test={tb} which="active" />)
  tb.go()
  await tb.concat()
  const frames = reduce(app.frames).map(j => JSON.parse(j))
  t.strictSame(frames, [
    [],
    ['zro'],
    ['zro', 'one'],
    ['zro', 'one', 'two'],
    ['zro', 'one', 'two', 'tre'],
    ['zro', 'two', 'tre'],
    ['zro', 'two', 'tre', 'fur'],
    ['zro', 'tre', 'fur'],
    ['zro', 'tre', 'fur', 'fiv'],
    ['zro', 'tre', 'fiv'],
    ['zro', 'tre', 'fiv', 'six'],
    ['zro', 'tre', 'six'],
    ['zro', 'tre', 'six', 'svn'],
    ['zro', 'six', 'svn'],
    ['zro', 'six', 'svn', 'eit'],
    ['zro', 'six', 'eit'],
    ['zro', 'six', 'eit', 'nin'],
    ['zro', 'six', 'nin'],
    ['zro', 'six'],
    ['zro'],
    [],
  ])
})
