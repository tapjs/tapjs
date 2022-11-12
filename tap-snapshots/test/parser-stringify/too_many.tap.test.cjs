/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP too_many.tap bail > parsed 1`] = `
Array [
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(7) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 6,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 7,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP too_many.tap bail > stringified 1`] = `
1..3
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap bail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap default settings > parsed 1`] = `
Array [
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(7) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 6,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 7,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP too_many.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(7) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 7 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 7,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 6,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 7,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP too_many.tap default settings > stringified 1`] = `
1..3
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap default settings > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap strict > parsed 1`] = `
Array [
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(7) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 6,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 7,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP too_many.tap strict > stringified 1`] = `
1..3
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap strict > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap strictBail > parsed 1`] = `
Array [
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 6,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(7) != plan(3)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 4,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 5,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 6,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 7,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 7,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP too_many.tap strictBail > stringified 1`] = `
1..3
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`

exports[`test/parse-stringify.ts TAP too_many.tap strictBail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
# test count(7) != plan(3)
# failed 4 of 7 tests

`
