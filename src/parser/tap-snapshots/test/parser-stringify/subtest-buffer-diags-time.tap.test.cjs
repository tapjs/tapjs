/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "third > y",
          "id": 0,
          "name": "y",
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
          "time": 43.21,
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
      "closingTestPoint": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "third",
      "id": 3,
      "name": "third",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 43.21,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > bail > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > bail > stringified flat 1`] = `
1..0
# Subtest: first
ok 1 - first > x
ok 2 - first # time=12.34ms
# Subtest: second
ok 3 - second > x
ok 4 - second # time=12.34ms
# Subtest: third
ok 5 - third > y
ok 6 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "third > y",
          "id": 0,
          "name": "y",
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
          "time": 43.21,
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
      "closingTestPoint": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "third",
      "id": 3,
      "name": "third",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 43.21,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "first > x",
      "id": 1,
      "name": "first > x",
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
      "fullname": "second > x",
      "id": 2,
      "name": "second > x",
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
      "fullname": "third > y",
      "id": 3,
      "name": "third > y",
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
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > default settings > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > default settings > stringified flat 1`] = `
1..0
# Subtest: first
ok 1 - first > x
ok 2 - first # time=12.34ms
# Subtest: second
ok 3 - second > x
ok 4 - second # time=12.34ms
# Subtest: third
ok 5 - third > y
ok 6 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "third > y",
          "id": 0,
          "name": "y",
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
          "time": 43.21,
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
      "closingTestPoint": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "third",
      "id": 3,
      "name": "third",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 43.21,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strict > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strict > stringified flat 1`] = `
1..0
# Subtest: first
ok 1 - first > x
ok 2 - first # time=12.34ms
# Subtest: second
ok 3 - second > x
ok 4 - second # time=12.34ms
# Subtest: third
ok 5 - third > y
ok 6 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > x",
          "id": 0,
          "name": "x",
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
          "time": 12.34,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 12.34,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "third > y",
          "id": 0,
          "name": "y",
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
          "time": 43.21,
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
      "closingTestPoint": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "third",
      "id": 3,
      "name": "third",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 43.21,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strictBail > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer-diags-time.tap > strictBail > stringified flat 1`] = `
1..0
# Subtest: first
ok 1 - first > x
ok 2 - first # time=12.34ms
# Subtest: second
ok 3 - second > x
ok 4 - second # time=12.34ms
# Subtest: third
ok 5 - third > y
ok 6 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`
