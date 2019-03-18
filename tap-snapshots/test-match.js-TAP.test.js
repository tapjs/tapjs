/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/match.js TAP shouldn't care about key order and types > undefined 1`] = `
--- expected
+++ actual
 Object {
   "b": 2,
   "a": 1,
 }
`

exports[`test/match.js TAP should notice objects with different shapes > undefined 1`] = `
--- expected
+++ actual
 Object {
   "a": 1,
-  "b": undefined,
+  "b": "a thing",
 }
`

exports[`test/match.js TAP should notice objects with different shapes > undefined 2`] = `
--- expected
+++ actual
 Object {
   "a": 1,
   "b": undefined,
 }
`

exports[`test/match.js TAP should notice objects with different shapes > undefined 3`] = `
--- expected
+++ actual
 Object {
-  "at": Object {
-    "line": Function Number(),
-  },
+  "at": null,
 }
`

exports[`test/match.js TAP extra keys in object are ok > undefined 1`] = `
--- expected
+++ actual
 Object {
   "a": 1,
   "b": null,
 }
`

exports[`test/match.js TAP should notice objects with different keys > undefined 1`] = `
--- expected
+++ actual
 Object {
   "a": 1,
-  "c": 2,
 }
`

exports[`test/match.js TAP should handle dates > undefined 1`] = `
--- expected
+++ actual
-null
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > undefined 2`] = `
--- expected
+++ actual
-undefined
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > undefined 3`] = `
--- expected
+++ actual
 1972-08-01T00:00:00.000Z
