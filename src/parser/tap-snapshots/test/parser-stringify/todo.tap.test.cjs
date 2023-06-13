/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > todo.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a thingie",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a second whoosits also",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should be a child thingie",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > has some of these things > true is truthy",
                  "id": 1,
                  "name": "true is truthy",
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
                  "fullname": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > has some of these things",
              "id": 3,
              "name": "has some of these things",
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
              "todo": 2,
              "todos": Array [
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should be a child thingie",
                  "id": 1,
                  "name": "should be a child thingie",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
                  "id": 2,
                  "name": "should also be a whoosits",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
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
          "diag": null,
          "fullname": "a set of tests to be done later > the subset",
          "id": 3,
          "name": "the subset",
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
          "todo": 2,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a thingie",
              "id": 1,
              "name": "should have a thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a second whoosits also",
              "id": 2,
              "name": "should have a second whoosits also",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "a set of tests to be done later",
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
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is a second set",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > looks like english",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is marked TODO",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
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
          "todo": 3,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is a second set",
              "id": 1,
              "name": "is a second set",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > looks like english",
              "id": 2,
              "name": "looks like english",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is marked TODO",
              "id": 3,
              "name": "is marked TODO",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "another set of tests",
      "id": 2,
      "name": "another set of tests",
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
]
`

exports[`test/parse-stringify.ts > TAP > todo.tap > bail > stringified 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
    ok 1 - should have a thingie # TODO
    ok 2 - should have a second whoosits also # TODO
    # Subtest: the subset
        ok 1 - should be a child thingie # TODO
        ok 2 - should also be a whoosits # TODO
        # Subtest: has some of these things
            ok 1 - true is truthy
            ok 2 - ten is also truthy
            1..2
        ok 3 - has some of these things
        1..3
    ok 3 - the subset
    1..3
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
ok 2 - another set of tests
1..2

`

exports[`test/parse-stringify.ts > TAP > todo.tap > bail > stringified flat 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
ok 1 - a set of tests to be done later > should have a thingie # TODO
ok 2 - a set of tests to be done later > should have a second whoosits also # TODO
# Subtest: the subset
ok 3 - a set of tests to be done later > the subset > should be a child thingie # TODO
ok 4 - a set of tests to be done later > the subset > should also be a whoosits # TODO
# Subtest: has some of these things
ok 5 - a set of tests to be done later > the subset > has some of these things > true is truthy
ok 6 - a set of tests to be done later > the subset > has some of these things > ten is also truthy
ok 7 - a set of tests to be done later > the subset > has some of these things
ok 8 - a set of tests to be done later > the subset
ok 9 - a set of tests to be done later
# Subtest: another set of tests
ok 10 - another set of tests > is a second set # TODO
ok 11 - another set of tests > looks like english # TODO
ok 12 - another set of tests > is marked TODO # TODO
ok 13 - another set of tests
1..13

`

exports[`test/parse-stringify.ts > TAP > todo.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a thingie",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a second whoosits also",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should be a child thingie",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > has some of these things > true is truthy",
                  "id": 1,
                  "name": "true is truthy",
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
                  "fullname": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > has some of these things",
              "id": 3,
              "name": "has some of these things",
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
              "todo": 2,
              "todos": Array [
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should be a child thingie",
                  "id": 1,
                  "name": "should be a child thingie",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
                  "id": 2,
                  "name": "should also be a whoosits",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
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
          "diag": null,
          "fullname": "a set of tests to be done later > the subset",
          "id": 3,
          "name": "the subset",
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
          "todo": 2,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a thingie",
              "id": 1,
              "name": "should have a thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a second whoosits also",
              "id": 2,
              "name": "should have a second whoosits also",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "a set of tests to be done later",
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
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is a second set",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > looks like english",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is marked TODO",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
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
          "todo": 3,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is a second set",
              "id": 1,
              "name": "is a second set",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > looks like english",
              "id": 2,
              "name": "looks like english",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is marked TODO",
              "id": 3,
              "name": "is marked TODO",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "another set of tests",
      "id": 2,
      "name": "another set of tests",
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
]
`

exports[`test/parse-stringify.ts > TAP > todo.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a set of tests to be done later > should have a thingie",
      "id": 1,
      "name": "a set of tests to be done later > should have a thingie",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a set of tests to be done later > should have a second whoosits also",
      "id": 2,
      "name": "a set of tests to be done later > should have a second whoosits also",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a set of tests to be done later > the subset > should be a child thingie",
      "id": 3,
      "name": "a set of tests to be done later > the subset > should be a child thingie",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
      "id": 4,
      "name": "a set of tests to be done later > the subset > should also be a whoosits",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a set of tests to be done later > the subset > has some of these things > true is truthy",
      "id": 5,
      "name": "a set of tests to be done later > the subset > has some of these things > true is truthy",
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
      "fullname": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
      "id": 6,
      "name": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
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
      "fullname": "another set of tests > is a second set",
      "id": 7,
      "name": "another set of tests > is a second set",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "another set of tests > looks like english",
      "id": 8,
      "name": "another set of tests > looks like english",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "another set of tests > is marked TODO",
      "id": 9,
      "name": "another set of tests > is marked TODO",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
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
]
`

exports[`test/parse-stringify.ts > TAP > todo.tap > default settings > stringified 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
    ok 1 - should have a thingie # TODO
    ok 2 - should have a second whoosits also # TODO
    # Subtest: the subset
        ok 1 - should be a child thingie # TODO
        ok 2 - should also be a whoosits # TODO
        # Subtest: has some of these things
            ok 1 - true is truthy
            ok 2 - ten is also truthy
            1..2
        ok 3 - has some of these things
        1..3
    ok 3 - the subset
    1..3
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
ok 2 - another set of tests
1..2

