/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > garbage-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "line",
    "ok 2 But this is not garbage\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "But this is not garbage",
      "id": 2,
      "name": "But this is not garbage",
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
      "fullname": "But this is not garbage",
      "id": 2,
      "name": "But this is not garbage",
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
      "fullname": "But this is not garbage",
      "id": 2,
      "name": "But this is not garbage",
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
    "not ok 3 truncating the yamlish\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  here: is some yaml\\n",
  ],
  Array [
    "line",
    "  i: guess\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "truncating the yamlish",
      "id": 3,
      "name": "truncating the yamlish",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "truncating the yamlish",
      "id": 3,
      "name": "truncating the yamlish",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "truncating the yamlish",
      "id": 3,
      "name": "truncating the yamlish",
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
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "line",
    "not ok 4 this is truncated weirdly\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "this is truncated weirdly",
      "id": 4,
      "name": "this is truncated weirdly",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "this is truncated weirdly",
      "id": 4,
      "name": "this is truncated weirdly",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "this is truncated weirdly",
      "id": 4,
      "name": "this is truncated weirdly",
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
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 3,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "de-indenting the yamlish wrongly.",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
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
          "fullname": "truncating the yamlish",
          "id": 3,
          "name": "truncating the yamlish",
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
          "fullname": "this is truncated weirdly",
          "id": 4,
          "name": "this is truncated weirdly",
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
]
`

exports[`test/parser.ts > TAP > garbage-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "de-indenting the yamlish wrongly.",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "Bail out! de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "bailout",
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "de-indenting the yamlish wrongly.",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
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
]
`