`

exports[`test/match.js TAP should handle dates > undefined 4`] = `
--- expected
+++ actual
 Object {
   "x": 1972-08-01T00:00:00.000Z,
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 1`] = `
--- expected
+++ actual
-/[a]/
+/[b]/

`

exports[`test/match.js TAP should handle RegExps > undefined 2`] = `
--- expected
+++ actual
-/[a]/g
+/[a]/i

`

exports[`test/match.js TAP should handle RegExps > undefined 3`] = `
--- expected
+++ actual
 /[a]/
`

exports[`test/match.js TAP should handle RegExps > undefined 4`] = `
--- expected
+++ actual
 /ab?[a-z]{,6}/g
`

exports[`test/match.js TAP should handle RegExps > undefined 5`] = `
--- expected
+++ actual
-/asdf/
+Array [
+  1,
+  2,
+  3,
+]

`

exports[`test/match.js TAP should handle RegExps > undefined 6`] = `
--- expected
+++ actual
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/match.js TAP should handle RegExps > undefined 7`] = `
--- expected
+++ actual
 Object {
   "x": 123,
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 8`] = `
--- expected
+++ actual
 Object {
   "toString": Function toString(),
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 9`] = `
--- expected
+++ actual
-/^FooBar$/
+Object {
+  "toString": Function toString(),
+}

`

exports[`test/match.js TAP should handle functions > undefined 1`] = `
--- expected
+++ actual
 Function a()
`

exports[`test/match.js TAP should handle functions > undefined 2`] = `
--- expected
+++ actual
-Function a()
+Function a()

`

exports[`test/match.js TAP should handle functions > undefined 3`] = `
--- expected
+++ actual
-Function fnB(a)
+Function fnA(a)

`

exports[`test/match.js TAP should handle functions > undefined 4`] = `
--- expected
+++ actual
 Function fnA(a)
`

exports[`test/match.js TAP should handle functions > undefined 5`] = `
--- expected
+++ actual
 Function fnB(a)
`

exports[`test/match.js TAP should handle arguments > undefined 1`] = `
--- expected
+++ actual
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP should handle arguments > undefined 2`] = `
--- expected
+++ actual
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP should handle arguments > undefined 3`] = `
--- expected
+++ actual
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP same arrays match > undefined 1`] = `
--- expected
+++ actual
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/match.js TAP different arrays don't match > undefined 1`] = `
--- expected
+++ actual
 Array [
   1,
   2,
   3,
-  4,
 ]
`

exports[`test/match.js TAP different arrays don't match > undefined 2`] = `
--- expected
+++ actual
 Array [
   1,
   2,
-  4,
+  3,
 ]
`

exports[`test/match.js TAP empty arrays match > undefined 1`] = `
--- expected
+++ actual
 Array []
`

exports[`test/match.js TAP empty arrays match > undefined 2`] = `
--- expected
+++ actual
 Object {
   "x": Array [],
 }
`

exports[`test/match.js TAP arrays matched against object sets > undefined 1`] = `
--- expected
+++ actual
 Array {
   "foo": "bar",
 }
`

exports[`test/match.js TAP shallower shouldn't care about key order recursively and types > undefined 1`] = `
--- expected
+++ actual
 Object {
   "y": Object {
     "d": 4,
     "c": 3,
   },
   "x": Object {
     "b": 2,
     "a": 1,
   },
 }
`

exports[`test/match.js TAP undefined is the same as itself > undefined 1`] = `
--- expected
+++ actual
 undefined
`

exports[`test/match.js TAP undefined is the same as itself > undefined 2`] = `
--- expected
+++ actual
 Object {
   "x": undefined,
 }
`

exports[`test/match.js TAP undefined is the same as itself > undefined 3`] = `
--- expected
+++ actual
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 1`] = `
--- expected
+++ actual
 undefined
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 2`] = `
--- expected
+++ actual
 Object {
   "x": null,
 }
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 3`] = `
--- expected
+++ actual
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 1`] = `
--- expected
+++ actual
 null
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 2`] = `
--- expected
+++ actual
 Object {
   "x": null,
 }
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 3`] = `
--- expected
+++ actual
 Object {
   "x": Array [
     null,
   ],
 }
`

exports[`test/match.js TAP the same number matches > undefined 1`] = `
--- expected
+++ actual
 0
`

exports[`test/match.js TAP the same number matches > undefined 2`] = `
--- expected
+++ actual
 1
`

exports[`test/match.js TAP the same number matches > undefined 3`] = `
--- expected
+++ actual
 3.14
`

exports[`test/match.js TAP different numbers don't match > undefined 1`] = `
--- expected
+++ actual
-1
+0

`

exports[`test/match.js TAP different numbers don't match > undefined 2`] = `
--- expected
+++ actual
--1
+1

`

exports[`test/match.js TAP different numbers don't match > undefined 3`] = `
--- expected
+++ actual
-2.72
+3.14

`

exports[`test/match.js TAP tmatch shouldn't care about key order (but still might) and types > undefined 1`] = `
--- expected
+++ actual
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
       "a": 1,
       "b": 2,
       "c": 3,
       "d": 4,
     },
   },
 ]
`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > undefined 1`] = `
--- expected
+++ actual
 &ref_1 Object {
   "z": 4,
   "y": Object {
     "x": <*ref_1>,
   },
 }
`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > undefined 2`] = `
--- expected
+++ actual
 &ref_1 Object {
   "z": 4,
   "y": Object {
     "x": <*ref_1>,
   },
   "other": &ref_2 Object {
     "z": 4,
     "y": Object {
       "x": <*ref_2>,
     },
     "other": <*ref_1>,
   },
 }
`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > undefined 3`] = `
--- expected
+++ actual
 &ref_1 Object {
   "z": 4,
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

exports[`test/match.js TAP regexps match strings > undefined 1`] = `
--- expected
+++ actual
 Object {
   "one": "String",
 }
`

exports[`test/match.js TAP regexps match strings > undefined 2`] = `
--- expected
+++ actual
 "String"
`

exports[`test/match.js TAP regexps match strings > undefined 3`] = `
--- expected
+++ actual
 Array [
   "String",
   "String",
 ]
`

exports[`test/match.js TAP regexps match strings > undefined 4`] = `
--- expected
+++ actual
 Array [
-  /.ring$/,
+  "Ring",
 ]
`

exports[`test/match.js TAP partial strings match on indexOf > undefined 1`] = `
--- expected
+++ actual
 Object {
   "one": "String",
 }
