/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP version-in-yaml.tap > output bail=false 1`] = `
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
    "# Subtest: child indented\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child indented\\n",
      ],
      Array [
        "line",
        "not ok - some yaml\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  version: |-\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    TAP version 13\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
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
    ],
  ],
  Array [
    "line",
    "    not ok - some yaml\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      version: |-\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        TAP version 13\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child indented",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child indented",
      "name": "some yaml",
      "ok": false,
    },
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
    "not ok 1 - child indented\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "child indented",
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Subtest: child unindented\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child unindented\\n",
      ],
      Array [
        "line",
        "not ok - some yaml\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  version: |-\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    TAP version 13\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child unindented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child unindented",
              "name": "some yaml",
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
    ],
  ],
  Array [
    "line",
    "    not ok - some yaml\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      version: |-\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        TAP version 13\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child unindented",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child unindented",
      "name": "some yaml",
      "ok": false,
    },
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
    "not ok 2 - child unindented\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child unindented",
      "ok": false,
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
        "not ok - some yaml\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  version: |-\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    TAP version 13\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "",
              "name": "some yaml",
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
    ],
  ],
  Array [
    "line",
    "    not ok - some yaml\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      version: |-\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        TAP version 13\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "",
      "name": "some yaml",
      "ok": false,
    },
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
    "not ok 3 - child unnamed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child unnamed",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child unnamed",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child unnamed",
      "ok": false,
    },
  ],
  Array [
    "line",
    "not ok 4 - child buffered {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child buffered\\n",
      ],
      Array [
        "line",
        "not ok - some yaml\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  version: |-\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    TAP version 13\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child buffered",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child buffered",
              "name": "some yaml",
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
    ],
  ],
  Array [
    "line",
    "    not ok - some yaml\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      version: |-\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        TAP version 13\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child buffered",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child buffered",
      "name": "some yaml",
      "ok": false,
    },
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 4,
      "name": "child buffered",
      "ok": false,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "child indented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 2,
          "name": "child unindented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "child unnamed",
          "ok": false,
        },
        Result {
          "buffered": true,
          "fullname": "",
          "id": 4,
          "name": "child buffered",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser.js TAP version-in-yaml.tap > output bail=true 1`] = `
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
    "# Subtest: child indented\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child indented\\n",
      ],
      Array [
        "line",
        "not ok - some yaml\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  version: |-\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    TAP version 13\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out! some yaml\\n",
      ],
      Array [
        "bailout",
        "some yaml",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "some yaml",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
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
    "line",
    "    not ok - some yaml\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      version: |-\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        TAP version 13\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child indented",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "version": String(
          
          TAP version 13
        ),
      },
      "fullname": "child indented",
      "name": "some yaml",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out! some yaml\\n",
  ],
  Array [
    "bailout",
    "some yaml",
  ],
  Array [
    "line",
    "Bail out! some yaml\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "some yaml",
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
