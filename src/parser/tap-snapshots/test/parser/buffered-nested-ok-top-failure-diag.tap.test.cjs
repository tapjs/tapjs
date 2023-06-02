/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > buffered-nested-ok-top-failure-diag.tap > output bail=false 1`] = `
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
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
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
        "# Subtest: please sir, my son, he is sick\\n",
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
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "please sir, my son, he is sick > i got better",
          "id": 0,
          "name": "i got better",
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
          "skip": 0,
          "skips": Array [],
          "time": null,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "please sir, my son, he is sick > i got better",
      "id": 0,
      "name": "i got better",
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
      "diag": null,
      "fullname": "please sir, my son, he is sick > i got better",
      "id": 0,
      "name": "i got better",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "please sir, my son, he is sick",
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

exports[`test/parser.ts > TAP > buffered-nested-ok-top-failure-diag.tap > output bail=true 1`] = `
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
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
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
        "# Subtest: please sir, my son, he is sick\\n",
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
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "please sir, my son, he is sick > i got better",
          "id": 0,
          "name": "i got better",
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
          "skip": 0,
          "skips": Array [],
          "time": null,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "please sir, my son, he is sick > i got better",
      "id": 0,
      "name": "i got better",
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
      "diag": null,
      "fullname": "please sir, my son, he is sick > i got better",
      "id": 0,
      "name": "i got better",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
    "Bail out! please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "please sir, my son, he is sick",
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
