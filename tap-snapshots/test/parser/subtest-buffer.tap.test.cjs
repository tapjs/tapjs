/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
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
          "end": 2,
          "start": 1,
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
              "fullname": "nesting first",
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
              "fullname": "nesting first",
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
              "time": null,
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
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
              "fullname": "nesting second",
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
              "fullname": "nesting second",
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
              "fullname": "nesting second",
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
              "time": null,
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 2,
          "name": "second",
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
          "time": null,
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
    "result",
    Result {
      "fullname": "nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
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
    "result",
    Result {
      "fullname": "nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
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
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
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
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
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
          "end": 2,
          "start": 1,
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
              "fullname": "nesting first",
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
              "fullname": "nesting first",
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
              "time": null,
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 1,
          "name": "first",
          "ok": true,
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
              "fullname": "nesting second",
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
              "fullname": "nesting second",
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
              "fullname": "nesting second",
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
              "time": null,
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "nesting",
          "id": 2,
          "name": "second",
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
          "time": null,
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
    "result",
    Result {
      "fullname": "nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
    },
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
    "result",
    Result {
      "fullname": "nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "nesting",
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
      "fullname": "",
      "id": 2,
      "name": "this passes",
      "ok": true,
    },
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
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
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
      "time": 66.857,
      "todo": 0,
    },
  ],
]
`
