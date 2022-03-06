/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-confusing.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
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
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
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
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP subtest-confusing.tap bail > stringified 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
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
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
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
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP subtest-confusing.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
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
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
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
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP subtest-confusing.tap strict > stringified 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
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
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
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
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP subtest-confusing.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`

exports[`test/parser-stringify.js TAP subtest-confusing.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: a brace looks like this
    # Subtest: x
        # Subtest: y
        ok 1 - ypoint
        1..1
    ok 1 - y
    1..1
ok 1 - a brace looks like this
ok 2 - x
1..2

`
