/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP die.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP die.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`
