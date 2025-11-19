// @tapjs/stack makes stack traces a bit nicer, but we can do even better
// with some colors and highlighting.

import { CallSiteLike, parseStack } from '@tapjs/stack'
import chalk from 'chalk'
import { Box, Text } from 'ink'
import { isAbsolute } from 'path'
import React, { FC } from 'react'
import { stringify } from 'tap-yaml'
import { HangingIndent } from './hanging-indent.js'

// only show generated callsite info if it's not ours
// it's useful to know where to start throwing console.logs, but
// if it's our own code, it's just noise.
// Treat ./node_modules as "absolute" for this purpose, since deps
// aren't "local" in the same sense, even though they live in cwd.
const relativeOrMissing = (p?: string | null) =>
  !p || !(isAbsolute(p) || p.startsWith('node_modules'))
const removeRelativeGenerated = (c?: CallSiteLike | null) => {
  if (c && relativeOrMissing(c.fileName)) c.generated = undefined
}

// Only highlight *our* filenames, not those from deps or outside paths.
// We use chalk.dim() directly here, because neighboring Text nodes get
// squashed together.
const highlightFilename = (s: string, f?: string | null) => {
  if (
    !f ||
    f === 'native' ||
    f === '<anonymous>' ||
    isAbsolute(f) ||
    f.startsWith('..') ||
    !s.includes(f)
  ) {
    return <Text>{chalk.dim(s)}</Text>
  }
  const split = s.split(f)
  const last = split[split.length - 1]
  split.pop()
  return (
    <Text>
      {split.map(s => `${chalk.dim(s)}${chalk.yellowBright(f)}`).join('') +
        chalk.dim(last)}
    </Text>
  )
}

const isUseful = (c: CallSiteLike) =>
  !!c.lineNumber || !!c.columnNumber || !!c.fileName

export const Stack: FC<{ stack?: string }> = ({ stack }) => {
  if (!stack?.trim()) return <></>

  const p = parseStack(stack)
  if (!p.length) return <></>

  const st = p
    .map(c => String(c))
    .join('\n')
    .replace(/\n+$/, '')
    .split('\n')
    .map(l => {
      const c = new CallSiteLike(null, l)
      removeRelativeGenerated(c)
      removeRelativeGenerated(c.evalOrigin)
      if (!isUseful(c)) return undefined
      return c
    })
    .filter(c => !!c)
    .map(c =>
      highlightFilename(
        String(c),
        c?.evalOrigin ? c?.evalOrigin.fileName : c?.fileName,
      ),
    )
  // if nothing useful was found, just show the string
  const showRaw = !st.length && { stack }

  return (
    <Box flexDirection="column">
      {st.length ?
        st.map((line, key) => (
          <HangingIndent key={key}>{line}</HangingIndent>
        ))
      : showRaw ?
        <Text dimColor>{stringify(showRaw).trimEnd()}</Text>
      : /* c8 ignore next - impossible */ <></>}
    </Box>
  )
}
