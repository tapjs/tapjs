import { Base, Extra } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useTimedOut = (t: Base) => {
  const [timedout, setTimedout] = useState<Extra | undefined>(
    undefined
  )
  useEffect(
    () => listenCleanup(t, 'timeout', extra => setTimedout(extra)),
    [t.timedOut]
  )
  return timedout
}
