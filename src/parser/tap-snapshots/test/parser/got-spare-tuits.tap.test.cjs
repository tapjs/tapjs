/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > got-spare-tuits.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
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
      "todo": 2,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "infinite loop",
          "id": 3,
          "name": "infinite loop",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "halting problem unsolved",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "infinite loop 2",
          "id": 4,
          "name": "infinite loop 2",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "halting problem unsolved",
        },
      ],
    },
  ],
]
`

exports[`test/parser.ts > TAP > got-spare-tuits.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Creating test program",
      "id": 1,
      "name": "Creating test program",
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
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Test program runs, no error",
      "id": 2,
      "name": "Test program runs, no error",
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
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "infinite loop 2",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
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
      "todo": 2,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "infinite loop",
          "id": 3,
          "name": "infinite loop",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "halting problem unsolved",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "infinite loop 2",
          "id": 4,
          "name": "infinite loop 2",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "halting problem unsolved",
        },
      ],
    },
  ],
]
`
