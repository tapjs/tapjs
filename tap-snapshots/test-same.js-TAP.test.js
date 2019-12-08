/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/same.js TAP NaN matches NaN > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP array-likes > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,6 +1,5 @@
-Object {
-  "0": 1,
-  "1": 2,
-  "2": 2,
-  "length": 3,
-}
+Array [
+  1,
+  2,
+  3,
+]

`

exports[`test/same.js TAP arrays extra and missing > must match snapshot 1`] = `
--- expected
+++ actual
@@ -2,6 +2,4 @@
   1,
   2,
   3,
-  4,
-  5,
 ]

`

exports[`test/same.js TAP arrays extra and missing > must match snapshot 2`] = `
--- expected
+++ actual
@@ -2,4 +2,6 @@
   1,
   2,
   3,
+  4,
+  5,
 ]

`

exports[`test/same.js TAP collections missing all entries > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Map {
-  1 => 1,
 }

`

exports[`test/same.js TAP collections missing all entries > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Object {
-  "a": 1,
 }

`

exports[`test/same.js TAP collections missing all entries > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Set {
-  1,
 }

`

exports[`test/same.js TAP collections missing all entries > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Array [
-  1,
 ]

`

exports[`test/same.js TAP ctor usage > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-false
+true

`

exports[`test/same.js TAP different arrays don't match > must match snapshot 1`] = `
--- expected
+++ actual
@@ -2,5 +2,4 @@
   1,
   2,
   3,
-  4,
 ]

`

exports[`test/same.js TAP different arrays don't match > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Array [
   1,
   2,
-  4,
+  3,
 ]

`

exports[`test/same.js TAP different numbers don't match > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-1
+0

`

exports[`test/same.js TAP different numbers don't match > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
--1
+1

`

exports[`test/same.js TAP different numbers don't match > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-2.72
+3.14

`

exports[`test/same.js TAP diffing strings > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 String(
-  str2asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  str1asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
@@ -9,11 +9,6 @@
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  foofoofoofoofoo
-  foofoofoofoofoo
-  foofoofoofoofoo
-  foofoofoofoofoo
-  foofoofoofoofoo
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
@@ -24,5 +19,10 @@
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
   
 )

`

exports[`test/same.js TAP diffing strings > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP diffing strings > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,28 +1,1 @@
-String(
-  str1asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
-  
-)
+""

`

exports[`test/same.js TAP diffing strings > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,1 +1,28 @@
-""
+String(
+  str1asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
+  
+)

