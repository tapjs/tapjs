/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/omit-version.js TAP > saw expected lines 1`] = `
Array [
  "ok 1 - this is fine\\n",
  "1..1\\n",
]
`

exports[`test/omit-version.js TAP > saw expected events 1`] = `
Array [
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`