`

exports[`test/parse-stringify.ts > TAP > todo.tap > default settings > stringified flat 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
ok 1 - a set of tests to be done later > should have a thingie # TODO
ok 2 - a set of tests to be done later > should have a second whoosits also # TODO
# Subtest: the subset
ok 3 - a set of tests to be done later > the subset > should be a child thingie # TODO
ok 4 - a set of tests to be done later > the subset > should also be a whoosits # TODO
# Subtest: has some of these things
ok 5 - a set of tests to be done later > the subset > has some of these things > true is truthy
ok 6 - a set of tests to be done later > the subset > has some of these things > ten is also truthy
ok 7 - a set of tests to be done later > the subset > has some of these things
ok 8 - a set of tests to be done later > the subset
ok 9 - a set of tests to be done later
# Subtest: another set of tests
ok 10 - another set of tests > is a second set # TODO
ok 11 - another set of tests > looks like english # TODO
ok 12 - another set of tests > is marked TODO # TODO
ok 13 - another set of tests
1..13

`

exports[`test/parse-stringify.ts > TAP > todo.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a thingie",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a second whoosits also",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should be a child thingie",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > has some of these things > true is truthy",
                  "id": 1,
                  "name": "true is truthy",
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
                  "fullname": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > has some of these things",
              "id": 3,
              "name": "has some of these things",
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
              "todo": 2,
              "todos": Array [
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should be a child thingie",
                  "id": 1,
                  "name": "should be a child thingie",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
                  "id": 2,
                  "name": "should also be a whoosits",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
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
          "diag": null,
          "fullname": "a set of tests to be done later > the subset",
          "id": 3,
          "name": "the subset",
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
          "todo": 2,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a thingie",
              "id": 1,
              "name": "should have a thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a second whoosits also",
              "id": 2,
              "name": "should have a second whoosits also",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "a set of tests to be done later",
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
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is a second set",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > looks like english",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is marked TODO",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
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
          "todo": 3,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is a second set",
              "id": 1,
              "name": "is a second set",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > looks like english",
              "id": 2,
              "name": "looks like english",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is marked TODO",
              "id": 3,
              "name": "is marked TODO",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "another set of tests",
      "id": 2,
      "name": "another set of tests",
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
]
`

exports[`test/parse-stringify.ts > TAP > todo.tap > strict > stringified 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
    ok 1 - should have a thingie # TODO
    ok 2 - should have a second whoosits also # TODO
    # Subtest: the subset
        ok 1 - should be a child thingie # TODO
        ok 2 - should also be a whoosits # TODO
        # Subtest: has some of these things
            ok 1 - true is truthy
            ok 2 - ten is also truthy
            1..2
        ok 3 - has some of these things
        1..3
    ok 3 - the subset
    1..3
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
ok 2 - another set of tests
1..2

