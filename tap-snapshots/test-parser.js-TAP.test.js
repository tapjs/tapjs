/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP bailout-no-raison.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": "GERONIMMMOOOOOO!!!",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": "GERONIMMMOOOOOO!!!",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
        Result {
          "ok": false,
          "id": 3,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 6,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 5,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 6,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 5,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 9,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 99997,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 99998,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 99999,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100000,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100001,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100002,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100003,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100004,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100005,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 9,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 99997,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 99998,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 99999,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100000,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100001,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100002,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100003,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100004,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 100005,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 136211425,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 136211426,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 136211425,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
        Result {
          "ok": true,
          "id": 136211426,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
        },
      ],
      Array [
        "line",
        "Bail out! # no they aren't\\n",
      ],
      Array [
        "bailout",
        "# no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# no they aren't",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "line",
    "    Bail out! # no they aren't\\n",
  ],
  Array [
    "bailout",
    "# no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! # no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# no they aren't",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "my kids are fine",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
        },
      ],
      Array [
        "line",
        "Bail out!\\n",
      ],
      Array [
        "bailout",
        "",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": true,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "line",
    "    Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
        },
      ],
      Array [
        "line",
        "Bail out! # no they aren't\\n",
      ],
      Array [
        "bailout",
        "# no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# no they aren't",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "line",
    "    Bail out! # no they aren't\\n",
  ],
  Array [
    "bailout",
    "# no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! # no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# no they aren't",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "Bail out! # please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "# please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please sir, my son, he is sick",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please sir, my son, he is sick",
          "diag": Object {
            "some": "diag",
          },
          "buffered": true,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please sir, my son, he is sick",
          "diag": Object {
            "some": "diag",
          },
          "buffered": true,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "Bail out! # please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "# please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please sir, my son, he is sick",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "please sir, my son, he is sick",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "please sir, my son, he is sick",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "Bail out! # child\\n",
  ],
  Array [
    "bailout",
    "# child",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# child",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "child",
          "diag": Object {
            "some": "diagnostics",
          },
          "buffered": true,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "child",
          "diag": Object {
            "some": "diagnostics",
          },
          "buffered": true,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
    },
  ],
  Array [
    "line",
    "Bail out! # 1\\n",
  ],
  Array [
    "bailout",
    "# 1",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# 1",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "1",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
    },
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "1",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Should output debugger message",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 537.383,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Should output debugger message",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 537.383,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
    },
  ],
  Array [
    "line",
    "Bail out! # all hell broke lose\\n",
  ],
  Array [
    "bailout",
    "# all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": "# all hell broke lose",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke lose",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negociations\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negociations",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
    },
  ],
  Array [
    "line",
    "not ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 9,
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 10,
    },
  ],
  Array [
    "line",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
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
      "ok": false,
      "count": 10,
      "pass": 7,
      "fail": 4,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke lose",
        },
        Result {
          "ok": false,
          "id": 9,
        },
        Result {
          "ok": false,
          "id": 10,
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
    },
  ],
  Array [
    "line",
    "Bail out! # all hell broke loose\\n",
  ],
  Array [
    "bailout",
    "# all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": "# all hell broke loose",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke loose",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
    },
  ],
  Array [
    "line",
    "not ok 4  # TODO if I heard a voice from heaven ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "if I heard a voice from heaven ...",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok say \\"live without loving\\",\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "say \\"live without loving\\",",
    },
  ],
  Array [
    "line",
    "ok 6 I'd beg off.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "I'd beg off.",
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negotiations\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negotiations",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 8 Girls are such exquisite hell\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Girls are such exquisite hell",
    },
  ],
  Array [
    "line",
    "ok 9 Elegy 9B           # TOdO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "todo": true,
      "name": "Elegy 9B",
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 10,
    },
  ],
  Array [
    "line",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
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
      "ok": false,
      "count": 10,
      "pass": 7,
      "fail": 3,
      "bailout": false,
      "todo": 2,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke loose",
        },
        Result {
          "ok": false,
          "id": 10,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "Bail out! # please keep my diags\\n",
  ],
  Array [
    "bailout",
    "# please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please keep my diags",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# before 1\\n",
      ],
      Array [
        "comment",
        "# before 1\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "# before 2\\n",
      ],
      Array [
        "comment",
        "# before 2\\n",
      ],
      Array [
        "line",
        "ok 2\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # before 1\\n",
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    # before 2\\n",
  ],
  Array [
    "line",
    "    ok 2\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child",
    },
  ],
  Array [
    "line",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "comment",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# after plan\\n",
  ],
  Array [
    "comment",
    "# after plan\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "Bail out! # please keep my diags\\n",
  ],
  Array [
    "bailout",
    "# please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please keep my diags",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 6,
      "pass": 6,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 6,
      "pass": 6,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Before console.log",
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "After console.log",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 4.137,
      "name": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Before console.log",
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "After console.log",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 4.137,
      "name": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "00000",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should match pattern provided",
          "diag": Object {
            "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
            "pattern": "/SIGTERM/",
          },
        },
      ],
      Array [
        "line",
        "Bail out! # should match pattern provided\\n",
      ],
      Array [
        "bailout",
        "# should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# should match pattern provided",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": null,
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should match pattern provided",
              "diag": Object {
                "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
                "pattern": "/SIGTERM/",
              },
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "    Bail out! # should match pattern provided\\n",
  ],
  Array [
    "bailout",
    "# should match pattern provided",
  ],
  Array [
    "line",
    "Bail out! # should match pattern provided\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# should match pattern provided",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should match pattern provided",
          "diag": Object {
            "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
            "pattern": "/SIGTERM/",
          },
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should match pattern provided",
              "diag": Object {
                "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
                "pattern": "/SIGTERM/",
              },
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - -t 0.2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "-t 0.2",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "-t 0.2",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 43.094,
          "name": "update profile",
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 24.16,
          "name": "update email",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 339.14,
      "name": "test/01c-user-updates.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 43.094,
          "name": "update profile",
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 24.16,
          "name": "update email",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 339.14,
      "name": "test/01c-user-updates.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "maybe a child",
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "maybe a child",
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=true 1`] = `
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
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
    },
  ],
  Array [
    "line",
    "Bail out! # de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "bailout",
    "# de-indenting the yamlish wrongly.",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# de-indenting the yamlish wrongly.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=false 1`] = `
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
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
    },
  ],
  Array [
    "extra",
    "  ---\\n  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n  severity: fail\\n",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "line",
    "ok 2 But this is not garbage\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "But this is not garbage",
    },
  ],
  Array [
    "line",
    "not ok 3 truncating the yamlish\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  here: is some yaml\\n",
  ],
  Array [
    "line",
    "  i: guess\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "truncating the yamlish",
    },
  ],
  Array [
    "extra",
    "  ---\\n  here: is some yaml\\n  i: guess\\n",
  ],
  Array [
    "line",
    "not ok 4 this is truncated weirdly\\n",
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "name": "this is truncated weirdly",
    },
  ],
  Array [
    "line",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 1,
      "fail": 3,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
        },
        Result {
          "ok": false,
          "id": 3,
          "name": "truncating the yamlish",
        },
        Result {
          "ok": false,
          "id": 4,
          "name": "this is truncated weirdly",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 573,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "Couldn't connect to database.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "database handle",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 573,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "Couldn't connect to database.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "database handle",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 2,
      "fail": 2,
      "bailout": false,
      "todo": 2,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 2,
      "fail": 2,
      "bailout": false,
      "todo": 2,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
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
      "start": 1,
      "end": 2,
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
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.234,
          "name": "true is ok",
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1.234,
          "name": "doag is also okay",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 2.589,
      "name": "first",
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
          "ok": true,
          "id": 1,
          "time": 1.001,
          "name": "no plan",
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
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 1,
              "skip": "for no raisin",
              "name": "granddaughter",
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
              "ok": true,
              "id": 2,
              "time": 1001,
              "name": "grandson",
              "diag": Object {
                "ok": 1,
                "this": "is not tap",
                "it": "is yaml",
              },
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
              "ok": false,
              "id": 3,
              "todo": true,
              "name": "grandchild",
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
              "ok": true,
              "count": 3,
              "pass": 1,
              "fail": 2,
              "bailout": false,
              "todo": 1,
              "skip": 1,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
          "ok": true,
          "id": 2,
          "time": 1200,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
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
    "extra",
    "          ---\\n          ok: 1\\n          this: is not tap or yaml\\n          it: is garbage\\n",
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
      "ok": true,
      "id": 2,
      "time": 1.2,
      "name": "second",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

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
      "start": 1,
      "end": 2,
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
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.234,
          "name": "true is ok",
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1.234,
          "name": "doag is also okay",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 2.589,
      "name": "first",
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
          "ok": true,
          "id": 1,
          "time": 1.001,
          "name": "no plan",
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
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 1,
              "skip": "for no raisin",
              "name": "granddaughter",
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
              "ok": true,
              "id": 2,
              "time": 1001,
              "name": "grandson",
              "diag": Object {
                "ok": 1,
                "this": "is not tap",
                "it": "is yaml",
              },
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
              "ok": false,
              "id": 3,
              "todo": true,
              "name": "grandchild",
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
              "ok": true,
              "count": 3,
              "pass": 1,
              "fail": 2,
              "bailout": false,
              "todo": 1,
              "skip": 1,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
          "ok": true,
          "id": 2,
          "time": 1200,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
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
    "extra",
    "          ---\\n          ok: 1\\n          this: is not tap or yaml\\n          it: is garbage\\n",
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
      "ok": true,
      "id": 2,
      "time": 1.2,
      "name": "second",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 0,
                  "comment": "no tests found",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 0,
                  "pass": 0,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "comment": "no tests found",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 0,
              "comment": "no tests found",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 0,
              "pass": 0,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "comment": "no tests found",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 5.26,
          "name": "boom",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
    },
  ],
  Array [
    "line",
    "Bail out! # index.js\\n",
  ],
  Array [
    "bailout",
    "# index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# index.js",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 201.609,
          "name": "index.js",
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "timeout": 30000,
            "results": Object {
              "ok": false,
              "count": 1,
              "pass": 1,
              "plan": Object {
                "start": 1,
                "end": 1,
              },
            },
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 0,
                  "comment": "no tests found",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 0,
                  "pass": 0,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "comment": "no tests found",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 0,
              "comment": "no tests found",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 0,
              "pass": 0,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "comment": "no tests found",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 5.26,
          "name": "boom",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 201.609,
          "name": "index.js",
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "timeout": 30000,
            "results": Object {
              "ok": false,
              "count": 1,
              "pass": 1,
              "plan": Object {
                "start": 1,
                "end": 1,
              },
            },
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should be equivalent",
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
          },
        },
      ],
      Array [
        "line",
        "Bail out! # should be equivalent\\n",
      ],
      Array [
        "bailout",
        "# should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# should be equivalent",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": null,
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should be equivalent",
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
              },
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "    Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should be equivalent",
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
          },
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should be equivalent",
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
              },
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - foo # time=13.457ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 0\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    fail: 1\\n",
  ],
  Array [
    "line",
    "    time: 13.457\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 13.457,
      "name": "foo",
      "diag": Object {
        "results": Object {
          "plan": Object {
            "start": 1,
            "end": 1,
          },
          "count": 1,
          "pass": 0,
          "ok": false,
          "fail": 1,
          "time": 13.457,
        },
      },
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=22.566ms\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 13.457,
          "name": "foo",
          "diag": Object {
            "results": Object {
              "plan": Object {
                "start": 1,
                "end": 1,
              },
              "count": 1,
              "pass": 0,
              "ok": false,
              "fail": 1,
              "time": 13.457,
            },
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP lone_not_bug.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP lone_not_bug.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP missing.tap > output bail=true 1`] = `
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
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP missing.tap > output bail=false 1`] = `
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
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no_nums.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no_nums.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-numbers.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
    },
  ],
  Array [
    "line",
    "Bail out! # we are bad\\n",
  ],
  Array [
    "bailout",
    "# we are bad",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# we are bad",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "we are bad",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-numbers.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
    },
  ],
  Array [
    "line",
    "ok we are zesty!\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "we are zesty!",
    },
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "we are bad",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-enough.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-enough.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 - (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
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
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 - (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
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
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-with-trailing-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-with-trailing-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# fail  1\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# fail  1\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset-mismatch.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "first test id does not match plan start",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset-mismatch.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "first test id does not match plan start",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "8..11\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 8,
      "end": 11,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 8,
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP offset.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "8..11\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 8,
      "end": 11,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 8,
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4 # just some plan comment\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
      "comment": "just some plan comment",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "just some plan comment",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4 # just some plan comment\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
      "comment": "just some plan comment",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "just some plan comment",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP one-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP one-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_err_mix.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "one\\n",
  ],
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "line",
    "three\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_err_mix.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "one\\n",
  ],
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "line",
    "three\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_of_order.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 2 - Test that argument passing works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
    },
  ],
  Array [
    "line",
    "ok 3 - Test that passing arguments as references work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
    },
  ],
  Array [
    "line",
    "ok 4 - Test a normal sub\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
    },
  ],
  Array [
    "line",
    "ok 6 - Detach test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
    },
  ],
  Array [
    "line",
    "ok 8 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
    },
  ],
  Array [
    "line",
    "ok 9 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
    },
  ],
  Array [
    "line",
    "ok 10 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
    },
  ],
  Array [
    "line",
    "ok 11 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
    },
  ],
  Array [
    "line",
    "ok 12 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
    },
  ],
  Array [
    "line",
    "ok 13 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
    },
  ],
  Array [
    "line",
    "1..15\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 15,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "line",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "line",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "line",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 10,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 15,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP out_of_order.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 2 - Test that argument passing works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
    },
  ],
  Array [
    "line",
    "ok 3 - Test that passing arguments as references work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
    },
  ],
  Array [
    "line",
    "ok 4 - Test a normal sub\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
    },
  ],
  Array [
    "line",
    "ok 6 - Detach test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
    },
  ],
  Array [
    "line",
    "ok 8 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
    },
  ],
  Array [
    "line",
    "ok 9 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
    },
  ],
  Array [
    "line",
    "ok 10 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
    },
  ],
  Array [
    "line",
    "ok 11 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
    },
  ],
  Array [
    "line",
    "ok 12 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
    },
  ],
  Array [
    "line",
    "ok 13 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
    },
  ],
  Array [
    "line",
    "1..15\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 15,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "line",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "line",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "line",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 10,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 15,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP out-of-order.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 3 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 2 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out-of-order.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 3 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 2 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP outside-plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 234,
          "name": "pretty big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
        },
        Result {
          "ok": true,
          "id": 5,
          "name": "less big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP outside-plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 234,
          "name": "pretty big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
        },
        Result {
          "ok": true,
          "id": 5,
          "name": "less big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 0,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
    },
  ],
  Array [
    "line",
    "Bail out! # empty\\n",
  ],
  Array [
    "bailout",
    "# empty",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# empty",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "empty",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 0,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
    },
  ],
  Array [
    "line",
    "ok 2 - my_test {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "my_test",
    },
  ],
  Array [
    "line",
    "ok 3 - my_test_plan {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "my_test_plan",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 4 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Subtest: my_streamy_test",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "ok 5 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "empty",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "ok 2 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "line",
    "ok 2 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 99,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 99,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-pre.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
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
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-pre.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
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
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid-strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "plan end cannot be less than plan start",
          "plan": Object {
            "start": 100,
            "end": 1,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid-strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "plan end cannot be less than plan start",
          "plan": Object {
            "start": 100,
            "end": 1,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "extra",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "extra",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "pragma +custom\\n",
  ],
  Array [
    "pragma",
    "custom",
    true,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child-strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "extra",
    "pragma +strict\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "pragma +strict\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child-strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "extra",
    "pragma +strict\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "pragma +strict\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "extra",
    "pragma +foo\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "extra",
    "pragma +foo\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: true\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: true\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP schwern-todo-quiet.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "line",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "line",
    "#     expected: '42'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP schwern-todo-quiet.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "line",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "line",
    "#     expected: '42'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "line",
    "not ok 3 # TODO Roman numerials still not a built in type\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "Roman numerials still not a built in type",
      "name": "",
    },
  ],
  Array [
    "line",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "comment",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "line",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "comment",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "line",
    "#     expected: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '23'\\n",
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
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
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP schwern.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - 42\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP schwern.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - 42\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP sequence_misparse.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3 # skipped on foobar system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP sequence_misparse.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3 # skipped on foobar system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP simple_fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "not ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 5,
    },
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
        },
        Result {
          "ok": false,
          "id": 5,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml_missing_version13.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml_missing_version13.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip_nomsg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 # Skip\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
    },
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
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip_nomsg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 # Skip\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
    },
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
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-nonempty.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..1 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "line",
    "ok 1 found some spare flux in bottom drawer\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-nonempty.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..1 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "line",
    "ok 1 found some spare flux in bottom drawer\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-assert.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient skipping",
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
        "comment": "SKIP Insufficient skipping",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-assert.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient skipping",
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
        "comment": "SKIP Insufficient skipping",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-test.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
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
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-test.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
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
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient positron flux",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient positron flux",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 does not count as failure # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
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
      "ok": true,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 does not count as failure # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
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
      "ok": true,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
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
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
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
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2    # skip rain delay\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
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
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2    # skip rain delay\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
    },
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
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_nomsg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_nomsg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_v13.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_v13.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipping-a-few.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 4,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipping-a-few.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 4,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP space_after_plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5 \\n",
  ],
  Array [
    "extra",
    "1..5 \\n",
  ],
  Array [
    "line",
    "ok 1 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 2 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 4 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 5 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP space_after_plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5 \\n",
  ],
  Array [
    "extra",
    "1..5 \\n",
  ],
  Array [
    "line",
    "ok 1 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 2 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 3 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 4 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
    },
  ],
  Array [
    "line",
    "ok 5 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP stdout_stderr.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP stdout_stderr.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "Nonsense!\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "Nonsense!\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
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
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 12.34,
      "buffered": true,
      "name": "first",
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
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
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 12.34,
      "buffered": true,
      "name": "second",
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "time": 43.21,
      "name": "third",
      "diag": Object {
        "some": "diagnostic",
      },
      "buffered": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
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
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 12.34,
      "buffered": true,
      "name": "first",
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
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
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 12.34,
      "buffered": true,
      "name": "second",
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "time": 43.21,
      "name": "third",
      "diag": Object {
        "some": "diagnostic",
      },
      "buffered": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - tbd # TODO foo {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
    },
  ],
  Array [
    "line",
    "ok 2 - skippy # skip {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
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
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 1,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - tbd # TODO foo {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
    },
  ],
  Array [
    "line",
    "ok 2 - skippy # skip {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
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
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 1,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - nesting {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - first {\\n",
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "first",
        },
      ],
      Array [
        "line",
        "ok 2 - second {\\n",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "buffered": true,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - first {\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    ok 2 - second {\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - nesting {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - first {\\n",
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "first",
        },
      ],
      Array [
        "line",
        "ok 2 - second {\\n",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "buffered": true,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    ok 1 - first {\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    ok 2 - second {\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-leading.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 8.987,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 5.988,
          "name": "second",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=55.292ms\\n",
  ],
  Array [
    "comment",
    "# time=55.292ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-leading.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 8.987,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 5.988,
          "name": "second",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=55.292ms\\n",
  ],
  Array [
    "comment",
    "# time=55.292ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-mixed-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-mixed-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-noindent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-noindent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
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
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
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
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-confusing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "a brace looks like this",
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-confusing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "a brace looks like this",
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-heading.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-heading.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "not a subtest",
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "not a subtest",
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-mixing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "x1",
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "x2",
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "x3",
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "x4",
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "x5",
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "x6",
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "x7",
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "x8",
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "x9",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-mixing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "x1",
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "x2",
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "x3",
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "x4",
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "x5",
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "x6",
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "x7",
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "x8",
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "x9",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-leading-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-leading-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
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
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
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
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
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
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
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
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
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
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-no-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
        },
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-no-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
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
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
        },
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
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
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-unfinished.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# Subtest: unfinished\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: unfinished\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-unfinished.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# Subtest: unfinished\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: unfinished\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP switches.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP switches.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP tap-tests-stdout.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# buffer_compare.js\\n",
  ],
  Array [
    "comment",
    "# buffer_compare.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# same buffers\\n",
  ],
  Array [
    "comment",
    "# same buffers\\n",
  ],
  Array [
    "line",
    "ok 1 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# not same buffers\\n",
  ],
  Array [
    "comment",
    "# not same buffers\\n",
  ],
  Array [
    "line",
    "ok 2 should not be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should not be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 3 test/buffer_compare.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "test/buffer_compare.js",
    },
  ],
  Array [
    "line",
    "# common.js\\n",
  ],
  Array [
    "comment",
    "# common.js\\n",
  ],
  Array [
    "line",
    "ok 4 just setup, nothing relevant\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "just setup, nothing relevant",
    },
  ],
  Array [
    "line",
    "ok 5 test/common.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "test/common.js",
    },
  ],
  Array [
    "line",
    "# consumer.js\\n",
  ],
  Array [
    "comment",
    "# consumer.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# basic.tap\\n",
  ],
  Array [
    "comment",
    "# basic.tap\\n",
  ],
  Array [
    "line",
    "ok 6 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# indent.tap\\n",
  ],
  Array [
    "comment",
    "# indent.tap\\n",
  ],
  Array [
    "line",
    "ok 7 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# missing.tap\\n",
  ],
  Array [
    "comment",
    "# missing.tap\\n",
  ],
  Array [
    "line",
    "ok 8 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# skip-all.tap\\n",
  ],
  Array [
    "comment",
    "# skip-all.tap\\n",
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tap-tests.tap\\n",
  ],
  Array [
    "comment",
    "# tap-tests.tap\\n",
  ],
  Array [
    "line",
    "ok 10 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# yamlish.tap\\n",
  ],
  Array [
    "comment",
    "# yamlish.tap\\n",
  ],
  Array [
    "line",
    "ok 11 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 6\\n",
  ],
  Array [
    "comment",
    "# tests 6\\n",
  ],
  Array [
    "line",
    "# pass  6\\n",
  ],
  Array [
    "comment",
    "# pass  6\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 12 test/consumer.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "test/consumer.js",
    },
  ],
  Array [
    "line",
    "# debug-test.js\\n",
  ],
  Array [
    "comment",
    "# debug-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# debug test\\n",
  ],
  Array [
    "comment",
    "# debug test\\n",
  ],
  Array [
    "line",
    "ok 13 Should output debugger message\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Should output debugger message",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# pass  1\\n",
  ],
  Array [
    "comment",
    "# pass  1\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 14 test/debug-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 14,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "# deep-strict.js\\n",
  ],
  Array [
    "comment",
    "# deep-strict.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "line",
    "ok 15 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 15,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "line",
    "ok 16 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 16,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "line",
    "ok 17 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 17,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 18 test/deep-strict.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 18,
      "name": "test/deep-strict.js",
    },
  ],
  Array [
    "line",
    "# deep.js\\n",
  ],
  Array [
    "comment",
    "# deep.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "line",
    "ok 19 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 19,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "line",
    "ok 20 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 20,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "line",
    "ok 21 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 21,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 22 test/deep.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 22,
      "name": "test/deep.js",
    },
  ],
  Array [
    "line",
    "# executed.sh\\n",
  ],
  Array [
    "comment",
    "# executed.sh\\n",
  ],
  Array [
    "line",
    "ok 23 File with executable bit should be executed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 23,
      "name": "File with executable bit should be executed",
    },
  ],
  Array [
    "line",
    "ok 24 test/executed.sh\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 24,
      "name": "test/executed.sh",
    },
  ],
  Array [
    "line",
    "# exit-code.js\\n",
  ],
  Array [
    "comment",
    "# exit-code.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "comment",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "line",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "line",
    "ok 25 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 25,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 26 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 26,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "line",
    "ok 27 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 27,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 28 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 28,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "line",
    "ok 29 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 29,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 30 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 30,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# successes exit 0\\n",
  ],
  Array [
    "comment",
    "# successes exit 0\\n",
  ],
  Array [
    "line",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "comment",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "line",
    "ok 31 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 31,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 32 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 32,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "comment",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "line",
    "ok 33 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 33,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 34 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 34,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 35 test/exit-code.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 35,
      "name": "test/exit-code.js",
    },
  ],
  Array [
    "line",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "comment",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "line",
    "ok 36 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 36,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "line",
    "# test for gc using --gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --gc\\n",
  ],
  Array [
    "line",
    "ok 37 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 37,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "line",
    "ok 38 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 38,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 39 test/expose-gc-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 39,
      "name": "test/expose-gc-test.js",
    },
  ],
  Array [
    "line",
    "# global-harness-async.js\\n",
  ],
  Array [
    "comment",
    "# global-harness-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# outer\\n",
  ],
  Array [
    "comment",
    "# outer\\n",
  ],
  Array [
    "line",
    "# inner 1\\n",
  ],
  Array [
    "comment",
    "# inner 1\\n",
  ],
  Array [
    "line",
    "ok 40 1-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 40,
      "name": "1-1",
    },
  ],
  Array [
    "line",
    "# inner 2\\n",
  ],
  Array [
    "comment",
    "# inner 2\\n",
  ],
  Array [
    "line",
    "ok 41 2-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 41,
      "name": "2-1",
    },
  ],
  Array [
    "line",
    "# inner 3\\n",
  ],
  Array [
    "comment",
    "# inner 3\\n",
  ],
  Array [
    "line",
    "ok 42 3-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 42,
      "name": "3-1",
    },
  ],
  Array [
    "line",
    "ok 43 test/global-harness-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 43,
      "name": "test/global-harness-async.js",
    },
  ],
  Array [
    "line",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "comment",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# finishes in time\\n",
  ],
  Array [
    "comment",
    "# finishes in time\\n",
  ],
  Array [
    "line",
    "# finishes in time too\\n",
  ],
  Array [
    "comment",
    "# finishes in time too\\n",
  ],
  Array [
    "line",
    "# tests 0\\n",
  ],
  Array [
    "comment",
    "# tests 0\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 44 test/independent-timeouts.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 44,
      "name": "test/independent-timeouts.js",
    },
  ],
  Array [
    "line",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "comment",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# one\\n",
  ],
  Array [
    "comment",
    "# one\\n",
  ],
  Array [
    "line",
    "ok 45 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 45,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 46 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 46,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# two\\n",
  ],
  Array [
    "comment",
    "# two\\n",
  ],
  Array [
    "line",
    "ok 47 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 47,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 48 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 48,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 49 test/isolated-conf-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 49,
      "name": "test/isolated-conf-test.js",
    },
  ],
  Array [
    "line",
    "# meta-test.js\\n",
  ],
  Array [
    "comment",
    "# meta-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# meta test\\n",
  ],
  Array [
    "comment",
    "# meta test\\n",
  ],
  Array [
    "line",
    "ok 50 sanity check\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 50,
      "name": "sanity check",
    },
  ],
  Array [
    "line",
    "ok 51 not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 51,
      "name": "not ok",
    },
  ],
  Array [
    "line",
    "ok 52 total test count\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 52,
      "name": "total test count",
    },
  ],
  Array [
    "line",
    "ok 53 tests passed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 53,
      "name": "tests passed",
    },
  ],
  Array [
    "line",
    "ok 54 tests failed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 54,
      "name": "tests failed",
    },
  ],
  Array [
    "line",
    "ok 55 ok is boolean\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 55,
      "name": "ok is boolean",
    },
  ],
  Array [
    "line",
    "ok 56 skip is number\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 56,
      "name": "skip is number",
    },
  ],
  Array [
    "line",
    "ok 57 results isa Results\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 57,
      "name": "results isa Results",
    },
  ],
  Array [
    "line",
    "ok 58 test isa Test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 58,
      "name": "test isa Test",
    },
  ],
  Array [
    "line",
    "ok 59 test isa Harness\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 59,
      "name": "test isa Harness",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 60 test/meta-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 60,
      "name": "test/meta-test.js",
    },
  ],
  Array [
    "line",
    "# nested-async.js\\n",
  ],
  Array [
    "comment",
    "# nested-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# Harness async test support\\n",
  ],
  Array [
    "comment",
    "# Harness async test support\\n",
  ],
  Array [
    "line",
    "ok 61 sync child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 61,
      "name": "sync child A",
    },
  ],
  Array [
    "line",
    "# sync child B\\n",
  ],
  Array [
    "comment",
    "# sync child B\\n",
  ],
  Array [
    "line",
    "# async grandchild A\\n",
  ],
  Array [
    "comment",
    "# async grandchild A\\n",
  ],
  Array [
    "line",
    "ok 62 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 62,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async grandchild B\\n",
  ],
  Array [
    "comment",
    "# async grandchild B\\n",
  ],
  Array [
    "line",
    "ok 63 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 63,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async child\\n",
  ],
  Array [
    "comment",
    "# async child\\n",
  ],
  Array [
    "line",
    "ok 64 sync grandchild in async child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 64,
      "name": "sync grandchild in async child A",
    },
  ],
  Array [
    "line",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "comment",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "line",
    "ok 65 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 65,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 66 test/nested-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 66,
      "name": "test/nested-async.js",
    },
  ],
  Array [
    "line",
    "# nested-test.js\\n",
  ],
  Array [
    "comment",
    "# nested-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# parent\\n",
  ],
  Array [
    "comment",
    "# parent\\n",
  ],
  Array [
    "line",
    "ok 67 p test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 67,
      "name": "p test",
    },
  ],
  Array [
    "line",
    "# subtest\\n",
  ],
  Array [
    "comment",
    "# subtest\\n",
  ],
  Array [
    "line",
    "ok 68 ch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 68,
      "name": "ch test",
    },
  ],
  Array [
    "line",
    "# nested subtest\\n",
  ],
  Array [
    "comment",
    "# nested subtest\\n",
  ],
  Array [
    "line",
    "ok 69 grch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 69,
      "name": "grch test",
    },
  ],
  Array [
    "line",
    "# another subtest\\n",
  ],
  Array [
    "comment",
    "# another subtest\\n",
  ],
  Array [
    "line",
    "ok 70 ch test 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 70,
      "name": "ch test 2",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 71 test/nested-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 71,
      "name": "test/nested-test.js",
    },
  ],
  Array [
    "line",
    "# non-tap-output.js\\n",
  ],
  Array [
    "comment",
    "# non-tap-output.js\\n",
  ],
  Array [
    "line",
    "# everything is fine\\n",
  ],
  Array [
    "comment",
    "# everything is fine\\n",
  ],
  Array [
    "line",
    "# there are no errors\\n",
  ],
  Array [
    "comment",
    "# there are no errors\\n",
  ],
  Array [
    "line",
    "# this output is not haiku.\\n",
  ],
  Array [
    "comment",
    "# this output is not haiku.\\n",
  ],
  Array [
    "line",
    "# is 8 ok?\\n",
  ],
  Array [
    "comment",
    "# is 8 ok?\\n",
  ],
  Array [
    "line",
    "ok 72 , 8 can stay.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 72,
      "name": ", 8 can stay.",
    },
  ],
  Array [
    "line",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "comment",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "line",
    "# this: is indented\\n",
  ],
  Array [
    "comment",
    "# this: is indented\\n",
  ],
  Array [
    "line",
    "# and: it\\n",
  ],
  Array [
    "comment",
    "# and: it\\n",
  ],
  Array [
    "line",
    "# might: ~\\n",
  ],
  Array [
    "comment",
    "# might: ~\\n",
  ],
  Array [
    "line",
    "# be: yaml?\\n",
  ],
  Array [
    "comment",
    "# be: yaml?\\n",
  ],
  Array [
    "line",
    "ok 73 might be confusing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 73,
      "name": "might be confusing",
    },
  ],
  Array [
    "line",
    "ok 74 done now, exiting\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 74,
      "name": "done now, exiting",
    },
  ],
  Array [
    "line",
    "ok 75 test/non-tap-output.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 75,
      "name": "test/non-tap-output.js",
    },
  ],
  Array [
    "line",
    "# not-executed.sh\\n",
  ],
  Array [
    "comment",
    "# not-executed.sh\\n",
  ],
  Array [
    "line",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "comment",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "line",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "comment",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "comment",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "line",
    "ok 76 outputs parent description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 76,
      "name": "outputs parent description",
    },
  ],
  Array [
    "line",
    "ok 77 outputs child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 77,
      "name": "outputs child description",
    },
  ],
  Array [
    "line",
    "ok 78 outputs parent description before parent result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 78,
      "name": "outputs parent description before parent result",
    },
  ],
  Array [
    "line",
    "ok 79 outputs parent result before child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 79,
      "name": "outputs parent result before child description",
    },
  ],
  Array [
    "line",
    "ok 80 outputs child description before child result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 80,
      "name": "outputs child description before child result",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 81 test/output-childtest-description.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 81,
      "name": "test/output-childtest-description.js",
    },
  ],
  Array [
    "line",
    "# result-trap.js\\n",
  ],
  Array [
    "comment",
    "# result-trap.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trap result\\n",
  ],
  Array [
    "comment",
    "# trap result\\n",
  ],
  Array [
    "line",
    "ok 82 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 82,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 83 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 83,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 84 test/result-trap.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 84,
      "name": "test/result-trap.js",
    },
  ],
  Array [
    "line",
    "# segv.js\\n",
  ],
  Array [
    "comment",
    "# segv.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# setup\\n",
  ],
  Array [
    "comment",
    "# setup\\n",
  ],
  Array [
    "line",
    "ok 85 compiled seg faulter\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 85,
      "name": "compiled seg faulter",
    },
  ],
  Array [
    "line",
    "# segv\\n",
  ],
  Array [
    "comment",
    "# segv\\n",
  ],
  Array [
    "line",
    "ok 86 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 86,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 87 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 87,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 88 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 88,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 89 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 89,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 90 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 90,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 91 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 91,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "ok 92 cleaned up\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 92,
      "name": "cleaned up",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# pass  8\\n",
  ],
  Array [
    "comment",
    "# pass  8\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 93 test/segv.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 93,
      "name": "test/segv.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 94 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 94,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 95 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 95,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 96 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 96,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 97 test/simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 97,
      "name": "test/simple-harness-test-with-plan.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 98 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 98,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 99 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 100 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 101 test/simple-harness-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 101,
      "name": "test/simple-harness-test.js",
    },
  ],
  Array [
    "line",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "comment",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# not much\\n",
  ],
  Array [
    "comment",
    "# not much\\n",
  ],
  Array [
    "line",
    "ok 102 always passes # SKIP skip it good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 102,
      "skip": "skip it good",
      "name": "always passes",
    },
  ],
  Array [
    "line",
    "ok 103 false # SKIP always fails\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 103,
      "skip": "always fails",
      "name": "false",
    },
  ],
  Array [
    "line",
    "ok 104 bonus # TODO remove todo directive\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 104,
      "todo": "remove todo directive",
      "name": "bonus",
    },
  ],
  Array [
    "line",
    "ok 105 expected # TODO implement a thing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 105,
      "todo": "implement a thing",
      "name": "expected",
    },
  ],
  Array [
    "line",
    "ok 106 always passes without explanation # SKIP \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 106,
      "skip": true,
      "name": "always passes without explanation",
    },
  ],
  Array [
    "line",
    "ok 107 false without explanation # SKIP \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 107,
      "skip": true,
      "name": "false without explanation",
    },
  ],
  Array [
    "line",
    "ok 108 bonus without explanation # TODO \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 108,
      "todo": true,
      "name": "bonus without explanation",
    },
  ],
  Array [
    "line",
    "ok 109 expected without explanation # TODO \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 109,
      "todo": true,
      "name": "expected without explanation",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# skip  4\\n",
  ],
  Array [
    "comment",
    "# skip  4\\n",
  ],
  Array [
    "line",
    "# todo  4\\n",
  ],
  Array [
    "comment",
    "# todo  4\\n",
  ],
  Array [
    "line",
    "ok 110 test/test-assert-todo-skip.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 110,
      "name": "test/test-assert-todo-skip.js",
    },
  ],
  Array [
    "line",
    "# test-descriptions.js\\n",
  ],
  Array [
    "comment",
    "# test-descriptions.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "ok 111 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 111,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 112 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 112,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 113 skip summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 113,
      "name": "skip summary is not from file",
    },
  ],
  Array [
    "line",
    "ok 114 todo summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 114,
      "name": "todo summary is not from file",
    },
  ],
  Array [
    "line",
    "not ok 115 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:  \\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Socket.<anonymous> (child_process.js:1153:11)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitOne (events.js:77:13)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 115,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Socket.<anonymous> (child_process.js:1153:11)\\n",
          "emitOne (events.js:77:13)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "Bail out! # captures TODO description\\n",
  ],
  Array [
    "bailout",
    "# captures TODO description",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 115,
      "pass": 114,
      "fail": 1,
      "bailout": "# captures TODO description",
      "todo": 4,
      "skip": 4,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 115,
          "name": "captures TODO description",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Socket.<anonymous> (child_process.js:1153:11)\\n",
              "emitOne (events.js:77:13)\\n",
            ],
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP tap-tests-stdout.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# buffer_compare.js\\n",
  ],
  Array [
    "comment",
    "# buffer_compare.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# same buffers\\n",
  ],
  Array [
    "comment",
    "# same buffers\\n",
  ],
  Array [
    "line",
    "ok 1 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# not same buffers\\n",
  ],
  Array [
    "comment",
    "# not same buffers\\n",
  ],
  Array [
    "line",
    "ok 2 should not be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should not be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 3 test/buffer_compare.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "test/buffer_compare.js",
    },
  ],
  Array [
    "line",
    "# common.js\\n",
  ],
  Array [
    "comment",
    "# common.js\\n",
  ],
  Array [
    "line",
    "ok 4 just setup, nothing relevant\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "just setup, nothing relevant",
    },
  ],
  Array [
    "line",
    "ok 5 test/common.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "test/common.js",
    },
  ],
  Array [
    "line",
    "# consumer.js\\n",
  ],
  Array [
    "comment",
    "# consumer.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# basic.tap\\n",
  ],
  Array [
    "comment",
    "# basic.tap\\n",
  ],
  Array [
    "line",
    "ok 6 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# indent.tap\\n",
  ],
  Array [
    "comment",
    "# indent.tap\\n",
  ],
  Array [
    "line",
    "ok 7 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# missing.tap\\n",
  ],
  Array [
    "comment",
    "# missing.tap\\n",
  ],
  Array [
    "line",
    "ok 8 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# skip-all.tap\\n",
  ],
  Array [
    "comment",
    "# skip-all.tap\\n",
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tap-tests.tap\\n",
  ],
  Array [
    "comment",
    "# tap-tests.tap\\n",
  ],
  Array [
    "line",
    "ok 10 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# yamlish.tap\\n",
  ],
  Array [
    "comment",
    "# yamlish.tap\\n",
  ],
  Array [
    "line",
    "ok 11 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 6\\n",
  ],
  Array [
    "comment",
    "# tests 6\\n",
  ],
  Array [
    "line",
    "# pass  6\\n",
  ],
  Array [
    "comment",
    "# pass  6\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 12 test/consumer.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "test/consumer.js",
    },
  ],
  Array [
    "line",
    "# debug-test.js\\n",
  ],
  Array [
    "comment",
    "# debug-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# debug test\\n",
  ],
  Array [
    "comment",
    "# debug test\\n",
  ],
  Array [
    "line",
    "ok 13 Should output debugger message\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Should output debugger message",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# pass  1\\n",
  ],
  Array [
    "comment",
    "# pass  1\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 14 test/debug-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 14,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "# deep-strict.js\\n",
  ],
  Array [
    "comment",
    "# deep-strict.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "line",
    "ok 15 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 15,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "line",
    "ok 16 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 16,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "line",
    "ok 17 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 17,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 18 test/deep-strict.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 18,
      "name": "test/deep-strict.js",
    },
  ],
  Array [
    "line",
    "# deep.js\\n",
  ],
  Array [
    "comment",
    "# deep.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "line",
    "ok 19 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 19,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "line",
    "ok 20 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 20,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "line",
    "ok 21 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 21,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 22 test/deep.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 22,
      "name": "test/deep.js",
    },
  ],
  Array [
    "line",
    "# executed.sh\\n",
  ],
  Array [
    "comment",
    "# executed.sh\\n",
  ],
  Array [
    "line",
    "ok 23 File with executable bit should be executed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 23,
      "name": "File with executable bit should be executed",
    },
  ],
  Array [
    "line",
    "ok 24 test/executed.sh\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 24,
      "name": "test/executed.sh",
    },
  ],
  Array [
    "line",
    "# exit-code.js\\n",
  ],
  Array [
    "comment",
    "# exit-code.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "comment",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "line",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "line",
    "ok 25 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 25,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 26 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 26,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "line",
    "ok 27 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 27,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 28 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 28,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "line",
    "ok 29 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 29,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 30 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 30,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# successes exit 0\\n",
  ],
  Array [
    "comment",
    "# successes exit 0\\n",
  ],
  Array [
    "line",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "comment",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "line",
    "ok 31 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 31,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 32 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 32,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "comment",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "line",
    "ok 33 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 33,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 34 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 34,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 35 test/exit-code.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 35,
      "name": "test/exit-code.js",
    },
  ],
  Array [
    "line",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "comment",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "line",
    "ok 36 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 36,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "line",
    "# test for gc using --gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --gc\\n",
  ],
  Array [
    "line",
    "ok 37 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 37,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "line",
    "ok 38 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 38,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 39 test/expose-gc-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 39,
      "name": "test/expose-gc-test.js",
    },
  ],
  Array [
    "line",
    "# global-harness-async.js\\n",
  ],
  Array [
    "comment",
    "# global-harness-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# outer\\n",
  ],
  Array [
    "comment",
    "# outer\\n",
  ],
  Array [
    "line",
    "# inner 1\\n",
  ],
  Array [
    "comment",
    "# inner 1\\n",
  ],
  Array [
    "line",
    "ok 40 1-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 40,
      "name": "1-1",
    },
  ],
  Array [
    "line",
    "# inner 2\\n",
  ],
  Array [
    "comment",
    "# inner 2\\n",
  ],
  Array [
    "line",
    "ok 41 2-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 41,
      "name": "2-1",
    },
  ],
  Array [
    "line",
    "# inner 3\\n",
  ],
  Array [
    "comment",
    "# inner 3\\n",
  ],
  Array [
    "line",
    "ok 42 3-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 42,
      "name": "3-1",
    },
  ],
  Array [
    "line",
    "ok 43 test/global-harness-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 43,
      "name": "test/global-harness-async.js",
    },
  ],
  Array [
    "line",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "comment",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# finishes in time\\n",
  ],
  Array [
    "comment",
    "# finishes in time\\n",
  ],
  Array [
    "line",
    "# finishes in time too\\n",
  ],
  Array [
    "comment",
    "# finishes in time too\\n",
  ],
  Array [
    "line",
    "# tests 0\\n",
  ],
  Array [
    "comment",
    "# tests 0\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 44 test/independent-timeouts.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 44,
      "name": "test/independent-timeouts.js",
    },
  ],
  Array [
    "line",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "comment",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# one\\n",
  ],
  Array [
    "comment",
    "# one\\n",
  ],
  Array [
    "line",
    "ok 45 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 45,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 46 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 46,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# two\\n",
  ],
  Array [
    "comment",
    "# two\\n",
  ],
  Array [
    "line",
    "ok 47 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 47,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 48 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 48,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 49 test/isolated-conf-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 49,
      "name": "test/isolated-conf-test.js",
    },
  ],
  Array [
    "line",
    "# meta-test.js\\n",
  ],
  Array [
    "comment",
    "# meta-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# meta test\\n",
  ],
  Array [
    "comment",
    "# meta test\\n",
  ],
  Array [
    "line",
    "ok 50 sanity check\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 50,
      "name": "sanity check",
    },
  ],
  Array [
    "line",
    "ok 51 not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 51,
      "name": "not ok",
    },
  ],
  Array [
    "line",
    "ok 52 total test count\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 52,
      "name": "total test count",
    },
  ],
  Array [
    "line",
    "ok 53 tests passed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 53,
      "name": "tests passed",
    },
  ],
  Array [
    "line",
    "ok 54 tests failed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 54,
      "name": "tests failed",
    },
  ],
  Array [
    "line",
    "ok 55 ok is boolean\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 55,
      "name": "ok is boolean",
    },
  ],
  Array [
    "line",
    "ok 56 skip is number\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 56,
      "name": "skip is number",
    },
  ],
  Array [
    "line",
    "ok 57 results isa Results\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 57,
      "name": "results isa Results",
    },
  ],
  Array [
    "line",
    "ok 58 test isa Test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 58,
      "name": "test isa Test",
    },
  ],
  Array [
    "line",
    "ok 59 test isa Harness\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 59,
      "name": "test isa Harness",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 60 test/meta-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 60,
      "name": "test/meta-test.js",
    },
  ],
  Array [
    "line",
    "# nested-async.js\\n",
  ],
  Array [
    "comment",
    "# nested-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# Harness async test support\\n",
  ],
  Array [
    "comment",
    "# Harness async test support\\n",
  ],
  Array [
    "line",
    "ok 61 sync child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 61,
      "name": "sync child A",
    },
  ],
  Array [
    "line",
    "# sync child B\\n",
  ],
  Array [
    "comment",
    "# sync child B\\n",
  ],
  Array [
    "line",
    "# async grandchild A\\n",
  ],
  Array [
    "comment",
    "# async grandchild A\\n",
  ],
  Array [
    "line",
    "ok 62 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 62,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async grandchild B\\n",
  ],
  Array [
    "comment",
    "# async grandchild B\\n",
  ],
  Array [
    "line",
    "ok 63 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 63,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async child\\n",
  ],
  Array [
    "comment",
    "# async child\\n",
  ],
  Array [
    "line",
    "ok 64 sync grandchild in async child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 64,
      "name": "sync grandchild in async child A",
    },
  ],
  Array [
    "line",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "comment",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "line",
    "ok 65 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 65,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 66 test/nested-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 66,
      "name": "test/nested-async.js",
    },
  ],
  Array [
    "line",
    "# nested-test.js\\n",
  ],
  Array [
    "comment",
    "# nested-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# parent\\n",
  ],
  Array [
    "comment",
    "# parent\\n",
  ],
  Array [
    "line",
    "ok 67 p test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 67,
      "name": "p test",
    },
  ],
  Array [
    "line",
    "# subtest\\n",
  ],
  Array [
    "comment",
    "# subtest\\n",
  ],
  Array [
    "line",
    "ok 68 ch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 68,
      "name": "ch test",
    },
  ],
  Array [
    "line",
    "# nested subtest\\n",
  ],
  Array [
    "comment",
    "# nested subtest\\n",
  ],
  Array [
    "line",
    "ok 69 grch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 69,
      "name": "grch test",
    },
  ],
  Array [
    "line",
    "# another subtest\\n",
  ],
  Array [
    "comment",
    "# another subtest\\n",
  ],
  Array [
    "line",
    "ok 70 ch test 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 70,
      "name": "ch test 2",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 71 test/nested-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 71,
      "name": "test/nested-test.js",
    },
  ],
  Array [
    "line",
    "# non-tap-output.js\\n",
  ],
  Array [
    "comment",
    "# non-tap-output.js\\n",
  ],
  Array [
    "line",
    "# everything is fine\\n",
  ],
  Array [
    "comment",
    "# everything is fine\\n",
  ],
  Array [
    "line",
    "# there are no errors\\n",
  ],
  Array [
    "comment",
    "# there are no errors\\n",
  ],
  Array [
    "line",
    "# this output is not haiku.\\n",
  ],
  Array [
    "comment",
    "# this output is not haiku.\\n",
  ],
  Array [
    "line",
    "# is 8 ok?\\n",
  ],
  Array [
    "comment",
    "# is 8 ok?\\n",
  ],
  Array [
    "line",
    "ok 72 , 8 can stay.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 72,
      "name": ", 8 can stay.",
    },
  ],
  Array [
    "line",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "comment",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "line",
    "# this: is indented\\n",
  ],
  Array [
    "comment",
    "# this: is indented\\n",
  ],
  Array [
    "line",
    "# and: it\\n",
  ],
  Array [
    "comment",
    "# and: it\\n",
  ],
  Array [
    "line",
    "# might: ~\\n",
  ],
  Array [
    "comment",
    "# might: ~\\n",
  ],
  Array [
    "line",
    "# be: yaml?\\n",
  ],
  Array [
    "comment",
    "# be: yaml?\\n",
  ],
  Array [
    "line",
    "ok 73 might be confusing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 73,
      "name": "might be confusing",
    },
  ],
  Array [
    "line",
    "ok 74 done now, exiting\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 74,
      "name": "done now, exiting",
    },
  ],
  Array [
    "line",
    "ok 75 test/non-tap-output.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 75,
      "name": "test/non-tap-output.js",
    },
  ],
  Array [
    "line",
    "# not-executed.sh\\n",
  ],
  Array [
    "comment",
    "# not-executed.sh\\n",
  ],
  Array [
    "line",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "comment",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "line",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "comment",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "comment",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "line",
    "ok 76 outputs parent description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 76,
      "name": "outputs parent description",
    },
  ],
  Array [
    "line",
    "ok 77 outputs child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 77,
      "name": "outputs child description",
    },
  ],
  Array [
    "line",
    "ok 78 outputs parent description before parent result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 78,
      "name": "outputs parent description before parent result",
    },
  ],
  Array [
    "line",
    "ok 79 outputs parent result before child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 79,
      "name": "outputs parent result before child description",
    },
  ],
  Array [
    "line",
    "ok 80 outputs child description before child result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 80,
      "name": "outputs child description before child result",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 81 test/output-childtest-description.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 81,
      "name": "test/output-childtest-description.js",
    },
  ],
  Array [
    "line",
    "# result-trap.js\\n",
  ],
  Array [
    "comment",
    "# result-trap.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trap result\\n",
  ],
  Array [
    "comment",
    "# trap result\\n",
  ],
  Array [
    "line",
    "ok 82 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 82,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 83 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 83,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 84 test/result-trap.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 84,
      "name": "test/result-trap.js",
    },
  ],
  Array [
    "line",
    "# segv.js\\n",
  ],
  Array [
    "comment",
    "# segv.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# setup\\n",
  ],
  Array [
    "comment",
    "# setup\\n",
  ],
  Array [
    "line",
    "ok 85 compiled seg faulter\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 85,
      "name": "compiled seg faulter",
    },
  ],
  Array [
    "line",
    "# segv\\n",
  ],
  Array [
    "comment",
    "# segv\\n",
  ],
  Array [
    "line",
    "ok 86 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 86,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 87 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 87,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 88 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 88,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 89 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 89,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 90 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 90,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 91 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 91,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "ok 92 cleaned up\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 92,
      "name": "cleaned up",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# pass  8\\n",
  ],
  Array [
    "comment",
    "# pass  8\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 93 test/segv.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 93,
      "name": "test/segv.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 94 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 94,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 95 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 95,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 96 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 96,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 97 test/simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 97,
      "name": "test/simple-harness-test-with-plan.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 98 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 98,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 99 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 100 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 101 test/simple-harness-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 101,
      "name": "test/simple-harness-test.js",
    },
  ],
  Array [
    "line",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "comment",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# not much\\n",
  ],
  Array [
    "comment",
    "# not much\\n",
  ],
  Array [
    "line",
    "ok 102 always passes # SKIP skip it good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 102,
      "skip": "skip it good",
      "name": "always passes",
    },
  ],
  Array [
    "line",
    "ok 103 false # SKIP always fails\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 103,
      "skip": "always fails",
      "name": "false",
    },
  ],
  Array [
    "line",
    "ok 104 bonus # TODO remove todo directive\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 104,
      "todo": "remove todo directive",
      "name": "bonus",
    },
  ],
  Array [
    "line",
    "ok 105 expected # TODO implement a thing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 105,
      "todo": "implement a thing",
      "name": "expected",
    },
  ],
  Array [
    "line",
    "ok 106 always passes without explanation # SKIP \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 106,
      "skip": true,
      "name": "always passes without explanation",
    },
  ],
  Array [
    "line",
    "ok 107 false without explanation # SKIP \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 107,
      "skip": true,
      "name": "false without explanation",
    },
  ],
  Array [
    "line",
    "ok 108 bonus without explanation # TODO \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 108,
      "todo": true,
      "name": "bonus without explanation",
    },
  ],
  Array [
    "line",
    "ok 109 expected without explanation # TODO \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 109,
      "todo": true,
      "name": "expected without explanation",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# skip  4\\n",
  ],
  Array [
    "comment",
    "# skip  4\\n",
  ],
  Array [
    "line",
    "# todo  4\\n",
  ],
  Array [
    "comment",
    "# todo  4\\n",
  ],
  Array [
    "line",
    "ok 110 test/test-assert-todo-skip.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 110,
      "name": "test/test-assert-todo-skip.js",
    },
  ],
  Array [
    "line",
    "# test-descriptions.js\\n",
  ],
  Array [
    "comment",
    "# test-descriptions.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "ok 111 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 111,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 112 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 112,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 113 skip summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 113,
      "name": "skip summary is not from file",
    },
  ],
  Array [
    "line",
    "ok 114 todo summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 114,
      "name": "todo summary is not from file",
    },
  ],
  Array [
    "line",
    "not ok 115 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:  \\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Socket.<anonymous> (child_process.js:1153:11)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitOne (events.js:77:13)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 115,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Socket.<anonymous> (child_process.js:1153:11)\\n",
          "emitOne (events.js:77:13)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 116 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 116,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 117 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 117,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 118 skip summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 118,
      "name": "skip summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 119 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 119,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "not ok 120 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:  \\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 120,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 121 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 121,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "not ok 122 summarizes skipped count\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:  \\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 122,
      "name": "summarizes skipped count",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "not ok 123 summarizes todo count\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:  \\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 123,
      "name": "summarizes todo count",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "# tests 13\\n",
  ],
  Array [
    "comment",
    "# tests 13\\n",
  ],
  Array [
    "line",
    "# pass  9\\n",
  ],
  Array [
    "comment",
    "# pass  9\\n",
  ],
  Array [
    "line",
    "# fail  4\\n",
  ],
  Array [
    "comment",
    "# fail  4\\n",
  ],
  Array [
    "line",
    "not ok 124 test/test-descriptions.js\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    exit:    1\\n",
  ],
  Array [
    "line",
    "    command: \\"/usr/local/bin/iojs test-descriptions.js\\"\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 124,
      "name": "test/test-descriptions.js",
      "diag": Object {
        "exit": 1,
        "command": "/usr/local/bin/iojs test-descriptions.js",
      },
    },
  ],
  Array [
    "line",
    "# test-directives.js\\n",
  ],
  Array [
    "comment",
    "# test-directives.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "# raw TAP > TAP consumer > TAP producer\\n",
  ],
  Array [
    "comment",
    "# raw TAP > TAP consumer > TAP producer\\n",
  ],
  Array [
    "line",
    "ok 125 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 125,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 126 captures ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 126,
      "name": "captures ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 127 captures not ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 127,
      "name": "captures not ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 128 skip summary not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 128,
      "name": "skip summary not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 129 captures ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 129,
      "name": "captures ok TODO",
    },
  ],
  Array [
    "line",
    "ok 130 captures not ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 130,
      "name": "captures not ok TODO",
    },
  ],
  Array [
    "line",
    "ok 131 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 131,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 132 no ugly \\"undefined\\" in output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 132,
      "name": "no ugly \\"undefined\\" in output",
    },
  ],
  Array [
    "line",
    "# raw TAP > TAP consumer > summary\\n",
  ],
  Array [
    "comment",
    "# raw TAP > TAP consumer > summary\\n",
  ],
  Array [
    "line",
    "ok 133 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 133,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 134 no SKIP in summary\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 134,
      "name": "no SKIP in summary",
    },
  ],
  Array [
    "line",
    "ok 135 skip summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 135,
      "name": "skip summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 136 no TODO in summary\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136,
      "name": "no TODO in summary",
    },
  ],
  Array [
    "line",
    "ok 137 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 137,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 138 no ugly \\"undefined\\" in output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 138,
      "name": "no ugly \\"undefined\\" in output",
    },
  ],
  Array [
    "line",
    "# TAP producer via require(\\"tap\\")\\n",
  ],
  Array [
    "comment",
    "# TAP producer via require(\\"tap\\")\\n",
  ],
  Array [
    "line",
    "ok 139 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 139,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 140 captures ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 140,
      "name": "captures ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 141 captures not ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 141,
      "name": "captures not ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 142 skip summary not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 142,
      "name": "skip summary not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 143 captures ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 143,
      "name": "captures ok TODO",
    },
  ],
  Array [
    "line",
    "ok 144 captures not ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 144,
      "name": "captures not ok TODO",
    },
  ],
  Array [
    "line",
    "ok 145 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 145,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 146 no ugly \\"undefined\\" in output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 146,
      "name": "no ugly \\"undefined\\" in output",
    },
  ],
  Array [
    "line",
    "# tests 22\\n",
  ],
  Array [
    "comment",
    "# tests 22\\n",
  ],
  Array [
    "line",
    "# pass  22\\n",
  ],
  Array [
    "comment",
    "# pass  22\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 147 test/test-directives.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 147,
      "name": "test/test-directives.js",
    },
  ],
  Array [
    "line",
    "# test-skip.js\\n",
  ],
  Array [
    "comment",
    "# test-skip.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "ok 148 does not count as failure # SKIP \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 148,
      "skip": true,
      "name": "does not count as failure",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# skip  1\\n",
  ],
  Array [
    "comment",
    "# skip  1\\n",
  ],
  Array [
    "line",
    "ok 149 test/test-skip.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 149,
      "name": "test/test-skip.js",
    },
  ],
  Array [
    "line",
    "# test-test.js\\n",
  ],
  Array [
    "comment",
    "# test-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# testing the test object\\n",
  ],
  Array [
    "comment",
    "# testing the test object\\n",
  ],
  Array [
    "line",
    "ok 150 test object should be instanceof Test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 150,
      "name": "test object should be instanceof Test",
    },
  ],
  Array [
    "line",
    "ok 151 test object should be instanceof Harness\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 151,
      "name": "test object should be instanceof Harness",
    },
  ],
  Array [
    "line",
    "ok 152 test._Test should be the Test class\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 152,
      "name": "test._Test should be the Test class",
    },
  ],
  Array [
    "line",
    "ok 153 should have isNotDeepEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 153,
      "name": "should have isNotDeepEqual method",
    },
  ],
  Array [
    "line",
    "ok 154 isNotDeepEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 154,
      "name": "isNotDeepEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 155 should have equals method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 155,
      "name": "should have equals method",
    },
  ],
  Array [
    "line",
    "ok 156 equals method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 156,
      "name": "equals method should be a function",
    },
  ],
  Array [
    "line",
    "ok 157 should have inequivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 157,
      "name": "should have inequivalent method",
    },
  ],
  Array [
    "line",
    "ok 158 inequivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 158,
      "name": "inequivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 159 should have threw method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 159,
      "name": "should have threw method",
    },
  ],
  Array [
    "line",
    "ok 160 threw method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 160,
      "name": "threw method should be a function",
    },
  ],
  Array [
    "line",
    "ok 161 should have strictEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 161,
      "name": "should have strictEqual method",
    },
  ],
  Array [
    "line",
    "ok 162 strictEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 162,
      "name": "strictEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 163 should have emit method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 163,
      "name": "should have emit method",
    },
  ],
  Array [
    "line",
    "ok 164 emit method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 164,
      "name": "emit method should be a function",
    },
  ],
  Array [
    "line",
    "ok 165 should have fail method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 165,
      "name": "should have fail method",
    },
  ],
  Array [
    "line",
    "ok 166 fail method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 166,
      "name": "fail method should be a function",
    },
  ],
  Array [
    "line",
    "ok 167 should have strictEquals method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 167,
      "name": "should have strictEquals method",
    },
  ],
  Array [
    "line",
    "ok 168 strictEquals method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 168,
      "name": "strictEquals method should be a function",
    },
  ],
  Array [
    "line",
    "ok 169 should have notLike method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 169,
      "name": "should have notLike method",
    },
  ],
  Array [
    "line",
    "ok 170 notLike method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 170,
      "name": "notLike method should be a function",
    },
  ],
  Array [
    "line",
    "ok 171 should have dissimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 171,
      "name": "should have dissimilar method",
    },
  ],
  Array [
    "line",
    "ok 172 dissimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 172,
      "name": "dissimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 173 should have true method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 173,
      "name": "should have true method",
    },
  ],
  Array [
    "line",
    "ok 174 true method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 174,
      "name": "true method should be a function",
    },
  ],
  Array [
    "line",
    "ok 175 should have assert method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 175,
      "name": "should have assert method",
    },
  ],
  Array [
    "line",
    "ok 176 assert method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 176,
      "name": "assert method should be a function",
    },
  ],
  Array [
    "line",
    "ok 177 should have is method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 177,
      "name": "should have is method",
    },
  ],
  Array [
    "line",
    "ok 178 is method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 178,
      "name": "is method should be a function",
    },
  ],
  Array [
    "line",
    "ok 179 should have ok method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 179,
      "name": "should have ok method",
    },
  ],
  Array [
    "line",
    "ok 180 ok method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 180,
      "name": "ok method should be a function",
    },
  ],
  Array [
    "line",
    "ok 181 should have isEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 181,
      "name": "should have isEqual method",
    },
  ],
  Array [
    "line",
    "ok 182 isEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 182,
      "name": "isEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 183 should have isDeeply method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 183,
      "name": "should have isDeeply method",
    },
  ],
  Array [
    "line",
    "ok 184 isDeeply method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 184,
      "name": "isDeeply method should be a function",
    },
  ],
  Array [
    "line",
    "ok 185 should have deepEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 185,
      "name": "should have deepEqual method",
    },
  ],
  Array [
    "line",
    "ok 186 deepEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 186,
      "name": "deepEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 187 should have deepEquals method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 187,
      "name": "should have deepEquals method",
    },
  ],
  Array [
    "line",
    "ok 188 deepEquals method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 188,
      "name": "deepEquals method should be a function",
    },
  ],
  Array [
    "line",
    "ok 189 should have pass method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 189,
      "name": "should have pass method",
    },
  ],
  Array [
    "line",
    "ok 190 pass method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 190,
      "name": "pass method should be a function",
    },
  ],
  Array [
    "line",
    "ok 191 should have length method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 191,
      "name": "should have length method",
    },
  ],
  Array [
    "line",
    "ok 192 length method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 192,
      "name": "length method should be a function",
    },
  ],
  Array [
    "line",
    "ok 193 should have skip method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 193,
      "name": "should have skip method",
    },
  ],
  Array [
    "line",
    "ok 194 skip method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 194,
      "name": "skip method should be a function",
    },
  ],
  Array [
    "line",
    "ok 195 should have isNotEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 195,
      "name": "should have isNotEqual method",
    },
  ],
  Array [
    "line",
    "ok 196 isNotEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 196,
      "name": "isNotEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 197 should have looseEquals method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 197,
      "name": "should have looseEquals method",
    },
  ],
  Array [
    "line",
    "ok 198 looseEquals method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 198,
      "name": "looseEquals method should be a function",
    },
  ],
  Array [
    "line",
    "ok 199 should have false method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 199,
      "name": "should have false method",
    },
  ],
  Array [
    "line",
    "ok 200 false method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 200,
      "name": "false method should be a function",
    },
  ],
  Array [
    "line",
    "ok 201 should have notDeeply method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 201,
      "name": "should have notDeeply method",
    },
  ],
  Array [
    "line",
    "ok 202 notDeeply method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 202,
      "name": "notDeeply method should be a function",
    },
  ],
  Array [
    "line",
    "ok 203 should have ifErr method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 203,
      "name": "should have ifErr method",
    },
  ],
  Array [
    "line",
    "ok 204 ifErr method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 204,
      "name": "ifErr method should be a function",
    },
  ],
  Array [
    "line",
    "ok 205 should have hasFields method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 205,
      "name": "should have hasFields method",
    },
  ],
  Array [
    "line",
    "ok 206 hasFields method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 206,
      "name": "hasFields method should be a function",
    },
  ],
  Array [
    "line",
    "ok 207 should have isNotDeeply method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 207,
      "name": "should have isNotDeeply method",
    },
  ],
  Array [
    "line",
    "ok 208 isNotDeeply method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 208,
      "name": "isNotDeeply method should be a function",
    },
  ],
  Array [
    "line",
    "ok 209 should have like method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 209,
      "name": "should have like method",
    },
  ],
  Array [
    "line",
    "ok 210 like method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 210,
      "name": "like method should be a function",
    },
  ],
  Array [
    "line",
    "ok 211 should have similar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 211,
      "name": "should have similar method",
    },
  ],
  Array [
    "line",
    "ok 212 similar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 212,
      "name": "similar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 213 should have notOk method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 213,
      "name": "should have notOk method",
    },
  ],
  Array [
    "line",
    "ok 214 notOk method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 214,
      "name": "notOk method should be a function",
    },
  ],
  Array [
    "line",
    "ok 215 should have isDissimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 215,
      "name": "should have isDissimilar method",
    },
  ],
  Array [
    "line",
    "ok 216 isDissimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 216,
      "name": "isDissimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 217 should have isEquivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 217,
      "name": "should have isEquivalent method",
    },
  ],
  Array [
    "line",
    "ok 218 isEquivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 218,
      "name": "isEquivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 219 should have doesNotEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 219,
      "name": "should have doesNotEqual method",
    },
  ],
  Array [
    "line",
    "ok 220 doesNotEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 220,
      "name": "doesNotEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 221 should have isSimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 221,
      "name": "should have isSimilar method",
    },
  ],
  Array [
    "line",
    "ok 222 isSimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 222,
      "name": "isSimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 223 should have notDeepEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 223,
      "name": "should have notDeepEqual method",
    },
  ],
  Array [
    "line",
    "ok 224 notDeepEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 224,
      "name": "notDeepEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 225 should have type method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 225,
      "name": "should have type method",
    },
  ],
  Array [
    "line",
    "ok 226 type method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 226,
      "name": "type method should be a function",
    },
  ],
  Array [
    "line",
    "ok 227 should have notok method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 227,
      "name": "should have notok method",
    },
  ],
  Array [
    "line",
    "ok 228 notok method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 228,
      "name": "notok method should be a function",
    },
  ],
  Array [
    "line",
    "ok 229 should have isInequivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 229,
      "name": "should have isInequivalent method",
    },
  ],
  Array [
    "line",
    "ok 230 isInequivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 230,
      "name": "isInequivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 231 should have isNot method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 231,
      "name": "should have isNot method",
    },
  ],
  Array [
    "line",
    "ok 232 isNot method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 232,
      "name": "isNot method should be a function",
    },
  ],
  Array [
    "line",
    "ok 233 should have same method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 233,
      "name": "should have same method",
    },
  ],
  Array [
    "line",
    "ok 234 same method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 234,
      "name": "same method should be a function",
    },
  ],
  Array [
    "line",
    "ok 235 should have isInequal method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 235,
      "name": "should have isInequal method",
    },
  ],
  Array [
    "line",
    "ok 236 isInequal method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 236,
      "name": "isInequal method should be a function",
    },
  ],
  Array [
    "line",
    "ok 237 should have _endNice method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 237,
      "name": "should have _endNice method",
    },
  ],
  Array [
    "line",
    "ok 238 _endNice method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 238,
      "name": "_endNice method should be a function",
    },
  ],
  Array [
    "line",
    "ok 239 should have ifError method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 239,
      "name": "should have ifError method",
    },
  ],
  Array [
    "line",
    "ok 240 ifError method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 240,
      "name": "ifError method should be a function",
    },
  ],
  Array [
    "line",
    "ok 241 should have iferror method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 241,
      "name": "should have iferror method",
    },
  ],
  Array [
    "line",
    "ok 242 iferror method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 242,
      "name": "iferror method should be a function",
    },
  ],
  Array [
    "line",
    "ok 243 should have clear method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 243,
      "name": "should have clear method",
    },
  ],
  Array [
    "line",
    "ok 244 clear method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 244,
      "name": "clear method should be a function",
    },
  ],
  Array [
    "line",
    "ok 245 should have has method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 245,
      "name": "should have has method",
    },
  ],
  Array [
    "line",
    "ok 246 has method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 246,
      "name": "has method should be a function",
    },
  ],
  Array [
    "line",
    "ok 247 should have not method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 247,
      "name": "should have not method",
    },
  ],
  Array [
    "line",
    "ok 248 not method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 248,
      "name": "not method should be a function",
    },
  ],
  Array [
    "line",
    "ok 249 should have timeout method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 249,
      "name": "should have timeout method",
    },
  ],
  Array [
    "line",
    "ok 250 timeout method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 250,
      "name": "timeout method should be a function",
    },
  ],
  Array [
    "line",
    "ok 251 should have notSimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 251,
      "name": "should have notSimilar method",
    },
  ],
  Array [
    "line",
    "ok 252 notSimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 252,
      "name": "notSimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 253 should have isUnlike method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 253,
      "name": "should have isUnlike method",
    },
  ],
  Array [
    "line",
    "ok 254 isUnlike method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 254,
      "name": "isUnlike method should be a function",
    },
  ],
  Array [
    "line",
    "ok 255 should have notEquals method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 255,
      "name": "should have notEquals method",
    },
  ],
  Array [
    "line",
    "ok 256 notEquals method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 256,
      "name": "notEquals method should be a function",
    },
  ],
  Array [
    "line",
    "ok 257 should have unsimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 257,
      "name": "should have unsimilar method",
    },
  ],
  Array [
    "line",
    "ok 258 unsimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 258,
      "name": "unsimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 259 should have result method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 259,
      "name": "should have result method",
    },
  ],
  Array [
    "line",
    "ok 260 result method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 260,
      "name": "result method should be a function",
    },
  ],
  Array [
    "line",
    "ok 261 should have doesNotThrow method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 261,
      "name": "should have doesNotThrow method",
    },
  ],
  Array [
    "line",
    "ok 262 doesNotThrow method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 262,
      "name": "doesNotThrow method should be a function",
    },
  ],
  Array [
    "line",
    "ok 263 should have error method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 263,
      "name": "should have error method",
    },
  ],
  Array [
    "line",
    "ok 264 error method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 264,
      "name": "error method should be a function",
    },
  ],
  Array [
    "line",
    "ok 265 should have constructor method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 265,
      "name": "should have constructor method",
    },
  ],
  Array [
    "line",
    "ok 266 constructor method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 266,
      "name": "constructor method should be a function",
    },
  ],
  Array [
    "line",
    "ok 267 should have notEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 267,
      "name": "should have notEqual method",
    },
  ],
  Array [
    "line",
    "ok 268 notEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 268,
      "name": "notEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 269 should have throws method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 269,
      "name": "should have throws method",
    },
  ],
  Array [
    "line",
    "ok 270 throws method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 270,
      "name": "throws method should be a function",
    },
  ],
  Array [
    "line",
    "ok 271 should have isLike method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 271,
      "name": "should have isLike method",
    },
  ],
  Array [
    "line",
    "ok 272 isLike method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 272,
      "name": "isLike method should be a function",
    },
  ],
  Array [
    "line",
    "ok 273 should have isNotSimilar method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 273,
      "name": "should have isNotSimilar method",
    },
  ],
  Array [
    "line",
    "ok 274 isNotSimilar method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 274,
      "name": "isNotSimilar method should be a function",
    },
  ],
  Array [
    "line",
    "ok 275 should have isNotEquivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 275,
      "name": "should have isNotEquivalent method",
    },
  ],
  Array [
    "line",
    "ok 276 isNotEquivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 276,
      "name": "isNotEquivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 277 should have inequal method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 277,
      "name": "should have inequal method",
    },
  ],
  Array [
    "line",
    "ok 278 inequal method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 278,
      "name": "inequal method should be a function",
    },
  ],
  Array [
    "line",
    "ok 279 should have notEquivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 279,
      "name": "should have notEquivalent method",
    },
  ],
  Array [
    "line",
    "ok 280 notEquivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 280,
      "name": "notEquivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 281 should have isNotLike method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 281,
      "name": "should have isNotLike method",
    },
  ],
  Array [
    "line",
    "ok 282 isNotLike method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 282,
      "name": "isNotLike method should be a function",
    },
  ],
  Array [
    "line",
    "ok 283 should have equivalent method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 283,
      "name": "should have equivalent method",
    },
  ],
  Array [
    "line",
    "ok 284 equivalent method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 284,
      "name": "equivalent method should be a function",
    },
  ],
  Array [
    "line",
    "ok 285 should have looseEqual method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 285,
      "name": "should have looseEqual method",
    },
  ],
  Array [
    "line",
    "ok 286 looseEqual method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 286,
      "name": "looseEqual method should be a function",
    },
  ],
  Array [
    "line",
    "ok 287 should have equal method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 287,
      "name": "should have equal method",
    },
  ],
  Array [
    "line",
    "ok 288 equal method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 288,
      "name": "equal method should be a function",
    },
  ],
  Array [
    "line",
    "ok 289 should have unlike method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 289,
      "name": "should have unlike method",
    },
  ],
  Array [
    "line",
    "ok 290 unlike method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 290,
      "name": "unlike method should be a function",
    },
  ],
  Array [
    "line",
    "ok 291 should have doesNotHave method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 291,
      "name": "should have doesNotHave method",
    },
  ],
  Array [
    "line",
    "ok 292 doesNotHave method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 292,
      "name": "doesNotHave method should be a function",
    },
  ],
  Array [
    "line",
    "ok 293 should have comment method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 293,
      "name": "should have comment method",
    },
  ],
  Array [
    "line",
    "ok 294 comment method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 294,
      "name": "comment method should be a function",
    },
  ],
  Array [
    "line",
    "ok 295 should have isa method\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 295,
      "name": "should have isa method",
    },
  ],
  Array [
    "line",
    "ok 296 isa method should be a function\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 296,
      "name": "isa method should be a function",
    },
  ],
  Array [
    "line",
    "# tests 147\\n",
  ],
  Array [
    "comment",
    "# tests 147\\n",
  ],
  Array [
    "line",
    "# pass  147\\n",
  ],
  Array [
    "comment",
    "# pass  147\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 297 test/test-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 297,
      "name": "test/test-test.js",
    },
  ],
  Array [
    "line",
    "# timeout.js\\n",
  ],
  Array [
    "comment",
    "# timeout.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# timeout test with plan only\\n",
  ],
  Array [
    "comment",
    "# timeout test with plan only\\n",
  ],
  Array [
    "line",
    "ok 298 a\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 298,
      "name": "a",
    },
  ],
  Array [
    "line",
    "ok 299 b\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 299,
      "name": "b",
    },
  ],
  Array [
    "line",
    "# timeout test with plan and end\\n",
  ],
  Array [
    "comment",
    "# timeout test with plan and end\\n",
  ],
  Array [
    "line",
    "ok 300 a\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 300,
      "name": "a",
    },
  ],
  Array [
    "line",
    "ok 301 b\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 301,
      "name": "b",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 302 test/timeout.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 302,
      "name": "test/timeout.js",
    },
  ],
  Array [
    "line",
    "# trivial-success.js\\n",
  ],
  Array [
    "comment",
    "# trivial-success.js\\n",
  ],
  Array [
    "line",
    "ok 303 test/trivial-success.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 303,
      "name": "test/trivial-success.js",
    },
  ],
  Array [
    "line",
    "# undefined_indented.js\\n",
  ],
  Array [
    "comment",
    "# undefined_indented.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# consume yaml\\n",
  ],
  Array [
    "comment",
    "# consume yaml\\n",
  ],
  Array [
    "line",
    "ok 304 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 304,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# pass  1\\n",
  ],
  Array [
    "comment",
    "# pass  1\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 305 test/undefined_indented.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 305,
      "name": "test/undefined_indented.js",
    },
  ],
  Array [
    "line",
    "# valid-command.js\\n",
  ],
  Array [
    "comment",
    "# valid-command.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# valid command\\n",
  ],
  Array [
    "comment",
    "# valid command\\n",
  ],
  Array [
    "line",
    "ok 306 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 306,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 307 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 307,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 308 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 308,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 309 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 309,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 310 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 310,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 311 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 311,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 6\\n",
  ],
  Array [
    "comment",
    "# tests 6\\n",
  ],
  Array [
    "line",
    "# pass  6\\n",
  ],
  Array [
    "comment",
    "# pass  6\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 312 test/valid-command.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 312,
      "name": "test/valid-command.js",
    },
  ],
  Array [
    "line",
    "1..312\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 312,
    },
  ],
  Array [
    "line",
    "# tests 312\\n",
  ],
  Array [
    "comment",
    "# tests 312\\n",
  ],
  Array [
    "line",
    "# pass  298\\n",
  ],
  Array [
    "comment",
    "# pass  298\\n",
  ],
  Array [
    "line",
    "# fail  5\\n",
  ],
  Array [
    "comment",
    "# fail  5\\n",
  ],
  Array [
    "line",
    "# skip  5\\n",
  ],
  Array [
    "comment",
    "# skip  5\\n",
  ],
  Array [
    "line",
    "# todo  4\\n",
  ],
  Array [
    "comment",
    "# todo  4\\n",
  ],
  Array [
    "line",
    "# failed 5 of 312 tests\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 312 tests\\n",
  ],
  Array [
    "line",
    "# todo: 4\\n",
  ],
  Array [
    "comment",
    "# todo: 4\\n",
  ],
  Array [
    "line",
    "# skip: 5\\n",
  ],
  Array [
    "comment",
    "# skip: 5\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 312,
      "pass": 307,
      "fail": 5,
      "bailout": false,
      "todo": 4,
      "skip": 5,
      "plan": FinalPlan {
        "start": 1,
        "end": 312,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 115,
          "name": "captures TODO description",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Socket.<anonymous> (child_process.js:1153:11)\\n",
              "emitOne (events.js:77:13)\\n",
            ],
          },
        },
        Result {
          "ok": false,
          "id": 120,
          "name": "captures TODO description",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
            ],
          },
        },
        Result {
          "ok": false,
          "id": 122,
          "name": "summarizes skipped count",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
            ],
          },
        },
        Result {
          "ok": false,
          "id": 123,
          "name": "summarizes todo count",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
            ],
          },
        },
        Result {
          "ok": false,
          "id": 124,
          "name": "test/test-descriptions.js",
          "diag": Object {
            "exit": 1,
            "command": "/usr/local/bin/iojs test-descriptions.js",
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP tap-tests.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# buffer_compare.js\\n",
  ],
  Array [
    "comment",
    "# buffer_compare.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# same buffers\\n",
  ],
  Array [
    "comment",
    "# same buffers\\n",
  ],
  Array [
    "line",
    "ok 1 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# not same buffers\\n",
  ],
  Array [
    "comment",
    "# not same buffers\\n",
  ],
  Array [
    "line",
    "ok 2 should not be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should not be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 3 test/buffer_compare.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "test/buffer_compare.js",
    },
  ],
  Array [
    "line",
    "# common.js\\n",
  ],
  Array [
    "comment",
    "# common.js\\n",
  ],
  Array [
    "line",
    "ok 4 just setup, nothing relevant\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "just setup, nothing relevant",
    },
  ],
  Array [
    "line",
    "ok 5 test/common.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "test/common.js",
    },
  ],
  Array [
    "line",
    "# consumer.js\\n",
  ],
  Array [
    "comment",
    "# consumer.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# basic.tap\\n",
  ],
  Array [
    "comment",
    "# basic.tap\\n",
  ],
  Array [
    "line",
    "ok 6 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# indent.tap\\n",
  ],
  Array [
    "comment",
    "# indent.tap\\n",
  ],
  Array [
    "line",
    "ok 7 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# missing.tap\\n",
  ],
  Array [
    "comment",
    "# missing.tap\\n",
  ],
  Array [
    "line",
    "ok 8 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# skip-all.tap\\n",
  ],
  Array [
    "comment",
    "# skip-all.tap\\n",
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# yamlish.tap\\n",
  ],
  Array [
    "comment",
    "# yamlish.tap\\n",
  ],
  Array [
    "line",
    "ok 10 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 11 test/consumer.js\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "test/consumer.js",
    },
  ],
  Array [
    "line",
    "# debug-test.js\\n",
  ],
  Array [
    "comment",
    "# debug-test.js\\n",
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# debug test\\n",
  ],
  Array [
    "comment",
    "# debug test\\n",
  ],
  Array [
    "line",
    "ok 12 Should output debugger message\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Should output debugger message",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# pass  1\\n",
  ],
  Array [
    "comment",
    "# pass  1\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 13 test/debug-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "# deep-strict.js\\n",
  ],
  Array [
    "comment",
    "# deep-strict.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "line",
    "ok 14 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 14,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "line",
    "ok 15 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 15,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "line",
    "ok 16 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 16,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 17 test/deep-strict.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 17,
      "name": "test/deep-strict.js",
    },
  ],
  Array [
    "line",
    "# deep.js\\n",
  ],
  Array [
    "comment",
    "# deep.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "line",
    "ok 18 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 18,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "line",
    "ok 19 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 19,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "line",
    "ok 20 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 20,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 21 test/deep.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 21,
      "name": "test/deep.js",
    },
  ],
  Array [
    "line",
    "# executed.sh\\n",
  ],
  Array [
    "comment",
    "# executed.sh\\n",
  ],
  Array [
    "line",
    "ok 22 File with executable bit should be executed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 22,
      "name": "File with executable bit should be executed",
    },
  ],
  Array [
    "line",
    "ok 23 test/executed.sh\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 23,
      "name": "test/executed.sh",
    },
  ],
  Array [
    "line",
    "# exit-code.js\\n",
  ],
  Array [
    "comment",
    "# exit-code.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "comment",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "line",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "line",
    "ok 24 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 24,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 25 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 25,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "line",
    "ok 26 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 26,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 27 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 27,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "line",
    "ok 28 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 28,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 29 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 29,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# successes exit 0\\n",
  ],
  Array [
    "comment",
    "# successes exit 0\\n",
  ],
  Array [
    "line",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "comment",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "line",
    "ok 30 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 30,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 31 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 31,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "comment",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "line",
    "ok 32 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 32,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 33 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 33,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 34 test/exit-code.js\\n",
  ],
  Array [
    "extra",
    "gc test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc does not exist\\n",
  ],
  Array [
    "extra",
    "gc test\\n",
  ],
  Array [
    "extra",
    "t.plan=2\\n",
  ],
  Array [
    "extra",
    "gc test using --gc\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc exists\\n",
  ],
  Array [
    "extra",
    "gc test using --expose-gc\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc exists\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 34,
      "name": "test/exit-code.js",
    },
  ],
  Array [
    "line",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "comment",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "line",
    "gc test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc does not exist\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "line",
    "gc test\\n",
  ],
  Array [
    "line",
    "t.plan=2\\n",
  ],
  Array [
    "line",
    "gc test using --gc\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc exists\\n",
  ],
  Array [
    "line",
    "gc test using --expose-gc\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc exists\\n",
  ],
  Array [
    "line",
    "ok 35 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 35,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "line",
    "# test for gc using --gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --gc\\n",
  ],
  Array [
    "line",
    "ok 36 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 36,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "line",
    "ok 37 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 37,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 38 test/expose-gc-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 38,
      "name": "test/expose-gc-test.js",
    },
  ],
  Array [
    "line",
    "# global-harness-async.js\\n",
  ],
  Array [
    "comment",
    "# global-harness-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# outer\\n",
  ],
  Array [
    "comment",
    "# outer\\n",
  ],
  Array [
    "line",
    "# inner 1\\n",
  ],
  Array [
    "comment",
    "# inner 1\\n",
  ],
  Array [
    "line",
    "ok 39 1-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 39,
      "name": "1-1",
    },
  ],
  Array [
    "line",
    "# inner 2\\n",
  ],
  Array [
    "comment",
    "# inner 2\\n",
  ],
  Array [
    "line",
    "ok 40 2-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 40,
      "name": "2-1",
    },
  ],
  Array [
    "line",
    "# inner 3\\n",
  ],
  Array [
    "comment",
    "# inner 3\\n",
  ],
  Array [
    "line",
    "ok 41 3-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 41,
      "name": "3-1",
    },
  ],
  Array [
    "line",
    "ok 42 test/global-harness-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 42,
      "name": "test/global-harness-async.js",
    },
  ],
  Array [
    "line",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "comment",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# finishes in time\\n",
  ],
  Array [
    "comment",
    "# finishes in time\\n",
  ],
  Array [
    "line",
    "# finishes in time too\\n",
  ],
  Array [
    "comment",
    "# finishes in time too\\n",
  ],
  Array [
    "line",
    "# tests 0\\n",
  ],
  Array [
    "comment",
    "# tests 0\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 43 test/independent-timeouts.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 43,
      "name": "test/independent-timeouts.js",
    },
  ],
  Array [
    "line",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "comment",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# one\\n",
  ],
  Array [
    "comment",
    "# one\\n",
  ],
  Array [
    "line",
    "ok 44 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 44,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 45 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 45,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# two\\n",
  ],
  Array [
    "comment",
    "# two\\n",
  ],
  Array [
    "line",
    "ok 46 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 46,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 47 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 47,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 48 test/isolated-conf-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 48,
      "name": "test/isolated-conf-test.js",
    },
  ],
  Array [
    "line",
    "# meta-test.js\\n",
  ],
  Array [
    "comment",
    "# meta-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# meta test\\n",
  ],
  Array [
    "comment",
    "# meta test\\n",
  ],
  Array [
    "line",
    "ok 49 sanity check\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 49,
      "name": "sanity check",
    },
  ],
  Array [
    "line",
    "ok 50 not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 50,
      "name": "not ok",
    },
  ],
  Array [
    "line",
    "ok 51 total test count\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 51,
      "name": "total test count",
    },
  ],
  Array [
    "line",
    "ok 52 tests passed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 52,
      "name": "tests passed",
    },
  ],
  Array [
    "line",
    "ok 53 tests failed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 53,
      "name": "tests failed",
    },
  ],
  Array [
    "line",
    "ok 54 ok is boolean\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 54,
      "name": "ok is boolean",
    },
  ],
  Array [
    "line",
    "ok 55 skip is number\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 55,
      "name": "skip is number",
    },
  ],
  Array [
    "line",
    "ok 56 results isa Results\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 56,
      "name": "results isa Results",
    },
  ],
  Array [
    "line",
    "ok 57 test isa Test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 57,
      "name": "test isa Test",
    },
  ],
  Array [
    "line",
    "ok 58 test isa Harness\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 58,
      "name": "test isa Harness",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 59 test/meta-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 59,
      "name": "test/meta-test.js",
    },
  ],
  Array [
    "line",
    "# nested-async.js\\n",
  ],
  Array [
    "comment",
    "# nested-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# Harness async test support\\n",
  ],
  Array [
    "comment",
    "# Harness async test support\\n",
  ],
  Array [
    "line",
    "ok 60 sync child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 60,
      "name": "sync child A",
    },
  ],
  Array [
    "line",
    "# sync child B\\n",
  ],
  Array [
    "comment",
    "# sync child B\\n",
  ],
  Array [
    "line",
    "# async grandchild A\\n",
  ],
  Array [
    "comment",
    "# async grandchild A\\n",
  ],
  Array [
    "line",
    "ok 61 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 61,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async grandchild B\\n",
  ],
  Array [
    "comment",
    "# async grandchild B\\n",
  ],
  Array [
    "line",
    "ok 62 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 62,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async child\\n",
  ],
  Array [
    "comment",
    "# async child\\n",
  ],
  Array [
    "line",
    "ok 63 sync grandchild in async child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 63,
      "name": "sync grandchild in async child A",
    },
  ],
  Array [
    "line",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "comment",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "line",
    "ok 64 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 64,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 65 test/nested-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 65,
      "name": "test/nested-async.js",
    },
  ],
  Array [
    "line",
    "# nested-test.js\\n",
  ],
  Array [
    "comment",
    "# nested-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# parent\\n",
  ],
  Array [
    "comment",
    "# parent\\n",
  ],
  Array [
    "line",
    "ok 66 p test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 66,
      "name": "p test",
    },
  ],
  Array [
    "line",
    "# subtest\\n",
  ],
  Array [
    "comment",
    "# subtest\\n",
  ],
  Array [
    "line",
    "ok 67 ch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 67,
      "name": "ch test",
    },
  ],
  Array [
    "line",
    "# nested subtest\\n",
  ],
  Array [
    "comment",
    "# nested subtest\\n",
  ],
  Array [
    "line",
    "ok 68 grch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 68,
      "name": "grch test",
    },
  ],
  Array [
    "line",
    "# another subtest\\n",
  ],
  Array [
    "comment",
    "# another subtest\\n",
  ],
  Array [
    "line",
    "ok 69 ch test 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 69,
      "name": "ch test 2",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 70 test/nested-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 70,
      "name": "test/nested-test.js",
    },
  ],
  Array [
    "line",
    "# non-tap-output.js\\n",
  ],
  Array [
    "comment",
    "# non-tap-output.js\\n",
  ],
  Array [
    "line",
    "# everything is fine\\n",
  ],
  Array [
    "comment",
    "# everything is fine\\n",
  ],
  Array [
    "line",
    "# there are no errors\\n",
  ],
  Array [
    "comment",
    "# there are no errors\\n",
  ],
  Array [
    "line",
    "# this output is not haiku.\\n",
  ],
  Array [
    "comment",
    "# this output is not haiku.\\n",
  ],
  Array [
    "line",
    "# is 8 ok?\\n",
  ],
  Array [
    "comment",
    "# is 8 ok?\\n",
  ],
  Array [
    "line",
    "ok 71 , 8 can stay.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 71,
      "name": ", 8 can stay.",
    },
  ],
  Array [
    "line",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "comment",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "line",
    "# this: is indented\\n",
  ],
  Array [
    "comment",
    "# this: is indented\\n",
  ],
  Array [
    "line",
    "# and: it\\n",
  ],
  Array [
    "comment",
    "# and: it\\n",
  ],
  Array [
    "line",
    "# might: ~\\n",
  ],
  Array [
    "comment",
    "# might: ~\\n",
  ],
  Array [
    "line",
    "# be: yaml?\\n",
  ],
  Array [
    "comment",
    "# be: yaml?\\n",
  ],
  Array [
    "line",
    "ok 72 might be confusing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 72,
      "name": "might be confusing",
    },
  ],
  Array [
    "line",
    "ok 73 done now, exiting\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 73,
      "name": "done now, exiting",
    },
  ],
  Array [
    "line",
    "ok 74 test/non-tap-output.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 74,
      "name": "test/non-tap-output.js",
    },
  ],
  Array [
    "line",
    "# not-executed.sh\\n",
  ],
  Array [
    "comment",
    "# not-executed.sh\\n",
  ],
  Array [
    "line",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "comment",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "line",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "comment",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "comment",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "line",
    "ok 75 outputs parent description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 75,
      "name": "outputs parent description",
    },
  ],
  Array [
    "line",
    "ok 76 outputs child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 76,
      "name": "outputs child description",
    },
  ],
  Array [
    "line",
    "ok 77 outputs parent description before parent result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 77,
      "name": "outputs parent description before parent result",
    },
  ],
  Array [
    "line",
    "ok 78 outputs parent result before child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 78,
      "name": "outputs parent result before child description",
    },
  ],
  Array [
    "line",
    "ok 79 outputs child description before child result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 79,
      "name": "outputs child description before child result",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 80 test/output-childtest-description.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 80,
      "name": "test/output-childtest-description.js",
    },
  ],
  Array [
    "line",
    "# result-trap.js\\n",
  ],
  Array [
    "comment",
    "# result-trap.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trap result\\n",
  ],
  Array [
    "comment",
    "# trap result\\n",
  ],
  Array [
    "line",
    "ok 81 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 81,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 82 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 82,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 83 test/result-trap.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 83,
      "name": "test/result-trap.js",
    },
  ],
  Array [
    "line",
    "# segv.js\\n",
  ],
  Array [
    "comment",
    "# segv.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# setup\\n",
  ],
  Array [
    "comment",
    "# setup\\n",
  ],
  Array [
    "line",
    "ok 84 compiled seg faulter\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 84,
      "name": "compiled seg faulter",
    },
  ],
  Array [
    "line",
    "# segv\\n",
  ],
  Array [
    "comment",
    "# segv\\n",
  ],
  Array [
    "line",
    "ok 85 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 85,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 86 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 86,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 87 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 87,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 88 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 88,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 89 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 89,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 90 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 90,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "ok 91 cleaned up\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 91,
      "name": "cleaned up",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# pass  8\\n",
  ],
  Array [
    "comment",
    "# pass  8\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 92 test/segv.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 92,
      "name": "test/segv.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 93 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 93,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 94 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 94,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 95 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 95,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 96 test/simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 96,
      "name": "test/simple-harness-test-with-plan.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 97 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 97,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 98 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 98,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 99 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 100 test/simple-harness-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100,
      "name": "test/simple-harness-test.js",
    },
  ],
  Array [
    "line",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "comment",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# not much\\n",
  ],
  Array [
    "comment",
    "# not much\\n",
  ],
  Array [
    "line",
    "ok 101 always passes # SKIP skip it good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 101,
      "skip": "skip it good",
      "name": "always passes",
    },
  ],
  Array [
    "line",
    "ok 102 false # SKIP always fails\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 102,
      "skip": "always fails",
      "name": "false",
    },
  ],
  Array [
    "line",
    "ok 103 bonus # TODO remove todo directive\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 103,
      "todo": "remove todo directive",
      "name": "bonus",
    },
  ],
  Array [
    "line",
    "ok 104 expected # TODO implement a thing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 104,
      "todo": "implement a thing",
      "name": "expected",
    },
  ],
  Array [
    "line",
    "ok 105 always passes without explanation # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 105,
      "skip": true,
      "name": "always passes without explanation",
    },
  ],
  Array [
    "line",
    "ok 106 false without explanation # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 106,
      "skip": true,
      "name": "false without explanation",
    },
  ],
  Array [
    "line",
    "ok 107 bonus without explanation # TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 107,
      "todo": true,
      "name": "bonus without explanation",
    },
  ],
  Array [
    "line",
    "ok 108 expected without explanation # TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 108,
      "todo": true,
      "name": "expected without explanation",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# skip  4\\n",
  ],
  Array [
    "comment",
    "# skip  4\\n",
  ],
  Array [
    "line",
    "# todo  4\\n",
  ],
  Array [
    "comment",
    "# todo  4\\n",
  ],
  Array [
    "line",
    "ok 109 test/test-assert-todo-skip.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 109,
      "name": "test/test-assert-todo-skip.js",
    },
  ],
  Array [
    "line",
    "# test-descriptions.js\\n",
  ],
  Array [
    "comment",
    "# test-descriptions.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "ok 110 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 110,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 111 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 111,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 112 skip summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 112,
      "name": "skip summary is not from file",
    },
  ],
  Array [
    "line",
    "ok 113 todo summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 113,
      "name": "todo summary is not from file",
    },
  ],
  Array [
    "line",
    "not ok 114 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Socket.<anonymous> (child_process.js:1153:11)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitOne (events.js:77:13)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 114,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Socket.<anonymous> (child_process.js:1153:11)\\n",
          "emitOne (events.js:77:13)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "Bail out! # captures TODO description\\n",
  ],
  Array [
    "bailout",
    "# captures TODO description",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 114,
      "pass": 113,
      "fail": 1,
      "bailout": "# captures TODO description",
      "todo": 4,
      "skip": 4,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 114,
          "name": "captures TODO description",
          "diag": Object {
            "file": "child_process.js",
            "line": 707,
            "column": 7,
            "stack": Array [
              "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
              "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
              "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
              "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
              "ChildProcess.exithandler (child_process.js:707:7)\\n",
              "emitTwo (events.js:87:13)\\n",
              "ChildProcess.emit (events.js:169:7)\\n",
              "maybeClose (child_process.js:984:16)\\n",
              "Socket.<anonymous> (child_process.js:1153:11)\\n",
              "emitOne (events.js:77:13)\\n",
            ],
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP tap-tests.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# buffer_compare.js\\n",
  ],
  Array [
    "comment",
    "# buffer_compare.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# same buffers\\n",
  ],
  Array [
    "comment",
    "# same buffers\\n",
  ],
  Array [
    "line",
    "ok 1 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# not same buffers\\n",
  ],
  Array [
    "comment",
    "# not same buffers\\n",
  ],
  Array [
    "line",
    "ok 2 should not be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should not be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 3 test/buffer_compare.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "test/buffer_compare.js",
    },
  ],
  Array [
    "line",
    "# common.js\\n",
  ],
  Array [
    "comment",
    "# common.js\\n",
  ],
  Array [
    "line",
    "ok 4 just setup, nothing relevant\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "just setup, nothing relevant",
    },
  ],
  Array [
    "line",
    "ok 5 test/common.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "test/common.js",
    },
  ],
  Array [
    "line",
    "# consumer.js\\n",
  ],
  Array [
    "comment",
    "# consumer.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# basic.tap\\n",
  ],
  Array [
    "comment",
    "# basic.tap\\n",
  ],
  Array [
    "line",
    "ok 6 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# indent.tap\\n",
  ],
  Array [
    "comment",
    "# indent.tap\\n",
  ],
  Array [
    "line",
    "ok 7 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# missing.tap\\n",
  ],
  Array [
    "comment",
    "# missing.tap\\n",
  ],
  Array [
    "line",
    "ok 8 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# skip-all.tap\\n",
  ],
  Array [
    "comment",
    "# skip-all.tap\\n",
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# yamlish.tap\\n",
  ],
  Array [
    "comment",
    "# yamlish.tap\\n",
  ],
  Array [
    "line",
    "ok 10 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 11 test/consumer.js\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "test/consumer.js",
    },
  ],
  Array [
    "line",
    "# debug-test.js\\n",
  ],
  Array [
    "comment",
    "# debug-test.js\\n",
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# debug test\\n",
  ],
  Array [
    "comment",
    "# debug test\\n",
  ],
  Array [
    "line",
    "ok 12 Should output debugger message\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Should output debugger message",
    },
  ],
  Array [
    "line",
    "# tests 1\\n",
  ],
  Array [
    "comment",
    "# tests 1\\n",
  ],
  Array [
    "line",
    "# pass  1\\n",
  ],
  Array [
    "comment",
    "# pass  1\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 13 test/debug-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "# deep-strict.js\\n",
  ],
  Array [
    "comment",
    "# deep-strict.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order\\n",
  ],
  Array [
    "line",
    "ok 14 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 14,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shouldn't care about key order recursively\\n",
  ],
  Array [
    "line",
    "ok 15 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 15,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "comment",
    "# strictDeepEquals shoudn't care about key order (but still might)\\n",
  ],
  Array [
    "line",
    "ok 16 should be strictly equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 16,
      "name": "should be strictly equal",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 17 test/deep-strict.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 17,
      "name": "test/deep-strict.js",
    },
  ],
  Array [
    "line",
    "# deep.js\\n",
  ],
  Array [
    "comment",
    "# deep.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order and types\\n",
  ],
  Array [
    "line",
    "ok 18 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 18,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shouldn't care about key order recursively and types\\n",
  ],
  Array [
    "line",
    "ok 19 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 19,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "comment",
    "# deepEquals shoudn't care about key order (but still might) and types\\n",
  ],
  Array [
    "line",
    "ok 20 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 20,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 21 test/deep.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 21,
      "name": "test/deep.js",
    },
  ],
  Array [
    "line",
    "# executed.sh\\n",
  ],
  Array [
    "comment",
    "# executed.sh\\n",
  ],
  Array [
    "line",
    "ok 22 File with executable bit should be executed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 22,
      "name": "File with executable bit should be executed",
    },
  ],
  Array [
    "line",
    "ok 23 test/executed.sh\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 23,
      "name": "test/executed.sh",
    },
  ],
  Array [
    "line",
    "# exit-code.js\\n",
  ],
  Array [
    "comment",
    "# exit-code.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "comment",
    "# exit code 1 when tap results show failure\\n",
  ],
  Array [
    "line",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 0, has failures\\n",
  ],
  Array [
    "line",
    "ok 24 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 24,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 25 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 25,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has failures\\n",
  ],
  Array [
    "line",
    "ok 26 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 26,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 27 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 27,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "comment",
    "# test exits 1, has no failures\\n",
  ],
  Array [
    "line",
    "ok 28 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 28,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 29 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 29,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# successes exit 0\\n",
  ],
  Array [
    "comment",
    "# successes exit 0\\n",
  ],
  Array [
    "line",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "comment",
    "# test that does nothing, but exits 0\\n",
  ],
  Array [
    "line",
    "ok 30 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 30,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 31 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 31,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "comment",
    "# test that succeeds, and exits 0\\n",
  ],
  Array [
    "line",
    "ok 32 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 32,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 33 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 33,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 34 test/exit-code.js\\n",
  ],
  Array [
    "extra",
    "gc test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc does not exist\\n",
  ],
  Array [
    "extra",
    "gc test\\n",
  ],
  Array [
    "extra",
    "t.plan=2\\n",
  ],
  Array [
    "extra",
    "gc test using --gc\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc exists\\n",
  ],
  Array [
    "extra",
    "gc test using --expose-gc\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "assert gc exists\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 34,
      "name": "test/exit-code.js",
    },
  ],
  Array [
    "line",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "comment",
    "# expose-gc-test.js\\n",
  ],
  Array [
    "line",
    "gc test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc does not exist\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc isn't there\\n",
  ],
  Array [
    "line",
    "gc test\\n",
  ],
  Array [
    "line",
    "t.plan=2\\n",
  ],
  Array [
    "line",
    "gc test using --gc\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc exists\\n",
  ],
  Array [
    "line",
    "gc test using --expose-gc\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "assert gc exists\\n",
  ],
  Array [
    "line",
    "ok 35 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 35,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "comment",
    "# gc test when the gc should be there\\n",
  ],
  Array [
    "line",
    "# test for gc using --gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --gc\\n",
  ],
  Array [
    "line",
    "ok 36 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 36,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "comment",
    "# test for gc using --expose-gc\\n",
  ],
  Array [
    "line",
    "ok 37 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 37,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 38 test/expose-gc-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 38,
      "name": "test/expose-gc-test.js",
    },
  ],
  Array [
    "line",
    "# global-harness-async.js\\n",
  ],
  Array [
    "comment",
    "# global-harness-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# outer\\n",
  ],
  Array [
    "comment",
    "# outer\\n",
  ],
  Array [
    "line",
    "# inner 1\\n",
  ],
  Array [
    "comment",
    "# inner 1\\n",
  ],
  Array [
    "line",
    "ok 39 1-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 39,
      "name": "1-1",
    },
  ],
  Array [
    "line",
    "# inner 2\\n",
  ],
  Array [
    "comment",
    "# inner 2\\n",
  ],
  Array [
    "line",
    "ok 40 2-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 40,
      "name": "2-1",
    },
  ],
  Array [
    "line",
    "# inner 3\\n",
  ],
  Array [
    "comment",
    "# inner 3\\n",
  ],
  Array [
    "line",
    "ok 41 3-1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 41,
      "name": "3-1",
    },
  ],
  Array [
    "line",
    "ok 42 test/global-harness-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 42,
      "name": "test/global-harness-async.js",
    },
  ],
  Array [
    "line",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "comment",
    "# independent-timeouts.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# finishes in time\\n",
  ],
  Array [
    "comment",
    "# finishes in time\\n",
  ],
  Array [
    "line",
    "# finishes in time too\\n",
  ],
  Array [
    "comment",
    "# finishes in time too\\n",
  ],
  Array [
    "line",
    "# tests 0\\n",
  ],
  Array [
    "comment",
    "# tests 0\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 43 test/independent-timeouts.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 43,
      "name": "test/independent-timeouts.js",
    },
  ],
  Array [
    "line",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "comment",
    "# isolated-conf-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# one\\n",
  ],
  Array [
    "comment",
    "# one\\n",
  ],
  Array [
    "line",
    "ok 44 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 44,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 45 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 45,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# two\\n",
  ],
  Array [
    "comment",
    "# two\\n",
  ],
  Array [
    "line",
    "ok 46 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 46,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 47 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 47,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 48 test/isolated-conf-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 48,
      "name": "test/isolated-conf-test.js",
    },
  ],
  Array [
    "line",
    "# meta-test.js\\n",
  ],
  Array [
    "comment",
    "# meta-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# meta test\\n",
  ],
  Array [
    "comment",
    "# meta test\\n",
  ],
  Array [
    "line",
    "ok 49 sanity check\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 49,
      "name": "sanity check",
    },
  ],
  Array [
    "line",
    "ok 50 not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 50,
      "name": "not ok",
    },
  ],
  Array [
    "line",
    "ok 51 total test count\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 51,
      "name": "total test count",
    },
  ],
  Array [
    "line",
    "ok 52 tests passed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 52,
      "name": "tests passed",
    },
  ],
  Array [
    "line",
    "ok 53 tests failed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 53,
      "name": "tests failed",
    },
  ],
  Array [
    "line",
    "ok 54 ok is boolean\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 54,
      "name": "ok is boolean",
    },
  ],
  Array [
    "line",
    "ok 55 skip is number\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 55,
      "name": "skip is number",
    },
  ],
  Array [
    "line",
    "ok 56 results isa Results\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 56,
      "name": "results isa Results",
    },
  ],
  Array [
    "line",
    "ok 57 test isa Test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 57,
      "name": "test isa Test",
    },
  ],
  Array [
    "line",
    "ok 58 test isa Harness\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 58,
      "name": "test isa Harness",
    },
  ],
  Array [
    "line",
    "# tests 10\\n",
  ],
  Array [
    "comment",
    "# tests 10\\n",
  ],
  Array [
    "line",
    "# pass  10\\n",
  ],
  Array [
    "comment",
    "# pass  10\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 59 test/meta-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 59,
      "name": "test/meta-test.js",
    },
  ],
  Array [
    "line",
    "# nested-async.js\\n",
  ],
  Array [
    "comment",
    "# nested-async.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# Harness async test support\\n",
  ],
  Array [
    "comment",
    "# Harness async test support\\n",
  ],
  Array [
    "line",
    "ok 60 sync child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 60,
      "name": "sync child A",
    },
  ],
  Array [
    "line",
    "# sync child B\\n",
  ],
  Array [
    "comment",
    "# sync child B\\n",
  ],
  Array [
    "line",
    "# async grandchild A\\n",
  ],
  Array [
    "comment",
    "# async grandchild A\\n",
  ],
  Array [
    "line",
    "ok 61 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 61,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async grandchild B\\n",
  ],
  Array [
    "comment",
    "# async grandchild B\\n",
  ],
  Array [
    "line",
    "ok 62 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 62,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# async child\\n",
  ],
  Array [
    "comment",
    "# async child\\n",
  ],
  Array [
    "line",
    "ok 63 sync grandchild in async child A\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 63,
      "name": "sync grandchild in async child A",
    },
  ],
  Array [
    "line",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "comment",
    "# sync grandchild in async child B\\n",
  ],
  Array [
    "line",
    "ok 64 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 64,
      "name": "(unnamed assert)",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 65 test/nested-async.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 65,
      "name": "test/nested-async.js",
    },
  ],
  Array [
    "line",
    "# nested-test.js\\n",
  ],
  Array [
    "comment",
    "# nested-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# parent\\n",
  ],
  Array [
    "comment",
    "# parent\\n",
  ],
  Array [
    "line",
    "ok 66 p test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 66,
      "name": "p test",
    },
  ],
  Array [
    "line",
    "# subtest\\n",
  ],
  Array [
    "comment",
    "# subtest\\n",
  ],
  Array [
    "line",
    "ok 67 ch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 67,
      "name": "ch test",
    },
  ],
  Array [
    "line",
    "# nested subtest\\n",
  ],
  Array [
    "comment",
    "# nested subtest\\n",
  ],
  Array [
    "line",
    "ok 68 grch test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 68,
      "name": "grch test",
    },
  ],
  Array [
    "line",
    "# another subtest\\n",
  ],
  Array [
    "comment",
    "# another subtest\\n",
  ],
  Array [
    "line",
    "ok 69 ch test 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 69,
      "name": "ch test 2",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 70 test/nested-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 70,
      "name": "test/nested-test.js",
    },
  ],
  Array [
    "line",
    "# non-tap-output.js\\n",
  ],
  Array [
    "comment",
    "# non-tap-output.js\\n",
  ],
  Array [
    "line",
    "# everything is fine\\n",
  ],
  Array [
    "comment",
    "# everything is fine\\n",
  ],
  Array [
    "line",
    "# there are no errors\\n",
  ],
  Array [
    "comment",
    "# there are no errors\\n",
  ],
  Array [
    "line",
    "# this output is not haiku.\\n",
  ],
  Array [
    "comment",
    "# this output is not haiku.\\n",
  ],
  Array [
    "line",
    "# is 8 ok?\\n",
  ],
  Array [
    "comment",
    "# is 8 ok?\\n",
  ],
  Array [
    "line",
    "ok 71 , 8 can stay.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 71,
      "name": ", 8 can stay.",
    },
  ],
  Array [
    "line",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "comment",
    "# but: nevertheless, here we are\\n",
  ],
  Array [
    "line",
    "# this: is indented\\n",
  ],
  Array [
    "comment",
    "# this: is indented\\n",
  ],
  Array [
    "line",
    "# and: it\\n",
  ],
  Array [
    "comment",
    "# and: it\\n",
  ],
  Array [
    "line",
    "# might: ~\\n",
  ],
  Array [
    "comment",
    "# might: ~\\n",
  ],
  Array [
    "line",
    "# be: yaml?\\n",
  ],
  Array [
    "comment",
    "# be: yaml?\\n",
  ],
  Array [
    "line",
    "ok 72 might be confusing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 72,
      "name": "might be confusing",
    },
  ],
  Array [
    "line",
    "ok 73 done now, exiting\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 73,
      "name": "done now, exiting",
    },
  ],
  Array [
    "line",
    "ok 74 test/non-tap-output.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 74,
      "name": "test/non-tap-output.js",
    },
  ],
  Array [
    "line",
    "# not-executed.sh\\n",
  ],
  Array [
    "comment",
    "# not-executed.sh\\n",
  ],
  Array [
    "line",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "comment",
    "# output-childtest-description.js\\n",
  ],
  Array [
    "line",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "comment",
    "# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "comment",
    "# nested tests, parent and child pass\\n",
  ],
  Array [
    "line",
    "ok 75 outputs parent description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 75,
      "name": "outputs parent description",
    },
  ],
  Array [
    "line",
    "ok 76 outputs child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 76,
      "name": "outputs child description",
    },
  ],
  Array [
    "line",
    "ok 77 outputs parent description before parent result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 77,
      "name": "outputs parent description before parent result",
    },
  ],
  Array [
    "line",
    "ok 78 outputs parent result before child description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 78,
      "name": "outputs parent result before child description",
    },
  ],
  Array [
    "line",
    "ok 79 outputs child description before child result\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 79,
      "name": "outputs child description before child result",
    },
  ],
  Array [
    "line",
    "# tests 5\\n",
  ],
  Array [
    "comment",
    "# tests 5\\n",
  ],
  Array [
    "line",
    "# pass  5\\n",
  ],
  Array [
    "comment",
    "# pass  5\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 80 test/output-childtest-description.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 80,
      "name": "test/output-childtest-description.js",
    },
  ],
  Array [
    "line",
    "# result-trap.js\\n",
  ],
  Array [
    "comment",
    "# result-trap.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trap result\\n",
  ],
  Array [
    "comment",
    "# trap result\\n",
  ],
  Array [
    "line",
    "ok 81 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 81,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "ok 82 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 82,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# tests 2\\n",
  ],
  Array [
    "comment",
    "# tests 2\\n",
  ],
  Array [
    "line",
    "# pass  2\\n",
  ],
  Array [
    "comment",
    "# pass  2\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 83 test/result-trap.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 83,
      "name": "test/result-trap.js",
    },
  ],
  Array [
    "line",
    "# segv.js\\n",
  ],
  Array [
    "comment",
    "# segv.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# setup\\n",
  ],
  Array [
    "comment",
    "# setup\\n",
  ],
  Array [
    "line",
    "ok 84 compiled seg faulter\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 84,
      "name": "compiled seg faulter",
    },
  ],
  Array [
    "line",
    "# segv\\n",
  ],
  Array [
    "comment",
    "# segv\\n",
  ],
  Array [
    "line",
    "ok 85 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 85,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 86 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 86,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 87 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 87,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 88 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 88,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 89 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 89,
      "name": "should be equivalent",
    },
  ],
  Array [
    "line",
    "ok 90 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 90,
      "name": "should be equal",
    },
  ],
  Array [
    "line",
    "# cleanup\\n",
  ],
  Array [
    "comment",
    "# cleanup\\n",
  ],
  Array [
    "line",
    "ok 91 cleaned up\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 91,
      "name": "cleaned up",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# pass  8\\n",
  ],
  Array [
    "comment",
    "# pass  8\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 92 test/segv.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 92,
      "name": "test/segv.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 93 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 93,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 94 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 94,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 95 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 95,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 96 test/simple-harness-test-with-plan.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 96,
      "name": "test/simple-harness-test-with-plan.js",
    },
  ],
  Array [
    "line",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "comment",
    "# simple-harness-test.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# trivial success\\n",
  ],
  Array [
    "comment",
    "# trivial success\\n",
  ],
  Array [
    "line",
    "ok 97 it works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 97,
      "name": "it works",
    },
  ],
  Array [
    "line",
    "# two tests\\n",
  ],
  Array [
    "comment",
    "# two tests\\n",
  ],
  Array [
    "line",
    "ok 98 math should work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 98,
      "name": "math should work",
    },
  ],
  Array [
    "line",
    "ok 99 false should not be ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99,
      "name": "false should not be ok",
    },
  ],
  Array [
    "line",
    "# tests 3\\n",
  ],
  Array [
    "comment",
    "# tests 3\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "ok 100 test/simple-harness-test.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100,
      "name": "test/simple-harness-test.js",
    },
  ],
  Array [
    "line",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "comment",
    "# test-assert-todo-skip.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# not much\\n",
  ],
  Array [
    "comment",
    "# not much\\n",
  ],
  Array [
    "line",
    "ok 101 always passes # SKIP skip it good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 101,
      "skip": "skip it good",
      "name": "always passes",
    },
  ],
  Array [
    "line",
    "ok 102 false # SKIP always fails\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 102,
      "skip": "always fails",
      "name": "false",
    },
  ],
  Array [
    "line",
    "ok 103 bonus # TODO remove todo directive\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 103,
      "todo": "remove todo directive",
      "name": "bonus",
    },
  ],
  Array [
    "line",
    "ok 104 expected # TODO implement a thing\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 104,
      "todo": "implement a thing",
      "name": "expected",
    },
  ],
  Array [
    "line",
    "ok 105 always passes without explanation # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 105,
      "skip": true,
      "name": "always passes without explanation",
    },
  ],
  Array [
    "line",
    "ok 106 false without explanation # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 106,
      "skip": true,
      "name": "false without explanation",
    },
  ],
  Array [
    "line",
    "ok 107 bonus without explanation # TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 107,
      "todo": true,
      "name": "bonus without explanation",
    },
  ],
  Array [
    "line",
    "ok 108 expected without explanation # TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 108,
      "todo": true,
      "name": "expected without explanation",
    },
  ],
  Array [
    "line",
    "# tests 8\\n",
  ],
  Array [
    "comment",
    "# tests 8\\n",
  ],
  Array [
    "line",
    "# skip  4\\n",
  ],
  Array [
    "comment",
    "# skip  4\\n",
  ],
  Array [
    "line",
    "# todo  4\\n",
  ],
  Array [
    "comment",
    "# todo  4\\n",
  ],
  Array [
    "line",
    "ok 109 test/test-assert-todo-skip.js\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 109,
      "name": "test/test-assert-todo-skip.js",
    },
  ],
  Array [
    "line",
    "# test-descriptions.js\\n",
  ],
  Array [
    "comment",
    "# test-descriptions.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "ok 110 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 110,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 111 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 111,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 112 skip summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 112,
      "name": "skip summary is not from file",
    },
  ],
  Array [
    "line",
    "ok 113 todo summary is not from file\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 113,
      "name": "todo summary is not from file",
    },
  ],
  Array [
    "line",
    "not ok 114 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Socket.<anonymous> (child_process.js:1153:11)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitOne (events.js:77:13)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 114,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Socket.<anonymous> (child_process.js:1153:11)\\n",
          "emitOne (events.js:77:13)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 115 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 115,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "ok 116 captures SKIP description\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 116,
      "name": "captures SKIP description",
    },
  ],
  Array [
    "line",
    "ok 117 skip summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 117,
      "name": "skip summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 118 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 118,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "not ok 119 captures TODO description\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 119,
      "name": "captures TODO description",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "ok 120 exit cleanly\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 120,
      "name": "exit cleanly",
    },
  ],
  Array [
    "line",
    "not ok 121 summarizes skipped count\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 121,
      "name": "summarizes skipped count",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "not ok 122 summarizes todo count\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    file:   child_process.js\\n",
  ],
  Array [
    "line",
    "    line:   707\\n",
  ],
  Array [
    "line",
    "    column: 7\\n",
  ],
  Array [
    "line",
    "    stack:\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        /Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.exithandler (child_process.js:707:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        emitTwo (events.js:87:13)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        ChildProcess.emit (events.js:169:7)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        maybeClose (child_process.js:984:16)\\n",
  ],
  Array [
    "line",
    "      - |\\n",
  ],
  Array [
    "line",
    "        Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 122,
      "name": "summarizes todo count",
      "diag": Object {
        "file": "child_process.js",
        "line": 707,
        "column": 7,
        "stack": Array [
          "getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\\n",
          "Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\\n",
          "Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\\n",
          "/Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\\n",
          "ChildProcess.exithandler (child_process.js:707:7)\\n",
          "emitTwo (events.js:87:13)\\n",
          "ChildProcess.emit (events.js:169:7)\\n",
          "maybeClose (child_process.js:984:16)\\n",
          "Process.ChildProcess._handle.onexit (child_process.js:1057:5)\\n",
        ],
      },
    },
  ],
  Array [
    "line",
    "# tests 13\\n",
  ],
  Array [
    "comment",
    "# tests 13\\n",
  ],
  Array [
    "line",
    "# pass  9\\n",
  ],
  Array [
    "comment",
    "# pass  9\\n",
  ],
  Array [
    "line",
    "# fail  4\\n",
  ],
  Array [
    "comment",
    "# fail  4\\n",
  ],
  Array [
    "line",
    "not ok 123 test/test-descriptions.js\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "    exit:    1\\n",
  ],
  Array [
    "line",
    "    command: \\"/usr/local/bin/iojs test-descriptions.js\\"\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 123,
      "name": "test/test-descriptions.js",
      "diag": Object {
        "exit": 1,
        "command": "/usr/local/bin/iojs test-descriptions.js",
      },
    },
  ],
  Array [
    "line",
    "# test-directives.js\\n",
  ],
  Array [
    "comment",
    "# test-directives.js\\n",
  ],
  Array [
    "line",
    "# TAP version 13\\n",
  ],
  Array [
    "comment",
    "# TAP version 13\\n",
  ],
  Array [
    "line",
    "# captures test descriptions\\n",
  ],
  Array [
    "comment",
    "# captures test descriptions\\n",
  ],
  Array [
    "line",
    "# raw TAP > TAP consumer > TAP producer\\n",
  ],
  Array [
    "comment",
    "# raw TAP > TAP consumer > TAP producer\\n",
  ],
  Array [
    "line",
    "ok 124 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 124,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 125 captures ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 125,
      "name": "captures ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 126 captures not ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 126,
      "name": "captures not ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 127 skip summary not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 127,
      "name": "skip summary not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 128 captures ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 128,
      "name": "captures ok TODO",
    },
  ],
  Array [
    "line",
    "ok 129 captures not ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 129,
      "name": "captures not ok TODO",
    },
  ],
  Array [
    "line",
    "ok 130 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 130,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 131 no ugly \\"undefined\\" in output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 131,
      "name": "no ugly \\"undefined\\" in output",
    },
  ],
  Array [
    "line",
    "# raw TAP > TAP consumer > summary\\n",
  ],
  Array [
    "comment",
    "# raw TAP > TAP consumer > summary\\n",
  ],
  Array [
    "line",
    "ok 132 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 132,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 133 no SKIP in summary\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 133,
      "name": "no SKIP in summary",
    },
  ],
  Array [
    "line",
    "ok 134 skip summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 134,
      "name": "skip summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 135 no TODO in summary\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 135,
      "name": "no TODO in summary",
    },
  ],
  Array [
    "line",
    "ok 136 todo summary is not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136,
      "name": "todo summary is not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 137 no ugly \\"undefined\\" in output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 137,
      "name": "no ugly \\"undefined\\" in output",
    },
  ],
  Array [
    "line",
    "# TAP producer via require(\\"tap\\")\\n",
  ],
  Array [
    "comment",
    "# TAP producer via require(\\"tap\\")\\n",
  ],
  Array [
    "line",
    "ok 138 overall result is PASS\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 138,
      "name": "overall result is PASS",
    },
  ],
  Array [
    "line",
    "ok 139 captures ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 139,
      "name": "captures ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 140 captures not ok SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 140,
      "name": "captures not ok SKIP",
    },
  ],
  Array [
    "line",
    "ok 141 skip summary not in TAP output\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 141,
      "name": "skip summary not in TAP output",
    },
  ],
  Array [
    "line",
    "ok 142 captures ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 142,
      "name": "captures ok TODO",
    },
  ],
  Array [
    "line",
    "ok 143 captures not ok TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 143,
      "name": "captures not ok TODO",
    },
  ],
  Array [
    "line",
  ],
  Array [
    "assert",
    Result {