/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..1\\n",
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
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x",
      "id": 1,
      "name": "not a subtest",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x",
      "id": 1,
      "name": "not a subtest",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
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
]
`

exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..1\\n",
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
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x",
      "id": 1,
      "name": "not a subtest",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x",
      "id": 1,
      "name": "not a subtest",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
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
]
`
