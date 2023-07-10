import { Base } from '@tapjs/core'
import { useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'

export const useSubtests = (
  test: Base,
  which: 'active' | 'finished' | 'all' = 'all'
) => {
  const [tests, updateTests] = useState<Base[]>([])
  const addActive = (test: Base) =>
    updateTests([
      ...new Set([...tests, test].filter(t => !t.results)),
    ])
  const removeActive = (test: Base) =>
    updateTests(tests.filter(t => t !== test && !t.results))

  useCleanup(
    cleanup => {
      if (which === 'active') {
        cleanup.push(listenCleanup(test, 'subtestAdd', addActive))
        cleanup.push(listenCleanup(test, 'subtestEnd', removeActive))
      } else {
        cleanup.push(
          listenCleanup(
            test,
            which === 'all' ? 'subtestAdd' : 'subtestEnd',
            (t: Base) => updateTests(tests.concat(t))
          )
        )
      }
    },
    [test, tests, which]
  )
  return tests
}
