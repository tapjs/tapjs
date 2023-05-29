// The <Static> section that appends results as the tests run
// Each log entry can be one of:
// - A finished test
// - A failed Result object (on the root test)
// - a stderr or stdout message

import { Base, Spawn } from '@tapjs/core'
import { Box, Static, Text } from 'ink'
import React, { FC, useEffect, useState } from 'react'
import { Parser } from 'tap-parser'
import { TapReportOpts } from '../../index.js'
import { listenCleanup } from '../../listen-cleanup.js'
import { TestSummary } from './test-summary.js'

const proceduralComment =
  /^# (Subtest(\n?$|: )|(todo|fail|pass|skip): [0-9]+\n?$)/

export interface StdioLog {
  name: string
  fd: 0 | 1 | 2
  text: string
}

export const StdioLogLine: FC<StdioLog> = ({ name, fd, text }) => {
  const prefix = fd ? (
    <>
      <Text dimColor>{name}</Text>
      <Text color={fd === 1 ? 'blue' : 'yellow'}>{fd + '>'}</Text>
    </>
  ) : (
    <Text dimColor>{name}</Text>
  )
  const t = String(text).trim().split('\n')
  return (
    <>
      {t.map((l, key) => (
        <Box key={key} gap={1}>
          {prefix}
          <Text>{l}</Text>
        </Box>
      ))}
    </>
  )
}

export type LogEntry = StdioLog | Base

const tests = new Set<Base>()
export const Log: FC<TapReportOpts> = ({ tap, config }) => {
  const [logs, updateLogs] = useState<LogEntry[]>([])
  const appendLog = (l: LogEntry) => updateLogs(logs.concat(l))

  useEffect(() => {
    const u = (test: Base) => appendLog(test)
    tap.on('subtestEnd', u)
    return () => {
      tap.removeListener('subtestEnd', u)
    }
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
  }, [logs])

  return (
    <Static items={logs}>
      {(log, key) =>
        log instanceof Base ? (
          <TestSummary test={log} key={key} />
        ) : (
          <StdioLogLine {...log} key={key} />
        )
      }
    </Static>
  )
}
