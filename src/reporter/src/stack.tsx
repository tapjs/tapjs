// @tapjs/stack makes stack traces a bit nicer, but we can do even better
// with some colors and highlighting.

import { CallSiteLike, parseStack } from '@tapjs/stack'
import chalk from 'chalk'
import { Box, Text } from 'ink'
import { isAbsolute } from 'path'
import React, { FC } from 'react'
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
    !s.includes(f)
  ) {
    return <Text>{chalk.dim(s)}</Text>
  }
  const split = s.split(f)
  const last = split[split.length - 1]
  split.pop()
  return (
    <Text>
      {split
        .map(s => `${chalk.dim(s)}${chalk.yellowBright(f)}`)
        .join('') + chalk.dim(last)}
    </Text>
  )
}

export const Stack: FC<{ stack?: string }> = ({ stack }) => {
  if (!stack?.trim()) return <></>

  const st = parseStack(stack)
    .map(c => String(c))
    .join('\n')
    .replace(/\n+$/, '')
    .split('\n')
    .map(l => {
      const c = new CallSiteLike(null, l)
      removeRelativeGenerated(c)
      removeRelativeGenerated(c.evalOrigin)
      return highlightFilename(
        c.toString(),
        c.evalOrigin ? c.evalOrigin.fileName : c.fileName
      )
    })

  return (
    <Box flexDirection="column">
      {st.map((line, key) => (
        <HangingIndent key={key}>{line}</HangingIndent>
      ))}
    </Box>
  )
}
