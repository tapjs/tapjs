import { Format, FormatOptions } from './format'
import { Has } from './has'
import { HasStrict } from './has-strict'
import { Match } from './match'
import { MatchOnly } from './match-only'
import { MatchStrict } from './match-strict'
import { Same, SameOptions } from './same'
import { Strict } from './strict'

export interface Result {
  diff: string
  match: boolean
}
const simple = <T extends Same>(o: T): Result => ({
  diff: o.print(),
  match: o.match,
})

type Class<T> = { new (obj: any, options: SameOptions): T }
const fn =
  <T extends Same>(Cls: Class<T>) =>
  (obj: any, pattern: any, options: FormatOptions = {}) =>
    simple<T>(
      new Cls(obj, {
        ...options,
        expect: pattern,
        parent: undefined,
      })
    )

export const format = (
  obj: any,
  options: FormatOptions = {}
): string => new Format(obj, options).print()

export const same = fn(Same)
export const strict = fn(Strict)
export const has = fn(Has)
export const hasStrict = fn(HasStrict)
export const match = fn(Match)
export const matchOnly = fn(MatchOnly)
export const matchStrict = fn(MatchStrict)
export { Format } from './format'
export type { FormatOptions } from './format'
export { Has } from './has'
export { HasStrict } from './has-strict'
export { Match } from './match'
export { MatchOnly } from './match-only'
export { MatchStrict } from './match-strict'
export { Same } from './same'
export type { SameOptions } from './same'
export { Strict } from './strict'
