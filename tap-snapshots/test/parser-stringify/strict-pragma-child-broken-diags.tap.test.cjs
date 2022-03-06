/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
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
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "test point in child",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "test point in child",
          "count": 1,
          "fail": 3,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
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
    ],
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "bailout",
    "test point in child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "test point in child",
      "count": 0,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
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

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap bail > stringified 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    Bail out! test point in child
      ...
      hello: world
Bail out! test point in child

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap bail > stringified flat 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    Bail out! test point in child
      ...
      hello: world
Bail out! test point in child

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
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
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# test count(1) != plan(null)\\n",
      ],
      Array [
        "comment",
        "# failed 4 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 4,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
              "ok": false,
            },
            Object {
              "tapError": "no plan",
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
    ],
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "assert",
    Result {
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
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
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

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap default settings > stringified 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    # test count(1) != plan(null)
    # failed 4 test
      ...
      hello: world
not ok 1 - child
1..1
# failed 3 test

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap default settings > stringified flat 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    # test count(1) != plan(null)
    # failed 4 test
      ...
      hello: world
not ok 1 - child
1..1
# failed 3 test

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
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
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# test count(1) != plan(null)\\n",
      ],
      Array [
        "comment",
        "# failed 4 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 4,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
              "ok": false,
            },
            Object {
              "tapError": "no plan",
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
    ],
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "assert",
    Result {
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
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
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

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strict > stringified 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    # test count(1) != plan(null)
    # failed 4 test
      ...
      hello: world
not ok 1 - child
1..1
# failed 3 test

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strict > stringified flat 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    # test count(1) != plan(null)
    # failed 4 test
      ...
      hello: world
not ok 1 - child
1..1
# failed 3 test

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
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
          "name": "test point in child",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "test point in child",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "test point in child",
          "count": 1,
          "fail": 3,
          "failures": Array [
            Object {
              "data": "  ...\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  hello: world\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Result {
              "fullname": "child",
              "id": 1,
              "name": "test point in child",
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
    ],
  ],
  Array [
    "extra",
    "      ...\\n",
  ],
  Array [
    "extra",
    "      hello: world\\n",
  ],
  Array [
    "bailout",
    "test point in child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "test point in child",
      "count": 0,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  hello: world\\n",
          "tapError": "Non-TAP data encountered in strict mode",
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

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strictBail > stringified 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    Bail out! test point in child
      ...
      hello: world
Bail out! test point in child

`

exports[`test/parser-stringify.js TAP strict-pragma-child-broken-diags.tap strictBail > stringified flat 1`] = `
TAP version 13
pragma +strict
# Subtest: child
    not ok 1 - test point in child
    Bail out! test point in child
      ...
      hello: world
Bail out! test point in child

`
