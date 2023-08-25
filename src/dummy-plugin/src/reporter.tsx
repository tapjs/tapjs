// This module is excluded from the CommonJS build, and the package.json
// `"exports"` maps the import path to ./no-op. It only needs to be able
// to load in the runner, which is ESM-only.
//
// The user can either do --reporter=@tapjs/dummy-plugin/reporter, or
// --reporter=dummy, and both will load this test reporter.
import { Reporter } from '@tapjs/reporter'
import {
  useAssertTotals,
  useSuiteTotals,
} from '@tapjs/reporter/hooks'
import { Box, Text } from 'ink'
import React from 'react'

export default (({ test, config }) => {
  const asserts = useAssertTotals(test)
  const suites = useSuiteTotals(test)
  return (
    <Box flexDirection="column">
      <Text>just a dummy reporter</Text>
      <Text>{test.fullname}</Text>
      <Text>{config.globCwd}</Text>
      <Text>{JSON.stringify({ asserts, suites }, null, 2)}</Text>
    </Box>
  )
}) as Reporter
