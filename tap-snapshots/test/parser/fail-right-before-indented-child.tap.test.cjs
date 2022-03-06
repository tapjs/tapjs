/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=false 1`] = `
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
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
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
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "ok": true,
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
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=true 1`] = `
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
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
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
