/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP wrong-last.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "diag": null,
        "fullname": "",
        "id": 4,
        "name": "",
        "ok": true,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": false,
      "tapError": "test point id 4 appears multiple times",
      "time": null,
      "todo": false,
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": Result {
            "buffered": false,
            "diag": null,
            "fullname": "",
            "id": 4,
            "name": "",
            "ok": true,
            "plan": null,
            "previous": null,
            "skip": false,
            "tapError": null,
            "time": null,
            "todo": false,
          },
          "skip": false,
          "tapError": "test point id 4 appears multiple times",
          "time": null,
          "todo": false,
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

exports[`test/parse-stringify.ts TAP wrong-last.tap bail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 4
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap bail > stringified flat 1`] = `
TAP version 13
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "diag": null,
        "fullname": "",
        "id": 4,
        "name": "",
        "ok": true,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": false,
      "tapError": "test point id 4 appears multiple times",
      "time": null,
      "todo": false,
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": Result {
            "buffered": false,
            "diag": null,
            "fullname": "",
            "id": 4,
            "name": "",
            "ok": true,
            "plan": null,
            "previous": null,
            "skip": false,
            "tapError": null,
            "time": null,
            "todo": false,
          },
          "skip": false,
          "tapError": "test point id 4 appears multiple times",
          "time": null,
          "todo": false,
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

exports[`test/parse-stringify.ts TAP wrong-last.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "diag": null,
        "fullname": "",
        "id": 4,
        "name": "",
        "ok": true,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": false,
      "tapError": "test point id 4 appears multiple times",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": Result {
            "buffered": false,
            "diag": null,
            "fullname": "",
            "id": 4,
            "name": "",
            "ok": true,
            "plan": null,
            "previous": null,
            "skip": false,
            "tapError": null,
            "time": null,
            "todo": false,
          },
          "skip": false,
          "tapError": "test point id 4 appears multiple times",
          "time": null,
          "todo": false,
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

exports[`test/parse-stringify.ts TAP wrong-last.tap default settings > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 4
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap default settings > stringified flat 1`] = `
TAP version 13
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "diag": null,
        "fullname": "",
        "id": 4,
        "name": "",
        "ok": true,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": false,
      "tapError": "test point id 4 appears multiple times",
      "time": null,
      "todo": false,
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": Result {
            "buffered": false,
            "diag": null,
            "fullname": "",
            "id": 4,
            "name": "",
            "ok": true,
            "plan": null,
            "previous": null,
            "skip": false,
            "tapError": null,
            "time": null,
            "todo": false,
          },
          "skip": false,
          "tapError": "test point id 4 appears multiple times",
          "time": null,
          "todo": false,
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

exports[`test/parse-stringify.ts TAP wrong-last.tap strict > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 4
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap strict > stringified flat 1`] = `
TAP version 13
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "diag": null,
        "fullname": "",
        "id": 4,
        "name": "",
        "ok": true,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": false,
      "tapError": "test point id 4 appears multiple times",
      "time": null,
      "todo": false,
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": Result {
            "buffered": false,
            "diag": null,
            "fullname": "",
            "id": 4,
            "name": "",
            "ok": true,
            "plan": null,
            "previous": null,
            "skip": false,
            "tapError": null,
            "time": null,
            "todo": false,
          },
          "skip": false,
          "tapError": "test point id 4 appears multiple times",
          "time": null,
          "todo": false,
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

exports[`test/parse-stringify.ts TAP wrong-last.tap strictBail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 4
# failed 1 of 5 tests

`

exports[`test/parse-stringify.ts TAP wrong-last.tap strictBail > stringified flat 1`] = `
TAP version 13
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
# failed 1 of 5 tests

`
