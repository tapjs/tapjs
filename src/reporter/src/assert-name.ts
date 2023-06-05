import { Result } from 'tap-parser'
import { Base } from '@tapjs/core'

export const assertName = (r: Result, t: Base) => {
  const fn = r.fullname
  const dt = r.diag?.test
  const tn = t.name + ' > '
  const n = (fn.startsWith(tn) ? fn.substring(tn.length): fn).trim()
  return dt ? `${dt} > ${n}` : n
}
