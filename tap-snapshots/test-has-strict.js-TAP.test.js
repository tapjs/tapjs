/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/has-strict.js TAP > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "a": 1,
 }
`

exports[`test/has-strict.js TAP > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
-  "b": "2",
+  "b": 2,
 }
`

exports[`test/has-strict.js TAP iterables match one another > must match snapshot 1`] = `
--- expected
+++ actual
 And [
   1,
   2,
 ]
`

exports[`test/has-strict.js TAP iterables match one another > must match snapshot 2`] = `
--- expected
+++ actual
-Array [
-  1,
-  2,
-]
+And [
+  1,
+  2,
+]

`

exports[`test/has-strict.js TAP iterables match one another > must match snapshot 3`] = `
--- expected
+++ actual
-And [
-  1,
-  2,
-]
+Array [
+  1,
+  2,
+]

`