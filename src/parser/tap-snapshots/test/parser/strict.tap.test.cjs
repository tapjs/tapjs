/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > strict.tap > output bail=false 1`] = `
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
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser.ts > TAP > strict.tap > output bail=true 1`] = `
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
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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
