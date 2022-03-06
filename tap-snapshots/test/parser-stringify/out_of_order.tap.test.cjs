/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP out_of_order.tap bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test that argument passing works",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Test that passing arguments as references work",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Test a normal sub",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Detach test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 12,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 13,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
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
    "comment",
    "# failed 1 of 10 tests\\n",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parser-stringify.js TAP out_of_order.tap bail > stringified 1`] = `
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
# failed 1 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap bail > stringified flat 1`] = `
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
# failed 1 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test that argument passing works",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Test that passing arguments as references work",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Test a normal sub",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Detach test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 12,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 13,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
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
    "comment",
    "# failed 1 of 10 tests\\n",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parser-stringify.js TAP out_of_order.tap default settings > stringified 1`] = `
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
# failed 1 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap default settings > stringified flat 1`] = `
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
# failed 1 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test that argument passing works",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Test that passing arguments as references work",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Test a normal sub",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Detach test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 12,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 13,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
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
    "comment",
    "# failed 5 of 10 tests\\n",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parser-stringify.js TAP out_of_order.tap strict > stringified 1`] = `
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
# failed 5 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap strict > stringified flat 1`] = `
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
# failed 5 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test that argument passing works",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Test that passing arguments as references work",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Test a normal sub",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Detach test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Nested thread test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "Wanted 7, got 7",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 12,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 13,
      "name": "Wanted 8, got 8",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
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
    "comment",
    "# failed 5 of 10 tests\\n",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 15,
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

exports[`test/parser-stringify.js TAP out_of_order.tap strictBail > stringified 1`] = `
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
# failed 5 of 10 tests

`

exports[`test/parser-stringify.js TAP out_of_order.tap strictBail > stringified flat 1`] = `
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
# failed 5 of 10 tests

`
