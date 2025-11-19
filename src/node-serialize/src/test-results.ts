// a bunch of lines are ignored for coverage in this file, because
// the situations they cover ought to be impossible, but are covered
// for type safety, and in case there's a bug in tapjs/core that allows
// that incorrect behavior.
import { Base } from '@tapjs/core'
import { FailData, PassData } from '@tapjs/error-serdes'
import { expandStack } from '@tapjs/stack'
import { resultToError } from './result-to-error.js'
import { testMessageData } from './test-message-data.js'

export const testResults = (
  t: Base,
  count: number,
  testNumber: number,
): PassData | FailData | undefined => {
  if (!t.parent) return

  const results = t.results
  /* c8 ignore start */
  if (!results) {
    throw new Error('printing messages before results available')
  }
  /* c8 ignore stop */
  const suite = count > 0
  const p: PassData = {
    ...testMessageData(t),
    details: {
      duration_ms: t.time,
    },
    testNumber,
  }

  const skip =
    results.plan.skipAll ? results.plan.skipReason || true : t.options.skip
  if (skip) p.skip = skip
  const todo = t.options.todo
  if (todo) p.todo = todo
  if (suite) p.details.type = 'suite'

  if (results.ok) return p

  if (suite) {
    const nf = results.failures.length
    const m = `${nf} subtest${nf === 1 ? '' : 's'} failed`
    return {
      ...p,
      details: {
        ...p.details,
        error: Object.assign(new Error(m), {
          code: 'ERR_TEST_FAILURE',
          failureType: 'subtestsFailed',
          cause: m,
          /* c8 ignore start */
          failures: results.failures.map(f => f.name || f.tapError),
          stack:
            t.options.stack ? expandStack(t.options.stack) : undefined,
          /* c8 ignore stop */
        }),
      },
    }
  }

  // a failure here indicates a strange test that had no failing test points,
  // but then was marked as not ok.
  const fe = resultToError(
    t.lists.fail[0] ??
      results.failures[0] ?? {
        ok: false,
        name: 'Unknown test failure',
        diag: {},
      },
    t,
  )

  return {
    ...p,
    details: {
      ...p.details,
      error: Object.assign(new Error(fe.message), {
        cause: fe,
        code: 'ERR_TEST_FAILURE',
        failureType: 'testCodeFailure',
        /* c8 ignore start */
        failures: results.failures.map(f => f.name || f.tapError),
        /* c8 ignore stop */
        stack: expandStack(t.options.stack).trimEnd(),
      }),
    },
  }
}
