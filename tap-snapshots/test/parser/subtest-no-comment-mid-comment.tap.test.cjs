/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
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
                  "end": 2,
                  "start": 1,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 1,
                  "name": "true is ok",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
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
                  "time": 8.987,
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
              "fullname": "first",
              "id": 1,
              "name": "first",
              "ok": true,
              "time": 8.987,
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
                  "fullname": "first",
                  "id": 1,
                  "name": "but that is ok",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 2,
                  "name": "this passes",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 3,
                  "name": "nested ok",
                  "ok": true,
                },
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
                  "time": 5.988,
                  "todo": 0,
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
              "fullname": "first",
              "id": 2,
              "name": "second",
              "ok": true,
              "time": 5.988,
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
              "time": 28.647,
              "todo": 0,
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
          "fullname": "",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "time": 28.647,
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
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
          "time": 205.826,
          "todo": 0,
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
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 8.987,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 8.987,
    },
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
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
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
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 5.988,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 5.988,
    },
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "time": 28.647,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "time": 28.647,
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
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
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
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
                  "end": 2,
                  "start": 1,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 1,
                  "name": "true is ok",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
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
                  "time": 8.987,
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
              "fullname": "first",
              "id": 1,
              "name": "first",
              "ok": true,
              "time": 8.987,
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
                  "fullname": "first",
                  "id": 1,
                  "name": "but that is ok",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 2,
                  "name": "this passes",
                  "ok": true,
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "fullname": "first",
                  "id": 3,
                  "name": "nested ok",
                  "ok": true,
                },
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
                  "time": 5.988,
                  "todo": 0,
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
              "fullname": "first",
              "id": 2,
              "name": "second",
              "ok": true,
              "time": 5.988,
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
              "time": 28.647,
              "todo": 0,
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
          "fullname": "",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "time": 28.647,
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
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
          "time": 205.826,
          "todo": 0,
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
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 8.987,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 8.987,
    },
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
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
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
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 5.988,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 5.988,
    },
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "time": 28.647,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "time": 28.647,
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
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
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "time": 205.826,
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
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
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
]
`
