/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-buffer.tap bail > parsed 1`] = `
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
        "# Subtest: nesting\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 1,
              "name": "true is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 2,
              "name": "this passes",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 3,
              "name": "nested ok",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
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
          "fullname": "nesting",
          "id": 2,
          "name": "second",
          "ok": true,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
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
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer.tap bail > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap default settings > parsed 1`] = `
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
        "# Subtest: nesting\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 1,
              "name": "true is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 2,
              "name": "this passes",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 3,
              "name": "nested ok",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
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
          "fullname": "nesting",
          "id": 2,
          "name": "second",
          "ok": true,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
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
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strict > parsed 1`] = `
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
        "# Subtest: nesting\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 1,
              "name": "true is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 2,
              "name": "this passes",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 3,
              "name": "nested ok",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
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
          "fullname": "nesting",
          "id": 2,
          "name": "second",
          "ok": true,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
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
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strict > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strictBail > parsed 1`] = `
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
        "# Subtest: nesting\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 1,
              "name": "true is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting first",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 2,
              "name": "this passes",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "nesting second",
              "id": 3,
              "name": "nested ok",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
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
          "fullname": "nesting",
          "id": 2,
          "name": "second",
          "ok": true,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
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
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`

exports[`test/parser-stringify.js TAP subtest-buffer.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: nesting
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first
    # Subtest: second
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second
ok 1 - nesting
ok 2 - this passes
1..2
# time=66.857ms

`
