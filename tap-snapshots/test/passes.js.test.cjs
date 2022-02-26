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
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "message": "1 passed",
      },
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "message": "2 failed",
      },
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "message": "2 failed",
          },
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": Array [
        Result {
          "diag": Object {
            "message": "1 passed",
          },
          "fullname": "",
          "id": 1,
          "name": "this is fine",
          "ok": true,
        },
      ],
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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
