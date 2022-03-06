/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP todo.tap bail > parsed 1`] = `
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
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
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
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
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
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
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
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
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
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
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
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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

exports[`test/parser-stringify.js TAP todo.tap bail > stringified 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap bail > stringified flat 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap default settings > parsed 1`] = `
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
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
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
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
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
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
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
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
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
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
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
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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

exports[`test/parser-stringify.js TAP todo.tap default settings > stringified 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap default settings > stringified flat 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap strict > parsed 1`] = `
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
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
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
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
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
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
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
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
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
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
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
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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

exports[`test/parser-stringify.js TAP todo.tap strict > stringified 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap strict > stringified flat 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap strictBail > parsed 1`] = `
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
          "fullname": "a set of tests to be done later",
          "id": 1,
          "name": "should have a thingie",
          "ok": true,
          "todo": true,
        },
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: the subset\\n",
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
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: has some of these things\\n",
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
                "assert",
                Result {
                  "fullname": "a set of tests to be done later the subset has some of these things",
                  "id": 2,
                  "name": "ten is also truthy",
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
              "fullname": "a set of tests to be done later the subset",
              "id": 3,
              "name": "has some of these things",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
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
        "assert",
        Result {
          "fullname": "a set of tests to be done later",
          "id": 3,
          "name": "the subset",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "a set of tests to be done later",
      "ok": true,
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
          "fullname": "another set of tests",
          "id": 1,
          "name": "is a second set",
          "ok": true,
          "todo": true,
        },
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
        "plan",
        Object {
          "end": 3,
          "start": 1,
        },
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "another set of tests",
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

exports[`test/parser-stringify.js TAP todo.tap strictBail > stringified 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`

exports[`test/parser-stringify.js TAP todo.tap strictBail > stringified flat 1`] = `
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
        # todo: 2
    ok 3 - the subset
    1..3
    # todo: 2
ok 1 - a set of tests to be done later
# Subtest: another set of tests
    ok 1 - is a second set # TODO
    ok 2 - looks like english # TODO
    ok 3 - is marked TODO # TODO
    1..3
    # todo: 3
ok 2 - another set of tests
1..2

`
