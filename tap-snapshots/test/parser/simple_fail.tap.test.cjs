/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP simple_fail.tap > output bail=false 1`] = `
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
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 5,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser.js TAP simple_fail.tap > output bail=true 1`] = `
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
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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
