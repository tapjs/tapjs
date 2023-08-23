/**
 * Export all implementation classes, and convenience methods for each
 * @module
 */
import { Format, FormatOptions } from './format.js'
import { HasStrict } from './has-strict.js'
import { Has } from './has.js'
import { MatchOnly } from './match-only.js'
import { MatchStrict } from './match-strict.js'
import { MatchOnlyStrict } from './match-only-strict.js'
import { Match } from './match.js'
import { Same, SameOptions } from './same.js'
import { Strict } from './strict.js'

/**
 * The return value from all comparison functions.
 */
export interface Result {
  /**
   * Diff of formatted test object and expected pattern. Only shows
   * properties which differ, not the entire object.
   */
  diff: string
  /**
   * whether or not the objects are a satisfying match
   */
  match: boolean
}
const simple = <T extends Same>(o: T): Result => ({
  diff: o.print(),
  match: o.match,
})

type Class<T> = { new (obj: any, options: SameOptions): T }

/**
 * Options that can be used to set how diffs are formatted.
 */
export type CompareOptions = FormatOptions &
  Pick<SameOptions, 'diffContext'>
const fn =
  <T extends Same>(Cls: Class<T>) =>
  (obj: any, pattern: any, options: CompareOptions = {}) =>
    simple<T>(
      new Cls(obj, {
        ...options,
        expect: pattern,
        parent: undefined,
      })
    )

/** format a value and return the formatted string */
export const format = (
  obj: any,
  options: FormatOptions = {}
): string => new Format(obj, options).print()
/** convenience method for {@link tcompare!same.Same} */
export const same = fn(Same)
/** convenience method for {@link Strict} */
export const strict = fn(Strict)
/** convenience method for {@link Has} */
export const has = fn(Has)
/** convenience method for {@link HasStrict} */
export const hasStrict = fn(HasStrict)
/** convenience method for {@link Match} */
export const match = fn(Match)
/** convenience method for {@link MatchOnly} */
export const matchOnly = fn(MatchOnly)
/** convenience method for {@link MatchStrict} */
export const matchStrict = fn(MatchStrict)
/** convenience method for {@link MatchOnlyStrict} */
export const matchOnlyStrict = fn(MatchOnlyStrict)

export { Format } from './format.js'
export type { FormatOptions } from './format.js'
export { HasStrict } from './has-strict.js'
export { Has } from './has.js'
export { MatchOnly } from './match-only.js'
export { MatchStrict } from './match-strict.js'
export { MatchOnlyStrict } from './match-only-strict.js'
export { Match } from './match.js'
export { Same } from './same.js'
export type { SameOptions } from './same.js'
export { Strict } from './strict.js'
export { styles } from './styles.js'
export type { Style } from './styles.js'
