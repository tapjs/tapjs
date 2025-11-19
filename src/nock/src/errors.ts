import { TestBase } from '@tapjs/core'
import { at, CallSiteLike } from '@tapjs/stack'
import { ScopeWithAt } from './recorder.js'

/**
 * Error thrown when snapshot data is missing and we try to use it
 */
export class ErrMissingSnapshotData extends Error {
  at?: CallSiteLike
  code: string
  constructor(test: TestBase, from: Function | ((...a: any[]) => any)) {
    super(`Missing snapshot data for test: ${test.fullname}`)
    this.at = at(from)
    Error.captureStackTrace(this, from)
    this.code = 'EMISSINGSNAPSHOT'
  }
}

/**
 * Error raised when the mocks are not satisfied at test end
 */
export class ErrMockNotSatisfied extends Error {
  at?: CallSiteLike
  code: string
  stack: ''
  constructor(scope: ScopeWithAt) {
    super(`Mocks not yet satisfied:\n${scope.pendingMocks().join('\n')}`)
    this.at = scope._at
    this.code = 'EMOCKSUNSATISFIED'
    this.stack = ''
  }
}
