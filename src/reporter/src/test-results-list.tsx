import { Base, Lists } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, ReactElement } from 'react'
import { Result } from 'tap-parser'
import { ResultTag } from './result-tag.js'

export interface TestResultsListOpts {
  test: Base
  lists: Lists
  details?: boolean
  showCallsite?: boolean
}

export const TestResultsList: FC<TestResultsListOpts> = ({
  test,
  lists,
  details = false,
  showCallsite = false,
}) => {
  const { results } = test
  if (!results) return <></>

  const resultsList: (ReactElement | Result)[] = []
  if (results.plan.skipAll && results.plan.skipReason) {
    resultsList.push(
      <Box gap={1} paddingLeft={1}>
        <Text color="cyan" bold>
          ~
        </Text>
        <Text>{results.plan.skipReason}</Text>
      </Box>
    )
  }
  // TODO: add a --passes config option to show all passing
  // results if details:true
  resultsList.push(...lists.skip, ...lists.todo, ...lists.fail)

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

  // group them so the short ones clump together into a single section
  // with a 1 block space between longer entries
  type RLG = (ReactElement[] | ReactElement)[]
  const resultsListGrouped: RLG = resultsList.reduce(
    (s: RLG, f: ReactElement | Result) => {
      const el =
        f instanceof Result ? (
          <ResultTag
            result={f}
            details={details}
            test={test}
            showCallsite={showCallsite}
          />
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
