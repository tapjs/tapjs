import { Base } from '@tapjs/core'
import { FailData, PassData } from '@tapjs/error-serdes'
import { expandStack } from '@tapjs/stack'
import { Result, TapError } from 'tap-parser'
import { locFromCallSite } from './loc-from-callsite.js'
import { resultToError } from './result-to-error.js'

export const testPointResults = (
  res: Result | TapError,
  t: Base,
  testNumber: number,
): PassData | FailData => {
  const p: PassData = {
    name: res.name,
    testNumber,
    ...(res.diag?.at ?
      locFromCallSite(res.diag.at)
    : locFromCallSite(t.options.at)),
    nesting: t.nestingLevel + 1,
    details: {
      duration_ms: res.time ?? 0,
    },
  }
  if (res.skip) p.skip = res.skip
  if (res.todo) p.todo = res.todo
  if (res.ok || res.skip || res.todo) return p

  const fe = resultToError(res)
  // console.error(res, fe)
  return {
    ...p,
    details: {
      ...p.details,
      error: Object.assign(new Error(fe.message), {
        cause: fe,
        code: 'ERR_TEST_FAILURE',
        failureType: 'testCodeFailure',
        stack: expandStack(res.diag?.stack ?? t.options.stack).trimEnd(),
      }),
    },
  }
}
