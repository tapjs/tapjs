/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > skip.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "rain delay",
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
      "fullname": "#skip should not skip because escaped",
      "id": 3,
      "name": "#skip should not skip because escaped",
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
      "fullname": "notskip, because testTitle#skip is not a directive",
      "id": 4,
      "name": "notskip, because testTitle#skip is not a directive",
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
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "weird spelling but ok, skip it",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 2,
      "skips": Array [
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "rain delay",
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "weird spelling but ok, skip it",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > skip.tap > bail > stringified 1`] = `
1..5
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > bail > stringified flat 1`] = `
1..0
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "rain delay",
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
      "fullname": "#skip should not skip because escaped",
      "id": 3,
      "name": "#skip should not skip because escaped",
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
      "fullname": "notskip, because testTitle#skip is not a directive",
      "id": 4,
      "name": "notskip, because testTitle#skip is not a directive",
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
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "weird spelling but ok, skip it",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 2,
      "skips": Array [
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "rain delay",
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "weird spelling but ok, skip it",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > skip.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "rain delay",
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
      "fullname": "#skip should not skip because escaped",
      "id": 3,
      "name": "#skip should not skip because escaped",
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
      "fullname": "notskip, because testTitle#skip is not a directive",
      "id": 4,
      "name": "notskip, because testTitle#skip is not a directive",
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
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "weird spelling but ok, skip it",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 2,
      "skips": Array [
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "rain delay",
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "weird spelling but ok, skip it",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > skip.tap > default settings > stringified 1`] = `
1..5
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > default settings > stringified flat 1`] = `
1..0
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "rain delay",
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
      "fullname": "#skip should not skip because escaped",
      "id": 3,
      "name": "#skip should not skip because escaped",
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
      "fullname": "notskip, because testTitle#skip is not a directive",
      "id": 4,
      "name": "notskip, because testTitle#skip is not a directive",
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
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "weird spelling but ok, skip it",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 2,
      "skips": Array [
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "rain delay",
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "weird spelling but ok, skip it",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > skip.tap > strict > stringified 1`] = `
1..5
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > strict > stringified flat 1`] = `
1..0
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "rain delay",
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
      "fullname": "#skip should not skip because escaped",
      "id": 3,
      "name": "#skip should not skip because escaped",
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
      "fullname": "notskip, because testTitle#skip is not a directive",
      "id": 4,
      "name": "notskip, because testTitle#skip is not a directive",
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
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "weird spelling but ok, skip it",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 2,
      "skips": Array [
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 2,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "rain delay",
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": "weird spelling but ok, skip it",
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
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

exports[`test/parse-stringify.ts > TAP > skip.tap > strictBail > stringified 1`] = `
1..5
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`

exports[`test/parse-stringify.ts > TAP > skip.tap > strictBail > stringified flat 1`] = `
1..0
ok 1
ok 2 # SKIP rain delay
ok 3 - \\#skip should not skip because escaped
ok 4 - notskip, because testTitle\\#skip is not a directive
ok 5 # SKIP weird spelling but ok, skip it

`
