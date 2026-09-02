import { Base, MILLISECONDS } from '@tapjs/core'
import { useLayoutEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useTestTime = (
  test: Base,
  interval: MILLISECONDS = 247,
): number => {
  const [time, updateTime] = useState<number>(test.time)
  const [start] = useState<number>(Date.now())
  useLayoutEffect(() => {
    const i =
      test.time ? null : (
        setInterval(() => updateTime(Date.now() - start), interval)
      )
    const onComplete = () => {
      if (i !== null) clearTimeout(i)
      if (test.time) updateTime(test.time)
    }
    const cleanup = listenCleanup(test, 'complete', onComplete)
    return () => {
      if (i !== null) clearTimeout(i)
      cleanup()
    }
  }, [test.time])
  return time
}
