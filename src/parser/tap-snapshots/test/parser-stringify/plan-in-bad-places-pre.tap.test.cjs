/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "1..2\\n",
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
          "closingTestPoint": false,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "subtest",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "yaml",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > bail > stringified 1`] = `
TAP version 13
1..2
1..2
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

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > bail > stringified flat 1`] = `
TAP version 13
1..0
1..2
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..99
  ...

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "1..2\\n",
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
          "closingTestPoint": false,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "subtest",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "yaml",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "subtest",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "yaml",
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
    "1..99\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > default settings > stringified 1`] = `
TAP version 13
1..2
1..2
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

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > default settings > stringified flat 1`] = `
TAP version 13
1..0
1..2
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..99
  ...

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "1..2\\n",
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
          "closingTestPoint": false,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "subtest",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "yaml",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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
          "data": "1..99\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strict > stringified 1`] = `
TAP version 13
1..2
1..2
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

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strict > stringified flat 1`] = `
TAP version 13
1..0
1..2
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..99
  ...

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "1..2\\n",
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
          "closingTestPoint": false,
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "subtest",
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
      "closingTestPoint": false,
      "diag": null,
      "fullname": "yaml",
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
    "extra",
    "1..99\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..2\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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
          "data": "1..99\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strictBail > stringified 1`] = `
TAP version 13
1..2
1..2
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

`

exports[`test/parse-stringify.ts > TAP > plan-in-bad-places-pre.tap > strictBail > stringified flat 1`] = `
TAP version 13
1..0
1..2
# Subtest: subtest
ok 1 - subtest
ok 2 - subtest
1..99
ok 3 - yaml
  ---
  ok: lamy
1..99
  ...

`
