/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
            "comment": "",
            "end": 0,
            "skipAll": true,
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
      "fullname": "empty",
      "id": 1,
      "name": "empty",
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
    "empty",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "empty",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "empty",
          "id": 1,
          "name": "empty",
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

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > bail > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > bail > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty

not ok 1 - empty
Bail out! empty

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
            "comment": "",
            "end": 0,
            "skipAll": true,
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
      "fullname": "empty",
      "id": 1,
      "name": "empty",
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "my_test > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_test > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "fullname": "my_test",
      "id": 2,
      "name": "my_test",
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
        "# Subtest: my_test_plan\\n",
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
          "fullname": "my_test_plan > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_test_plan > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "fullname": "my_test_plan",
      "id": 3,
      "name": "my_test_plan",
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
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "my_streamy_test > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_streamy_test > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test",
      "id": 4,
      "name": "Subtest: my_streamy_test",
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
        "# Subtest: my_streamy_test_plan\\n",
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
          "fullname": "my_streamy_test_plan > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_streamy_test_plan > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test_plan",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
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
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "empty",
          "id": 1,
          "name": "empty",
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
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "empty",
      "id": 1,
      "name": "empty",
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
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "my_test > subtest event A",
      "id": 2,
      "name": "my_test > subtest event A",
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
      "fullname": "my_test > subtest event B",
      "id": 3,
      "name": "my_test > subtest event B",
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
      "fullname": "my_test_plan > subtest event A",
      "id": 4,
      "name": "my_test_plan > subtest event A",
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
      "fullname": "my_test_plan > subtest event B",
      "id": 5,
      "name": "my_test_plan > subtest event B",
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
      "fullname": "my_streamy_test > subtest event A",
      "id": 6,
      "name": "my_streamy_test > subtest event A",
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
      "fullname": "my_streamy_test > subtest event B",
      "id": 7,
      "name": "my_streamy_test > subtest event B",
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test",
      "id": 8,
      "name": "Subtest: my_streamy_test",
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
      "fullname": "my_streamy_test_plan > subtest event A",
      "id": 9,
      "name": "my_streamy_test_plan > subtest event A",
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
      "fullname": "my_streamy_test_plan > subtest event B",
      "id": 10,
      "name": "my_streamy_test_plan > subtest event B",
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test_plan",
      "id": 11,
      "name": "Subtest: my_streamy_test_plan",
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
      "end": 11,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "empty",
          "id": 1,
          "name": "empty",
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
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > default settings > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
# Subtest: my_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 2 - my_test
# Subtest: my_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 3 - my_test_plan
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 4 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 5 - Subtest: my_streamy_test_plan
1..5

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > default settings > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty

not ok 1 - empty
# Subtest: my_test
ok 2 - my_test > subtest event A
ok 3 - my_test > subtest event B
ok 4 - my_test
# Subtest: my_test_plan
ok 5 - my_test_plan > subtest event A
ok 6 - my_test_plan > subtest event B
ok 7 - my_test_plan
# Subtest: my_streamy_test
ok 8 - my_streamy_test > subtest event A
ok 9 - my_streamy_test > subtest event B
ok 10 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
ok 11 - my_streamy_test_plan > subtest event A
ok 12 - my_streamy_test_plan > subtest event B
ok 13 - Subtest: my_streamy_test_plan
1..13

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
            "comment": "",
            "end": 0,
            "skipAll": true,
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
      "fullname": "empty",
      "id": 1,
      "name": "empty",
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "my_test > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_test > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "fullname": "my_test",
      "id": 2,
      "name": "my_test",
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
        "# Subtest: my_test_plan\\n",
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
          "fullname": "my_test_plan > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_test_plan > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "fullname": "my_test_plan",
      "id": 3,
      "name": "my_test_plan",
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
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "my_streamy_test > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_streamy_test > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test",
      "id": 4,
      "name": "Subtest: my_streamy_test",
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
        "# Subtest: my_streamy_test_plan\\n",
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
          "fullname": "my_streamy_test_plan > subtest event A",
          "id": 1,
          "name": "subtest event A",
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
          "fullname": "my_streamy_test_plan > subtest event B",
          "id": 2,
          "name": "subtest event B",
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "Subtest: my_streamy_test_plan",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
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
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "empty",
          "id": 1,
          "name": "empty",
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
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strict > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
# Subtest: my_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 2 - my_test
# Subtest: my_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 3 - my_test_plan
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 4 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 5 - Subtest: my_streamy_test_plan
1..5

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strict > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty

not ok 1 - empty
# Subtest: my_test
ok 2 - my_test > subtest event A
ok 3 - my_test > subtest event B
ok 4 - my_test
# Subtest: my_test_plan
ok 5 - my_test_plan > subtest event A
ok 6 - my_test_plan > subtest event B
ok 7 - my_test_plan
# Subtest: my_streamy_test
ok 8 - my_streamy_test > subtest event A
ok 9 - my_streamy_test > subtest event B
ok 10 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
ok 11 - my_streamy_test_plan > subtest event A
ok 12 - my_streamy_test_plan > subtest event B
ok 13 - Subtest: my_streamy_test_plan
1..13

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
            "comment": "",
            "end": 0,
            "skipAll": true,
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
      "fullname": "empty",
      "id": 1,
      "name": "empty",
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
    "empty",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "empty",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "empty",
          "id": 1,
          "name": "empty",
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

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strictBail > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`

exports[`test/parse-stringify.ts > TAP > perl-test2-buffered.tap > strictBail > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty

not ok 1 - empty
Bail out! empty

`
