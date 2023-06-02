/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
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
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
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
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > bail > stringified 1`] = `
1..3
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
Bail out!

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > bail > stringified flat 1`] = `
1..0
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
Bail out!

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
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
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Roman numerials still not a built in type",
    },
  ],
  Array [
    "comment",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "comment",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "comment",
    "#     expected: '23'\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
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
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 1,
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

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > default settings > parsed flat 1`] = `
Array [
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
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Roman numerials still not a built in type",
    },
  ],
  Array [
    "comment",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "comment",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "comment",
    "#     expected: '23'\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 3.\\n",
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
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
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
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 1,
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

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > default settings > stringified 1`] = `
1..3
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
not ok 3 # TODO Roman numerials still not a built in type
#   Failed (TODO) test at ../../andy/schwern.pl line 20.
#          got: 'XXIII'
#     expected: '23'
# Looks like you failed 1 test of 3.

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > default settings > stringified flat 1`] = `
1..0
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
not ok 3 # TODO Roman numerials still not a built in type
#   Failed (TODO) test at ../../andy/schwern.pl line 20.
#          got: 'XXIII'
#     expected: '23'
# Looks like you failed 1 test of 3.

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
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
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Roman numerials still not a built in type",
    },
  ],
  Array [
    "comment",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "comment",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "comment",
    "#     expected: '23'\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
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
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 1,
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

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strict > stringified 1`] = `
1..3
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
not ok 3 # TODO Roman numerials still not a built in type
#   Failed (TODO) test at ../../andy/schwern.pl line 20.
#          got: 'XXIII'
#     expected: '23'
# Looks like you failed 1 test of 3.

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strict > stringified flat 1`] = `
1..0
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
not ok 3 # TODO Roman numerials still not a built in type
#   Failed (TODO) test at ../../andy/schwern.pl line 20.
#          got: 'XXIII'
#     expected: '23'
# Looks like you failed 1 test of 3.

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
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
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
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
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strictBail > stringified 1`] = `
1..3
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
Bail out!

`

exports[`test/parse-stringify.ts > TAP > schwern-todo-quiet.tap > strictBail > stringified flat 1`] = `
1..0
ok 1
not ok 2
#   Failed test at ../../andy/schwern.pl line 17.
#          got: '23'
#     expected: '42'
Bail out!

`
