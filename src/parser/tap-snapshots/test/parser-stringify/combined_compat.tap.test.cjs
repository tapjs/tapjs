/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > combined_compat.tap > bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
      "fullname": "basset hounds got long ears",
      "id": 2,
      "name": "basset hounds got long ears",
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
      "fullname": "all hell broke lose",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "all hell broke lose",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > bail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > bail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
      "fullname": "basset hounds got long ears",
      "id": 2,
      "name": "basset hounds got long ears",
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
      "fullname": "all hell broke lose",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
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
      "id": 6,
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
      "id": 7,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "contract negociations",
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
      "id": 8,
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
      "id": 9,
      "name": "",
      "ok": false,
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
      "id": 10,
      "name": "",
      "ok": false,
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
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "all hell broke lose",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 9,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 10,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "contract negociations",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
      "fullname": "basset hounds got long ears",
      "id": 2,
      "name": "basset hounds got long ears",
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
      "fullname": "all hell broke lose",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "id": 6,
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
      "id": 7,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "contract negociations",
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
      "id": 8,
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
      "id": 9,
      "name": "",
      "ok": false,
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
      "id": 10,
      "name": "",
      "ok": false,
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
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "all hell broke lose",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 9,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 10,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "contract negociations",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > default settings > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > default settings > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
      "fullname": "basset hounds got long ears",
      "id": 2,
      "name": "basset hounds got long ears",
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
      "fullname": "all hell broke lose",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
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
      "id": 6,
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
      "id": 7,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "contract negociations",
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
      "id": 8,
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
      "id": 9,
      "name": "",
      "ok": false,
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
      "id": 10,
      "name": "",
      "ok": false,
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
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "all hell broke lose",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 9,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 10,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "contract negociations",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strict > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strict > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
      "fullname": "basset hounds got long ears",
      "id": 2,
      "name": "basset hounds got long ears",
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
      "fullname": "all hell broke lose",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "all hell broke lose",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strictBail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parse-stringify.ts > TAP > combined_compat.tap > strictBail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`
