/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP with_comments.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# and stuff\\n",
  ],
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "line",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "line",
    "# yeah, that\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "comment",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "line",
    "ok 2 # (t/todo.t at line 10 TODO?!)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 4,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "comment",
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "line",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "comment",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "line",
    "ok 5 # (t/todo.t at line 13 TODO?!)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# woo\\n",
  ],
  Array [
    "comment",
    "# woo\\n",
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
    "# failed 3 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 4,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser.js TAP with_comments.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# and stuff\\n",
  ],
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "line",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "line",
    "# yeah, that\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "comment",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
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
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
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
]
`
