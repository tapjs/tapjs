/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-mixing.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x1 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x1",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x2 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x2",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x3 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x3",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x4 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x4",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x5 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x5",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x6 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x6",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x7 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x7",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x8 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x8",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x9 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x9",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 9,
      "name": "x9",
      "ok": true,
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
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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

exports[`test/parser-stringify.js TAP subtest-mixing.tap bail > stringified 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap bail > stringified flat 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x1 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x1",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x2 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x2",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x3 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x3",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x4 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x4",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x5 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x5",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x6 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x6",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x7 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x7",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x8 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x8",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x9 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x9",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 9,
      "name": "x9",
      "ok": true,
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
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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

exports[`test/parser-stringify.js TAP subtest-mixing.tap default settings > stringified 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap default settings > stringified flat 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x1 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x1",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x2 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x2",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x3 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x3",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x4 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x4",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x5 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x5",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x6 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x6",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x7 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x7",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x8 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x8",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x9 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x9",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 9,
      "name": "x9",
      "ok": true,
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
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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

exports[`test/parser-stringify.js TAP subtest-mixing.tap strict > stringified 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap strict > stringified flat 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x1 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x1",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x2 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x2",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x3 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x3",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x4 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x4",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x5 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x5",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x6 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x6",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x7 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x7",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x8 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x8",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x9 y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
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
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
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
          "fullname": "x9",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
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
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
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
      "id": 9,
      "name": "x9",
      "ok": true,
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
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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

exports[`test/parser-stringify.js TAP subtest-mixing.tap strictBail > stringified 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`

exports[`test/parser-stringify.js TAP subtest-mixing.tap strictBail > stringified flat 1`] = `
TAP version 13
# All of these should be semantically equivalent
# Subtest: x1
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - x1
# Subtest: x2
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 2 - x2
# Subtest: x3
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 3 - x3
# Subtest: x4
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 4 - x4
# Subtest: x5
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 5 - x5
# Subtest: x6
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 6 - x6
# Subtest: x7
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 7 - x7
# Subtest: x8
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 8 - x8
# Subtest: x9
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 9 - x9
1..9

`
