import { LoadedConfig } from '@tapjs/config'
import { Base, Spawn, TestBase } from '@tapjs/core'
import patchConsole from 'patch-console'
import { useState } from 'react'
import { Parser } from 'tap-parser'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'
import { useSubtests } from './use-subtests.js'

const isBase = (o: any): o is Base =>
  !!o &&
  typeof o === 'object' &&
  // only relevant when mocking the import in our own tests
  /* c8 ignore start */
  (o instanceof Base ||
    (typeof o.name === 'string' &&
      !!o.parser &&
      typeof o.parser === 'object'))
/* c8 ignore stop */

const proceduralComment = /^# Subtest(?:\n?$|: )/

export type LogEntry = StdioLog | TestLog | ConsoleLog

export interface TestLog {
  test: Base
  previous?: LogEntry
}

export const isTestLog = (p?: LogEntry): p is TestLog =>
  !!p && isBase((p as TestLog).test)

export interface ConsoleLog {
  text: string
  previous?: LogEntry
}

export const isConsoleLog = (p?: LogEntry): p is ConsoleLog =>
  !!p &&
  typeof (p as ConsoleLog).text === 'string' &&
  !isBase((p as TestLog).test)

export interface StdioLog extends ConsoleLog {
  name: string
  fd: 0 | 1 | 2
}

export const isStdioLog = (p?: LogEntry): p is StdioLog =>
  isConsoleLog(p) &&
  typeof (p as StdioLog).name === 'string' &&
  typeof (p as StdioLog).fd === 'number'

// prevent same-tick state updates from clobbering each other
// by keeping a persistent copy of the logs for any given test.
const LOGS = new Map<TestBase, LogEntry[]>()

export const useLog = (
  test: TestBase,
  config: LoadedConfig,
  includeTests: boolean = false,
) => {
  const fromCache = LOGS.get(test) || []
  LOGS.set(test, fromCache)

  const [logs, updateLogs] = useState<LogEntry[]>(fromCache)
  const appendLog = (l: LogEntry) => {
    const logs = LOGS.get(test) as LogEntry[]
    const previous = logs[logs.length - 1]
    l.previous = previous
    const newLogs = logs.concat(l)
    LOGS.set(test, newLogs)
    updateLogs(newLogs)
  }
  const tests = useSubtests(test, 'all')

  useCleanup(
    cleanup => {
      cleanup.push(
        patchConsole((_stream, text) => {
          appendLog({ text })
        }),
      )

      for (const test of tests) {
        // stdout that isn't tap is "extra"
        cleanup.push(
          listenCleanup(test.parser, 'extra', (c: string) => {
            appendLog({
              name: test.name,
              fd: 1,
              text: c,
            })
          }),
        )

        // the terse report does not show log lines for tests
        // completing, just the other stuff.
        if (includeTests) {
          cleanup.push(
            listenCleanup(test, 'complete', () =>
              appendLog({ test }),
            ),
          )
        }

        const { proc } = test as Spawn
        if (proc) {
          cleanup.push(
            listenCleanup(proc.stderr, 'data', c => {
              appendLog({
                name: test.name,
                fd: 2,
                text: String(c),
              })
            }),
          )
        }

        // treat comments a little like a stdio log
        if (config.get('comments')) {
          const onChild = (p: Parser) => {
            cleanup.push(listenCleanup(p, 'child', onChild))
            cleanup.push(
              listenCleanup(p, 'comment', c => {
                // just a precaution, we don't actually listen in time
                // to get these, because we're not hooking onto the parser
                // until it's already been emitted.
                /* c8 ignore start */
                if (proceduralComment.test(c)) return
                /* c8 ignore stop */
                appendLog({
                  name: p.fullname,
                  fd: 0,
                  text: c,
                })
              }),
            )
          }
          onChild(test.parser)
        }
      }
    },
    [logs, tests],
  )

  return logs
}
