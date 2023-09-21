import { Base } from '@tapjs/core'
import { NestedLocation } from '@tapjs/error-serdes'
import { locFromCallSite } from './loc-from-callsite.js'

export const testNestedLocation = (t: Base): NestedLocation => ({
  ...locFromCallSite(t.options.at),
  nesting: t.nestingLevel,
})
