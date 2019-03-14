/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bail-while-bailing.js TAP > undefined 1`] = `
Array [
  Array [
    "version",
    13,
  ],
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
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "going to bail",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "going to bail",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "going to bail",
      "fullname": "",
    },
  ],
  Array [
    "bailout",
    "# saw that coming",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# saw that coming",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "going to bail",
          "fullname": "",
        },
      ],
    },
  ],
]
`
