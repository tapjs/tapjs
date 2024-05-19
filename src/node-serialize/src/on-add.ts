import { Base, TestBase } from '@tapjs/core'
import { DiagnosticData } from '@tapjs/error-serdes'
import { TestMap } from './test-map.js'
import { testNestedLocation } from './test-nested-location.js'

export const onAddFn = (
  comment: (this: Base, ...args: any[]) => void,
  diagsMap: TestMap<DiagnosticData[]>,
  subsMap: TestMap<Base[]>,
) => {
  const onAdd = (t: Base) => {
    const tt = t as TestBase
    const subs: Base[] = []
    const diags: DiagnosticData[] = diagsMap.get(t) || []
    subsMap.set(t, subs)
    diagsMap.set(t, diags)

    if (typeof tt.comment === 'function') {
      tt.comment = comment
    } else if (!tt.comment) {
      t.parser.on('comment', message => {
        message = message.replace(/^#/, '').trim()
        diags.push({ ...testNestedLocation(t), message })
      })
    }
    tt.on('subtestAdd', onAdd)
    if (t.parent) {
      subsMap.get(t.parent)?.push(t)
    }
  }
  return onAdd
}
