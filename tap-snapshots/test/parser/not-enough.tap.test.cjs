/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP not-enough.tap > output bail=false 1`] = `
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
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
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
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser.js TAP not-enough.tap > output bail=true 1`] = `
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
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
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
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 4,
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
