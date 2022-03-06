/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap bail > parsed 1`] = `
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
          "ok": false,
        },
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
              "fullname": "my kids are fine",
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
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    Bail out!
Bail out!

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    Bail out!
Bail out!

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap default settings > parsed 1`] = `
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strict > parsed 1`] = `
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strictBail > parsed 1`] = `
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
          "ok": false,
        },
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
              "fullname": "my kids are fine",
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
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
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

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    Bail out!
Bail out!

`

exports[`test/parser-stringify.js TAP buffered-nested-failure-top-ok-no-msg.tap strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok
    Bail out!
Bail out!

`
