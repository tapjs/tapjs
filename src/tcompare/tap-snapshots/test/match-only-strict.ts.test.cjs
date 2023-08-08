/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/match-only-strict.ts > TAP > only specified fields must be present > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,2 +1,3 @@
 Object {
+  "b": 2,
 }

`

exports[`test/match-only-strict.ts > TAP > only specified fields must be present > must match snapshot 2`] = `

`

exports[`test/match-only-strict.ts > TAP > only specified fields must be present > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "b": "2",
+  "b": 2,
 }

`

exports[`test/match-only-strict.ts > TAP > only specified fields must be present > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,4 @@
 Object {
-  "b": "2",
+  "a": 1,
+  "b": 2,
 }

`
