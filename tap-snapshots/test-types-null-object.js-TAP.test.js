/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/types/null-object.js TAP > first stringify 1`] = `
!nullobject
a: 1
b:
  !nullobject {}

`

exports[`test/types/null-object.js TAP > parsed stringified 1`] = `
Null Object {
  "a": 1,
  "b": Null Object {},
}
`
