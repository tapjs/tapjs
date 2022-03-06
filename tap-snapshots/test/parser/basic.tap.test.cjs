/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP basic.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "ok": false,
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
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "ok": false,
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
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
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
          "ok": false,
        },
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser.js TAP basic.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
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
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
