/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP too-many.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 1,
      "name": "should be equal",
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
      "fullname": "should be equivalent",
      "id": 2,
      "name": "should be equivalent",
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
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 3,
      "name": "should be equal",
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
      "fullname": "(unnamed assert)",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "(unnamed assert)",
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP too-many.tap bail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap bail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 1,
      "name": "should be equal",
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
      "fullname": "should be equivalent",
      "id": 2,
      "name": "should be equivalent",
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
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 3,
      "name": "should be equal",
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
      "fullname": "(unnamed assert)",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "(unnamed assert)",
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP too-many.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 1,
      "name": "should be equal",
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
      "fullname": "should be equivalent",
      "id": 2,
      "name": "should be equivalent",
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
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 3,
      "name": "should be equal",
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
      "fullname": "(unnamed assert)",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "(unnamed assert)",
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP too-many.tap default settings > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap default settings > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 1,
      "name": "should be equal",
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
      "fullname": "should be equivalent",
      "id": 2,
      "name": "should be equivalent",
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
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 3,
      "name": "should be equal",
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
      "fullname": "(unnamed assert)",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "(unnamed assert)",
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP too-many.tap strict > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap strict > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 1,
      "name": "should be equal",
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
      "fullname": "should be equivalent",
      "id": 2,
      "name": "should be equivalent",
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
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "should be equal",
      "id": 3,
      "name": "should be equal",
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
      "fullname": "(unnamed assert)",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "(unnamed assert)",
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP too-many.tap strictBail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parse-stringify.ts TAP too-many.tap strictBail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`
