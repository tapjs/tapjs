import { Base } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useTestTime = (
  test: Base,
  interval: number = 247
): number => {
  const [time, updateTime] = useState<number>(test.time)
  const [start] = useState<number>(Date.now())
  useEffect(() => {
    const i = test.time
      ? null
      : setInterval(() => updateTime(Date.now() - start), interval)
    const maybeCT = () => (i === null ? null : clearTimeout(i))
    const cleanup = listenCleanup(test, 'complete', maybeCT)
    return () => {
      maybeCT()
      cleanup()
    }
  }, [test.time])
  return time
}
