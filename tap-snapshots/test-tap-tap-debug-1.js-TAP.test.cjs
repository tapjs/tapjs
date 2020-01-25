/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/tap-debug-1.js TAP > exit status 1`] = `
Object {
  "code": 0,
  "signal": null,
}
`

exports[`test/tap/tap-debug-1.js TAP > stderr 1`] = `
TAP {pid} TAP: PROCESSING(TAP) 2
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "TAP version 13\\n"
TAP {pid} TAP: < already processing
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "# this is fine\\n"
TAP {pid} TAP: done processing [] false
TAP {pid} TAP: PROCESSING(TAP) 1
TAP {pid} TAP: > METHOD
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: END(TAP) implicit plan 0
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: < already processing
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "1..0\\n"
TAP {pid} TAP: > EOF TAP
TAP {pid} TAP: ONCOMPLETE "TAP" {"ok":true,"count":0,"pass":0,"fail":0,"bailout":false,"todo":0,"skip":0,"plan":{"start":1,"end":0,"skipAll":true,"skipReason":"","comment":""},"failures":[],"time":null}
TAP {pid} TAP: done processing [] false

`

exports[`test/tap/tap-debug-1.js TAP > stdout 1`] = `
TAP version 13
# this is fine
1..0
# {time}

`
