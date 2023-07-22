// The <Static> section that appends results as the tests run
// Each log entry can be one of:
// - A finished test
// - A failed Result object (on the root test)
// - a stderr or stdout message

import { Box, Static, Text } from 'ink'
import React, { FC } from 'react'
import {
  ConsoleLog,
  isStdioLog,
  isTestLog,
  LogEntry,
  StdioLog,
  useLog,
} from '../hooks/use-log.js'
import { TapReportOpts } from '../index.js'

export const ConsoleLogLine: FC<ConsoleLog> = ({ text }) => (
  <Box>
    <Text>{text.trimEnd()}</Text>
  </Box>
)

export const StdioLogLine: FC<StdioLog> = ({
  name,
  fd,
  text,
  previous: p,
}) => {
  const prefix =
    isStdioLog(p) && p.fd === fd && p.name === name ? (
      <></>
    ) : (
      <Box gap={1} paddingTop={1}>
        {fd === 1 ? (
          <Text color="cyan" bold dimColor>{`1>`}</Text>
        ) : (
          <Text color="red" bold dimColor>{`2>`}</Text>
        )}
        <Text dimColor>{name}</Text>
      </Box>
    )

  const t = String(text).trim()
  return (
    <Box flexDirection="column">
      {prefix}
      <Box>
        <Text>{t}</Text>
      </Box>
    </Box>
  )
}

export const Log: FC<TapReportOpts> = ({ test, config }) => {
  if (test.results) return <></>

  const logs = useLog(test, config)
  return (
    <Static items={logs}>
      {(log, key) => <LogLine {...log} key={key} />}
    </Static>
  )
}

const LogLine: FC<LogEntry> = log =>
  isTestLog(log) ? (
    <></>
  ) : isStdioLog(log) ? (
    <StdioLogLine {...log} />
  ) : (
    <ConsoleLogLine {...log} />
  )
