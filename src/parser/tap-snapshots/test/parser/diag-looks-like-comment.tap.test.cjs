/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP diag-looks-like-comment.tap > output bail=false 1`] = `
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
          "buffered": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
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
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
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
          "time": null,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
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
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
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
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
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
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - -t 0.2\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "-t 0.2",
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
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "-t 0.2",
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
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP diag-looks-like-comment.tap > output bail=true 1`] = `
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
          "buffered": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
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
        "Bail out! should match pattern provided\\n",
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
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
        "close",
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
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
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
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
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
    "    Bail out! should match pattern provided\\n",
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "line",
    "Bail out! should match pattern provided\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
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
]
`
