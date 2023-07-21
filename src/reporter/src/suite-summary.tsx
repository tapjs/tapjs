import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useAssertTotals } from './hooks/use-assert-totals.js'
import { useSuiteTotals } from './hooks/use-suite-totals.js'
import { TapReportOpts } from './index.js'

export const SuiteSummary: FC<Pick<TapReportOpts, 'tap'>> = ({
  tap,
}) => {
  const suites = useSuiteTotals(tap)
  const asserts = useAssertTotals(tap)

  return (
    <Box marginY={1}>
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
          <Text
            color="red"
            dimColor={suites.fail === 0}
            bold={suites.fail !== 0}>
            {suites.fail} fail
          </Text>
          <Text
            color="red"
            dimColor={asserts.fail === 0}
            bold={asserts.fail !== 0}>
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
              {asserts.pass + asserts.fail} of {asserts.total}{' '}
              complete
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
