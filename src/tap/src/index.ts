import { TAP } from '@tapjs/core'
export {
  Base,
  Counts,
  Spawn,
  Stdin,
  TapWrap,
  TestBase,
} from '@tapjs/core'
type _TAP = ReturnType<typeof TAP>
export type { _TAP as TAP }
export { Test } from '@tapjs/test'
export const t: _TAP = TAP()
