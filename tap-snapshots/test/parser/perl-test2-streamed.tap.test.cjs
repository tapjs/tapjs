/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
    "ok 1 - Subtest: my_streamy_test\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
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
    "ok 2 - Subtest: my_streamy_test_plan\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`

exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
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
    "ok 1 - Subtest: my_streamy_test\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
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
    "ok 2 - Subtest: my_streamy_test_plan\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
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
]
`
