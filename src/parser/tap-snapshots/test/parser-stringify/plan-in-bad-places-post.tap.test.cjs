/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap bail > parsed 1`] = `
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
        "# Subtest: subtest\\n",
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
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "subtest",
          "id": 0,
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
      "id": 0,
      "name": "subtest",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "yaml",
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
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap bail > stringified 1`] = `
TAP version 13
# Subtest: subtest
    1..1
    ok
ok - subtest
1..99
ok - yaml
  ---
  ok: lamy
1..99
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 1 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..3
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 1 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap default settings > parsed 1`] = `
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
        "# Subtest: subtest\\n",
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
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "subtest",
          "id": 0,
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
      "id": 0,
      "name": "subtest",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "yaml",
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
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap default settings > parsed flat 1`] = `
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
      "name": "subtest",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "yaml",
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
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: subtest
    1..1
    ok
ok - subtest
1..99
ok - yaml
  ---
  ok: lamy
1..99
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 1 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..3
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 1 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strict > parsed 1`] = `
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
        "# Subtest: subtest\\n",
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
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "subtest",
          "id": 0,
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
      "id": 0,
      "name": "subtest",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "yaml",
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
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..99\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": String(
              ---
              ok: lamy
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strict > stringified 1`] = `
TAP version 13
# Subtest: subtest
    1..1
    ok
ok - subtest
1..99
ok - yaml
  ---
  ok: lamy
1..99
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 5 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..3
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 5 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strictBail > parsed 1`] = `
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
        "# Subtest: subtest\\n",
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
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "subtest",
          "id": 0,
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
      "id": 0,
      "name": "subtest",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "yaml",
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
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..99\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": String(
              ---
              ok: lamy
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: subtest
    1..1
    ok
ok - subtest
1..99
ok - yaml
  ---
  ok: lamy
1..99
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 5 of 2 tests

`

exports[`test/parse-stringify.ts TAP plan-in-bad-places-post.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..3
  ...
1..2
1..2
# test count(2) != plan(99)
# failed 5 of 2 tests

`
