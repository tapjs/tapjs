/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/match.js TAP shouldn't care about key order and types > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
   "b": 2,
 }
`

exports[`test/match.js TAP should notice objects with different shapes > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
-  "b": undefined,
+  "b": "a thing",
 }
`

exports[`test/match.js TAP should notice objects with different shapes > undefined 2`] = `
--- actual
+++ expected
 Object {
   "a": 1,
   "b": undefined,
 }
`

exports[`test/match.js TAP extra keys in object are ok > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
   "b": null,
 }
`

exports[`test/match.js TAP should notice objects with different keys > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": 1,
+  "b": 2,
-  "c": 2,
 }
`

exports[`test/match.js TAP should handle dates > undefined 1`] = `
--- actual
+++ expected
-null
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > undefined 2`] = `
--- actual
+++ expected
-undefined
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > undefined 3`] = `
--- actual
+++ expected
 1972-08-01T00:00:00.000Z
`

exports[`test/match.js TAP should handle dates > undefined 4`] = `
--- actual
+++ expected
 Object {
   "x": 1972-08-01T00:00:00.000Z,
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 1`] = `
--- actual
+++ expected
-/[a]/
+/[b]/

`

exports[`test/match.js TAP should handle RegExps > undefined 2`] = `
--- actual
+++ expected
-/[a]/g
+/[a]/i

`

exports[`test/match.js TAP should handle RegExps > undefined 3`] = `
--- actual
+++ expected
 /[a]/
`

exports[`test/match.js TAP should handle RegExps > undefined 4`] = `
--- actual
+++ expected
 /ab?[a-z]{,6}/g
`

exports[`test/match.js TAP should handle RegExps > undefined 5`] = `
--- actual
+++ expected
-/asdf/
+Array [
+  1,
+  2,
+  3,
+]

`

exports[`test/match.js TAP should handle RegExps > undefined 6`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/match.js TAP should handle RegExps > undefined 7`] = `
--- actual
+++ expected
 Object {
   "x": 123,
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 8`] = `
--- actual
+++ expected
 Object {
   "toString": [Function toString],
 }
`

exports[`test/match.js TAP should handle RegExps > undefined 9`] = `
--- actual
+++ expected
-/^FooBar$/
+Object {
+  "toString": [Function toString],
+}

`

exports[`test/match.js TAP should handle functions > undefined 1`] = `
--- actual
+++ expected
-[Function a]
+[Function a]

`

exports[`test/match.js TAP should handle functions > undefined 2`] = `
--- actual
+++ expected
-[Function fnB]
+[Function fnA]

`

exports[`test/match.js TAP should handle functions > undefined 3`] = `
--- actual
+++ expected
 [Function fnA]
`

exports[`test/match.js TAP should handle functions > undefined 4`] = `
--- actual
+++ expected
 [Function fnB]
`

exports[`test/match.js TAP should handle arguments > undefined 1`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP should handle arguments > undefined 2`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP should handle arguments > undefined 3`] = `
--- actual
+++ expected
 Arguments [
   Test [
   ],
 ]
`

exports[`test/match.js TAP same arrays match > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
 ]
`

exports[`test/match.js TAP different arrays don't match > undefined 1`] = `
--- actual
+++ expected
 Array [
   1,
   2,
   3,
-  4,
 ]
`

exports[`test/match.js TAP different arrays don't match > undefined 2`] = `
--- actual
+++ expected
 Array [
   1,
   2,
-  4,
+  3,
 ]
`

exports[`test/match.js TAP empty arrays match > undefined 1`] = `
--- actual
+++ expected
 Array []
`

exports[`test/match.js TAP empty arrays match > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": Array [],
 }
`

exports[`test/match.js TAP shallower shouldn't care about key order recursively and types > undefined 1`] = `
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

exports[`test/match.js TAP undefined is the same as itself > undefined 1`] = `
--- actual
+++ expected
 undefined
`

exports[`test/match.js TAP undefined is the same as itself > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": undefined,
 }
`

exports[`test/match.js TAP undefined is the same as itself > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 1`] = `
--- actual
+++ expected
 undefined
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": null,
 }
`

exports[`test/match.js TAP undefined and null are Close Enough > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     undefined,
   ],
 }
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 1`] = `
--- actual
+++ expected
 null
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 2`] = `
--- actual
+++ expected
 Object {
   "x": null,
 }
`

exports[`test/match.js TAP null is as shallow as you'd expect > undefined 3`] = `
--- actual
+++ expected
 Object {
   "x": Array [
     null,
   ],
 }
