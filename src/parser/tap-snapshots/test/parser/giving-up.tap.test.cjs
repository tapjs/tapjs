/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > giving-up.tap > output bail=false 1`] = `
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
    "1..573\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "fail",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "database handle",
          "id": 1,
          "name": "database handle",
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
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
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
]
`

exports[`test/parser.ts > TAP > giving-up.tap > output bail=true 1`] = `
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
    "1..573\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "fail",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "database handle",
      "id": 1,
      "name": "database handle",
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
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "database handle",
          "id": 1,
          "name": "database handle",
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
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
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
]
`
