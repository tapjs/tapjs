/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP no-numbers.tap > output bail=false 1`] = `
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
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok we are zesty!\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are zesty!",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "we are zesty!",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "we are zesty!",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
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

exports[`test/parser.js TAP no-numbers.tap > output bail=true 1`] = `
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
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "we are good",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "name": "we are bad",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! we are bad\\n",
  ],
  Array [
    "bailout",
    "we are bad",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "we are bad",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "we are bad",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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
