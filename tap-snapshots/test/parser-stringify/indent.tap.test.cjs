/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP indent.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
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
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
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
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
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
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
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
          "time": 1.2,
          "todo": 0,
        },
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
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
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

exports[`test/parser-stringify.js TAP indent.tap bail > stringified 1`] = `
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
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap bail > stringified flat 1`] = `
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
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
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
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
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
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
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
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
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
          "time": 1.2,
          "todo": 0,
        },
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
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
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

exports[`test/parser-stringify.js TAP indent.tap default settings > stringified 1`] = `
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
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap default settings > stringified flat 1`] = `
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
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
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
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
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
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
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
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# failed 3 of 3 tests\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
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
        "# failed 1 of 2 tests\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
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
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
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

exports[`test/parser-stringify.js TAP indent.tap strict > stringified 1`] = `
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
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap strict > stringified flat 1`] = `
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
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
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
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
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
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
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
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# failed 3 of 3 tests\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
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
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
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
        "# failed 1 of 2 tests\\n",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
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
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
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

exports[`test/parser-stringify.js TAP indent.tap strictBail > stringified 1`] = `
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
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser-stringify.js TAP indent.tap strictBail > stringified flat 1`] = `
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
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`
