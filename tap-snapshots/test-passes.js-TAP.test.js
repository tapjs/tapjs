/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/passes.js TAP > saw expected events 1`] = `
Array [
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
    },
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "diag": Object {
            "message": "2 failed",
          },
          "fullname": "",
        },
      ],
      "passes": Array [
        Result {
          "ok": true,
          "id": 1,
          "name": "this is fine",
          "diag": Object {
            "message": "1 passed",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`
