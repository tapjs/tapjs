/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap bail > parsed 1`] = `
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "plan",
    Object {
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
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap bail > stringified 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap bail > stringified flat 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap default settings > parsed 1`] = `
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "plan",
    Object {
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
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap default settings > stringified 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap default settings > stringified flat 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strict > parsed 1`] = `
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "plan",
    Object {
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
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strict > stringified 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strict > stringified flat 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strictBail > parsed 1`] = `
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "plan",
    Object {
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
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strictBail > stringified 1`] = `
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

exports[`test/parser-stringify.js TAP subtest-buffer-todo.tap strictBail > stringified flat 1`] = `
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
