/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > skip-one-ok.tap > output bail=false 1`] = `
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
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
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
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "totally fine",
          "id": 1,
          "name": "totally fine",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
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
]
`

exports[`test/parser.ts > TAP > skip-one-ok.tap > output bail=true 1`] = `
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
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
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
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "totally fine",
      "id": 1,
      "name": "totally fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "totally fine",
          "id": 1,
          "name": "totally fine",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
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
]
`
