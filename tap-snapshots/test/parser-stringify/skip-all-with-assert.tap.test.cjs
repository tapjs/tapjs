/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap bail > stringified 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap bail > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "plan",
    Object {
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
        "comment": "SKIP Insufficient skipping",
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap default settings > stringified 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap default settings > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
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
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "ok 1 - should not be asserting\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strict > stringified 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strict > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
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
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "ok 1 - should not be asserting\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strictBail > stringified 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`

exports[`test/parse-stringify.ts TAP skip-all-with-assert.tap strictBail > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
1..0 # SKIP Insufficient skipping
ok 1 - should not be asserting

`