`

exports[`test/same.js TAP diffing strings > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP diffs of errors with \\n in the message > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,6 +1,6 @@
 Error: foo
 bar {
-  "foo": "two",
+  "foo": "bar",
   "name": "Error",
   "message": String(
     foo

`

exports[`test/same.js TAP diffs of errors with \\n in the message > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,7 +1,7 @@
 Object {
   "er": Error: foo
 bar {
-    "foo": "two",
+    "foo": "bar",
     "name": "Error",
     "message": String(
       foo

`

exports[`test/same.js TAP empty arrays match > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP empty arrays match > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP errors > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP errors > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Error: oof
+Error: foo

`

exports[`test/same.js TAP errors > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,4 @@
-Error: foo
+Object {
+  "name": "Error",
+  "message": "foo",
+}

`

exports[`test/same.js TAP errors > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP errors > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP errors > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,5 +1,3 @@
-drr: i have none {
-  "name": "drr",
-  "message": "i have none",
+Error: foo {
   "foo": "bar",
 }

`

exports[`test/same.js TAP errors > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 drr: i have none {
   "name": "drr",
   "message": "i have none",
-  "foo": "baz",
+  "foo": "bar",
 }

`

exports[`test/same.js TAP flexible about key order and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP hidden props and getters > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP hidden props and getters > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP hidden props and getters > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Hidden {
   "raw": 1,
   "value": 1,
-  "baseValue": 1,
+  "baseValue": 0,
 }

`

exports[`test/same.js TAP iterables match one another > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP iterables match one another > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP iterables match one another > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 6`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP map > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,22 +1,10 @@
-Array [
-  Array [
-    1,
-    2,
-  ],
-  Array [
-    3,
-    4,
-  ],
-  Array [
-    5,
-    Object {
-      "a": 1,
-    },
-  ],
-  Array [
-    Object {
-      "a": 1,
-    },
-    6,
-  ],
-]
+Map {
+  1 => 2,
+  3 => 4,
+  5 => Object {
+    "a": 1,
+  },
+  Object {
+    "a": 1,
+  } => 6,
+}

`

exports[`test/same.js TAP map > must match snapshot 8`] = `
--- expected
+++ actual
@@ -6,6 +6,5 @@
   },
   Object {
     "a": 1,
-    "b": 2,
   } => 6,
 }

`

exports[`test/same.js TAP map > must match snapshot 9`] = `
--- expected
+++ actual
@@ -6,6 +6,5 @@
   },
   Object {
     "a": 1,
-    "b": 2,
   } => 6,
 }

`

exports[`test/same.js TAP maps extra and missing > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Map {
   "a" => 1,
-  "b" => 2,
 }

`

exports[`test/same.js TAP maps extra and missing > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,4 @@
 Map {
+  "b" => 2,
   "a" => 1,
 }

`

exports[`test/same.js TAP more weird diff stuff > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,10 +1,10 @@
 Array [
   1,
-  9,
-  8,
-  7,
+  2,
+  3,
+  4,
+  5,
   6,
-  6,
   7,
   8,
 ]

`

exports[`test/same.js TAP more weird diff stuff > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,10 +1,8 @@
 Array [
   1,
-  9,
-  8,
-  7,
+  2,
+  3,
+  4,
+  5,
   6,
-  6,
-  7,
-  8,
 ]

`

exports[`test/same.js TAP more weird diff stuff > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,8 +1,10 @@
 Array [
   1,
-  9,
+  2,
+  3,
+  4,
+  5,
+  6,
+  7,
   8,
-  7,
-  6,
-  6,
 ]

`

exports[`test/same.js TAP null is as shallow as you'd expect > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP null is as shallow as you'd expect > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP null is as shallow as you'd expect > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP pojos extra and missing > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP pojos extra and missing > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Object {
   "a": 1,
-  "b": 2,
 }

`

exports[`test/same.js TAP pojos extra and missing > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,4 @@
 Object {
+  "b": 2,
   "a": 1,
 }

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 3`] = `
--- expected
+++ actual
@@ -3,5 +3,11 @@
   "y": Object {
     "x": <*ref_1>,
   },
-  "other": <*ref_1>,
+  "other": &ref_2 Object {
+    "z": 4,
+    "y": Object {
+      "x": <*ref_2>,
+    },
+    "other": <*ref_2>,
+  },
 }

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 5`] = `
--- expected
+++ actual
@@ -2,6 +2,6 @@
   "ONE": 1,
   "x": &ref_2 Object {
     "TWO": 2,
-    "a": <*ref_2>,
+    "a": <*ref_1>,
   },
 }

`

exports[`test/same.js TAP properly handle circular data structures > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,10 +1,6 @@
 Object {
   "ONE": 1,
   "x": Object {
-    "TWO": 2,
-    "a": &ref_1 Object {
-      "TWO": 2,
-      "a": <*ref_1>,
-    },
+    "happy": true,
   },
 }

`

exports[`test/same.js TAP same arrays match > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP same shouldn't care about key order recursively and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP set > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP set > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP set > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP set > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Set {
   1,
-  2,
 }

`

exports[`test/same.js TAP set > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Set {
   1,
-  6,
-  2,
+  3,
+  5,
 }

`

exports[`test/same.js TAP set > must match snapshot 6`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP set > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
-Array [
+Set {
   1,
   2,
   3,
@@ -6,4 +6,4 @@
   Object {
     "a": 1,
   },
-]
+}

`

exports[`test/same.js TAP sets extra and missing > must match snapshot 1`] = `
--- expected
+++ actual
@@ -3,8 +3,4 @@
     "a",
     1,
   ],
-  Array [
-    "b",
-    2,
-  ],
 }

`

exports[`test/same.js TAP sets extra and missing > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,5 +1,9 @@
 Set {
   Array [
+    "b",
+    2,
+  ],
+  Array [
     "a",
     1,
   ],

`

exports[`test/same.js TAP should handle RegExps > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-/[a]/
+/[b]/

`

exports[`test/same.js TAP should handle RegExps > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-/[a]/g
+/[a]/i

`

exports[`test/same.js TAP should handle RegExps > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle RegExps > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle arguments > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle arguments > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle arguments > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle dates > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+1972-08-01T00:00:00.000Z

`

exports[`test/same.js TAP should handle dates > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-undefined
+1972-08-01T00:00:00.000Z

`

exports[`test/same.js TAP should handle dates > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle dates > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle functions > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle functions > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle functions > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Function fnB(a)
+Function fnA(a)

`

exports[`test/same.js TAP should handle functions > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle functions > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should match empty Buffers > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should match similar Buffers > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should match similar Buffers > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should notice different Buffers > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Buffer <00 01 17>
+Buffer <00 01 02>

`

exports[`test/same.js TAP should notice different Buffers > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,7 +1,7 @@
 Object {
   "x": Object {
     "y": Object {
-      "z": Buffer <00 00 01 00 02 00 03 00 04 00 05 00 06 00 07 00 08 00 09 00 0a 00 0b 00 0c 00 0d 00 0e 00 0f 00 10 00 11 00 12 00 13 00 14 00 15 00 16 00 17 00 18 00 19 00 1a 00 1b 00 1c 00 1d 00 1e 00 1f 00 20 00 21 00 22 00 23 00 24 00 25 00 26 00 27 00 28 00 29 00 2a 00 2b 00 2c 00 2d 00 2e 00 2f 00 30 00 31 00 32 00 33 00 34 00 35 00 36 00 37 00 38 00 39 00 3a 00 3b 00 3c 00 3d 00 3e 00 3f 00 40 00 41 00 42 00 43 00 44 00 45 00 46 00 47 00 48 00 49 00 4a 00 4b 00 4c 00 4d 00 4e 00 4f 00 50 00 51 00 52 00 53 00 54 00 55 00 56 00 57 00 58 00 59 00 5a 00 5b 00 5c 00 5d 00 5e 00 5f 00 60 00 61 00 62 00 63 00 64 00 65 00 66 00 67 00 68 00 69 00 6a 00 6b 00 6c 00 6d 00 6e 00 6f 00 70 00 71 00 72 00 73 00 74 00 75 00 76 00 77 00 78 00 79 00 7a 00 7b 00 7c 00 7d 00 7e 00 7f 00 80 00 81 00 82 00 83 00 84 00 85 00 86 00 87 00 88 00 89 00 8a 00 8b 00 8c 00 8d 00 8e 00 8f 00 90 00 91 00 92 00 93 00 94 00 95 00 96 00 97 00 98 00 99 00 9a 00 9b 00 9c 00 9d 00 9e 00 9f 00>,
+      "z": Buffer <00 01>,
     },
   },
 }

`

exports[`test/same.js TAP should notice objects with different keys > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
 Object {
   "a": 1,
-  "c": 2,
+  "b": 2,
 }

`

exports[`test/same.js TAP should notice objects with different shapes > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Object {
   "a": 1,
-  "b": undefined,
 }

`

exports[`test/same.js TAP shouldn't care about key order and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP simple diff nested in object > must match snapshot 1`] = `
--- expected
+++ actual
@@ -2,7 +2,7 @@
   "a": Object {
     "b": Array [
       Object {
-        "x": false,
+        "x": true,
       },
     ],
   },

`

exports[`test/same.js TAP symbology > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP symbology > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP symbology > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Function Symbol(),
+  "a": Symbol(a),
 }

`

exports[`test/same.js TAP symbology > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }

`

exports[`test/same.js TAP symbology > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/same.js TAP symbology > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/same.js TAP symbology > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Function Symbol(),
+  "a": "Symbol(a)",
 }

`

exports[`test/same.js TAP the same number matches > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP the same number matches > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP the same number matches > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined and null are Close Enough > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined and null are Close Enough > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined and null are Close Enough > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined is the same as itself > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined is the same as itself > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP undefined is the same as itself > must match snapshot 3`] = `
--- expected
+++ actual

`
