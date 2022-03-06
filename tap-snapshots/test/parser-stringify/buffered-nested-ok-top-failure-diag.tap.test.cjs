/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap bail > parsed 1`] = `
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
        "# Subtest: please sir, my son, he is sick\\n",
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
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap default settings > parsed 1`] = `
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
        "# Subtest: please sir, my son, he is sick\\n",
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
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strict > parsed 1`] = `
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
        "# Subtest: please sir, my son, he is sick\\n",
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
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strictBail > parsed 1`] = `
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
        "# Subtest: please sir, my son, he is sick\\n",
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
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser-stringify.js TAP buffered-nested-ok-top-failure-diag.tap strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`
