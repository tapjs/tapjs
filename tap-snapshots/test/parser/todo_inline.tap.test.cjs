/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP todo_inline.tap > output bail=false 1`] = `
Array [
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
    "not ok 1 - Foo # TODO Just testing the todo interface.\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "line",
    "ok 2 - Unexpected success # TODO Just testing the todo interface.\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "line",
    "ok 3 - This is not todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 - #todo This is a todo with an empty description\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "line",
    "ok 5 - testTitle#todo is not a todo, it's a url\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# todo: 3\\n",
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
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
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP todo_inline.tap > output bail=true 1`] = `
Array [
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
    "not ok 1 - Foo # TODO Just testing the todo interface.\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "line",
    "ok 2 - Unexpected success # TODO Just testing the todo interface.\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "line",
    "ok 3 - This is not todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 - #todo This is a todo with an empty description\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "line",
    "ok 5 - testTitle#todo is not a todo, it's a url\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# todo: 3\\n",
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
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
      "todo": 3,
    },
  ],
]
`
