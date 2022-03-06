/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP delayed.tap bail > parsed 1`] = `
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
      "name": "00000",
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
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP delayed.tap bail > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser-stringify.js TAP delayed.tap bail > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser-stringify.js TAP delayed.tap default settings > parsed 1`] = `
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
      "name": "00000",
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
      "ok": false,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP delayed.tap default settings > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP delayed.tap default settings > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP delayed.tap strict > parsed 1`] = `
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
      "name": "00000",
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
      "ok": false,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP delayed.tap strict > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP delayed.tap strict > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP delayed.tap strictBail > parsed 1`] = `
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
      "name": "00000",
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
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP delayed.tap strictBail > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser-stringify.js TAP delayed.tap strictBail > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`
