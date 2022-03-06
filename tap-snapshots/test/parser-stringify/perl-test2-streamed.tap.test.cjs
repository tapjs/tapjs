/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP perl-test2-streamed.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
      "id": 1,
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
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap bail > stringified 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap bail > stringified flat 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
      "id": 1,
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
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap default settings > stringified 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap default settings > stringified flat 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
      "id": 1,
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
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strict > stringified 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strict > stringified flat 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
      "id": 1,
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
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strictBail > stringified 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`

exports[`test/parser-stringify.js TAP perl-test2-streamed.tap strictBail > stringified flat 1`] = `
# Seeded srand with seed '20160809' from local date.
# Subtest: my_streamy_test
    ok 1 - subtest event A
    ok 2 - subtest event B
    1..2
ok 1 - Subtest: my_streamy_test
# Subtest: my_streamy_test_plan
    1..2
    ok 1 - subtest event A
    ok 2 - subtest event B
ok 2 - Subtest: my_streamy_test_plan
1..2

`
