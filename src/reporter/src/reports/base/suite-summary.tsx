import { Base, Counts } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { Result } from 'tap-parser'
import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'

export const SuiteSummary: FC<Pick<TapReportOpts, 'tap'>> = ({ tap }) => {
  const [asserts, updateAsserts] = useState<Counts>(new Counts())
  const [suites, updateSuites] = useState<Counts & { complete: number }>(
    Object.assign(new Counts(), { complete: 0 })
  )
  const suitesCleanup: (() => void)[] = []
  const assertsCleanup: (() => void)[] = []
  const doSuitesCleanup = () => {
    for (const c of suitesCleanup) c()
    suitesCleanup.length = 0
  }
  const doAssertsCleanup = () => {
    for (const c of assertsCleanup) c()
    assertsCleanup.length = 0
  }

  const [tests, updateTests] = useState<Base[]>([])
  useEffect(() => {
    suitesCleanup.push(
      listenCleanup(tap, 'subtestAdd', test => {
        updateSuites({ ...suites, total: suites.total + 1 })
        updateTests(tests.concat(test))
      })
    )
    suitesCleanup.push(
      listenCleanup(tap, 'subtestEnd', (t: Base) => {
        const { results } = t
        /* c8 ignore start */
        if (!results) return
        /* c8 ignore stop */
        let { total, fail, pass, skip, todo, complete } = suites
        complete++
        if (!results.ok) fail++
        else if (results.plan.skipAll) skip++
        else pass++
        updateSuites({ total, fail, pass, skip, complete, todo })
      })
    )
    return doSuitesCleanup
  }, [suites, tests])

  useEffect(() => {
    for (const test of tests) {
      assertsCleanup.push(
        listenCleanup(test.parser, 'result', (r: Result) => {
          let { total, fail, pass, skip, todo } = asserts
          total += 1
          if (r.todo) todo++
          else if (r.skip) skip++
          else if (r.ok === false) fail++
          else pass++
          updateAsserts({ total, fail, pass, skip, todo })
        })
      )
    }
    return doAssertsCleanup
  }, [tests, asserts])

  return (
    <Box>
      <Box flexDirection="row" gap={2} alignSelf="flex-end">
        <Box flexDirection="column">
          <Text bold>Suites:</Text>
          <Text bold>Asserts:</Text>
        </Box>
        <Box flexDirection="column" alignItems="flex-end">
          <Text color="green">{suites.pass} pass</Text>
          <Text color="green">{asserts.pass} pass</Text>
        </Box>
        <Box flexDirection="column" alignItems="flex-end">
          <Text color="red" dimColor={suites.fail === 0} bold={suites.fail !== 0}>
            {suites.fail} fail
          </Text>
          <Text color="red" dimColor={asserts.fail === 0} bold={asserts.fail !== 0}>
            {asserts.fail} fail
          </Text>
        </Box>
        {(!!suites.skip || !!asserts.skip) && (
          <Box flexDirection="column" alignItems="flex-end">
            <Text color="cyan">{suites.skip} skip</Text>
            <Text color="cyan">{asserts.skip} skip</Text>
          </Box>
        )}
        <Box flexDirection="column">
          <Box flexDirection="row" gap={2}>
            <Text bold dimColor>
              {suites.pass + suites.fail} of {suites.total} complete
            </Text>
          </Box>
          <Box flexDirection="row" gap={2}>
            {!!asserts.todo && (
              <Text color="magenta">{asserts.todo} todo</Text>
            )}
            <Text bold dimColor>
              {asserts.pass + asserts.fail} of {asserts.total} complete
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
