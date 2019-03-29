/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/reporters.js TAP builtin reporter > stdout 1`] = `
treport output
`

exports[`test/run/reporters.js TAP tmr builtin reporter > stdout 1`] = `
spec output
`

exports[`test/run/reporters.js TAP cli reporter > stdout 1`] = `
TAP version 13
ok 1 - cli-tests/ok.js > this is fine
1..1
# {time}


`

exports[`test/run/reporters.js TAP stream reporter > stdout 1`] = `
spec output
`

exports[`test/run/reporters.js TAP react component > stdout 1`] = `
treport output
`

exports[`test/run/reporters.js TAP not found reporter > stdout 1`] = `
not ok 1 - Cannot find module 'not a reporter actually'
`

exports[`test/run/reporters.js TAP non-function reporter > stdout 1`] = `
not ok 1 - Invalid reporter: non-class exported by {CWD}/cli-tests/nonfunc.js
`

exports[`test/run/reporters.js TAP non-class reporter > stdout 1`] = `
not ok 1 - Invalid reporter: not a stream or react component {CWD}/cli-tests/func.js
`
