import { Base, Spawn } from '@tapjs/core'
import { LoadedConfig } from '@tapjs/config'
import patchConsole from 'patch-console'
import { useState } from 'react'
import { Parser } from 'tap-parser'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'
import { useSubtests } from './use-subtests.js'

const proceduralComment = /^# Subtest(?:\n?$|: )/

export type LogEntry = StdioLog | TestLog | ConsoleLog

export interface TestLog {
  test: Base
  previous?: LogEntry
}

export const isTestLog = (p?: LogEntry): p is TestLog =>
  !!p && (p as TestLog).test instanceof Base

export interface ConsoleLog {
  text: string
  previous?: LogEntry
}

export const isConsoleLog = (p?: LogEntry): p is ConsoleLog =>
  !!p &&
  typeof (p as ConsoleLog).text === 'string' &&
  !((p as TestLog).test instanceof Base)

export interface StdioLog extends ConsoleLog {
  name: string
  fd: 0 | 1 | 2
}

export const isStdioLog = (p?: LogEntry): p is StdioLog =>
  isConsoleLog(p) &&
  typeof (p as StdioLog).name === 'string' &&
  typeof (p as StdioLog).fd === 'number'

export const useLog = (test: Base, config: LoadedConfig) => {
  const [logs, updateLogs] = useState<LogEntry[]>([])
  const appendLog = (l: LogEntry) => {
    const previous = logs[logs.length - 1]
    l.previous = previous
    updateLogs(logs.concat(l))
  }

  useCleanup(
    cleanup => {
      cleanup.push(
        patchConsole((_stream, text) => {
          appendLog({ text })
        })
      )
      cleanup.push(
        listenCleanup(test, 'subtestEnd', (test: Base) =>
          appendLog({ test })
        )
      )
    },
    [logs]
  )
  const tests = useSubtests(test, 'all')
  useCleanup(
    (cleanup, doCleanup) => {
      const handleStdio = (test: Base) => {
        // stdout that isn't tap is "extra"
        cleanup.push(
          listenCleanup(test.parser, 'extra', (c: string) => {
            appendLog({
              name: test.name,
              fd: 1,
              text: c,
            })
          })
        )
        // only spanwned procs will have stderr
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
        // treat comments a little like a stdio log
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
      cleanup.push(listenCleanup(test, 'subtestStart', handleStdio))
    },
    [logs, tests]
  )

  return logs
}
