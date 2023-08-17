import { CountsJSON, TestBase } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useAssertTotals } from './hooks/use-assert-totals.js'
import { useComments } from './hooks/use-comments.js'
import { useSuiteTotals } from './hooks/use-suite-totals.js'
import { TimedOut } from './timed-out.js'

const Complete: FC<CountsJSON> = ({ pass, fail = 0, total }) => (
  <Text bold dimColor>
    {pass + fail} of {total} complete
  </Text>
)

const Skip: FC<CountsJSON> = ({ skip = 0 }) => (
  <Text color="cyan">{skip} skip</Text>
)

const Fail: FC<CountsJSON> = ({ fail = 0 }) => (
  <Text color="red" dimColor={fail === 0} bold={fail !== 0}>
    {fail} fail
  </Text>
)

const Pass: FC<CountsJSON> = ({ pass }) => (
  <Text color="green">{pass} pass</Text>
)

const Todo: FC<CountsJSON> = ({ todo = 0 }) =>
  todo ? (
    <Box flexDirection="column" alignItems="flex-end">
      <Text color="magenta">{todo} todo</Text>
      <Text> </Text>
    </Box>
  ) : (
    <></>
  )

export const SuiteSummary: FC<{ test: TestBase }> = ({ test }) => {
  const suites = useSuiteTotals(test)
  const asserts = useAssertTotals(test)

  return (
    <Box flexDirection="column">
      <Box marginY={1}>
        <Box flexDirection="row" gap={2} alignSelf="flex-end">
          <Box flexDirection="column">
            <Text bold>Asserts:</Text>
            <Text bold>Suites:</Text>
          </Box>
          <Box flexDirection="column" alignItems="flex-end">
            <Pass {...asserts} />
            <Pass {...suites} />
          </Box>
          <Box flexDirection="column" alignItems="flex-end">
            <Fail {...asserts} />
            <Fail {...suites} />
          </Box>
          {(!!suites.skip || !!asserts.skip) && (
            <Box flexDirection="column" alignItems="flex-end">
              <Skip {...asserts} />
              <Skip {...suites} />
            </Box>
          )}
          <Todo {...asserts} />
          <Box flexDirection="column" alignItems="flex-end">
            <Complete {...asserts} />
            <Complete {...suites} />
          </Box>
        </Box>
      </Box>

      <Box flexDirection="column">
        {useComments(test).map((c, key) => (
          <Text key={key} dimColor>
            {c}
          </Text>
        ))}
        <TimedOut test={test} />
      </Box>
    </Box>
  )
}
