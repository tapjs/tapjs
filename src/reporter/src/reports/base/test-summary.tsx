import { Base, Counts, Lists } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { Diff } from '../../diff.js'

import { stringify } from 'tap-yaml'

export interface TestSummaryOpts {
  test: Base
}

// slightly more granular/precise ms
import ms_ from 'ms'
import { Result } from 'tap-parser'
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
    <Text backgroundColor="#808" color="white" bold>
      {' TODO '}
    </Text>
  ) : !!skip || test.results?.plan.skipAll ? (
    <Text backgroundColor="blue" color="white" bold>
      {' SKIP '}
    </Text>
  ) : (
    <Text backgroundColor="#0a0" color="black" bold>
      {' PASS '}
    </Text>
  )
}

const assertName = (r: Result, t: Base) => {
  const fn = r.fullname
  const n = t.name + ' > '
  return (fn.startsWith(n) ? fn.substring(n.length) : fn).trim()
}

export interface ResultOpts {
  result: Result
  details?: boolean
  test: Base
}
export const ResultTag: FC<ResultOpts> = ({
  result,
  details = false,
  test,
}) => {
  const c = result.skip ? '~' : result.todo ? '☐' : !result.ok ? '✖' : '✓'
  const textc = result.skip
    ? 'cyan'
    : result.todo
    ? 'magenta'
    : !result.ok
    ? 'red'
    : 'green'
  const pref = (
    <Text bold color={textc}>
      {c}
    </Text>
  )
  const st = result.skip || result.todo || result.tapError
  const suff =
    typeof st === 'string' ? <Text color={textc}>{st}</Text> : <></>
  const name = assertName(result, test)

  const { diff, ...otherDiags } = result.diag || {}

  return (
    <Box flexDirection="column">
      <Box gap={1} paddingLeft={1}>
        {pref}
        <Text>{name}</Text>
        {suff}
      </Box>
      <Box paddingLeft={4} flexDirection="column">
        {!!details && !!result.diag && (
          <>
            <Diff diff={diff} />
            <Text>...</Text>
            <Text>{stringify(otherDiags).trim()}</Text>
            <Text>---</Text>
          </>
        )}
      </Box>
    </Box>
  )
}

export const TestSummary: FC<TestSummaryOpts & { details?: boolean }> = ({
  test,
  details = false,
}) => {
  const { lists: lists_, counts: counts_, time: time_ } = test

  const [[counts, lists], updateCounts] = useState<[Counts, Lists]>([
    counts_,
    lists_,
  ])
  useEffect(
    () =>
      listenCleanup(test.parser, 'result', () =>
        updateCounts([test.counts, test.lists])
      ),
    [counts, lists]
  )

  const [time, updateTime] = useState<number>(time_ || 0)
  const [start] = useState<number>(Date.now())
  useEffect(() => {
    const i = test.time
      ? null
      : setInterval(() => updateTime(Date.now() - start), 247)
    const maybeCT = () => (i === null ? null : clearTimeout(i))
    const cleanup = listenCleanup(test, 'complete', maybeCT)
    return () => {
      maybeCT()
      cleanup()
    }
  }, [test.time])

  const { total, todo, skip, fail } = counts

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
      {!!test.results && (
        <>
          {!!test.results?.plan.skipAll &&
            !!test.results.plan.skipReason && (
              <Box gap={1} paddingLeft={1}>
                <Text color="cyan" bold>
                  ~
                </Text>
                <Text>{test.results.plan.skipReason}</Text>
              </Box>
            )}
          {!!skip &&
            lists.skip.map((f, i) => (
              <ResultTag
                test={test}
                result={f}
                details={details}
                key={i}
              />
            ))}
          {!!todo &&
            lists.todo.map((f, i) => (
              <ResultTag
                test={test}
                result={f}
                details={details}
                key={i}
              />
            ))}
          {!!fail &&
            lists.fail.map((f, i) => (
              <ResultTag
                test={test}
                result={f}
                details={details}
                key={i}
              />
            ))}
          {!!(typeof test.options.signal === 'string') && (
            <Box gap={1} paddingLeft={1}>
              <Text color="red" bold>
                ✖
              </Text>
              <Text>{test.options.signal}</Text>
            </Box>
          )}
          {/* TODO: add a --passes config option to show all passing results if details:true */}
        </>
      )}
    </Box>
  )
}
