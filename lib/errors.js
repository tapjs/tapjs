class ErrMissingSnapshotData extends Error {
  constructor (test, from) {
    super(`Missing snapshot data for test: ${test.fullname}`)
    this.at = findCallLocation(from)
    this.code = 'EMISSINGSNAPSHOT'
    this.stack = ''
  }
}

class ErrMockNotSatisfied extends Error {
  constructor (scope) {
    super(`Mocks not yet satisfied:\n${scope.pendingMocks().join('\n')}`)
    this.at = scope._at
    this.code = 'EMOCKSUNSATISFIED'
    this.stack = ''
  }
}

// this is used to populate the `at` property of errors thrown while asserting
// that all nocks have been satisfied, as well as when we attempt to load snapshot
// data for a test. it should end up pointing at the line in the test where either
// t.nock() or t.nock.snapshot() was called
const callRe = /\((.+):(\d+):(\d+)\)$/
const findCallLocation = (from) => {
  const err = {}
  Error.captureStackTrace(err, from)
  const lines = err.stack.split('\n')
  const line = lines[1]

  const parsed = line.match(callRe)
  return {
    file: parsed[1],
    line: +parsed[2],
  }
}

module.exports = {
  ErrMissingSnapshotData,
  ErrMockNotSatisfied,
  findCallLocation,
}
