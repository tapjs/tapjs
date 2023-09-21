import { Base } from '@tapjs/core'
import { NamedNestedLocation } from '@tapjs/error-serdes'
import { testNestedLocation } from './test-nested-location.js'

export const testMessageData = (t: Base): NamedNestedLocation => {
  const { name } = t
  return { name, ...testNestedLocation(t) }
}
