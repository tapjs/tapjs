/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > duration_ms.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "subtest > this is fine",
          "id": 1,
          "name": "this is fine",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": Object {},
      "fullname": "subtest",
      "id": 1,
      "name": "subtest",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.432,
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
    "comment",
    "# { total: 1, pass: 1 }\\n",
  ],
  Array [
    "comment",
    "# duration_ms 9.118\\n",
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
      "time": 9.118,
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

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > bail > stringified 1`] = `
TAP version 14
# Subtest: subtest
    ok 1 - this is fine
    1..1
ok 1 - subtest # time=1.432ms
  ---
  {}
  ...
1..1
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > bail > stringified flat 1`] = `
TAP version 14
# Subtest: subtest
ok 1 - subtest > this is fine
ok 2 - subtest # time=1.432ms
  ---
  {}
  ...
1..2
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "subtest > this is fine",
          "id": 1,
          "name": "this is fine",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": Object {},
      "fullname": "subtest",
      "id": 1,
      "name": "subtest",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.432,
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
    "comment",
    "# { total: 1, pass: 1 }\\n",
  ],
  Array [
    "comment",
    "# duration_ms 9.118\\n",
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
      "time": 9.118,
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

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "subtest > this is fine",
      "id": 1,
      "name": "subtest > this is fine",
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
    "# { total: 1, pass: 1 }\\n",
  ],
  Array [
    "comment",
    "# duration_ms 9.118\\n",
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
      "time": 9.118,
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

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > default settings > stringified 1`] = `
TAP version 14
# Subtest: subtest
    ok 1 - this is fine
    1..1
ok 1 - subtest # time=1.432ms
  ---
  {}
  ...
1..1
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > default settings > stringified flat 1`] = `
TAP version 14
# Subtest: subtest
ok 1 - subtest > this is fine
ok 2 - subtest # time=1.432ms
  ---
  {}
  ...
1..2
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "subtest > this is fine",
          "id": 1,
          "name": "this is fine",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": Object {},
      "fullname": "subtest",
      "id": 1,
      "name": "subtest",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.432,
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
    "comment",
    "# { total: 1, pass: 1 }\\n",
  ],
  Array [
    "comment",
    "# duration_ms 9.118\\n",
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
      "time": 9.118,
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

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strict > stringified 1`] = `
TAP version 14
# Subtest: subtest
    ok 1 - this is fine
    1..1
ok 1 - subtest # time=1.432ms
  ---
  {}
  ...
1..1
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strict > stringified flat 1`] = `
TAP version 14
# Subtest: subtest
ok 1 - subtest > this is fine
ok 2 - subtest # time=1.432ms
  ---
  {}
  ...
1..2
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "subtest > this is fine",
          "id": 1,
          "name": "this is fine",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": Object {},
      "fullname": "subtest",
      "id": 1,
      "name": "subtest",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.432,
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
    "comment",
    "# { total: 1, pass: 1 }\\n",
  ],
  Array [
    "comment",
    "# duration_ms 9.118\\n",
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
      "time": 9.118,
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

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strictBail > stringified 1`] = `
TAP version 14
# Subtest: subtest
    ok 1 - this is fine
    1..1
ok 1 - subtest # time=1.432ms
  ---
  {}
  ...
1..1
# { total: 1, pass: 1 }
# duration_ms 9.118

`

exports[`test/parse-stringify.ts > TAP > duration_ms.tap > strictBail > stringified flat 1`] = `
TAP version 14
# Subtest: subtest
ok 1 - subtest > this is fine
ok 2 - subtest # time=1.432ms
  ---
  {}
  ...
1..2
# { total: 1, pass: 1 }
# duration_ms 9.118

`
