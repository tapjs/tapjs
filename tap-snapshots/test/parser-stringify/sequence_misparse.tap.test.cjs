/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP sequence_misparse.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "on foobar system",
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP sequence_misparse.tap bail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap bail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "on foobar system",
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP sequence_misparse.tap default settings > stringified 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap default settings > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "on foobar system",
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strict > stringified 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strict > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "on foobar system",
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strictBail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`

exports[`test/parser-stringify.js TAP sequence_misparse.tap strictBail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3 # SKIP on foobar system
# 1234567890123456789012345678901234567890
ok 4
# 1234567890123456789012345678901234567890
ok 5
# skip: 1

`
