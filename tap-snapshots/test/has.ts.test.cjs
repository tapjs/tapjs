/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/has.ts TAP array > must match snapshot 1`] = `

`

exports[`test/has.ts TAP array > must match snapshot 2`] = `

`

exports[`test/has.ts TAP array > must match snapshot 3`] = `

`

exports[`test/has.ts TAP array > must match snapshot 4`] = `

`

exports[`test/has.ts TAP array > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,5 +1,3 @@
 Object {
-  "ea": Array [
-    1,
-  ],
+  "ea": Array [],
 }

`

exports[`test/has.ts TAP array > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,8 +1,7 @@
 Object {
   "a": Array [
     1,
     2,
     3,
-    4,
   ],
 }

`

exports[`test/has.ts TAP array likes > must match snapshot 1`] = `

`

exports[`test/has.ts TAP array likes > must match snapshot 2`] = `

`

exports[`test/has.ts TAP array likes > must match snapshot 3`] = `

`

exports[`test/has.ts TAP array likes > must match snapshot 4`] = `

`

exports[`test/has.ts TAP array likes > must match snapshot 5`] = `

`

exports[`test/has.ts TAP array likes > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Array {
-  "foo": "bar",
 }

`

exports[`test/has.ts TAP buffer > must match snapshot 1`] = `

`

exports[`test/has.ts TAP buffer > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "b": Buffer <6173 64  asd>,
+  "b": Buffer <6173 6466  asdf>,
 }

`

exports[`test/has.ts TAP complex object > must match snapshot 1`] = `

`

exports[`test/has.ts TAP complex object > must match snapshot 2`] = `

`

exports[`test/has.ts TAP complex object > must match snapshot 3`] = `

`

exports[`test/has.ts TAP complex object > must match snapshot 4`] = `

`

exports[`test/has.ts TAP complex object > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Object {
-  "xyz": true,
 }

`

exports[`test/has.ts TAP complex object > must match snapshot 6`] = `

`

exports[`test/has.ts TAP date > must match snapshot 1`] = `

`

exports[`test/has.ts TAP date > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "d": 1979-07-01T00:00:00.000Z,
+  "d": 2019-02-14T07:41:12.747Z,
 }

`

exports[`test/has.ts TAP error message > must match snapshot 1`] = `

`

exports[`test/has.ts TAP error message > must match snapshot 2`] = `

`

exports[`test/has.ts TAP errors > must match snapshot 1`] = `

`

exports[`test/has.ts TAP errors > must match snapshot 2`] = `

`

exports[`test/has.ts TAP errors > must match snapshot 3`] = `

`

exports[`test/has.ts TAP errors > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,1 +1,4 @@
-TypeError: foo
+Error: foo {
+  "code": 1,
+  "signal": "blerg",
+}

`

exports[`test/has.ts TAP errors > must match snapshot 5`] = `

`

exports[`test/has.ts TAP errors > must match snapshot 6`] = `

`

exports[`test/has.ts TAP iterables match one another > must match snapshot 1`] = `

`

exports[`test/has.ts TAP iterables match one another > must match snapshot 2`] = `

`

exports[`test/has.ts TAP iterables match one another > must match snapshot 3`] = `

`

exports[`test/has.ts TAP map > must match snapshot 1`] = `

`

exports[`test/has.ts TAP map > must match snapshot 10`] = `
--- expected
+++ actual
@@ -1,5 +1,4 @@
 Object {
   "em": Map {
-    1 => 2,
   },
 }

`

exports[`test/has.ts TAP map > must match snapshot 11`] = `

`

exports[`test/has.ts TAP map > must match snapshot 2`] = `

`

exports[`test/has.ts TAP map > must match snapshot 3`] = `

`

exports[`test/has.ts TAP map > must match snapshot 4`] = `

`

exports[`test/has.ts TAP map > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,5 +1,4 @@
 Object {
   "m": Map {
-    "3" => 4,
   },
 }

`

exports[`test/has.ts TAP map > must match snapshot 6`] = `

`

exports[`test/has.ts TAP map > must match snapshot 7`] = `

`

exports[`test/has.ts TAP map > must match snapshot 8`] = `
--- expected
+++ actual
@@ -1,5 +1,4 @@
 Object {
   "m": Map {
-    4 => 3,
   },
 }

`

exports[`test/has.ts TAP map > must match snapshot 9`] = `
--- expected
+++ actual
@@ -1,5 +1,4 @@
 Object {
   "em": Map {
-    1 => 2,
   },
 }

`

exports[`test/has.ts TAP pojo can match against array with same fields > must match snapshot 1`] = `

`

exports[`test/has.ts TAP set > must match snapshot 1`] = `

`

exports[`test/has.ts TAP set > must match snapshot 2`] = `

`

exports[`test/has.ts TAP set > must match snapshot 3`] = `

`

exports[`test/has.ts TAP set > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,8 +1,8 @@
 Object {
   "s": Set {
+    1,
     2,
     3,
     4,
-    5,
   },
 }

`

exports[`test/has.ts TAP set > must match snapshot 5`] = `

`

exports[`test/has.ts TAP set > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,13 +1,16 @@
 Object {
   "cs": Set {
     Object {
       "a": 1,
     },
     Object {
       "a": 1,
     },
     Object {
-      "a": 1,
+      "b": 2,
     },
+    Object {
+      "b": 2,
+    },
   },
 }

`

exports[`test/has.ts TAP small set cannot satisfy big set expectation > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,5 +1,3 @@
 Set {
   1,
-  2,
-  3,
 }

`

exports[`test/has.ts TAP sort pojos > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,6 +1,6 @@
 Object {
-  "a": 4,
-  "j": 1,
-  "m": 2,
-  "x": 3,
+  "a": 0,
+  "j": 2,
+  "m": 3,
+  "x": 1,
 }

`

exports[`test/has.ts TAP undefined/null matches missing > must match snapshot 1`] = `

`

exports[`test/has.ts TAP undefined/null matches missing > must match snapshot 2`] = `

`
