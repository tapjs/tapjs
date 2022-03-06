/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "third",
      "name": "y",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "third",
      "name": "y",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "third",
      "name": "y",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "third",
      "name": "y",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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
