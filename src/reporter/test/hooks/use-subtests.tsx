import { Minimal } from '@tapjs/core'
import { Test } from '@tapjs/test'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { promisify } from 'util'
import { useSubtests } from '../../dist/hooks/use-subtests.js'

const sleep = promisify(setTimeout)

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

const getTest = () => {
  const tb = new Minimal({ name: 'parent' })
  tb.jobs = 4
  sleep(64).then(async () => {
    // children end out of order
    const { subtest: zro } = tb.test('zro', () => {})
    const { subtest: one } = tb.test('one', () => {})
    const { subtest: two } = tb.test('two', () => {})
    const { subtest: tre } = tb.test('tre', () => {})
    const { subtest: fur } = tb.test('fur', () => {})
    const { subtest: fiv } = tb.test('fiv', () => {})
    const { subtest: six } = tb.test('six', () => {})
    const { subtest: svn } = tb.test('svn', () => {})
    const { subtest: eit } = tb.test('eit', () => {})
    const { subtest: nin } = tb.test('nin', () => {})
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
    await sleep(10)
    fur.end()
    await sleep(10)
    fiv.end()
    await sleep(10)
    tre.end()
    svn.end()
    await sleep(10)
    eit.end()
    nin.end()
    await sleep(10)
    six.end()
    zro.end()
  })

  return tb
}

const red = (list: string[]) =>
  list.reduce((list: string[], entry) => {
    if (entry !== list[list.length - 1]) list.push(entry)
    return list
  }, [])

const containsPrevious = (t: Test, list: string[][]) => {
  for (let i = 1; i < list.length; i++) {
    t.strictSame(list[i - 1], list[i].slice(0, -1))
  }
}

t.test('all subtests', async t => {
  const tb = getTest()
  const app = render(<Tag test={tb} which="all" />)
  await tb.concat()
  const frames = red(app.frames).map(j => JSON.parse(j))
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
  await tb.concat()
  const frames = red(app.frames).map(j => JSON.parse(j))
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
  await tb.concat()
  const frames = red(app.frames).map(j => JSON.parse(j))
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
