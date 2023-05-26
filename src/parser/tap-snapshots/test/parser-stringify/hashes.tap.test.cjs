/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP hashes.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
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
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
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
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
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
    Plan {
      "comment": "",
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "directive",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# x # y",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "escaped \\\\ slash \\\\",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "true",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "yes todo",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# hash",
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

exports[`test/parse-stringify.ts TAP hashes.tap bail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap bail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
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
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
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
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
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
    Plan {
      "comment": "",
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "directive",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# x # y",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "escaped \\\\ slash \\\\",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "true",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "yes todo",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# hash",
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

exports[`test/parse-stringify.ts TAP hashes.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
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
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
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
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
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
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "directive",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# x # y",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "escaped \\\\ slash \\\\",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "true",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "yes todo",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# hash",
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

exports[`test/parse-stringify.ts TAP hashes.tap default settings > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap default settings > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
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
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
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
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
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
    Plan {
      "comment": "",
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "directive",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# x # y",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "escaped \\\\ slash \\\\",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "true",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "yes todo",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# hash",
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

exports[`test/parse-stringify.ts TAP hashes.tap strict > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap strict > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
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
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
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
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
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
    Plan {
      "comment": "",
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "directive",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# x # y",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "escaped \\\\ slash \\\\",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "true",
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "yes todo",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "# hash",
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

exports[`test/parse-stringify.ts TAP hashes.tap strictBail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parse-stringify.ts TAP hashes.tap strictBail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`
