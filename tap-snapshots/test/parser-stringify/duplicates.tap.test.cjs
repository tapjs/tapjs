/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP duplicates.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
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
      "id": 4,
      "ok": true,
      "previous": Result {
        "fullname": "",
        "id": 4,
        "ok": true,
      },
      "tapError": "test point id 4 appears multiple times",
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 4,
          "ok": true,
          "previous": Result {
            "fullname": "",
            "id": 4,
            "ok": true,
          },
          "tapError": "test point id 4 appears multiple times",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP duplicates.tap bail > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap bail > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
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
      "id": 4,
      "ok": true,
      "previous": Result {
        "fullname": "",
        "id": 4,
        "ok": true,
      },
      "tapError": "test point id 4 appears multiple times",
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 4,
          "ok": true,
          "previous": Result {
            "fullname": "",
            "id": 4,
            "ok": true,
          },
          "tapError": "test point id 4 appears multiple times",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP duplicates.tap default settings > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap default settings > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
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
      "id": 4,
      "ok": true,
      "previous": Result {
        "fullname": "",
        "id": 4,
        "ok": true,
      },
      "tapError": "test point id 4 appears multiple times",
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 4,
          "ok": true,
          "previous": Result {
            "fullname": "",
            "id": 4,
            "ok": true,
          },
          "tapError": "test point id 4 appears multiple times",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP duplicates.tap strict > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap strict > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
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
      "id": 4,
      "ok": true,
      "previous": Result {
        "fullname": "",
        "id": 4,
        "ok": true,
      },
      "tapError": "test point id 4 appears multiple times",
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 4,
          "ok": true,
          "previous": Result {
            "fullname": "",
            "id": 4,
            "ok": true,
          },
          "tapError": "test point id 4 appears multiple times",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP duplicates.tap strictBail > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser-stringify.js TAP duplicates.tap strictBail > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`
