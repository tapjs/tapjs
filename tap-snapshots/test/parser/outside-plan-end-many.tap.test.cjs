/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP outside-plan-end-many.tap > output bail=false 1`] = `
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
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 420\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser.js TAP outside-plan-end-many.tap > output bail=true 1`] = `
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
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 420\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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
