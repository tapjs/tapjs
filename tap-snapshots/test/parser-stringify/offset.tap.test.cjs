/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP offset.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 11,
      "start": 8,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "start": 8,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP offset.tap bail > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap bail > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 11,
      "start": 8,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "start": 8,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP offset.tap default settings > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap default settings > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 11,
      "start": 8,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "start": 8,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP offset.tap strict > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap strict > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 11,
      "start": 8,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "start": 8,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP offset.tap strictBail > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`

exports[`test/parser-stringify.js TAP offset.tap strictBail > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
8..11
# tests 4
# pass  4
# ok
# test count(4) != plan(11)

`
