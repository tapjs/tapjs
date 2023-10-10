/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
      "ok": false,
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
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 0,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > bail > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > bail > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
      "ok": false,
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
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
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
          "closingTestPoint": false,
          "diag": null,
          "fullname": "maybe a child",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "maybe a child",
      "id": 0,
      "name": "maybe a child",
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
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 0,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
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
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "maybe a child",
      "id": 2,
      "name": "maybe a child",
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
    "# test count(2) != plan(null)\\n",
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
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > default settings > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > default settings > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
ok 2 - maybe a child
ok 3 - maybe a child
# test count(2) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
      "ok": false,
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
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
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
          "closingTestPoint": false,
          "diag": null,
          "fullname": "maybe a child",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "maybe a child",
      "id": 0,
      "name": "maybe a child",
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
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 0,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "data": "  ---\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strict > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strict > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
ok 2 - maybe a child
ok 3 - maybe a child
# test count(2) != plan(null)

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
      "ok": false,
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
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 0,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strictBail > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`

exports[`test/parse-stringify.ts > TAP > fail-right-before-indented-child-diag.tap > strictBail > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`
