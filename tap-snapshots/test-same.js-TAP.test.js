/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/same.js TAP simple diff nested in object > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": Object {
     "b": Array [
       Object {
-        "x": false,
+        "x": true,
       },
     ],
   },
 }
`

exports[`test/same.js TAP symbology > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": Symbol(a),
 }
`

exports[`test/same.js TAP symbology > undefined 2`] = `
--- actual
+++ expected
 Object {
   "a": Symbol(a),
 }
`

exports[`test/same.js TAP symbology > undefined 3`] = `
--- actual
+++ expected
 Object {
-  "a": [Function Symbol],
+  "a": Symbol(a),
 }
`

exports[`test/same.js TAP symbology > undefined 4`] = `
--- actual
+++ expected
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }
`

exports[`test/same.js TAP symbology > undefined 5`] = `
--- actual
+++ expected
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/same.js TAP symbology > undefined 6`] = `
--- actual
+++ expected
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/same.js TAP symbology > undefined 7`] = `
--- actual
+++ expected
 Object {
-  "a": [Function Symbol],
+  "a": "Symbol(a)",
 }
`

exports[`test/same.js TAP experimental diff cleanup postaction > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
-  9,
-  8,
-  7,
-  6,
+  2,
+  3,
+  4,
+  5,
   6,
   7,
   8,
 ]
`

exports[`test/same.js TAP experimental diff cleanup postaction > undefined 2`] = `
--- actual
+++ expected
 Array [
   1,
-  9,
-  8,
-  7,
-  6,
+  2,
+  3,
+  4,
+  5,
   6,
-  7,
-  8,
 ]
`

exports[`test/same.js TAP experimental diff cleanup postaction > undefined 3`] = `
--- actual
+++ expected
 Array [
   1,
-  9,
-  8,
-  7,
-  6,
+  2,
+  3,
+  4,
+  5,
   6,
+  7,
+  8,
 ]
`

exports[`test/same.js TAP array-likes > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/same.js TAP array-likes > undefined 2`] = `
--- actual
+++ expected
 Array [
-  undefined,
+  1,
-  undefined,
+  2,
-  undefined,
+  3,
 ]
`

exports[`test/same.js TAP array-likes > undefined 3`] = `
--- actual
+++ expected
 Object [
   1,
   2,
   3,
 ]
`

exports[`test/same.js TAP array-likes > undefined 4`] = `
--- actual
+++ expected
 Arguments [
   1,
   2,
   3,
 ]
`

exports[`test/same.js TAP array-likes > undefined 5`] = `
--- actual
+++ expected
 Object [
   1,
   2,
   3,
 ]
`

exports[`test/same.js TAP array-likes > undefined 6`] = `
--- actual
+++ expected
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

exports[`test/same.js TAP arrays extra and missing > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
-  4,
-  5,
 ]
`

exports[`test/same.js TAP arrays extra and missing > undefined 2`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
+  4,
+  5,
 ]
`

exports[`test/same.js TAP pojos extra and missing > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
-  "b": 2,
 }
`

exports[`test/same.js TAP pojos extra and missing > undefined 2`] = `
--- actual
+++ expected
 Object {
+  "b": 2,
   "a": 1,
 }
`

exports[`test/same.js TAP maps extra and missing > undefined 1`] = `
--- actual
+++ expected
 Map {
   "a" => 1,
-  "b" => 2,
 }
`

exports[`test/same.js TAP maps extra and missing > undefined 2`] = `
--- actual
+++ expected
 Map {
+  "b" => 2,
   "a" => 1,
 }
`

exports[`test/same.js TAP sets extra and missing > undefined 1`] = `
--- actual
+++ expected
 Set {
   Array [
     "a",
     1,
   ],
-  Array [
-    "b",
-    2,
-  ],
 }
`

exports[`test/same.js TAP sets extra and missing > undefined 2`] = `
--- actual
+++ expected
 Set {
+  Array [
+    "b",
+    2,
+  ],
   Array [
     "a",
     1,
   ],
 }
