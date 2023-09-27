// a bunch of lines are ignored for coverage in this file, because
// the situations they cover ought to be impossible, but are covered
// for type safety, and in case there's a bug in tapjs/core that allows
// that incorrect behavior.
import { Base, TestBase } from '@tapjs/core'
import { FailData, PassData } from '@tapjs/error-serdes'
import { expandStack } from '@tapjs/stack'
import { resultToError } from './result-to-error.js'
import { TestMap } from './test-map.js'
import { testMessageData } from './test-message-data.js'

export const testResults = (
  t: Base,
  subsMap: TestMap<Base[]>
): PassData | FailData | undefined => {
  if (!t.parent) return

  const results = t.results
  const psubs = subsMap.get(t.parent)
  /* c8 ignore start */
  if (!psubs) {
    throw new Error('ending subtest when parent has no subtests')
  }
  const n = psubs.indexOf(t)
  const tn = n === -1 ? psubs.indexOf((t as TestBase).t) : n
  if (tn === -1) {
    throw new Error('subtest not found in parent subtests list')
  }
  /* c8 ignore stop */
  const testNumber = tn + 1
  /* c8 ignore start */
  if (!results) {
    throw new Error('printing messages before results available')
  }
  /* c8 ignore stop */
  const subs = subsMap.get(t)
  const suite = !!subs?.length
  const p: PassData = {
    ...testMessageData(t),
    details: {
      duration_ms: t.time,
    },
    testNumber,
  }
  if (results.ok && !!results.todo) p.todo = true
  if (
    (results.plan.skipAll && results.plan.skipReason) ||
    (results.ok && !!results.skip)
  ) {
    p.skip = true
  }
  if (suite) p.details.type = 'suite'

  if (results.ok) return p

  if (suite) {
    const nf = subs.filter(s => !s.results?.ok).length
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
          stack: t.options.stack
            ? expandStack(t.options.stack)
            : undefined,
          /* c8 ignore stop */
        }),
      },
    }
  }

  // just report the first failure
  const fe = resultToError(
    t.lists.fail[0] /* c8 ignore start */ ||
      results.failures[0] || {
        ok: false,
        name: 'Unknown test failure',
        diag: {},
      },
    /* c8 ignore stop */
    t
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
