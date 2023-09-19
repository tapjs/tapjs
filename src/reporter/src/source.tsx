// Syntax-highlighted source code tag

import { CallSiteLike, parseStack } from '@tapjs/stack'
import { highlightFileSync } from 'prismjs-terminal'

import chalk from 'chalk'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import stringLength from 'string-length'

export interface SourceOpts {
  source?: string
  stack?: string
  location?: string
  at?:
    | CallSiteLike
    | {
        lineNumber?: number
        fileName?: string
        columnNumber?: number
      }
  errorOrigin?: {
    source?: string
    at?:
      | CallSiteLike
      | {
          lineNumber?: number
          fileName?: string
          columnNumber?: number
        }
  }
  isErrorOrigin?: boolean
}

/**
 * Pass in a test result.diag that has a source and callsite,
 * and it'll return a prettied up source line with the callsite
 * highlighted
 */
export const Source: FC<SourceOpts> = ({
  source,
  at,
  errorOrigin,
  stack,
  location,
  isErrorOrigin = false,
}) => {
  if (errorOrigin && typeof errorOrigin === 'object') {
    return (
      <>
        <Source source={source} at={at} />
        <Source {...errorOrigin} isErrorOrigin={true} />
      </>
    )
  }
  if (stack && !at) {
    if (location) {
      return (
        <>
          <Source stack={location} />
          <Source stack={stack} isErrorOrigin={true} />
        </>
      )
    }
    const parsed = parseStack(stack)
    for (const p of parsed) {
      if (p.fileName) {
        at = p
        break
      }
    }
  }
  if (at && at.lineNumber && at.columnNumber && at.fileName) {
    try {
      const lines: string[] = highlightFileSync(at.fileName, {
        lineNumbers: true,
        theme: 'moria',
        padding: 0,
        /* c8 ignore start */
        maxWidth:
          process.stdout.columns && process.stdout.columns - 5,
        /* c8 ignore stop */
      }).split('\n')
      const lastLine = lines[lines.length - 1]
      if (lastLine && stringLength(lastLine) === 0) lines.pop()
      const ctx = 4
      const startLine = Math.max(at.lineNumber - ctx, 0)
      const endLine = Math.min(at.lineNumber + ctx, lines.length)
      const numLen = at.lineNumber.toString().length
      const maxNumLen = lines.length.toString().length
      const excess = maxNumLen - numLen
      const atLine = lines[at.lineNumber - 1] as string
      const before = lines.slice(startLine, at.lineNumber - 1)
      const after = lines.slice(at.lineNumber, endLine)
      const len = Math.min(...before.map(l => stringLength(l)))
      const msg =
        (isErrorOrigin ? 'error origin: ' : '') + at.fileName
      const title = chalk.bgAnsi256(234).dim(msg.padEnd(len))
      const caret =
        at.columnNumber &&
        at.columnNumber < stringLength(atLine) &&
        at.columnNumber > 0
          ? chalk.ansi256(252).bgAnsi256(234)(
              chalk.red(
                ' '.repeat(excess) +
                  '━'.repeat(numLen + at.columnNumber) +
                  chalk.bold('┛') +
                  ' '.repeat(len - (numLen + at.columnNumber))
              )
            )
          : ''
      const context = [title]
      if (!caret) {
        context.push(
          ...before.map(b => ' ' + b),
          chalk.bold.red('▶') + atLine,
          ...after.map(l => ' ' + l)
        )
      } else {
        context.push(...before, atLine, caret, ...after)
      }
      return (
        <Box flexDirection="column">
          {context.map((l, key) => (
            <Text key={key}>{l}</Text>
          ))}
        </Box>
      )
    } catch {}
  }
  return source ? (
    <Box>
      <Text>{source}</Text>
    </Box>
  ) : (
    <></>
  )
}
