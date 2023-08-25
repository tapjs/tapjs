import { Base, Lists } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, ReactElement } from 'react'
import { Result } from 'tap-parser'
import { ResultTag } from './result-tag.js'

export interface TestResultsListOpts {
  test: Base
  details?: boolean
}

const isResult = (r: any): r is Result =>
  !!r && typeof r === 'object' && typeof r.ok === 'boolean'

export const TestResultsList: FC<TestResultsListOpts> = ({
  test,
  details = false,
}) => {
  const { results, options, bailedOut } = test
  const { exitCode, signal } = options
  if (!results) return <></>
  const lists = test.lists

  const resultsList: (ReactElement | Result)[] = []
  if (
    results.plan.skipAll &&
    results.plan.skipReason &&
    !bailedOut &&
    !signal &&
    !exitCode
  ) {
    resultsList.push(
      <Box gap={1} paddingLeft={1}>
        <Text color="cyan" bold>
          ~
        </Text>
        <Text>{results.plan.skipReason}</Text>
      </Box>
    )
  }
  resultsList.push(
    ...lists.pass,
    ...lists.skip,
    ...lists.todo,
    ...lists.fail
  )

  if (typeof test.options.signal === 'string') {
    resultsList.push(
      <Box gap={1} paddingLeft={1}>
        <Text color="red" bold>
          ✖
        </Text>
        <Text>{test.options.signal}</Text>
      </Box>
    )
  }
  if (bailedOut && !details) {
    resultsList.push(
      <Box gap={1} paddingLeft={1}>
        <Text color="red" bold>
          Bailout!
        </Text>
        <Text>{bailedOut}</Text>
      </Box>
    )
  }

  // group them so the short ones clump together into a single section
  // with a 1 block space between longer entries
  type RLG = (ReactElement[] | ReactElement)[]
  const resultsListGrouped: RLG = resultsList.reduce(
    (s: RLG, f: ReactElement | Result) => {
      const el = isResult(f) ? (
        <ResultTag result={f} details={details} test={test} />
      ) : (
        f
      )
      if (!details || !(f instanceof Result) || !f.diag) {
        let l = s[s.length - 1]
        if (!Array.isArray(l)) {
          l = []
          s.push(l)
        }
        l.push(el)
      } else {
        s.push(el)
      }
      return s
    },
    []
  )

  return (
    <Box gap={1} flexDirection="column">
      {resultsListGrouped.map((f, key) => (
        <Box flexDirection="column" key={key}>
          {Array.isArray(f) ? (
            f.map((f, key) => (
              <Box flexDirection="column" key={key}>
                {f}
              </Box>
            ))
          ) : (
            <Box key={key}>{f}</Box>
          )}
        </Box>
      ))}
    </Box>
  )
}
