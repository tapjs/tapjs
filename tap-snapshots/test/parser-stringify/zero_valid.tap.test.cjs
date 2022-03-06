/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP zero_valid.tap bail > parsed 1`] = `
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
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
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
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
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

exports[`test/parser-stringify.js TAP zero_valid.tap bail > stringified 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap bail > stringified flat 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap default settings > parsed 1`] = `
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
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
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
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
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

exports[`test/parser-stringify.js TAP zero_valid.tap default settings > stringified 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap default settings > stringified flat 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap strict > parsed 1`] = `
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
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
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
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
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

exports[`test/parser-stringify.js TAP zero_valid.tap strict > stringified 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap strict > stringified flat 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap strictBail > parsed 1`] = `
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
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
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
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
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

exports[`test/parser-stringify.js TAP zero_valid.tap strictBail > stringified 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP zero_valid.tap strictBail > stringified flat 1`] = `
1..5
ok 1 - One
ok 2 - Two
ok - Three
ok 0 - Four
ok 5 - Five
# failed 1 of 5 tests

`
