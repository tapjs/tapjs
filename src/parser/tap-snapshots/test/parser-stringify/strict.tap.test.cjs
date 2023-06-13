/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > strict.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "pragma",
    "strict",
    true,
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
]
`

exports[`test/parse-stringify.ts > TAP > strict.tap > bail > stringified 1`] = `
TAP version 13
1..1
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > bail > stringified flat 1`] = `
TAP version 13
1..0
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "pragma",
    "strict",
    true,
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
]
`

exports[`test/parse-stringify.ts > TAP > strict.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
]
`

exports[`test/parse-stringify.ts > TAP > strict.tap > default settings > stringified 1`] = `
TAP version 13
1..1
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > default settings > stringified flat 1`] = `
TAP version 13
1..0
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "pragma",
    "strict",
    true,
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
]
`

exports[`test/parse-stringify.ts > TAP > strict.tap > strict > stringified 1`] = `
TAP version 13
1..1
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > strict > stringified flat 1`] = `
TAP version 13
1..0
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "pragma",
    "strict",
    true,
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "All OK",
      "id": 1,
      "name": "All OK",
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
      "fail": 1,
      "failures": Array [
        Object {
          "data": "Nonsense!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
]
`

exports[`test/parse-stringify.ts > TAP > strict.tap > strictBail > stringified 1`] = `
TAP version 13
1..1
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`

exports[`test/parse-stringify.ts > TAP > strict.tap > strictBail > stringified flat 1`] = `
TAP version 13
1..0
pragma +strict
Nonsense!
pragma -strict
Doesn't matter.
ok 1 - All OK

`
