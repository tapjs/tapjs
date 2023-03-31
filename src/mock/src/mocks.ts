import type { CallSiteLike } from '@tapjs/stack'
export interface Mocks {
  key: string
  unmock: () => void
  caller: {
    path: string
    dir: string
    url: string | URL
    at: CallSiteLike | undefined
    stack: string
  }
  mocks?: {
    [k: string]: string
  }
}
