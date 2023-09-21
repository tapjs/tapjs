import { Base, TAP } from '@tapjs/core'
import {
  FailData,
  PassData,
  TestStreamSerialize,
} from '@tapjs/error-serdes'
import { TestMap } from './test-map.js'
import { testMessageData } from './test-message-data.js'
import { testNestedLocation } from './test-nested-location.js'
import { testResults } from './test-results.js'

const isPass = (pf?: PassData | FailData): pf is PassData =>
  !!pf?.details && !pf.details.error
const isFail = (pf?: PassData | FailData): pf is FailData =>
  !!pf?.details.error

export const printMessagesFn = (
  tap: TAP,
  stream: TestStreamSerialize,
  subsMap: TestMap<Base[]>,
  diagsMap: TestMap<DiagnosticData[]>
) => {
  const printMessages = (t: Base) => {
    // enqueue all my subs, then dequeue each one and print them
    const subs = subsMap.get(t)
    if (t.parent) {
      stream.dequeue(testMessageData(t))
      stream.start(testMessageData(t))
    }
    if (subs) {
      // determine whether a suite or assertion based on subs.length
      for (const t of subs) {
        stream.enqueue(testMessageData(t))
      }
      for (const t of subs) {
        printMessages(t)
      }
      if (subs.length && t !== tap) {
        stream.plan({ ...testNestedLocation(t), count: subs.length })
      }
    }

    const passFail = testResults(t, subsMap)
    if (isPass(passFail)) {
      stream.pass(passFail as PassData)
    } else if (isFail(passFail)) {
      stream.fail(passFail as FailData)
    }

    /* c8 ignore start */
    const diags = diagsMap.get(t) || []
    /* c8 ignore stop */
    for (const d of diags) {
      stream.diagnostic(d)
    }
  }
  return printMessages
}