`

exports[`test/match.js TAP the same number matches > undefined 1`] = `
--- actual
+++ expected
 0
`

exports[`test/match.js TAP the same number matches > undefined 2`] = `
--- actual
+++ expected
 1
`

exports[`test/match.js TAP the same number matches > undefined 3`] = `
--- actual
+++ expected
 3.14
`

exports[`test/match.js TAP different numbers don't match > undefined 1`] = `
--- actual
+++ expected
-1
+0

`

exports[`test/match.js TAP different numbers don't match > undefined 2`] = `
--- actual
+++ expected
--1
+1

`

exports[`test/match.js TAP different numbers don't match > undefined 3`] = `
--- actual
+++ expected
-2.72
+3.14

`

exports[`test/match.js TAP tmatch shouldn't care about key order (but still might) and types > undefined 1`] = `
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

exports[`test/match.js TAP match shouldn't blow up on circular data structures > undefined 1`] = `
--- actual
+++ expected
 &ref_1 Object {
   "z": 4,
   "y": Object {
     "x": <*ref_1>,
   },
 }
`

exports[`test/match.js TAP regexps match strings > undefined 1`] = `
--- actual
+++ expected
 Object {
   "one": "String",
 }
`

exports[`test/match.js TAP regexps match strings > undefined 2`] = `
--- actual
+++ expected
 "String"
`

exports[`test/match.js TAP regexps match strings > undefined 3`] = `
--- actual
+++ expected
 Array [
   "String",
   "String",
 ]
`

exports[`test/match.js TAP regexps match strings > undefined 4`] = `
--- actual
+++ expected
 Array [
-  /.ring$/,
+  "Ring",
 ]
`

exports[`test/match.js TAP partial strings match on indexOf > undefined 1`] = `
--- actual
+++ expected
 Object {
   "one": "String",
 }
`

exports[`test/match.js TAP partial strings match on indexOf > undefined 2`] = `
--- actual
+++ expected
 Object {
-  "one": "String",
+  "one": "rin",
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 1`] = `
--- actual
+++ expected
 Uint8Array [
   97,
   115,
   100,
   102,
-  102,
 ]
`

exports[`test/match.js TAP ctors and other fun things > undefined 2`] = `
--- actual
+++ expected
 Object {
   "buffer": Uint8Array [
     120,
   ],
   "date": 1979-07-01T19:10:00.000Z,
   "fn": [Function fn],
   "foo": Foo {
     "_isFoo": "foo",
   },
   "num": 1.2,
   "nan": null,
   "bool": true,
   "array": Array [],
   "str": "asdf",
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 3`] = `
--- actual
+++ expected
 Object {
   "buffer": Uint8Array [
     120,
   ],
   "date": 1979-07-01T19:10:00.000Z,
   "foo": Foo {
     "_isFoo": "foo",
   },
   "str": "asdf",
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 4`] = `
--- actual
+++ expected
 Object {
-  "inf": [Function Number],
+  "inf": null,
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 5`] = `
--- actual
+++ expected
 Object {
-  "neginf": [Function Number],
+  "neginf": null,
 }
`

exports[`test/match.js TAP ctors and other fun things > undefined 6`] = `
--- actual
+++ expected
 Object {
-  "nan": [Function Number],
+  "nan": null,
 }
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 1`] = `
--- actual
+++ expected
-1
+Array [
+  1,
+]

`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 2`] = `
--- actual
+++ expected
-Array [
-  1,
-]
+1

`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 3`] = `
--- actual
+++ expected
 Array [
   1,
 ]
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 4`] = `
--- actual
+++ expected
 Object {}
`

exports[`test/match.js TAP js WAT! array/string stuff > undefined 5`] = `
--- actual
+++ expected
 1
`

exports[`test/match.js TAP symbology > undefined 1`] = `
--- actual
+++ expected
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 2`] = `
--- actual
+++ expected
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 3`] = `
--- actual
+++ expected
 Object {
   "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 4`] = `
--- actual
+++ expected
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }
`

exports[`test/match.js TAP symbology > undefined 5`] = `
--- actual
+++ expected
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/match.js TAP symbology > undefined 6`] = `
--- actual
+++ expected
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }
`

exports[`test/match.js TAP symbology > undefined 7`] = `
--- actual
+++ expected
 Object {
-  "a": [Function Symbol],
+  "a": "Symbol(a)",
 }
`
