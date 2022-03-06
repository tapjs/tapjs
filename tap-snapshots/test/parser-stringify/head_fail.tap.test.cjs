/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP head_fail.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
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

exports[`test/parser-stringify.js TAP head_fail.tap bail > stringified 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP head_fail.tap bail > stringified flat 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP head_fail.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
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
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP head_fail.tap default settings > stringified 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP head_fail.tap default settings > stringified flat 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP head_fail.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
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
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP head_fail.tap strict > stringified 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP head_fail.tap strict > stringified flat 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP head_fail.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
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

exports[`test/parser-stringify.js TAP head_fail.tap strictBail > stringified 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser-stringify.js TAP head_fail.tap strictBail > stringified flat 1`] = `
# comments
ok 1
not ok 2
Bail out!

`
