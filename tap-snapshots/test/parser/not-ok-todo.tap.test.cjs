/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP not-ok-todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
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
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
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
    "ok 4 - (unnamed assert)\\n",
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
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
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
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser.js TAP not-ok-todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
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
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
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
    "ok 4 - (unnamed assert)\\n",
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
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
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
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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
