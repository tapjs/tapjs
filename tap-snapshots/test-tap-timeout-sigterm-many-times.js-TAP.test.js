/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/timeout-sigterm-many-times.js TAP > exit status 1`] = `
Object {
  "code": null,
  "signal": "SIGTERM",
}
`

exports[`test/tap/timeout-sigterm-many-times.js TAP > stdout 1`] = `
TAP version 13
ok 1 - fine
not ok 2 - timeout!
  ---
  signal: SIGTERM
  requests:
    - type: FSReqCallback
      context:
        fd: 21
        isUserFd: false
        size: null
        callback: !function |-
          (er, data) => {}
        buffers: null
        buffer: null
        pos: 0
        encoding: null
        err: null
  expired: TAP
  stack: |
    {STACK}
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`

exports[`test/tap/timeout-sigterm-many-times.js TAP > stderr 1`] = `

`
