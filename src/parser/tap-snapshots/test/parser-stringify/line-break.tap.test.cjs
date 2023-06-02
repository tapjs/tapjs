/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > line-break.tap > bail > parsed 1`] = `
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
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo > should be equivalent",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "bailout",
        "should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should be equivalent",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo > should be equivalent",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
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
    ],
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > line-break.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: foo
not ok 1 - foo > should be equivalent
  ---
  found:
    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  wanted:
    - >-
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  ...
Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > default settings > parsed 1`] = `
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
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo > should be equivalent",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo > should be equivalent",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 13.457,
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
      "diag": Object {
        "results": Object {
          "count": 1,
          "fail": 1,
          "ok": false,
          "pass": 0,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
          "time": 13.457,
        },
      },
      "fullname": "foo",
      "id": 1,
      "name": "foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 13.457,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "foo",
          "id": 1,
          "name": "foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 13.457,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 22.566,
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

exports[`test/parse-stringify.ts > TAP > line-break.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          String(
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          ),
        ],
      },
      "fullname": "foo > should be equivalent",
      "id": 1,
      "name": "foo > should be equivalent",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
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
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "foo",
          "id": 1,
          "name": "foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 13.457,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 22.566,
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

exports[`test/parse-stringify.ts > TAP > line-break.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: foo
not ok 1 - foo > should be equivalent
  ---
  found:
    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  wanted:
    - >-
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  ...
# failed 1 of 1 tests
not ok 2 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..2
# failed 1 of 1 tests
# time=22.566ms

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > strict > parsed 1`] = `
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
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo > should be equivalent",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo > should be equivalent",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 13.457,
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
      "diag": Object {
        "results": Object {
          "count": 1,
          "fail": 1,
          "ok": false,
          "pass": 0,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
          "time": 13.457,
        },
      },
      "fullname": "foo",
      "id": 1,
      "name": "foo",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 13.457,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "foo",
          "id": 1,
          "name": "foo",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 13.457,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 22.566,
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

exports[`test/parse-stringify.ts > TAP > line-break.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: foo
not ok 1 - foo > should be equivalent
  ---
  found:
    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  wanted:
    - >-
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  ...
# failed 1 of 1 tests
not ok 2 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..2
# failed 1 of 1 tests
# time=22.566ms

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > strictBail > parsed 1`] = `
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
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo > should be equivalent",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "bailout",
        "should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should be equivalent",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo > should be equivalent",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
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
    ],
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > line-break.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parse-stringify.ts > TAP > line-break.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: foo
not ok 1 - foo > should be equivalent
  ---
  found:
    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  wanted:
    - >-
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  ...
Bail out! should be equivalent
Bail out! should be equivalent

`
