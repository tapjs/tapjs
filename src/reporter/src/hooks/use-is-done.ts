import { Base } from '@tapjs/core'
import { useLayoutEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
/**
 * Return true if the test is done, otherwise false
 */
export const useIsDone = (test: Base) => {
  let [done, setDone] = useState<boolean>(false)
  useLayoutEffect(
    () => listenCleanup(test, 'complete', () => setDone(true)),
    [test]
  )
  return done
}
