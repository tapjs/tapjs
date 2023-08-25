import type { Base } from '@tapjs/core'
import type { Result } from 'tap-parser'

/**
 * Given a parser result, and the test it belongs to,
 * find the proper fullname including the test name, but
 * only once.
 */
export const assertName = (r: Result, t: Base) => {
  const fn = r.fullname
  const dt = r.diag?.test
  const tn = t.name + ' > '
  let n = fn
  if (n.startsWith(tn)) n = n.substring(tn.length).trim()
  return dt && !n.startsWith(`${dt} > `) ? `${dt} > ${n}` : n
}
