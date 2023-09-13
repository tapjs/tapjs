import { OPEN_BRACE_EOL } from './brace-patterns.js'

/**
 * Directive types supported by this library.
 *
 * `'time'` is not officially in the specification, but node-tap has
 * supported it for a long time, and uses it to report how long
 * subtests take to complete.
 */
export type Directive = 'todo' | 'skip' | 'time'

/**
 * Parse a "directive", the bit that follows the `#` character
 * on a TestPoint line.
 */
export const parseDirective = (
  line: string
): [Directive, any] | false => {
  if (!line.trim()) return false

  line = line.replace(OPEN_BRACE_EOL, '').trim()
  const time = line.match(
    /^time=((?:[1-9][0-9]*|0)(?:\.[0-9]+)?)(ms|s)$/i
  )
  const t = time?.[1]
  const s = time?.[2]
  if (typeof t === 'string') {
    let n = +t
    if (s === 's') {
      // JS does weird things with floats.  Round it off a bit.
      n *= 1000000
      n = Math.round(n)
      n /= 1000
    }
    return ['time', n]
  }

  const ts = line.match(/^(todo|skip)(?:\S*)\b(.*)$/i)
  const type = ts?.[1]?.toLowerCase()
  const msg = ts?.[2]?.trim()
  if (!type) return false

  // we know at this point it must be either 'todo' or 'skip',
  // in unknown upper/lower case
  return [type as Directive, msg || true]
}
