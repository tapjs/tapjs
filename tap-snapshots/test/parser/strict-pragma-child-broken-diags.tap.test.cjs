/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP strict-pragma-child-broken-diags.tap > output bail=false 1`] = `
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
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "not ok 1 - test point in child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "line",
        "  hello: world\\n",
      ],
      Array [
        "line",
        "# test count(1) != plan(null)\\n",
      ],
      Array [
        "comment",
        "# test count(1) != plan(null)\\n",
      ],
      Array [
        "line",
        "# failed 4 test\\n",
      ],
      Array [
        "comment",
        "# failed 4 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 4,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
              "ok": false,
            },
            Object {
              "tapError": "no plan",
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
    ],
  ],
  Array [
    "line",
    "    not ok 1 - test point in child\\n",
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "name": "test point in child",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "child",
      "id": 1,
      "name": "test point in child",
      "ok": false,
    },
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "      hello: world\\n",
  ],
  Array [
    "line",
    "    # test count(1) != plan(null)\\n",
  ],
  Array [
    "line",
    "    # failed 4 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
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
    "line",
    "# failed 3 test\\n",
  ],
  Array [
    "comment",
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser.js TAP strict-pragma-child-broken-diags.tap > output bail=true 1`] = `
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
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "not ok 1 - test point in child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "line",
        "  hello: world\\n",
      ],
      Array [
        "line",
        "Bail out! test point in child\\n",
      ],
      Array [
        "bailout",
        "test point in child",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "test point in child",
          "count": 1,
          "fail": 3,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
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
    ],
  ],
  Array [
    "line",
    "    not ok 1 - test point in child\\n",
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "name": "test point in child",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "child",
      "id": 1,
      "name": "test point in child",
      "ok": false,
    },
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "      hello: world\\n",
  ],
  Array [
    "line",
    "    Bail out! test point in child\\n",
  ],
  Array [
    "bailout",
    "test point in child",
  ],
  Array [
    "line",
    "Bail out! test point in child\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "test point in child",
      "count": 0,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
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
