/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP pragma-after-failure.tap bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
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
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap bail > stringified 1`] = `
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap bail > stringified flat 1`] = `
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "pragma",
    "custom",
    true,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP pragma-after-failure.tap default settings > stringified 1`] = `
not ok
pragma +custom
ok
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap default settings > stringified flat 1`] = `
not ok
pragma +custom
ok
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "pragma",
    "custom",
    true,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strict > stringified 1`] = `
not ok
pragma +custom
ok
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strict > stringified flat 1`] = `
not ok
pragma +custom
ok
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
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
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strictBail > stringified 1`] = `
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP pragma-after-failure.tap strictBail > stringified flat 1`] = `
not ok
Bail out!

`
