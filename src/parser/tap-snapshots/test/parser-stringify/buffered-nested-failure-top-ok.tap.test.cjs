/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > bail > parsed 1`] = `
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
          "fullname": "my kids are fine > no they aren't",
          "id": 0,
          "name": "no they aren't",
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
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "my kids are fine > no they aren't",
              "id": 0,
              "name": "no they aren't",
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
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
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

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > bail > stringified flat 1`] = `
TAP version 13
1..0
# Subtest: my kids are fine
not ok 1 - my kids are fine > no they aren't
Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > default settings > parsed 1`] = `
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
          "fullname": "my kids are fine > no they aren't",
          "id": 0,
          "name": "no they aren't",
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
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "my kids are fine > no they aren't",
              "id": 0,
              "name": "no they aren't",
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
      "fullname": "my kids are fine",
      "id": 1,
      "name": "my kids are fine",
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

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > default settings > parsed flat 1`] = `
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
      "fullname": "my kids are fine > no they aren't",
      "id": 1,
      "name": "my kids are fine > no they aren't",
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
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "my kids are fine",
      "id": 2,
      "name": "my kids are fine",
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
      "end": 2,
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

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
ok 1 - my kids are fine

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > default settings > stringified flat 1`] = `
TAP version 13
1..0
# Subtest: my kids are fine
not ok 1 - my kids are fine > no they aren't
ok 2 - my kids are fine

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strict > parsed 1`] = `
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
          "fullname": "my kids are fine > no they aren't",
          "id": 0,
          "name": "no they aren't",
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
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "my kids are fine > no they aren't",
              "id": 0,
              "name": "no they aren't",
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
      "fullname": "my kids are fine",
      "id": 1,
      "name": "my kids are fine",
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

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
ok 1 - my kids are fine

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strict > stringified flat 1`] = `
TAP version 13
1..0
# Subtest: my kids are fine
not ok 1 - my kids are fine > no they aren't
ok 2 - my kids are fine

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strictBail > parsed 1`] = `
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
          "fullname": "my kids are fine > no they aren't",
          "id": 0,
          "name": "no they aren't",
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
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "my kids are fine > no they aren't",
              "id": 0,
              "name": "no they aren't",
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
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
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

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parse-stringify.ts > TAP > buffered-nested-failure-top-ok.tap > strictBail > stringified flat 1`] = `
TAP version 13
1..0
# Subtest: my kids are fine
not ok 1 - my kids are fine > no they aren't
Bail out! no they aren't
Bail out! no they aren't

`
