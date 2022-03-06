/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP outside-plan.tap > output bail=false 1`] = `
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
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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

exports[`test/parser.js TAP outside-plan.tap > output bail=true 1`] = `
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
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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
