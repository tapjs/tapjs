/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP perl-test2-buffered.tap bail > parsed 1`] = `
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
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
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
          "fullname": "",
          "id": 1,
          "name": "empty",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap bail > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap bail > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap default settings > parsed 1`] = `
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
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
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
          "fullname": "my_test",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "my_test",
      "ok": true,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test_plan",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test_plan",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 3,
      "name": "my_test_plan",
      "ok": true,
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
          "fullname": "my_streamy_test",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "ok": true,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test_plan",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test_plan",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
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
    "comment",
    "# failed 1 of 5 tests\\n",
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
          "fullname": "",
          "id": 1,
          "name": "empty",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap default settings > stringified 1`] = `
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
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap default settings > stringified flat 1`] = `
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
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strict > parsed 1`] = `
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
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
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
          "fullname": "my_test",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "my_test",
      "ok": true,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test_plan",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_test_plan",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 3,
      "name": "my_test_plan",
      "ok": true,
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
          "fullname": "my_streamy_test",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "ok": true,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test_plan",
          "id": 1,
          "name": "subtest event A",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my_streamy_test_plan",
          "id": 2,
          "name": "subtest event B",
          "ok": true,
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
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
    "comment",
    "# failed 1 of 5 tests\\n",
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
          "fullname": "",
          "id": 1,
          "name": "empty",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strict > stringified 1`] = `
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
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strict > stringified flat 1`] = `
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
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strictBail > parsed 1`] = `
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
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
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
          "fullname": "",
          "id": 1,
          "name": "empty",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strictBail > stringified 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`

exports[`test/parser-stringify.js TAP perl-test2-buffered.tap strictBail > stringified flat 1`] = `
# Seeded srand with seed '20160810' from local date.
# Subtest: empty
    1..0
not ok 1 - empty
Bail out! empty

`
