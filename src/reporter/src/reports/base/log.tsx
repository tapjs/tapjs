// The <Static> section that appends results as the tests run
// Each log entry can be one of:
// - A finished test
// - A failed Result object (on the root test)
// - a stderr or stdout message

import { Base, Spawn } from '@tapjs/core'
import { Box, Static, Text } from 'ink'
import patchConsole from 'patch-console'
import React, { FC, useEffect, useState } from 'react'
import { Parser } from 'tap-parser'
import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'
import { TestSummary } from './test-summary.js'

patchConsole

const proceduralComment = /^# Subtest(?:\n?$|: )/

export type LogEntry = StdioLog | TestLog | ConsoleLog

export interface TestLog {
  test: Base
  previous?: LogEntry
}

const isTestLog = (p?: LogEntry): p is TestLog =>
  !!p && (p as TestLog).test instanceof Base

export const TestLogLine: FC<TestLog> = ({ test, previous }) => (
  <Box paddingTop={!!previous && !isTestLog(previous) ? 1 : 0}>
    <TestSummary test={test} />
  </Box>
)

export interface ConsoleLog {
  text: string
  previous?: LogEntry
}

export const isConsoleLog = (p?: LogEntry): p is ConsoleLog =>
  !!p &&
  typeof (p as ConsoleLog).text === 'string' &&
  !((p as TestLog).test instanceof Base)

export const ConsoleLogLine: FC<ConsoleLog> = ({ text, previous }) => (
  <Box paddingTop={!!previous && !isConsoleLog(previous) ? 1 : 0}>
    <Text>{text}</Text>
  </Box>
)

export interface StdioLog extends ConsoleLog {
  name: string
  fd: 0 | 1 | 2
}

const isStdioLog = (p?: LogEntry): p is StdioLog =>
  isConsoleLog(p) &&
  typeof (p as StdioLog).name === 'string' &&
  typeof (p as StdioLog).fd === 'number'

export const StdioLogLine: FC<StdioLog> = ({
  name,
  fd,
  text,
  previous: p,
}) => {
  const prefix =
    isStdioLog(p) && p.fd === fd && p.name === name ? (
      <></>
    ) : fd ? (
      <Box gap={1} paddingTop={1}>
        {fd === 1 ? (
          <Text color="cyan" bold dimColor>{`1>`}</Text>
        ) : fd === 2 ? (
          <Text color="red" bold dimColor>{`2>`}</Text>
        ) : (
          <></>
        )}
        <Text dimColor>{name}</Text>
      </Box>
    ) : (
      <Box paddingTop={1}>
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

const tests = new Set<Base>()
export const Log: FC<TapReportOpts> = ({ tap, config }) => {
  if (tap.results)
    return (
      <Box>
        <Text>ended</Text>
      </Box>
    )
  // console.error('LOG RENDER')
  const [logs, updateLogs] = useState<LogEntry[]>([])
  const appendLog = (l: LogEntry) => {
    const previous = logs[logs.length - 1]
    l.previous = previous
    updateLogs(logs.concat(l))
  }

  useEffect(
    () =>
      patchConsole((_stream, text) => {
        appendLog({ text })
      }),
    [logs]
  )

  useEffect(() => {
    if (tap.results) return
    return listenCleanup(tap, 'subtestEnd', (test: Base) =>
      appendLog({ test })
    )
  }, [logs])

  useEffect(() => {
    const cleanup: (() => any)[] = []
    const doCleanup = () => {
      for (const c of cleanup) c()
      cleanup.length = 0
    }
    const handleStdio = (test: Base) => {
      tests.add(test)
      cleanup.push(
        listenCleanup(test.parser, 'extra', (c: string) => {
          appendLog({
            name: test.name,
            fd: 1,
            text: c,
          })
        })
      )
      if (test instanceof Spawn) {
        const l = (c: string) => {
          appendLog({
            name: test.name,
            fd: 2,
            text: String(c),
          })
        }
        const { proc } = test
        if (proc) cleanup.push(listenCleanup(proc.stderr, 'data', l))
        else
          test.once('process', proc =>
            cleanup.push(listenCleanup(proc.stderr, 'data', l))
          )
      }
      if (config.get('comments')) {
        const onChild = (p: Parser) => {
          cleanup.push(listenCleanup(p, 'child', onChild))
          cleanup.push(
            listenCleanup(p, 'comment', c => {
              if (proceduralComment.test(c)) return
              appendLog({
                name: p.fullname,
                fd: 0,
                text: c,
              })
            })
          )
        }
        onChild(test.parser)
      }
    }
    doCleanup()
    for (const t of tests) handleStdio(t)

    tap.on('subtestStart', handleStdio)
    return () => {
      tap.removeListener('subtestStart', handleStdio)
      doCleanup()
    }
  }, [logs, tests])

  return (
    <Static items={logs}>
      {(log, key) => {
        return isTestLog(log) ? (
          <TestLogLine {...log} key={key} />
        ) : isStdioLog(log) ? (
          <StdioLogLine {...log} key={key} />
        ) : (
          <ConsoleLogLine {...log} key={key} />
        )
      }}
    </Static>
  )
}
