import { Result } from 'tap-parser'
import { Base } from '@tapjs/core'

export const assertName = (r: Result, t: Base) => {
  const fn = r.fullname
  const n = t.name + ' > '
  return (fn.startsWith(n) ? fn.substring(n.length) : fn).trim()
}
