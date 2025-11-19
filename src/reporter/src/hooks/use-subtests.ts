import { Base, TestBase } from '@tapjs/core'
import { useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'

const ALLSUBS = new Map<Base, Base[]>()
const FINSUBS = new Map<Base, Base[]>()

export const useSubtests = (
  test: TestBase,
  which: 'active' | 'finished' | 'all' = 'all',
) => {
  const [tests, updateTests] = useState<Base[]>([])
  const cache = which === 'finished' ? FINSUBS : ALLSUBS
  const addSub = (t: Base) => {
    const tests = (cache.get(test) || []).concat(t)
    cache.set(test, tests)
    updateTests(tests)
  }

  const updateActive = () => updateTests([...test.activeSubtests])

  useCleanup(
    cleanup => {
      if (which === 'active') {
        cleanup.push(listenCleanup(test, 'subtestStart', updateActive))
        cleanup.push(listenCleanup(test, 'subtestEnd', updateActive))
      } else {
        cleanup.push(
          listenCleanup(test, 'complete', () => cache.delete(test)),
        )
        cleanup.push(
          listenCleanup(
            test,
            which === 'all' ? 'subtestStart' : 'subtestEnd',
            addSub,
          ),
        )
      }
    },
    [test, tests, which],
  )
  return tests
}
