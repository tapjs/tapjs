import { Base, Counts, CountsJSON } from '@tapjs/core'
import { useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'

type CountsTotalJSON = CountsJSON & { total: number }
class CountsTotal extends Counts {
  complete: number
  constructor(c?: CountsTotal | CountsTotalJSON) {
    super(c)
    this.complete = c?.complete ?? 0
  }
}

const SUITES = new Map<Base, CountsTotal>()

export const useSuiteTotals = (test: Base) => {
  // multiple subtests can end in the same tick, so we need to track
  // this in a local var as well as the component render state so that
  // they don't clobber each other's totals.
  const fromCache = SUITES.get(test) || new CountsTotal()
  SUITES.set(test, fromCache)

  const [suites, updateSuites] = useState<CountsTotal>(fromCache)

  const addSuite = () => {
    const suites = SUITES.get(test) as CountsTotal
    suites.total++
    SUITES.set(test, new CountsTotal(suites))
    updateSuites(suites)
  }

  const finishSuite = (t: Base) => {
    const suites = SUITES.get(test) as CountsTotal
    const { results } = t
    // will always have results when the subtest ends
    /* c8 ignore start */
    if (!results) return
    /* c8 ignore stop */
    let { total, fail, pass, skip, complete } = suites
    complete++
    if (!results.ok) fail++
    else if (results.plan.skipAll) skip++
    else pass++

    const ns = new CountsTotal({
      total,
      fail,
      pass,
      skip,
      complete,
    })

    SUITES.set(test, ns)
    updateSuites(ns)
  }

  useCleanup(
    cleanup => {
      cleanup.push(listenCleanup(test, 'subtestAdd', addSuite))
      cleanup.push(listenCleanup(test, 'subtestEnd', finishSuite))
      cleanup.push(
        listenCleanup(test, 'complete', () => SUITES.delete(test))
      )
    },
    [test, suites]
  )
  return suites
}
