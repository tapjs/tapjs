/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap bail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "child",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
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

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap bail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap bail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap default settings > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
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
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
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

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap default settings > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap default settings > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strict > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
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
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
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

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strict > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strict > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strictBail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "child",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
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

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strictBail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser-stringify.js TAP buffered-with-diag-not-ok.tap strictBail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`
