/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/strict.ts > TAP > array-likes > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
-Ayyr [
+Array [
   1,
   2,
   3,
 ]

`

exports[`test/strict.ts > TAP > basic > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
--Infinity
+Infinity

`

exports[`test/strict.ts > TAP > basic > must match snapshot 10`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-undefined
+null

`

exports[`test/strict.ts > TAP > basic > must match snapshot 11`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+undefined

`

exports[`test/strict.ts > TAP > basic > must match snapshot 12`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Buffer <6162 6364  abcd>
+Buffer <6162 63  abc>

`

exports[`test/strict.ts > TAP > basic > must match snapshot 13`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Buffer <6162 64  abd>
+Buffer <6162 63  abc>

`

exports[`test/strict.ts > TAP > basic > must match snapshot 14`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-2001-01-12T00:00:00.000Z
+2001-01-11T00:00:00.000Z

`

exports[`test/strict.ts > TAP > basic > must match snapshot 15`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-/^(howdy|hello)$/
+/^h[oe][wl][dl][oy]$/

`

exports[`test/strict.ts > TAP > basic > must match snapshot 16`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
-Array [
+Arguments [
   1,
   2,
   3,
 ]

`

exports[`test/strict.ts > TAP > basic > must match snapshot 17`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
-Arguments [
+Array [
   1,
   2,
   3,
 ]

`

exports[`test/strict.ts > TAP > basic > must match snapshot 18`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Object {}
+Array []

`

exports[`test/strict.ts > TAP > basic > must match snapshot 19`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Null Object {}
+Object {}

`

exports[`test/strict.ts > TAP > basic > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-"1"
+1

`

exports[`test/strict.ts > TAP > basic > must match snapshot 20`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "b": "b",
+  "a": "a",
 }

`

exports[`test/strict.ts > TAP > basic > must match snapshot 21`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Object {
-  "c": undefined,
 }

`

exports[`test/strict.ts > TAP > basic > must match snapshot 22`] = `
--- expected
+++ actual
@@ -1,6 +1,5 @@
 EventEmitter {
   "_events": Null Object {
-    "data": Function ondata(data),
   },
-  "_eventsCount": 2,
+  "_eventsCount": 1,
 }

`

exports[`test/strict.ts > TAP > basic > must match snapshot 23`] = `
--- expected
+++ actual
@@ -1,18 +1,18 @@
 &ref_1 Object {
   "granular": Object {
     "stuff": Array [
       0,
       1,
-      3,
+      2,
     ],
     "self": Object {
       "granular": Object {
         "stuff": Array [
           0,
           1,
-          2,
+          3,
         ],
-<*ref_1>      },
+<*ref_undefined>      },
     },
   },
 }

`

exports[`test/strict.ts > TAP > basic > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-"nok"
+"ok"

`

exports[`test/strict.ts > TAP > basic > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-"0"
+0

`

exports[`test/strict.ts > TAP > basic > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+undefined

`

exports[`test/strict.ts > TAP > basic > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,2 +1,1 @@
 Function nop()
-/* object identities differ */

`

exports[`test/strict.ts > TAP > basic > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Object {}
+undefined

`

exports[`test/strict.ts > TAP > basic > must match snapshot 8`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+Object {}

`

exports[`test/strict.ts > TAP > basic > must match snapshot 9`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Object {}
+null

`

exports[`test/strict.ts > TAP > iterables match one another > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
-Array [
+And [
   1,
   2,
 ]

`

exports[`test/strict.ts > TAP > iterables match one another > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
-And [
+Array [
   1,
   2,
 ]

`

exports[`test/strict.ts > TAP > map > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Map {
   5 => Object {
-    "a": "1",
+    "a": 1,
   },
 }

`

exports[`test/strict.ts > TAP > map > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Map {
   5 => Object {
-    "a": "1",
+    "a": 1,
   },
 }

`

exports[`test/strict.ts > TAP > map > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Map {
   5 => Object {
-    "a": "1",
+    "a": 1,
   },
 }

`

exports[`test/strict.ts > TAP > map > must match snapshot 4`] = `
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

exports[`test/strict.ts > TAP > map > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,6 +1,5 @@
 Map {
   Object {
     "a": 1,
-    "b": 2,
   } => 6,
 }

`

exports[`test/strict.ts > TAP > map > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,9 +1,8 @@
 Map {
   5 => Object {
-    "a": 1,
+    "a": "1",
   },
   Object {
     "a": 1,
-    "b": 2,
   } => 6,
 }

`

exports[`test/strict.ts > TAP > set > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Set {
   1,
-  2,
 }

`

exports[`test/strict.ts > TAP > set > must match snapshot 2`] = `
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

exports[`test/strict.ts > TAP > set > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,9 +1,9 @@
-Array [
+Set {
   1,
   2,
   3,
   4,
   Object {
     "a": 1,
   },
-]
+}

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Object {
   "a": Symbol(a),
 }
-/* object identities differ */

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol.for(a),
+  "a": Symbol(a),
 }

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Function Symbol(),
+  "a": Symbol(a),
 }

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol.for(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/strict.ts > TAP > symbology > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Function Symbol(),
+  "a": "Symbol(a)",
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,2 +1,3 @@
 Object {
+  "a": undefined,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Object {
-  "a": undefined,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "b": undefined,
+  "a": undefined,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,2 +1,3 @@
 Object {
+  "a": null,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,2 @@
 Object {
-  "a": null,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "b": null,
+  "a": null,
 }

`

exports[`test/strict.ts > TAP > undefined, null, missing > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": undefined,
+  "a": null,
 }

`
