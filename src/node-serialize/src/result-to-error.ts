// turn a tap-parser Result object into an Error
// Put some of the diagnostic info into the error message,
// because that is the string the node --test reporter shows.

import { Base } from '@tapjs/core'
import {
  CallSiteLike,
  CallSiteLikeJSON,
  expandStack,
} from '@tapjs/stack'
import { Result, TapError } from 'tap-parser'
import { locFromCallSite } from './loc-from-callsite.js'
import { prettyDiff } from './pretty-diff.js'

export const resultToError = (
  result:
    | Result
    | TapError
    | {
        ok?: boolean
        tapError?: string
        name?: string
        diag?: Result['diag']
      },
  test?: Base,
): Error => {
  const {
    stack: diagStack,
    diff: rawDiff,
    source,
    passes: _,
    ...diag
  } = result.diag || {}
  const at: CallSiteLike | CallSiteLikeJSON =
    diag.at ?? test?.options.at
  const lfa = !!at ? locFromCallSite(at) : undefined
  const stack =
    diagStack ||
    (lfa?.file ? `${lfa.file}:${lfa.line}:${lfa.column}` : undefined)
  delete diag.at

  const diff = prettyDiff(rawDiff)
  if (diff) {
    delete diag.actual
    delete diag.expected
    delete diag.found
    delete diag.wanted
  } else if (result.diag) {
    if ('found' in diag) {
      diag.actual = diag.found
    }
    if ('wanted' in diag) {
      diag.expected = diag.wanted
    }
    delete diag.found
    delete diag.wanted
  }

  const name =
    (result.name || result.tapError || 'unnamed test') +
    (diff ? '\n' + diff : '') +
    (source ? '\n| ' + source.trimEnd().split('\n').join('\n| ') : '')

  return Object.assign(new Error(name), {
    ...diag,
    stack: `Error: ${name}\n` + expandStack(stack).trimEnd(),
  })
}
