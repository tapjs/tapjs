/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP line-break.tap > output bail=false 1`] = `
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
          "fullname": "foo",
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
        "line",
        "1..1\\n",
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
              "fullname": "foo",
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 13.457,
          "todo": 0,
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
    "result",
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
      "fullname": "foo",
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
    "fail",
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
      "fullname": "foo",
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
      "fullname": "",
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
    "line",
    "1..1\\n",
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
          "fullname": "",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 22.566,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.ts TAP line-break.tap > output bail=true 1`] = `
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
          "fullname": "foo",
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
        "line",
        "Bail out! should be equivalent\\n",
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
              "fullname": "foo",
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
    "result",
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
      "fullname": "foo",
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
    "fail",
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
      "fullname": "foo",
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
    "line",
    "    Bail out! should be equivalent\\n",
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "line",
    "Bail out! should be equivalent\\n",
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
