/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > todo_inline.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Foo",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Unexpected success",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "This is not todo",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "testTitle#todo is not a todo, it's a url",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 3,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Foo",
          "id": 1,
          "name": "Foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Unexpected success",
          "id": 2,
          "name": "Unexpected success",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "This is a todo with an empty description",
        },
      ],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > bail > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > bail > stringified flat 1`] = `
1..0
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Foo",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Unexpected success",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "This is not todo",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "testTitle#todo is not a todo, it's a url",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 3,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Foo",
          "id": 1,
          "name": "Foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Unexpected success",
          "id": 2,
          "name": "Unexpected success",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "This is a todo with an empty description",
        },
      ],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Foo",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Unexpected success",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "This is not todo",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "testTitle#todo is not a todo, it's a url",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 3,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Foo",
          "id": 1,
          "name": "Foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Unexpected success",
          "id": 2,
          "name": "Unexpected success",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "This is a todo with an empty description",
        },
      ],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > default settings > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > default settings > stringified flat 1`] = `
1..0
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Foo",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Unexpected success",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "This is not todo",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "testTitle#todo is not a todo, it's a url",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 3,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Foo",
          "id": 1,
          "name": "Foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Unexpected success",
          "id": 2,
          "name": "Unexpected success",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "This is a todo with an empty description",
        },
      ],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strict > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strict > stringified flat 1`] = `
1..0
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Foo",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "Unexpected success",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "This is not todo",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "testTitle#todo is not a todo, it's a url",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 3,
      "todos": Array [
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Foo",
          "id": 1,
          "name": "Foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "Unexpected success",
          "id": 2,
          "name": "Unexpected success",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "Just testing the todo interface.",
        },
        Object {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "This is a todo with an empty description",
        },
      ],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strictBail > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`

exports[`test/parse-stringify.ts > TAP > todo_inline.tap > strictBail > stringified flat 1`] = `
1..0
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url

`
