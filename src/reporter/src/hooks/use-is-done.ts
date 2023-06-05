import { Base } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
/**
 * Return true if the test is done, otherwise false
 */
export const useIsDone = (test: Base) => {
  let [done, setDone] = useState<boolean>(false)
  useEffect(
    () => listenCleanup(test, 'complete', () => setDone(true)),
    [test]
  )
  return done
}
