/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP simple_fail.tap bail > parsed 1`] = `
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
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser-stringify.js TAP simple_fail.tap bail > stringified 1`] = `
1..5
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP simple_fail.tap bail > stringified flat 1`] = `
1..5
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP simple_fail.tap default settings > parsed 1`] = `
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
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
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
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser-stringify.js TAP simple_fail.tap default settings > stringified 1`] = `
1..5
ok 1
not ok 2
ok 3
ok 4
not ok 5
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP simple_fail.tap default settings > stringified flat 1`] = `
1..5
ok 1
not ok 2
ok 3
ok 4
not ok 5
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP simple_fail.tap strict > parsed 1`] = `
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
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
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
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser-stringify.js TAP simple_fail.tap strict > stringified 1`] = `
1..5
ok 1
not ok 2
ok 3
ok 4
not ok 5
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP simple_fail.tap strict > stringified flat 1`] = `
1..5
ok 1
not ok 2
ok 3
ok 4
not ok 5
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP simple_fail.tap strictBail > parsed 1`] = `
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
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser-stringify.js TAP simple_fail.tap strictBail > stringified 1`] = `
1..5
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP simple_fail.tap strictBail > stringified flat 1`] = `
1..5
ok 1
not ok 2
Bail out!

`
