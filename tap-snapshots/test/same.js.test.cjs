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

exports[`test/same.js TAP should handle bigint > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle bigint > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/same.js TAP should handle bigint > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-2n
+1n

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
-Buffer <0001 17  ...>
+Buffer <0001 02  ...>

`

exports[`test/same.js TAP should notice different Buffers > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,18 +1,7 @@
 Object {
   "x": Object {
     "y": Object {
-      "z": Buffer <
-        0000: 0000 0100 0200 0300 0400 0500 0600 0700 0800 0900 0a00 0b00 0c00 0d00 0e00 0f00  ................................
-        0020: 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 1a00 1b00 1c00 1d00 1e00 1f00  ................................
-        0040: 2000 2100 2200 2300 2400 2500 2600 2700 2800 2900 2a00 2b00 2c00 2d00 2e00 2f00  ..!.".#.$.%.&.'.(.).*.+.,.-.../.
-        0060: 3000 3100 3200 3300 3400 3500 3600 3700 3800 3900 3a00 3b00 3c00 3d00 3e00 3f00  0.1.2.3.4.5.6.7.8.9.:.;.<.=.>.?.
-        0080: 4000 4100 4200 4300 4400 4500 4600 4700 4800 4900 4a00 4b00 4c00 4d00 4e00 4f00  @.A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.
-        00a0: 5000 5100 5200 5300 5400 5500 5600 5700 5800 5900 5a00 5b00 5c00 5d00 5e00 5f00  P.Q.R.S.T.U.V.W.X.Y.Z.[.\\.].^._.
-        00c0: 6000 6100 6200 6300 6400 6500 6600 6700 6800 6900 6a00 6b00 6c00 6d00 6e00 6f00  \`.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.
-        00e0: 7000 7100 7200 7300 7400 7500 7600 7700 7800 7900 7a00 7b00 7c00 7d00 7e00 7f00  p.q.r.s.t.u.v.w.x.y.z.{.|.}.~...
-        0100: 8000 8100 8200 8300 8400 8500 8600 8700 8800 8900 8a00 8b00 8c00 8d00 8e00 8f00  ................................
-        0120: 9000 9100 9200 9300 9400 9500 9600 9700 9800 9900 9a00 9b00 9c00 9d00 9e00 9f00  ................................
-      >,
+      "z": Buffer <0001  ..>,
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
