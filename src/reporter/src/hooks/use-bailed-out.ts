import { Base } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useBailedOut = (t: Base) => {
  const [bailedOut, setBailedOut] = useState<string | boolean>(t.bailedOut)
  useEffect(
    () =>
      listenCleanup(t, 'bailout', (reason?: string) =>
        setBailedOut(reason || true)
      ),
    [t.bailedOut]
  )
  return bailedOut
}