`

exports[`test/match.js TAP partial strings match on indexOf > undefined 2`] = `
--- expected
+++ actual
 Object {
-  "one": "String",
+  "one": "rin",
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 1`] = `
--- expected
+++ actual
-Buffer <61 73 64 66 66>
+Buffer <61 73 64 66>

`

exports[`test/match.js TAP ctors and other fun things > undefined 2`] = `
--- expected
+++ actual
 Object {
   "buffer": Buffer <78>,
   "date": 1979-07-01T19:10:00.000Z,
   "fn": Function fn(),
   "foo": Foo {
     "_isFoo": "foo",
   },
   "num": 1.2,
   "nan": null,
   "bool": true,
   "array": Array [],
   "str": "asdf",
   "map": Map {
     1 => 2,
     3 => 4,
   },
   "set": Set {
     1,
     2,
     3,
     4,
   },
   "obj": Object {
     "a": 1,
   },
   "cls": Cls {},
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 3`] = `
--- expected
+++ actual
 Object {
   "buffer": Buffer <78>,
   "date": 1979-07-01T19:10:00.000Z,
   "foo": Foo {
     "_isFoo": "foo",
   },
   "str": "asdf",
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 4`] = `
--- expected
+++ actual
 Object {
-  "inf": Function Number(),
+  "inf": null,
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 5`] = `
--- expected
+++ actual
 Object {
-  "neginf": Function Number(),
+  "neginf": null,
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 6`] = `
--- expected
+++ actual
 Object {
-  "nan": Function Number(),
+  "nan": null,
 }
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 1`] = `
--- expected
+++ actual
-1
+Array [
+  1,
+]

`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 2`] = `
--- expected
+++ actual
-Array [
-  1,
-]
+1

`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 3`] = `
--- expected
+++ actual
 Array [
   1,
 ]
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 4`] = `
--- expected
+++ actual
 Object {}
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 5`] = `
--- expected
+++ actual
 1
`

exports[`test/match.js TAP symbology > undefined 1`] = `
--- expected
+++ actual
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 2`] = `
--- expected
+++ actual
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 3`] = `
--- expected
+++ actual
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 4`] = `
--- expected
+++ actual
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 5`] = `
--- expected
+++ actual
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/match.js TAP symbology > undefined 6`] = `
--- expected
+++ actual
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/match.js TAP symbology > undefined 7`] = `
--- expected
+++ actual
 Object {
-  "a": Function Symbol(),
+  "a": "Symbol(a)",
 }
`

exports[`test/match.js TAP set vs non-set, map vs non-map > undefined 1`] = `
--- expected
+++ actual
 Object {
-  "set": Map {},
+  "set": Set {},
   "map": Map {},
 }
`

exports[`test/match.js TAP set vs non-set, map vs non-map > undefined 2`] = `
--- expected
+++ actual
 Object {
   "set": Set {},
-  "map": Set {},
+  "map": Map {},
 }
`

exports[`test/match.js TAP set vs non-set, map vs non-map > undefined 3`] = `
--- expected
+++ actual
 Object {
-  "set": Array [],
+  "set": Set {},
-  "map": Function Array(),
+  "map": Map {},
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 1`] = `
--- expected
+++ actual
 Object {
   "er": TypeError: asdf {
     "name": "TypeError",
     "message": "asdf",
   },
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 2`] = `
--- expected
+++ actual
 Object {
-  "er": TypeError: asdf,
+  "er": Object {
+    "name": "TypeError",
+    "message": "asdf",
+  },
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 3`] = `
--- expected
+++ actual
 Object {
   "er": TypeError: asdf,
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 4`] = `
--- expected
+++ actual
 Object {
   "er": TypeError: asdf,
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 5`] = `
--- expected
+++ actual
 Object {
-  "er": Error: fdsa,
+  "er": TypeError: asdf,
 }
`

exports[`test/match.js TAP errors can only be satisfied by errors > undefined 6`] = `
--- expected
+++ actual
 Object {
-  "er": Object {
-    "message": "yolo",
-  },
+  "er": TypeError: asdf,
 }
`
