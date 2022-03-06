/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP skip-all-with-test.tap > output bail=false 1`] = `
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
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-test.tap > output bail=true 1`] = `
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
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`
