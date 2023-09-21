import type { TAP, TapPlugin } from '@tapjs/core'
import { env } from '@tapjs/core'
import { serialize } from './serialize.js'

let serialized = false
export const plugin: TapPlugin<{}> = t => {
  if (
    t.name === 'TAP' &&
    !t.parent &&
    env.NODE_TEST_CONTEXT === 'child-v8' &&
    !serialized
  ) {
    // make sure we don't serialize anything else in this process
    serialized = true
    env.NODE_TEST_CONTEXT = 'child'
    serialize(t as TAP)
  }
  return {}
}