`

exports[`test/parse-stringify.ts > TAP > todo.tap > strict > stringified flat 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
ok 1 - a set of tests to be done later > should have a thingie # TODO
ok 2 - a set of tests to be done later > should have a second whoosits also # TODO
# Subtest: the subset
ok 3 - a set of tests to be done later > the subset > should be a child thingie # TODO
ok 4 - a set of tests to be done later > the subset > should also be a whoosits # TODO
# Subtest: has some of these things
ok 5 - a set of tests to be done later > the subset > has some of these things > true is truthy
ok 6 - a set of tests to be done later > the subset > has some of these things > ten is also truthy
ok 7 - a set of tests to be done later > the subset > has some of these things
ok 8 - a set of tests to be done later > the subset
ok 9 - a set of tests to be done later
# Subtest: another set of tests
ok 10 - another set of tests > is a second set # TODO
ok 11 - another set of tests > looks like english # TODO
ok 12 - another set of tests > is marked TODO # TODO
ok 13 - another set of tests
1..13

`

exports[`test/parse-stringify.ts > TAP > todo.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    14,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a set of tests to be done later\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a thingie",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a set of tests to be done later > should have a second whoosits also",
          "id": 2,
          "name": "should have a second whoosits also",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should be a child thingie",
              "id": 1,
              "name": "should be a child thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
              "id": 2,
              "name": "should also be a whoosits",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > has some of these things > true is truthy",
                  "id": 1,
                  "name": "true is truthy",
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
                  "fullname": "a set of tests to be done later > the subset > has some of these things > ten is also truthy",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "diag": null,
              "fullname": "a set of tests to be done later > the subset > has some of these things",
              "id": 3,
              "name": "has some of these things",
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
              "todo": 2,
              "todos": Array [
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should be a child thingie",
                  "id": 1,
                  "name": "should be a child thingie",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
                Object {
                  "buffered": false,
                  "diag": null,
                  "fullname": "a set of tests to be done later > the subset > should also be a whoosits",
                  "id": 2,
                  "name": "should also be a whoosits",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
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
          "diag": null,
          "fullname": "a set of tests to be done later > the subset",
          "id": 3,
          "name": "the subset",
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
          "todo": 2,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a thingie",
              "id": 1,
              "name": "should have a thingie",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "a set of tests to be done later > should have a second whoosits also",
              "id": 2,
              "name": "should have a second whoosits also",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "a set of tests to be done later",
      "id": 1,
      "name": "a set of tests to be done later",
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
        "# Subtest: another set of tests\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is a second set",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > looks like english",
          "id": 2,
          "name": "looks like english",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "another set of tests > is marked TODO",
          "id": 3,
          "name": "is marked TODO",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": true,
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
          "todo": 3,
          "todos": Array [
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is a second set",
              "id": 1,
              "name": "is a second set",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > looks like english",
              "id": 2,
              "name": "looks like english",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
            Object {
              "buffered": false,
              "diag": null,
              "fullname": "another set of tests > is marked TODO",
              "id": 3,
              "name": "is marked TODO",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
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
      "diag": null,
      "fullname": "another set of tests",
      "id": 2,
      "name": "another set of tests",
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
]
`

exports[`test/parse-stringify.ts > TAP > todo.tap > strictBail > stringified 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
    ok 1 - should have a thingie # TODO
    ok 2 - should have a second whoosits also # TODO
    # Subtest: the subset
        ok 1 - should be a child thingie # TODO
        ok 2 - should also be a whoosits # TODO
        # Subtest: has some of these things
            ok 1 - true is truthy
            ok 2 - ten is also truthy
            1..2
        ok 3 - has some of these things
        1..3
    ok 3 - the subset
    1..3
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
ok 2 - another set of tests
1..2

`

exports[`test/parse-stringify.ts > TAP > todo.tap > strictBail > stringified flat 1`] = `
TAP version 14
# Subtest: a set of tests to be done later
ok 1 - a set of tests to be done later > should have a thingie # TODO
ok 2 - a set of tests to be done later > should have a second whoosits also # TODO
# Subtest: the subset
ok 3 - a set of tests to be done later > the subset > should be a child thingie # TODO
ok 4 - a set of tests to be done later > the subset > should also be a whoosits # TODO
# Subtest: has some of these things
ok 5 - a set of tests to be done later > the subset > has some of these things > true is truthy
ok 6 - a set of tests to be done later > the subset > has some of these things > ten is also truthy
ok 7 - a set of tests to be done later > the subset > has some of these things
ok 8 - a set of tests to be done later > the subset
ok 9 - a set of tests to be done later
# Subtest: another set of tests
ok 10 - another set of tests > is a second set # TODO
ok 11 - another set of tests > looks like english # TODO
ok 12 - another set of tests > is marked TODO # TODO
ok 13 - another set of tests
1..13

`
