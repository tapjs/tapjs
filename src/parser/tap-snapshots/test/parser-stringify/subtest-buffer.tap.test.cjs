/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > bail > parsed 1`] = `
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
        "# Subtest: nesting\\n",
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
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
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "nesting > first > true is ok",
              "id": 1,
              "name": "true is ok",
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
              "fullname": "nesting > first > doag is also okay",
              "id": 2,
              "name": "doag is also okay",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > first",
          "id": 1,
          "name": "first",
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
              "fullname": "nesting > second > but that is ok",
              "id": 1,
              "name": "but that is ok",
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
              "fullname": "nesting > second > this passes",
              "id": 2,
              "name": "this passes",
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
              "fullname": "nesting > second > nested ok",
              "id": 3,
              "name": "nested ok",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > second",
          "id": 2,
          "name": "second",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
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
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
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
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
# Subtest: first
ok 1 - nesting > first > true is ok
ok 2 - nesting > first > doag is also okay
ok 3 - nesting > first
# Subtest: second
ok 4 - nesting > second > but that is ok
ok 5 - nesting > second > this passes
ok 6 - nesting > second > nested ok
ok 7 - nesting > second
ok 8 - nesting
ok 9 - this passes
1..9
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > default settings > parsed 1`] = `
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
        "# Subtest: nesting\\n",
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
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
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "nesting > first > true is ok",
              "id": 1,
              "name": "true is ok",
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
              "fullname": "nesting > first > doag is also okay",
              "id": 2,
              "name": "doag is also okay",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > first",
          "id": 1,
          "name": "first",
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
              "fullname": "nesting > second > but that is ok",
              "id": 1,
              "name": "but that is ok",
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
              "fullname": "nesting > second > this passes",
              "id": 2,
              "name": "this passes",
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
              "fullname": "nesting > second > nested ok",
              "id": 3,
              "name": "nested ok",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > second",
          "id": 2,
          "name": "second",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
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
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
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
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > default settings > parsed flat 1`] = `
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
      "fullname": "nesting > first > true is ok",
      "id": 1,
      "name": "nesting > first > true is ok",
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
      "fullname": "nesting > first > doag is also okay",
      "id": 2,
      "name": "nesting > first > doag is also okay",
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
      "fullname": "nesting > second > but that is ok",
      "id": 3,
      "name": "nesting > second > but that is ok",
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
      "fullname": "nesting > second > this passes",
      "id": 4,
      "name": "nesting > second > this passes",
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
      "fullname": "nesting > second > nested ok",
      "id": 5,
      "name": "nesting > second > nested ok",
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
      "fullname": "this passes",
      "id": 6,
      "name": "this passes",
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
    "# time=66.857ms\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
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
      "time": 66.857,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
# Subtest: first
ok 1 - nesting > first > true is ok
ok 2 - nesting > first > doag is also okay
ok 3 - nesting > first
# Subtest: second
ok 4 - nesting > second > but that is ok
ok 5 - nesting > second > this passes
ok 6 - nesting > second > nested ok
ok 7 - nesting > second
ok 8 - nesting
ok 9 - this passes
1..9
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strict > parsed 1`] = `
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
        "# Subtest: nesting\\n",
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
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
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "nesting > first > true is ok",
              "id": 1,
              "name": "true is ok",
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
              "fullname": "nesting > first > doag is also okay",
              "id": 2,
              "name": "doag is also okay",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > first",
          "id": 1,
          "name": "first",
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
              "fullname": "nesting > second > but that is ok",
              "id": 1,
              "name": "but that is ok",
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
              "fullname": "nesting > second > this passes",
              "id": 2,
              "name": "this passes",
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
              "fullname": "nesting > second > nested ok",
              "id": 3,
              "name": "nested ok",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > second",
          "id": 2,
          "name": "second",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
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
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
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
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
# Subtest: first
ok 1 - nesting > first > true is ok
ok 2 - nesting > first > doag is also okay
ok 3 - nesting > first
# Subtest: second
ok 4 - nesting > second > but that is ok
ok 5 - nesting > second > this passes
ok 6 - nesting > second > nested ok
ok 7 - nesting > second
ok 8 - nesting
ok 9 - this passes
1..9
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strictBail > parsed 1`] = `
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
        "# Subtest: nesting\\n",
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
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
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "nesting > first > true is ok",
              "id": 1,
              "name": "true is ok",
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
              "fullname": "nesting > first > doag is also okay",
              "id": 2,
              "name": "doag is also okay",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > first",
          "id": 1,
          "name": "first",
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
              "fullname": "nesting > second > but that is ok",
              "id": 1,
              "name": "but that is ok",
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
              "fullname": "nesting > second > this passes",
              "id": 2,
              "name": "this passes",
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
              "fullname": "nesting > second > nested ok",
              "id": 3,
              "name": "nested ok",
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting > second",
          "id": 2,
          "name": "second",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
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
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
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
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
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

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parse-stringify.ts > TAP > subtest-buffer.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
# Subtest: first
ok 1 - nesting > first > true is ok
ok 2 - nesting > first > doag is also okay
ok 3 - nesting > first
# Subtest: second
ok 4 - nesting > second > but that is ok
ok 5 - nesting > second > this passes
ok 6 - nesting > second > nested ok
ok 7 - nesting > second
ok 8 - nesting
ok 9 - this passes
1..9
# time=66.857ms

`
