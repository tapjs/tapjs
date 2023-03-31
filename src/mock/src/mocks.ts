import type { CallSiteLike } from '@tapjs/stack'
export interface Mocks {
  key: string
  unmock: () => null
  caller: {
    path: string
    dir: string
    url: string
    at: CallSiteLike
    stack: string
  }
  mocks: {
    [k: string]: string
  }
}
