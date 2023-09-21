import { at } from '@tapjs/stack'
import { locFromCallSite } from './loc-from-callsite.js'
export const locFromAt = (fn: Function | ((...a: any[]) => any)) =>
  locFromCallSite(at(fn))
