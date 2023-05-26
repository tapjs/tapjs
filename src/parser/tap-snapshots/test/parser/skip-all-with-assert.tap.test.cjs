/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP skip-all-with-assert.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "SKIP Insufficient skipping",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
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
        "comment": "SKIP Insufficient skipping",
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
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

exports[`test/parser.ts TAP skip-all-with-assert.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "SKIP Insufficient skipping",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
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
        "comment": "SKIP Insufficient skipping",
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
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
