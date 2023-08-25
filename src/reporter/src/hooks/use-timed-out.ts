import { Base, Extra } from '@tapjs/core'
import { useLayoutEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useTimedOut = (t: Base) => {
  const [timedout, setTimedout] = useState<Extra | undefined>(
    undefined
  )
  useLayoutEffect(
    () => listenCleanup(t, 'timeout', extra => setTimedout(extra)),
    [t.timedOut]
  )
  return timedout
}
