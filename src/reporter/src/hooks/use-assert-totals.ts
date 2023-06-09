import { Base, Counts } from '@tapjs/core'
import { useState } from 'react'
import { Result } from 'tap-parser'
import { listenCleanup } from '../listen-cleanup.js'
import { useCleanup } from './use-cleanup.js'
import { useSubtests } from './use-subtests.js'

export const useAssertTotals = (test: Base) => {
  const [asserts, updateAsserts] = useState<Counts>(new Counts())
  // multiple asserts can be emitted in the same tick, so we need to track
  // this in a local var as well as the component render state so that
  // they don't clobber each others' totals.
  let asserts_ = asserts
  // once they end, the test can't make any more result updates
  const tests = useSubtests(test, 'active')

  useCleanup(
    cleanup => {
      for (const test of tests) {
        cleanup.push(
          listenCleanup(test.parser, 'result', (r: Result) => {
            let { total, fail, pass, skip, todo } = asserts_
            total += 1
            if (r.todo) todo++
            else if (r.skip) skip++
            else if (r.ok === false) fail++
            else pass++
            asserts_ = new Counts({
              total,
              fail,
              pass,
              skip,
              todo,
            })
            updateAsserts(asserts_)
          })
        )
      }
    },
    [tests]
  )
  return asserts
}
