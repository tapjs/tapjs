import { at, CallSiteLike } from '@tapjs/stack'
import { TestBase } from '@tapjs/core'
import nock from 'nock/types/index'

export class ErrMissingSnapshotData extends Error {
  at?: CallSiteLike
  code: string
  constructor(
    test: TestBase,
    from: Function | ((...a: any[]) => any)
  ) {
    super(`Missing snapshot data for test: ${test.fullname}`)
    this.at = at(from)
    Error.captureStackTrace(this, from)
    this.code = 'EMISSINGSNAPSHOT'
  }
}

export class ErrMockNotSatisfied extends Error {
  at?: CallSiteLike
  code: string
  stack: ''
  constructor(scope: nock.Scope & { _at?: CallSiteLike }) {
    super(
      `Mocks not yet satisfied:\n${scope.pendingMocks().join('\n')}`
    )
    this.at = scope._at
    this.code = 'EMOCKSUNSATISFIED'
    this.stack = ''
  }
}
