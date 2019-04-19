/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/unhandled-promise.js TAP > exit status 1`] = `
Object {
  "code": 1,
  "signal": null,
}
`

exports[`test/tap/unhandled-promise.js TAP > stderr 1`] = `

`

exports[`test/tap/unhandled-promise.js TAP > stdout 1`] = `
TAP version 13
ok 1 - fine, i promise
not ok 2 - broken
  ---
  at:
    line: #
    column: #
    file: test/tap/unhandled-promise.js
  source: |2
      t.pass('fine, i promise')
      Promise.reject(new Error('broken'))
    --^
    }
    )
  tapCaught: unhandledRejection
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`
