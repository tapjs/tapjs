/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
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

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > bail > stringified 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > bail > stringified flat 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
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

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
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

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > default settings > stringified 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > default settings > stringified flat 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "one\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "three\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
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

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strict > stringified 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strict > stringified flat 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "one\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "three\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
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

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strictBail > stringified 1`] = `
one
three
TAP version 14
1..0 # no tests found

`

exports[`test/parse-stringify.ts > TAP > out_err_mix.tap > strictBail > stringified flat 1`] = `
one
three
TAP version 14
1..0 # no tests found

`
