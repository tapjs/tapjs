/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP todo_misparse.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 Hamlette # TODOORNOTTODO\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser.js TAP todo_misparse.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 Hamlette # TODOORNOTTODO\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`
