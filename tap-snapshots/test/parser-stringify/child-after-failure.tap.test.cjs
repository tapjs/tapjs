/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP child-after-failure.tap bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "name": "1",
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

exports[`test/parser-stringify.js TAP child-after-failure.tap bail > stringified 1`] = `
not ok - 1
Bail out! 1

`

exports[`test/parser-stringify.js TAP child-after-failure.tap bail > stringified flat 1`] = `
not ok - 1
Bail out! 1

`

exports[`test/parser-stringify.js TAP child-after-failure.tap default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
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
          "name": "1",
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

exports[`test/parser-stringify.js TAP child-after-failure.tap default settings > stringified 1`] = `
not ok - 1
# Subtest: child
    ok
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP child-after-failure.tap default settings > stringified flat 1`] = `
not ok - 1
# Subtest: child
    ok
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP child-after-failure.tap strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
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
          "name": "1",
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

exports[`test/parser-stringify.js TAP child-after-failure.tap strict > stringified 1`] = `
not ok - 1
# Subtest: child
    ok
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP child-after-failure.tap strict > stringified flat 1`] = `
not ok - 1
# Subtest: child
    ok
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP child-after-failure.tap strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "name": "1",
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

exports[`test/parser-stringify.js TAP child-after-failure.tap strictBail > stringified 1`] = `
not ok - 1
Bail out! 1

`

exports[`test/parser-stringify.js TAP child-after-failure.tap strictBail > stringified flat 1`] = `
not ok - 1
Bail out! 1

`
