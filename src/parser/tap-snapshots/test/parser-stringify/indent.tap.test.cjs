/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > indent.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
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
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
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
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > granddaughter",
                  "id": 0,
                  "name": "granddaughter",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": "for no raisin",
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              "time": 1200,
              "todo": 1,
              "todos": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > grandchild",
                  "id": 0,
                  "name": "grandchild",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > indent.tap > bail > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok - granddaughter # SKIP for no raisin
        ok - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok - grandchild # TODO
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > bail > stringified flat 1`] = `
TAP version 13
1..0
# nesting
# Subtest: first
ok 1 - first > true is ok # time=1.234ms
ok 2 - first > doag is also okay # time=1.234ms
ok 3 - first # time=2.589ms
# Subtest: second
ok 4 - second > no plan # time=1.001ms
# Subtest: this passes
not ok 5 - second > this passes > granddaughter # SKIP for no raisin
ok 6 - second > this passes > grandson # time=1001ms
  ---
  ok: 1
  this: is not tap
  it: is yaml
  ...
not ok 7 - second > this passes > grandchild # TODO
ok 8 - second > this passes # time=1200ms
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 9 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
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
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
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
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > granddaughter",
                  "id": 0,
                  "name": "granddaughter",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": "for no raisin",
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              "time": 1200,
              "todo": 1,
              "todos": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > grandchild",
                  "id": 0,
                  "name": "grandchild",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > indent.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "first > true is ok",
      "id": 1,
      "name": "first > true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "first > doag is also okay",
      "id": 2,
      "name": "first > doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "second > no plan",
      "id": 3,
      "name": "second > no plan",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.001,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "second > this passes > granddaughter",
      "id": 4,
      "name": "second > this passes > granddaughter",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "for no raisin",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second > this passes > grandson",
      "id": 5,
      "name": "second > this passes > grandson",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1001,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "second > this passes > grandchild",
      "id": 6,
      "name": "second > this passes > grandchild",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "plan",
    Object {
      "end": 6,
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > indent.tap > default settings > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok - granddaughter # SKIP for no raisin
        ok - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok - grandchild # TODO
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > default settings > stringified flat 1`] = `
TAP version 13
1..0
# nesting
# Subtest: first
ok 1 - first > true is ok # time=1.234ms
ok 2 - first > doag is also okay # time=1.234ms
ok 3 - first # time=2.589ms
# Subtest: second
ok 4 - second > no plan # time=1.001ms
# Subtest: this passes
not ok 5 - second > this passes > granddaughter # SKIP for no raisin
ok 6 - second > this passes > grandson # time=1001ms
  ---
  ok: 1
  this: is not tap
  it: is yaml
  ...
not ok 7 - second > this passes > grandchild # TODO
ok 8 - second > this passes # time=1200ms
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 9 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
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
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
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
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 3,
              "failures": Array [
                Object {
                  "data": String(
                      ---
                      ok: 1
                      this: is not tap or yaml
                      it: is garbage
                    
                  ),
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > granddaughter",
                  "id": 0,
                  "name": "granddaughter",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": "for no raisin",
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              "time": 1200,
              "todo": 1,
              "todos": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > grandchild",
                  "id": 0,
                  "name": "grandchild",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 1,
          "failures": Array [
            Object {
              "data": String(
                  ---
                  ok: 1
                  this: is not tap or yaml
                  it: is garbage
                
              ),
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > indent.tap > strict > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok - granddaughter # SKIP for no raisin
        ok - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok - grandchild # TODO
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > strict > stringified flat 1`] = `
TAP version 13
1..0
# nesting
# Subtest: first
ok 1 - first > true is ok # time=1.234ms
ok 2 - first > doag is also okay # time=1.234ms
ok 3 - first # time=2.589ms
# Subtest: second
ok 4 - second > no plan # time=1.001ms
# Subtest: this passes
not ok 5 - second > this passes > granddaughter # SKIP for no raisin
ok 6 - second > this passes > grandson # time=1001ms
  ---
  ok: 1
  this: is not tap
  it: is yaml
  ...
not ok 7 - second > this passes > grandchild # TODO
ok 8 - second > this passes # time=1200ms
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 9 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
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
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
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
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
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
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 3,
              "failures": Array [
                Object {
                  "data": String(
                      ---
                      ok: 1
                      this: is not tap or yaml
                      it: is garbage
                    
                  ),
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > granddaughter",
                  "id": 0,
                  "name": "granddaughter",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": "for no raisin",
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              "time": 1200,
              "todo": 1,
              "todos": Array [
                Object {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "second > this passes > grandchild",
                  "id": 0,
                  "name": "grandchild",
                  "ok": false,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": true,
                },
              ],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 1,
          "failures": Array [
            Object {
              "data": String(
                  ---
                  ok: 1
                  this: is not tap or yaml
                  it: is garbage
                
              ),
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > indent.tap > strictBail > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok - granddaughter # SKIP for no raisin
        ok - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok - grandchild # TODO
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parse-stringify.ts > TAP > indent.tap > strictBail > stringified flat 1`] = `
TAP version 13
1..0
# nesting
# Subtest: first
ok 1 - first > true is ok # time=1.234ms
ok 2 - first > doag is also okay # time=1.234ms
ok 3 - first # time=2.589ms
# Subtest: second
ok 4 - second > no plan # time=1.001ms
# Subtest: this passes
not ok 5 - second > this passes > granddaughter # SKIP for no raisin
ok 6 - second > this passes > grandson # time=1001ms
  ---
  ok: 1
  this: is not tap
  it: is yaml
  ...
not ok 7 - second > this passes > grandchild # TODO
ok 8 - second > this passes # time=1200ms
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 9 - second # time=1.2ms

`
