import { Base, Counts, Lists } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'

export interface TestSummaryOpts {
  test: Base
}

// slightly more granular/precise ms
import ms_ from 'ms'
import { listenCleanup } from '../../listen-cleanup.js'
const ms = (n: number) =>
  n < 1
    ? `${Math.round(n * 1000)}µs`
    : n < 10 && n !== Math.round(n)
    ? `${n.toFixed(3)}ms`
    : n < 1000
    ? `${Math.round(n)}ms`
    : n < 10_000
    ? `${(n / 1000).toFixed(3)}s`
    : ms_(Math.round(n))

export const TestTag: FC<TestSummaryOpts> = ({ test }) => {
  const { results, counts } = test
  if (!results) {
    return (
      <Text backgroundColor="yellow" color="black" bold>
        {' RUNS '}
      </Text>
    )
  }
  const { ok } = results
  const { fail, todo, skip } = counts
  return !ok || !!fail ? (
    <Text backgroundColor="red" color="white" bold>
      {' FAIL '}
    </Text>
  ) : !!todo ? (
    <Text backgroundColor="#606" color="white" bold>
      {' TODO '}
    </Text>
  ) : !!skip ? (
    <Text backgroundColor="blue" color="white" bold>
      {' SKIP '}
    </Text>
  ) : (
    <Text backgroundColor="green" color="black" bold>
      {' PASS '}
    </Text>
  )
}

export const RunSummary: FC<TestSummaryOpts> = ({ test }) => {
  if (test.results) {
    return <TestSummary test={test} />
  }

  const [[counts, lists], updateCounts] = useState<[Counts, Lists]>([
    test.counts,
    test.lists,
  ])
  useEffect(
    () =>
      listenCleanup(test.parser, 'result', () =>
        updateCounts([test.counts, test.lists])
      ),
    [counts, lists]
  )

  const [time, updateTime] = useState<number>(0)
  const [start] = useState<number>(Date.now())
  useEffect(() => {
    if (test.time) return
    const i = setInterval(() => updateTime(Date.now() - start), 123)
    return () => clearInterval(i)
  }, [test.time])

  return <TestSummary test={test} time={time} />
}

export const TestSummary: FC<TestSummaryOpts & { time?: number }> = ({
  test,
  time,
}) => {
  const { lists, counts } = test
  const { total, todo, skip, fail } = counts
  if (time === undefined) time = test.time

  return (
    <Box flexDirection="column">
      <Box gap={1}>
        <TestTag test={test} />
        <Text>{test.name}</Text>
        {!!fail && <Text color="red">{fail} failed</Text>}
        {!!todo && <Text color="magenta">{todo} todo</Text>}
        {!!skip && <Text color="cyan">{skip} skip</Text>}
        {!!(fail || todo || skip) && <Text>of</Text>}
        <Text bold>{total}</Text>
        {!(fail || todo || skip) && <Text color="green">OK</Text>}
        <Text bold dimColor>
          {ms(time)}
        </Text>
      </Box>
      {!!fail &&
        lists.fail.map((f, i) => (
          <Box key={i} gap={1}>
            <Text color="red" bold>
              ✖
            </Text>
            <Text>{f.fullname}</Text>
          </Box>
        ))}
      {!!todo &&
        lists.todo.map((f, i) => (
          <Box key={i} gap={1}>
            <Text color="magenta" bold>
              ☐
            </Text>
            <Text>{f.fullname}</Text>
            {typeof f.todo === 'string' && (
              <Text color="magenta">{f.todo}</Text>
            )}
          </Box>
        ))}
      {!!skip &&
        lists.skip.map((f, i) => (
          <Box key={i} gap={1}>
            <Text color="cyan" bold>
              ~
            </Text>
            <Text>{f.fullname}</Text>
            {typeof f.skip === 'string' && (
              <Text color="cyan">{f.skip}</Text>
            )}
          </Box>
        ))}
      {!!(fail || todo || skip) && <Box paddingTop={1}></Box>}
    </Box>
  )
}
