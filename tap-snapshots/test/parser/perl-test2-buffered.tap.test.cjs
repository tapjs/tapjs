/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
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
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
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
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 2 - my_test {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
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
        "line",
        "ok 2 - subtest event B\\n",
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
        "line",
        "1..2\\n",
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
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_test",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_test",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_test",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_test",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "}\\n",
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
    "line",
    "ok 3 - my_test_plan {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
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
        "line",
        "ok 2 - subtest event B\\n",
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
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_test_plan",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_test_plan",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_test_plan",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_test_plan",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
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
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
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
        "line",
        "ok 2 - subtest event B\\n",
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
        "line",
        "1..2\\n",
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
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_streamy_test",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_streamy_test",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_streamy_test",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_streamy_test",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 4 - Subtest: my_streamy_test\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
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
        "line",
        "ok 2 - subtest event B\\n",
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
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_streamy_test_plan",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_streamy_test_plan",
      "id": 1,
      "name": "subtest event A",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my_streamy_test_plan",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "my_streamy_test_plan",
      "id": 2,
      "name": "subtest event B",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 - Subtest: my_streamy_test_plan\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
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

exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
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
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
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
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "empty",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! empty\\n",
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
