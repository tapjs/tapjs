import { Base } from '@tapjs/core'
import { useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'

export const useSubtests = (
  test: Base,
  which: 'active' | 'finished' | 'all' = 'all'
) => {
  const [tests, updateTests] = useState<Base[]>([])
  const add = (test: Base) =>
    updateTests([...new Set([...tests, test])])
  const remove = (test: Base) =>
    updateTests(tests.filter(t => t !== test))

  useCleanup(
    cleanup => {
      if (which === 'active') {
        cleanup.push(listenCleanup(test, 'subtestAdd', add))
        cleanup.push(listenCleanup(test, 'subtestEnd', remove))
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
