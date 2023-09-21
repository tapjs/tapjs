import { Base } from '@tapjs/core'
import { TestStreamSerialize } from '@tapjs/error-serdes'
import { format } from 'util'
import { locFromAt } from './loc-from-at.js'
import { TestMap } from './test-map.js'

export const commentMethod = (
  stream: TestStreamSerialize,
  diagsMap: TestMap<DiagnosticData[]>
) => {
  return function comment(this: Base, ...args: any[]) {
    const message = format(...args)
    const diags = diagsMap.get(this)
    const m = {
      ...locFromAt(comment),
      nesting: this.nestingLevel,
      message,
    }
    if (diags) diags.push(m)
    else stream.diagnostic(m)
  }
}
