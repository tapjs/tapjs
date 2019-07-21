/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/throw-unpatched.js TAP > exit status 1`] = `
Object {
  "code": 1,
  "signal": null,
}
`

exports[`test/tap/throw-unpatched.js TAP > stderr 1`] = `

{CWD}/test/tap/throw-unpatched.js:2
  throw new Error('not yet patched')
        ^
Error: not yet patched
    {STACK}

`

exports[`test/tap/throw-unpatched.js TAP > stdout 1`] = `

`
