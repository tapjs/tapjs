/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 14\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "line",
    "# Subtest: a set of tests to be done later\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "line",
        "ok 1 - should have a thingie # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 2 - should have a second whoosits also # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "# Subtest: the subset\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "line",
            "ok 1 - should be a child thingie # TODO\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "todo": true,
            },
          ],
          Array [
            "line",
            "ok 2 - should also be a whoosits # TODO\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "todo": true,
            },
          ],
          Array [
            "line",
            "# Subtest: has some of these things\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "line",
                "ok 1 - true is truthy\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 1,
                  "name": "true is truthy",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - ten is also truthy\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
            "    ok 1 - true is truthy\\n",
          ],
          Array [
            "line",
            "    ok 2 - ten is also truthy\\n",
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "ok 3 - has some of these things\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "# todo: 2\\n",
          ],
          Array [
            "comment",
            "# todo: 2\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": null,
              "todo": 2,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be a child thingie # TODO\\n",
      ],
      Array [
        "line",
        "    ok 2 - should also be a whoosits # TODO\\n",
      ],
      Array [
        "line",
        "    # Subtest: has some of these things\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is truthy\\n",
      ],
      Array [
        "line",
        "        ok 2 - ten is also truthy\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "    ok 3 - has some of these things\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    # todo: 2\\n",
      ],
      Array [
        "line",
        "ok 3 - the subset\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..3\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# todo: 2\\n",
      ],
      Array [
        "comment",
        "# todo: 2\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 3,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 2,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - should have a thingie # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "should have a thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "should have a thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - should have a second whoosits also # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 2,
      "name": "should have a second whoosits also",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 2,
      "name": "should have a second whoosits also",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    # Subtest: the subset\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be a child thingie # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 1,
      "name": "should be a child thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 1,
      "name": "should be a child thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - should also be a whoosits # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 2,
      "name": "should also be a whoosits",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 2,
      "name": "should also be a whoosits",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "        # Subtest: has some of these things\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is truthy\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 1,
      "name": "true is truthy",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 1,
      "name": "true is truthy",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - ten is also truthy\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 2,
      "name": "ten is also truthy",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 2,
      "name": "ten is also truthy",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "        ok 3 - has some of these things\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        # todo: 2\\n",
  ],
  Array [
    "line",
    "    ok 3 - the subset\\n",
  ],
  Array [
    "line",
    "    1..3\\n",
  ],
  Array [
    "line",
    "    # todo: 2\\n",
  ],
  Array [
    "line",
    "ok 1 - a set of tests to be done later\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: another set of tests\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "line",
        "ok 1 - is a second set # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 2 - looks like english # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 3 - is marked TODO # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "1..3\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# todo: 3\\n",
      ],
      Array [
        "comment",
        "# todo: 3\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 3,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 3,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - is a second set # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 1,
      "name": "is a second set",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 1,
      "name": "is a second set",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - looks like english # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 2,
      "name": "looks like english",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 2,
      "name": "looks like english",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 3 - is marked TODO # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 3,
      "name": "is marked TODO",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 3,
      "name": "is marked TODO",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    1..3\\n",
  ],
  Array [
    "line",
    "    # todo: 3\\n",
  ],
  Array [
    "line",
    "ok 2 - another set of tests\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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

exports[`test/parser.js TAP todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 14\\n",
  ],
  Array [
    "version",
    14,
  ],
  Array [
    "line",
    "# Subtest: a set of tests to be done later\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "line",
        "ok 1 - should have a thingie # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 2 - should have a second whoosits also # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "# Subtest: the subset\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "line",
            "ok 1 - should be a child thingie # TODO\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "todo": true,
            },
          ],
          Array [
            "line",
            "ok 2 - should also be a whoosits # TODO\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "todo": true,
            },
          ],
          Array [
            "line",
            "# Subtest: has some of these things\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "line",
                "ok 1 - true is truthy\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 1,
                  "name": "true is truthy",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - ten is also truthy\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
            "    ok 1 - true is truthy\\n",
          ],
          Array [
            "line",
            "    ok 2 - ten is also truthy\\n",
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "ok 3 - has some of these things\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "# todo: 2\\n",
          ],
          Array [
            "comment",
            "# todo: 2\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": null,
              "todo": 2,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be a child thingie # TODO\\n",
      ],
      Array [
        "line",
        "    ok 2 - should also be a whoosits # TODO\\n",
      ],
      Array [
        "line",
        "    # Subtest: has some of these things\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is truthy\\n",
      ],
      Array [
        "line",
        "        ok 2 - ten is also truthy\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "    ok 3 - has some of these things\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    # todo: 2\\n",
      ],
      Array [
        "line",
        "ok 3 - the subset\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..3\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# todo: 2\\n",
      ],
      Array [
        "comment",
        "# todo: 2\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 3,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 2,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - should have a thingie # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "should have a thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "should have a thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - should have a second whoosits also # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 2,
      "name": "should have a second whoosits also",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later",
      "id": 2,
      "name": "should have a second whoosits also",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    # Subtest: the subset\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be a child thingie # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 1,
      "name": "should be a child thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 1,
      "name": "should be a child thingie",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - should also be a whoosits # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 2,
      "name": "should also be a whoosits",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "a set of tests to be done later the subset",
      "id": 2,
      "name": "should also be a whoosits",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "        # Subtest: has some of these things\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is truthy\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 1,
      "name": "true is truthy",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 1,
      "name": "true is truthy",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - ten is also truthy\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 2,
      "name": "ten is also truthy",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "a set of tests to be done later the subset has some of these things",
      "id": 2,
      "name": "ten is also truthy",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "        ok 3 - has some of these things\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        # todo: 2\\n",
  ],
  Array [
    "line",
    "    ok 3 - the subset\\n",
  ],
  Array [
    "line",
    "    1..3\\n",
  ],
  Array [
    "line",
    "    # todo: 2\\n",
  ],
  Array [
    "line",
    "ok 1 - a set of tests to be done later\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: another set of tests\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "line",
        "ok 1 - is a second set # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 2 - looks like english # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "ok 3 - is marked TODO # TODO\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "another set of tests",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "todo": true,
        },
      ],
      Array [
        "line",
        "1..3\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# todo: 3\\n",
      ],
      Array [
        "comment",
        "# todo: 3\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 3,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 3,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - is a second set # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 1,
      "name": "is a second set",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 1,
      "name": "is a second set",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 2 - looks like english # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 2,
      "name": "looks like english",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 2,
      "name": "looks like english",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    ok 3 - is marked TODO # TODO\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "another set of tests",
      "id": 3,
      "name": "is marked TODO",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "another set of tests",
      "id": 3,
      "name": "is marked TODO",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "    1..3\\n",
  ],
  Array [
    "line",
    "    # todo: 3\\n",
  ],
  Array [
    "line",
    "ok 2 - another set of tests\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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
