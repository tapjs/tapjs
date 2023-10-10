import { Base } from '@tapjs/core'
import { NamedNestedLocation } from '@tapjs/error-serdes'
import { Result, TapError } from 'tap-parser'
import { locFromCallSite } from './loc-from-callsite.js'

export const testPointMessageData = (
  res: Result | TapError,
  t: Base
): NamedNestedLocation => ({
  name: res.name,
  nesting: t.nestingLevel + 1,
  ...(res.diag?.at
    ? locFromCallSite(res.diag.at)
    : locFromCallSite(t.options.at)),
})
