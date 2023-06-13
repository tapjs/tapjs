/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > out_of_order.tap > bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "Test that argument passing works",
      "id": 2,
      "name": "Test that argument passing works",
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
      "fullname": "Test that passing arguments as references work",
      "id": 3,
      "name": "Test that passing arguments as references work",
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
      "fullname": "Test a normal sub",
      "id": 4,
      "name": "Test a normal sub",
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
      "fullname": "Detach test",
      "id": 6,
      "name": "Detach test",
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
      "fullname": "Nested thread test",
      "id": 8,
      "name": "Nested thread test",
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
      "fullname": "Nested thread test",
      "id": 9,
      "name": "Nested thread test",
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
      "fullname": "Wanted 7, got 7",
      "id": 10,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 7, got 7",
      "id": 11,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 8, got 8",
      "id": 12,
      "name": "Wanted 8, got 8",
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
      "fullname": "Wanted 8, got 8",
      "id": 13,
      "name": "Wanted 8, got 8",
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
    "plan",
    Plan {
      "comment": "",
      "end": 15,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 10,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > bail > stringified 1`] = `
ok 2 - Test that argument passing works
ok 3 - Test that passing arguments as references work
ok 4 - Test a normal sub
ok 6 - Detach test
ok 8 - Nested thread test
ok 9 - Nested thread test
ok 10 - Wanted 7, got 7
ok 11 - Wanted 7, got 7
ok 12 - Wanted 8, got 8
ok 13 - Wanted 8, got 8
1..15
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > bail > stringified flat 1`] = `
ok 1 - Test that argument passing works
ok 2 - Test that passing arguments as references work
ok 3 - Test a normal sub
ok 4 - Detach test
ok 5 - Nested thread test
ok 6 - Nested thread test
ok 7 - Wanted 7, got 7
ok 8 - Wanted 7, got 7
ok 9 - Wanted 8, got 8
ok 10 - Wanted 8, got 8
1..10
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "Test that argument passing works",
      "id": 2,
      "name": "Test that argument passing works",
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
      "fullname": "Test that passing arguments as references work",
      "id": 3,
      "name": "Test that passing arguments as references work",
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
      "fullname": "Test a normal sub",
      "id": 4,
      "name": "Test a normal sub",
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
      "fullname": "Detach test",
      "id": 6,
      "name": "Detach test",
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
      "fullname": "Nested thread test",
      "id": 8,
      "name": "Nested thread test",
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
      "fullname": "Nested thread test",
      "id": 9,
      "name": "Nested thread test",
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
      "fullname": "Wanted 7, got 7",
      "id": 10,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 7, got 7",
      "id": 11,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 8, got 8",
      "id": 12,
      "name": "Wanted 8, got 8",
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
      "fullname": "Wanted 8, got 8",
      "id": 13,
      "name": "Wanted 8, got 8",
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
    "plan",
    Plan {
      "comment": "",
      "end": 15,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 10,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "Test that argument passing works",
      "id": 1,
      "name": "Test that argument passing works",
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
      "fullname": "Test that passing arguments as references work",
      "id": 2,
      "name": "Test that passing arguments as references work",
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
      "fullname": "Test a normal sub",
      "id": 3,
      "name": "Test a normal sub",
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
      "fullname": "Detach test",
      "id": 4,
      "name": "Detach test",
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
      "fullname": "Nested thread test",
      "id": 5,
      "name": "Nested thread test",
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
      "fullname": "Nested thread test",
      "id": 6,
      "name": "Nested thread test",
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
      "fullname": "Wanted 7, got 7",
      "id": 7,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 7, got 7",
      "id": 8,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 8, got 8",
      "id": 9,
      "name": "Wanted 8, got 8",
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
      "fullname": "Wanted 8, got 8",
      "id": 10,
      "name": "Wanted 8, got 8",
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
    "extra",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
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
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 10,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > default settings > stringified 1`] = `
ok 2 - Test that argument passing works
ok 3 - Test that passing arguments as references work
ok 4 - Test a normal sub
ok 6 - Detach test
ok 8 - Nested thread test
ok 9 - Nested thread test
ok 10 - Wanted 7, got 7
ok 11 - Wanted 7, got 7
ok 12 - Wanted 8, got 8
ok 13 - Wanted 8, got 8
1..15
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > default settings > stringified flat 1`] = `
ok 1 - Test that argument passing works
ok 2 - Test that passing arguments as references work
ok 3 - Test a normal sub
ok 4 - Detach test
ok 5 - Nested thread test
ok 6 - Nested thread test
ok 7 - Wanted 7, got 7
ok 8 - Wanted 7, got 7
ok 9 - Wanted 8, got 8
ok 10 - Wanted 8, got 8
1..10
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "Test that argument passing works",
      "id": 2,
      "name": "Test that argument passing works",
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
      "fullname": "Test that passing arguments as references work",
      "id": 3,
      "name": "Test that passing arguments as references work",
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
      "fullname": "Test a normal sub",
      "id": 4,
      "name": "Test a normal sub",
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
      "fullname": "Detach test",
      "id": 6,
      "name": "Detach test",
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
      "fullname": "Nested thread test",
      "id": 8,
      "name": "Nested thread test",
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
      "fullname": "Nested thread test",
      "id": 9,
      "name": "Nested thread test",
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
      "fullname": "Wanted 7, got 7",
      "id": 10,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 7, got 7",
      "id": 11,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 8, got 8",
      "id": 12,
      "name": "Wanted 8, got 8",
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
      "fullname": "Wanted 8, got 8",
      "id": 13,
      "name": "Wanted 8, got 8",
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
    "plan",
    Plan {
      "comment": "",
      "end": 15,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "ok 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 5 - Check that Config::threads is true\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 7 - Detach test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 14 - Check so that tid for threads work for main thread\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 15 - Check so that tid for threads work for main thread\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 10,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strict > stringified 1`] = `
ok 2 - Test that argument passing works
ok 3 - Test that passing arguments as references work
ok 4 - Test a normal sub
ok 6 - Detach test
ok 8 - Nested thread test
ok 9 - Nested thread test
ok 10 - Wanted 7, got 7
ok 11 - Wanted 7, got 7
ok 12 - Wanted 8, got 8
ok 13 - Wanted 8, got 8
1..15
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strict > stringified flat 1`] = `
ok 1 - Test that argument passing works
ok 2 - Test that passing arguments as references work
ok 3 - Test a normal sub
ok 4 - Detach test
ok 5 - Nested thread test
ok 6 - Nested thread test
ok 7 - Wanted 7, got 7
ok 8 - Wanted 7, got 7
ok 9 - Wanted 8, got 8
ok 10 - Wanted 8, got 8
1..10
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "Test that argument passing works",
      "id": 2,
      "name": "Test that argument passing works",
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
      "fullname": "Test that passing arguments as references work",
      "id": 3,
      "name": "Test that passing arguments as references work",
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
      "fullname": "Test a normal sub",
      "id": 4,
      "name": "Test a normal sub",
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
      "fullname": "Detach test",
      "id": 6,
      "name": "Detach test",
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
      "fullname": "Nested thread test",
      "id": 8,
      "name": "Nested thread test",
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
      "fullname": "Nested thread test",
      "id": 9,
      "name": "Nested thread test",
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
      "fullname": "Wanted 7, got 7",
      "id": 10,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 7, got 7",
      "id": 11,
      "name": "Wanted 7, got 7",
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
      "fullname": "Wanted 8, got 8",
      "id": 12,
      "name": "Wanted 8, got 8",
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
      "fullname": "Wanted 8, got 8",
      "id": 13,
      "name": "Wanted 8, got 8",
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
    "plan",
    Plan {
      "comment": "",
      "end": 15,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "ok 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 5 - Check that Config::threads is true\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 7 - Detach test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 14 - Check so that tid for threads work for main thread\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "ok 15 - Check so that tid for threads work for main thread\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 10,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strictBail > stringified 1`] = `
ok 2 - Test that argument passing works
ok 3 - Test that passing arguments as references work
ok 4 - Test a normal sub
ok 6 - Detach test
ok 8 - Nested thread test
ok 9 - Nested thread test
ok 10 - Wanted 7, got 7
ok 11 - Wanted 7, got 7
ok 12 - Wanted 8, got 8
ok 13 - Wanted 8, got 8
1..15
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`

exports[`test/parse-stringify.ts > TAP > out_of_order.tap > strictBail > stringified flat 1`] = `
ok 1 - Test that argument passing works
ok 2 - Test that passing arguments as references work
ok 3 - Test a normal sub
ok 4 - Detach test
ok 5 - Nested thread test
ok 6 - Nested thread test
ok 7 - Wanted 7, got 7
ok 8 - Wanted 7, got 7
ok 9 - Wanted 8, got 8
ok 10 - Wanted 8, got 8
1..10
ok 1
ok 5 - Check that Config::threads is true
ok 7 - Detach test
ok 14 - Check so that tid for threads work for main thread
ok 15 - Check so that tid for threads work for main thread
# test count(10) != plan(15)

`
