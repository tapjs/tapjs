/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
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
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "tbd",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "tbd",
      "id": 1,
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
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
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "skippy",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "skippy",
      "id": 1,
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
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
      "skip": 1,
      "time": null,
      "todo": 1,
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
          "fullname": "tbd",
          "id": 1,
          "ok": true,
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
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "tbd",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "tbd",
      "id": 1,
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "tbd",
      "ok": true,
      "todo": "foo",
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
          "fullname": "skippy",
          "id": 1,
          "ok": true,
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
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "skippy",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "skippy",
      "id": 1,
      "ok": true,
    },
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
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "skippy",
      "ok": true,
      "skip": true,
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
      "skip": 1,
      "time": null,
      "todo": 1,
    },
  ],
]
`
