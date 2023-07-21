import { Base } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

// We can sometimes get multiple comments all synchronously in the
// same tick, which would mean multiple state updates from the same
// starting state, and what we want is a consistent append-only list,
// so stash it outside of the react component.

const log = new Map<Base, string[]>()

export const useComments = (test: Base) => {
  const [comments, updateComments] = useState<string[]>([])
  const comments_ = log.get(test) || []
  if (!log.has(test)) log.set(test, comments_)

  useEffect(
    () =>
      listenCleanup(test.parser, 'comment', (c: string) => {
        c = c.trim()
        comments_.push(c)
        updateComments([...comments_])
      }),
    [comments, test]
  )

  return comments
}
