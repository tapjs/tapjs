// @tapjs/stack makes stack traces a bit nicer, but we can do even better
// with some colors and highlighting.

import { CallSiteLike } from '@tapjs/stack'
import { Box } from 'ink'
import { isAbsolute } from 'path'
import React, { FC } from 'react'
import { HangingIndent } from './hanging-indent.js'

// only show generated callsite info if it's not ours
// it's useful to know where to start throwing console.logs, but
// if it's our own code, it's just noise.
const relativeOrMissing = (p?: string | null) => !p || !isAbsolute(p)
const removeRelativeGenerated = (c?: CallSiteLike | null) => {
  if (c && relativeOrMissing(c.fileName)) c.generated = undefined
}

export const Stack: FC<{ stack?: string }> = ({ stack }) => {
  if (!stack?.trim()) return <></>

  const st = stack
    .replace(/\n+$/, '')
    .split('\n')
    .map(l => {
      const c = new CallSiteLike(null, l)
      removeRelativeGenerated(c)
      removeRelativeGenerated(c.evalOrigin)
      return c.toString()
    })

  return (
    <Box flexDirection="column">
      {st.map((line, key) => (
        <HangingIndent key={key} dimColor>
          {line}
        </HangingIndent>
      ))}
    </Box>
  )
}
