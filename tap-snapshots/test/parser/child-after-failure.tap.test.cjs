/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP child-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
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
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
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
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
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
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser.js TAP child-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! 1\\n",
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "name": "1",
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
