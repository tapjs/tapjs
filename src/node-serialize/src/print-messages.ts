import { Base, TAP } from '@tapjs/core'
import {
  DiagnosticData,
  FailData,
  PassData,
  TestStreamSerialize,
} from '@tapjs/error-serdes'
import { TestMap } from './test-map.js'
import { testMessageData } from './test-message-data.js'
import { testNestedLocation } from './test-nested-location.js'
import { testPointMessageData } from './test-point-message-data.js'
import { testPointResults } from './test-point-results.js'
import { testResults } from './test-results.js'

const isPass = (pf?: PassData | FailData): pf is PassData =>
  !!pf?.details && !pf.details.error
const isFail = (pf?: PassData | FailData): pf is FailData =>
  !!pf?.details.error

export const printMessagesFn = (
  tap: TAP,
  stream: TestStreamSerialize,
  subsMap: TestMap<Base[]>,
  diagsMap: TestMap<DiagnosticData[]>,
) => {
  const printMessages = (t: Base, testNumber: number = 0) => {
    // enqueue all my subs, then dequeue each one and print them
    const subs = subsMap.get(t)
    if (t.parent) {
      stream.dequeue(testMessageData(t))
      stream.start(testMessageData(t))
    }
    let count = 0

    // print all the test points emitted directly on this test
    const results = t.results
    /* c8 ignore start */
    if (!results)
      throw new Error('printing results before test completion')
    /* c8 ignore stop */
    for (const type of ['passes', 'skips', 'todos', 'failures'] as const) {
      for (const res of results[type] ?? []) {
        if (res.closingTestPoint) continue
        stream.enqueue(testPointMessageData(res, t))
        stream.dequeue(testPointMessageData(res, t))
        stream.start(testPointMessageData(res, t))
        const passFail = testPointResults(res, t, ++count)
        if (isPass(passFail)) {
          stream.pass(passFail)
        } else {
          stream.fail(passFail)
        }
      }
    }

    // recurse to all subtests
    if (subs) {
      // determine whether a suite or assertion based on subs.length
      for (const t of subs) {
        // console.error(t.parser)
        stream.enqueue(testMessageData(t))
      }
      for (const t of subs) {
        printMessages(t, ++count)
      }
    }

    if (count && t !== tap) {
      stream.plan({ ...testNestedLocation(t), count })
    }

    const passFail = testResults(t, count, testNumber)
    if (isPass(passFail)) {
      stream.pass(passFail)
    } else if (isFail(passFail)) {
      stream.fail(passFail)
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
