/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP zero_valid.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - One\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Two\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok - Three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 0 - Four\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "line",
    "ok 5 - Five\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser.js TAP zero_valid.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - One\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "One",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Two\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Two",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok - Three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "Three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 0 - Four\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 0,
      "name": "Four",
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "line",
    "ok 5 - Five\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Five",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 0,
          "name": "Four",
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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
