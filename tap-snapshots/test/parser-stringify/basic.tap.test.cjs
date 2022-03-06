/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP basic.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
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
        "end": 6,
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

exports[`test/parser-stringify.js TAP basic.tap bail > stringified 1`] = `
1..6
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP basic.tap bail > stringified flat 1`] = `
1..6
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP basic.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
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
          "ok": false,
        },
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP basic.tap default settings > stringified 1`] = `
1..6
not ok
ok
not ok
ok
ok
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP basic.tap default settings > stringified flat 1`] = `
1..6
not ok
ok
not ok
ok
ok
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP basic.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
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
          "ok": false,
        },
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP basic.tap strict > stringified 1`] = `
1..6
not ok
ok
not ok
ok
ok
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP basic.tap strict > stringified flat 1`] = `
1..6
not ok
ok
not ok
ok
ok
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser-stringify.js TAP basic.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
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
        "end": 6,
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

exports[`test/parser-stringify.js TAP basic.tap strictBail > stringified 1`] = `
1..6
not ok
Bail out!

`

exports[`test/parser-stringify.js TAP basic.tap strictBail > stringified flat 1`] = `
1..6
not ok
Bail out!

`