`

exports[`test/same.js TAP NaN matches NaN > undefined 1`] = `
--- actual
+++ expected
 null
`

exports[`test/same.js TAP shouldn't care about key order and types > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
   "b": 2,
 }
`

exports[`test/same.js TAP should notice objects with different shapes > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
-  "b": undefined,
 }
`

exports[`test/same.js TAP should notice objects with different keys > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
+  "b": 2,
-  "c": 2,
 }
`

exports[`test/same.js TAP should handle dates > undefined 1`] = `
--- actual
+++ expected
-null
+1972-08-01T00:00:00.000Z

`

exports[`test/same.js TAP should handle dates > undefined 2`] = `
--- actual
+++ expected
-undefined
+1972-08-01T00:00:00.000Z

`

exports[`test/same.js TAP should handle dates > undefined 3`] = `
--- actual
+++ expected
 1972-08-01T00:00:00.000Z
`

exports[`test/same.js TAP should handle dates > undefined 4`] = `
--- actual
+++ expected
 Object {
   "x": 1972-08-01T00:00:00.000Z,
 }
`

exports[`test/same.js TAP should handle RegExps > undefined 1`] = `
--- actual
+++ expected
-/[a]/
+/[b]/

`

exports[`test/same.js TAP should handle RegExps > undefined 2`] = `
--- actual
+++ expected
-/[a]/g
+/[a]/i

`

exports[`test/same.js TAP should handle RegExps > undefined 3`] = `
--- actual
+++ expected
 /[a]/
`

exports[`test/same.js TAP should handle RegExps > undefined 4`] = `
--- actual
+++ expected
 /ab?[a-z]{,6}/g
`

exports[`test/same.js TAP should handle functions > undefined 1`] = `
--- actual
+++ expected
-[Function a]
+[Function a]

`

exports[`test/same.js TAP should handle functions > undefined 2`] = `
--- actual
+++ expected
-[Function fnB]
+[Function fnA]

`

exports[`test/same.js TAP should handle functions > undefined 3`] = `
--- actual
+++ expected
 [Function fnA]
`

exports[`test/same.js TAP should handle functions > undefined 4`] = `
--- actual
+++ expected
 [Function fnB]
`

exports[`test/same.js TAP should handle arguments > undefined 1`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/same.js TAP should handle arguments > undefined 2`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/same.js TAP should handle arguments > undefined 3`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/same.js TAP same arrays match > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/same.js TAP different arrays don't match > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
-  4,
 ]
`

exports[`test/same.js TAP different arrays don't match > undefined 2`] = `
--- actual
+++ expected
 Array [
   1,
   2,
-  4,
+  3,
 ]
`

exports[`test/same.js TAP empty arrays match > undefined 1`] = `
--- actual
+++ expected
 Array []
`

