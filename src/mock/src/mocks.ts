import type { CallSiteLike } from '@tapjs/stack'

/**
 * The mock objects created for mockImport
 */
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
