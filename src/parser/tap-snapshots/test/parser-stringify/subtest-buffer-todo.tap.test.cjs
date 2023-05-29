/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "foo",
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "skippy",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "skippy",
          "id": 2,
          "name": "skippy",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "time": null,
      "todo": 1,
      "todos": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "tbd",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "foo",
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

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap bail > stringified 1`] = `
TAP version 13
# Subtest: tbd
    ok 1
    1..1
ok 1 - tbd # TODO foo
# Subtest: skippy
    ok 1
    1..1
ok 2 - skippy # SKIP
1..2
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: tbd
ok 1 - tbd
ok 2 - tbd # TODO foo
# Subtest: skippy
ok 3 - skippy
ok 4 - skippy # SKIP
1..4
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "foo",
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "skippy",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "skippy",
          "id": 2,
          "name": "skippy",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "time": null,
      "todo": 1,
      "todos": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "tbd",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "foo",
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

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap default settings > parsed flat 1`] = `
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
      "name": "tbd",
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
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "tbd",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "foo",
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "skippy",
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
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "skippy",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
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
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "skippy",
          "id": 2,
          "name": "skippy",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "time": null,
      "todo": 1,
      "todos": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "tbd",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "foo",
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

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: tbd
    ok 1
    1..1
ok 1 - tbd # TODO foo
# Subtest: skippy
    ok 1
    1..1
ok 2 - skippy # SKIP
1..2
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: tbd
ok 1 - tbd
ok 2 - tbd # TODO foo
# Subtest: skippy
ok 3 - skippy
ok 4 - skippy # SKIP
1..4
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "foo",
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "skippy",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "skippy",
          "id": 2,
          "name": "skippy",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "time": null,
      "todo": 1,
      "todos": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "tbd",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "foo",
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

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strict > stringified 1`] = `
TAP version 13
# Subtest: tbd
    ok 1
    1..1
ok 1 - tbd # TODO foo
# Subtest: skippy
    ok 1
    1..1
ok 2 - skippy # SKIP
1..2
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: tbd
ok 1 - tbd
ok 2 - tbd # TODO foo
# Subtest: skippy
ok 3 - skippy
ok 4 - skippy # SKIP
1..4
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "foo",
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "skippy",
          "id": 1,
          "name": "",
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "skips": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "skippy",
          "id": 2,
          "name": "skippy",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": true,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "time": null,
      "todo": 1,
      "todos": Array [
        Object {
          "buffered": true,
          "diag": null,
          "fullname": "tbd",
          "id": 1,
          "name": "tbd",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": "foo",
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

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: tbd
    ok 1
    1..1
ok 1 - tbd # TODO foo
# Subtest: skippy
    ok 1
    1..1
ok 2 - skippy # SKIP
1..2
# todo: 1
# skip: 1

`

exports[`test/parse-stringify.ts TAP subtest-buffer-todo.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: tbd
ok 1 - tbd
ok 2 - tbd # TODO foo
# Subtest: skippy
ok 3 - skippy
ok 4 - skippy # SKIP
1..4
# todo: 1
# skip: 1

`
