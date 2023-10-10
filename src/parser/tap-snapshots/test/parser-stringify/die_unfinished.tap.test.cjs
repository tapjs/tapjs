/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > bail > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > bail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > default settings > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > default settings > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strict > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strict > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
      "closingTestPoint": false,
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
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strictBail > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`

exports[`test/parse-stringify.ts > TAP > die_unfinished.tap > strictBail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
# test count(3) != plan(4)

`
