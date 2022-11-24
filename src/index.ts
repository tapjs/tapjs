import { Format, FormatOptions } from './format.js'
import { Has } from './has.js'
import { HasStrict } from './has-strict.js'
import { Match } from './match.js'
import { MatchOnly } from './match-only.js'
import { MatchStrict } from './match-strict.js'
import { Same, SameOptions } from './same.js'
import { Strict } from './strict.js'

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
export { Format } from './format.js'
export type { FormatOptions } from './format.js'
export { Has } from './has.js'
export { HasStrict } from './has-strict.js'
export { Match } from './match.js'
export { MatchOnly } from './match-only.js'
export { MatchStrict } from './match-strict.js'
export { Same } from './same.js'
export type { SameOptions } from './same.js'
export { Strict } from './strict.js'
export { styles } from './styles.js'
export type { Style } from './styles.js'
