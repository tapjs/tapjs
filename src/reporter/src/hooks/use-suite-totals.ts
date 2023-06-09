import { Base, Counts } from '@tapjs/core'
import { useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'

type CountComplete = Counts & { complete?: number }

export const useSuiteTotals = (test: Base) => {
  const [suites, updateSuites] = useState<CountComplete>(
    new Counts({ total: 0, pass: 0, complete: 0 })
  )

  // multiple subtests can end in the same tick, so we need to track
  // this in a local var as well as the component render state so that
  // they don't clobber each others' totals.
  let suites_ = suites

  useCleanup(
    cleanup => {
      cleanup.push(
        listenCleanup(test, 'subtestAdd', () => {
          const total = suites_.total + 1
          suites_ = new Counts({ ...suites, total })
          updateSuites(suites_)
        })
      )
      cleanup.push(
        listenCleanup(test, 'subtestEnd', (t: Base) => {
          const { results } = t
          /* c8 ignore start */
          if (!results) return
          /* c8 ignore stop */
          let {
            total,
            fail,
            pass,
            skip,
            todo,
            complete = 0,
          } = suites_
          complete++
          if (!results.ok) fail++
          else if (results.plan.skipAll) skip++
          else pass++
          suites_ = new Counts({
            total,
            fail,
            pass,
            skip,
            complete,
            todo,
          })
          updateSuites(suites_)
        })
      )
    },
    [test, suites, updateSuites]
  )
  return suites
}
