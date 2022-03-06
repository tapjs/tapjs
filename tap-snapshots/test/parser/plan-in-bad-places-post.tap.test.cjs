/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
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
          "fullname": "subtest",
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
      "fullname": "subtest",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "subtest",
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
      "name": "subtest",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
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
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
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

exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
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
          "fullname": "subtest",
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
      "fullname": "subtest",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "subtest",
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
      "name": "subtest",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "yaml",
      "ok": true,
    },
  ],
  Array [
    "extra",
    String(
        ---
        ok: lamy
      
    ),
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 99,
      "start": 1,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
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
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 99,
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
