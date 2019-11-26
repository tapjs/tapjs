/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/not-ok.js TAP > exit status 1`] = `
Object {
  "code": 1,
  "signal": null,
}
`

exports[`test/tap/not-ok.js TAP > stderr 1`] = `

`

exports[`test/tap/not-ok.js TAP > stdout 1`] = `
TAP version 13
not ok 1 - expected
  ---
  at:
    line: #
    column: #
    file: test/tap/not-ok.js
  source: |
    require('./')(
    t => t.fail('expected')
    --^
    )
  ...

1..1
# failed 1 test
# {time}

`
