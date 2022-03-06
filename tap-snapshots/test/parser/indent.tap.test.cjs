/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
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
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
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
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
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
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
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
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
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
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
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
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
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
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
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
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
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
        "line",
        "1..2\\n",
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
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "second this passes",
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
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
    "pass",
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
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "second this passes",
      "name": "grandchild",
      "ok": false,
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
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
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

exports[`test/parser.js TAP indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
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
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
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
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
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
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
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
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
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
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
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
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
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
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
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
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
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
        "line",
        "1..2\\n",
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
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "second this passes",
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
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
    "pass",
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
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "second this passes",
      "name": "grandchild",
      "ok": false,
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
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
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
