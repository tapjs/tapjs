/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bail-while-bailing.js TAP > must match snapshot 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "going to bail",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "going to bail",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "name": "going to bail",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "# saw that coming",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "# saw that coming",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "going to bail",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`
