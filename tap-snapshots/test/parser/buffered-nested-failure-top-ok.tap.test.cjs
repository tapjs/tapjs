/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP buffered-nested-failure-top-ok.tap > output bail=false 1`] = `
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
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "my kids are fine",
          "id": 0,
          "name": "no they aren't",
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
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "my kids are fine",
              "id": 0,
              "name": "no they aren't",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "my kids are fine",
      "id": 0,
      "name": "no they aren't",
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
      "fullname": "my kids are fine",
      "id": 0,
      "name": "no they aren't",
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
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser.ts TAP buffered-nested-failure-top-ok.tap > output bail=true 1`] = `
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
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "my kids are fine",
          "id": 0,
          "name": "no they aren't",
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
        "Bail out! no they aren't\\n",
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "my kids are fine",
              "id": 0,
              "name": "no they aren't",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "my kids are fine",
      "id": 0,
      "name": "no they aren't",
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
      "fullname": "my kids are fine",
      "id": 0,
      "name": "no they aren't",
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
    "    Bail out! no they aren't\\n",
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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
