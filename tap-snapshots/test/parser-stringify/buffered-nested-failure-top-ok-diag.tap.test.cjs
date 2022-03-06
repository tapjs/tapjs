/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "name": "no they aren't",
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
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "name": "no they aren't",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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
      "ok": false,
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "name": "no they aren't",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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
      "ok": false,
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "name": "no they aren't",
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
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-diag.tap strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`
