/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP no-numbers.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "we are bad",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "we are bad",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP no-numbers.tap bail > stringified 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
Bail out! we are bad

`

exports[`test/parser-stringify.js TAP no-numbers.tap bail > stringified flat 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
Bail out! we are bad

`

exports[`test/parser-stringify.js TAP no-numbers.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are zesty!",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP no-numbers.tap default settings > stringified 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
ok - we are zesty!
# failed 1 of 3 tests

`

exports[`test/parser-stringify.js TAP no-numbers.tap default settings > stringified flat 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
ok - we are zesty!
# failed 1 of 3 tests

`

exports[`test/parser-stringify.js TAP no-numbers.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are zesty!",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP no-numbers.tap strict > stringified 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
ok - we are zesty!
# failed 1 of 3 tests

`

exports[`test/parser-stringify.js TAP no-numbers.tap strict > stringified flat 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
ok - we are zesty!
# failed 1 of 3 tests

`

exports[`test/parser-stringify.js TAP no-numbers.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "we are bad",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "we are bad",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP no-numbers.tap strictBail > stringified 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
Bail out! we are bad

`

exports[`test/parser-stringify.js TAP no-numbers.tap strictBail > stringified flat 1`] = `
1..3
ok - we are good
not ok 2 - we are bad
Bail out! we are bad

`