exports[`test/same.js TAP empty arrays match > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": Array [],
 }
`

exports[`test/same.js TAP same shouldn't care about key order recursively and types > undefined 1`] = `
--- actual
+++ expected
 Object {
   "x": Object {
     "a": 1,
     "b": 2,
   },
   "y": Object {
     "c": 3,
     "d": 4,
   },
 }
`

exports[`test/same.js TAP undefined is the same as itself > undefined 1`] = `
--- actual
+++ expected
 undefined
`

exports[`test/same.js TAP undefined is the same as itself > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": undefined,
 }
`

exports[`test/same.js TAP undefined is the same as itself > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/same.js TAP undefined and null are Close Enough > undefined 1`] = `
--- actual
+++ expected
 undefined
`

exports[`test/same.js TAP undefined and null are Close Enough > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": null,
 }
`

exports[`test/same.js TAP undefined and null are Close Enough > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/same.js TAP null is as shallow as you'd expect > undefined 1`] = `
--- actual
+++ expected
 null
`

exports[`test/same.js TAP null is as shallow as you'd expect > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": null,
 }
`

exports[`test/same.js TAP null is as shallow as you'd expect > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     null,
   ],
 }
`

exports[`test/same.js TAP the same number matches > undefined 1`] = `
--- actual
+++ expected
 0
`

exports[`test/same.js TAP the same number matches > undefined 2`] = `
--- actual
+++ expected
 1
`

exports[`test/same.js TAP the same number matches > undefined 3`] = `
--- actual
+++ expected
 3.14
`

exports[`test/same.js TAP different numbers don't match > undefined 1`] = `
--- actual
+++ expected
-1
+0

`

exports[`test/same.js TAP different numbers don't match > undefined 2`] = `
--- actual
+++ expected
--1
+1

`

exports[`test/same.js TAP different numbers don't match > undefined 3`] = `
--- actual
+++ expected
-2.72
+3.14

`

exports[`test/same.js TAP flexible about key order and types > undefined 1`] = `
--- actual
+++ expected
 Array [
   Object {
     "foo": Object {
       "z": 100,
       "y": 200,
       "x": 300,
     },
   },
   "bar",
   11,
   Object {
     "baz": Object {
       "d": 4,
       "a": 1,
       "b": 2,
       "c": 3,
     },
   },
 ]
`

exports[`test/same.js TAP properly handle circular data structures > undefined 1`] = `
--- actual
+++ expected
 &ref_1 Object {
   "z": 4,
   "y": Object {
     "x": <*ref_1>,
   },
 }
`

exports[`test/same.js TAP properly handle circular data structures > undefined 2`] = `
--- actual
+++ expected
 &ref_1 Object {
   "ONE": 1,
   "x": Object {
     "TWO": 2,
     "a": <*ref_1>,
   },
 }
`

exports[`test/same.js TAP properly handle circular data structures > undefined 3`] = `
--- actual
+++ expected
 &ref_1 Object {
   "ONE": 1,
   "x": &ref_2 Object {
     "TWO": 2,
-    "a": <*ref_2>,
+    "a": <*ref_1>,
   },
 }
`

exports[`test/same.js TAP properly handle circular data structures > undefined 4`] = `
--- actual
+++ expected
 Object {
   "ONE": 1,
   "x": Object {
+    "happy": true,
-    "TWO": 2,
-    "a": &ref_1 Object {
-      "TWO": 2,
-      "a": <*ref_1>,
-    },
   },
 }
`

exports[`test/same.js TAP should match empty Buffers > undefined 1`] = `
--- actual
+++ expected
 Buffer <>
`

exports[`test/same.js TAP should match similar Buffers > undefined 1`] = `
--- actual
+++ expected
 Buffer <00>
`

exports[`test/same.js TAP should match similar Buffers > undefined 2`] = `
--- actual
+++ expected
 Buffer <00 01 03>
`

exports[`test/same.js TAP should notice different Buffers > undefined 1`] = `
--- actual
+++ expected
-Buffer <00 01 17>
+Buffer <00 01 02>

`

exports[`test/same.js TAP should notice different Buffers > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": Object {
     "y": Object {
-      "z": Buffer <00 00 01 00 02 00 03 00 04 00 05 00 06 00 07 00 08 00 09 00 0a 00 0b 00 0c 00 0d 00 0e 00 0f 00 10 00 11 00 12 00 13 00 14 00 15 00 16 00 17 00 18 00 19 00 1a 00 1b 00 1c 00 1d 00 1e 00 1f 00 20 00 21 00 22 00 23 00 24 00 25 00 26 00 27 00 28 00 29 00 2a 00 2b 00 2c 00 2d 00 2e 00 2f 00 30 00 31 00 32 00 33 00 34 00 35 00 36 00 37 00 38 00 39 00 3a 00 3b 00 3c 00 3d 00 3e 00 3f 00 40 00 41 00 42 00 43 00 44 00 45 00 46 00 47 00 48 00 49 00 4a 00 4b 00 4c 00 4d 00 4e 00 4f 00 50 00 51 00 52 00 53 00 54 00 55 00 56 00 57 00 58 00 59 00 5a 00 5b 00 5c 00 5d 00 5e 00 5f 00 60 00 61 00 62 00 63 00 64 00 65 00 66 00 67 00 68 00 69 00 6a 00 6b 00 6c 00 6d 00 6e 00 6f 00 70 00 71 00 72 00 73 00 74 00 75 00 76 00 77 00 78 00 79 00 7a 00 7b 00 7c 00 7d 00 7e 00 7f 00 80 00 81 00 82 00 83 00 84 00 85 00 86 00 87 00 88 00 89 00 8a 00 8b 00 8c 00 8d 00 8e 00 8f 00 90 00 91 00 92 00 93 00 94 00 95 00 96 00 97 00 98 00 99 00 9a 00 9b 00 9c 00 9d 00 9e 00 9f 00>,
+      "z": Buffer <00 01>,
     },
   },
 }
`

exports[`test/same.js TAP set > undefined 1`] = `
--- actual
+++ expected
 Set {
   1,
   2,
   3,
   4,
   Object {
     "a": 1,
   },
 }
`

exports[`test/same.js TAP set > undefined 2`] = `
--- actual
+++ expected
 Set {
   1,
   2,
   3,
   4,
   Object {
     "a": 1,
   },
 }
`

exports[`test/same.js TAP set > undefined 3`] = `
--- actual
+++ expected
 Set {
   Object {
     "a": 1,
   },
   2,
   4,
   3,
   1,
 }
`

exports[`test/same.js TAP set > undefined 4`] = `
--- actual
+++ expected
 Set {
   1,
-  2,
 }
`

exports[`test/same.js TAP set > undefined 5`] = `
--- actual
+++ expected
 Set {
   1,
+  3,
+  5,
-  6,
-  2,
 }
`

exports[`test/same.js TAP set > undefined 6`] = `
--- actual
+++ expected
Set {}
`

exports[`test/same.js TAP set > undefined 7`] = `
--- actual
+++ expected
-Array [
-  1,
-  2,
-  3,
-  4,
-  Object {
-    "a": 1,
-  },
-]
+Set {
+  1,
+  2,
+  3,
+  4,
+  Object {
+    "a": 1,
+  },
+}

`

exports[`test/same.js TAP map > undefined 1`] = `
--- actual
+++ expected
 Map {
   1 => 2,
   3 => 4,
   5 => Object {
     "a": 1,
   },
   Object {
     "a": 1,
   } => 6,
 }
`

exports[`test/same.js TAP map > undefined 2`] = `
--- actual
+++ expected
 Map {
   1 => 2,
   3 => 4,
   5 => Object {
     "a": 1,
   },
   Object {
     "a": 1,
   } => 6,
 }
`

exports[`test/same.js TAP map > undefined 3`] = `
--- actual
+++ expected
 Map {
   3 => 4,
   5 => Object {
     "a": 1,
   },
   Object {
     "a": 1,
   } => 6,
   1 => 2,
 }
`

exports[`test/same.js TAP map > undefined 4`] = `
--- actual
+++ expected
 Map {
   1 => 2,
   3 => 4,
   5 => Object {
     "a": 1,
   },
   Object {
     "a": 1,
   } => 6,
 }
`

exports[`test/same.js TAP map > undefined 5`] = `
--- actual
+++ expected
 Map {
   3 => 4,
   5 => Object {
     "a": "1",
   },
   Object {
     "a": 1,
   } => 6,
   1 => 2,
 }
`

exports[`test/same.js TAP map > undefined 6`] = `
--- actual
+++ expected
Map {}
`

exports[`test/same.js TAP map > undefined 7`] = `
--- actual
+++ expected
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

exports[`test/same.js TAP map > undefined 8`] = `
--- actual
+++ expected
 Map {
   1 => 2,
   3 => 4,
   5 => Object {
     "a": 1,
   },
+  Object {
+    "a": 1,
+  } => 6,
-  Object {
-    "a": 1,
-    "b": 2,
-  } => 6,
 }
`

exports[`test/same.js TAP map > undefined 9`] = `
--- actual
+++ expected
 Map {
   1 => 2,
   3 => 4,
   5 => Object {
     "a": 1,
   },
+  Object {
+    "a": 1,
+  } => 6,
-  Object {
-    "a": 1,
-    "b": 2,
-  } => 6,
 }
`
