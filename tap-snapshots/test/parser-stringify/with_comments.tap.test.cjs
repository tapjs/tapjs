/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP with_comments.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP with_comments.tap bail > stringified 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
Bail out!

`

exports[`test/parse-stringify.ts TAP with_comments.tap bail > stringified flat 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
Bail out!

`

exports[`test/parse-stringify.ts TAP with_comments.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
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
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "comment",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
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
    "comment",
    "# woo\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP with_comments.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
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
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "comment",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
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
    "comment",
    "# woo\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 5 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 3,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP with_comments.tap default settings > stringified 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
ok 2 - \\# (t/todo.t at line 10 TODO?!)
ok 3
not ok 4
# Test 4 got: '0' (t/todo.t at line 12 *TODO*)
#   Expected: '1' (need more tuits)
ok 5 - \\# (t/todo.t at line 13 TODO?!)
# woo
# test count(5) != plan(null)
# failed 3 of 5 tests

`

exports[`test/parse-stringify.ts TAP with_comments.tap default settings > stringified flat 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
ok 2 - \\# (t/todo.t at line 10 TODO?!)
ok 3
not ok 4
# Test 4 got: '0' (t/todo.t at line 12 *TODO*)
#   Expected: '1' (need more tuits)
ok 5 - \\# (t/todo.t at line 13 TODO?!)
# woo
# test count(5) != plan(null)
# failed 3 of 5 tests

`

exports[`test/parse-stringify.ts TAP with_comments.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
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
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "comment",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
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
    "comment",
    "# woo\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "1..5 todo 1 2 4 5;\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP with_comments.tap strict > stringified 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
ok 2 - \\# (t/todo.t at line 10 TODO?!)
ok 3
not ok 4
# Test 4 got: '0' (t/todo.t at line 12 *TODO*)
#   Expected: '1' (need more tuits)
ok 5 - \\# (t/todo.t at line 13 TODO?!)
# woo
# test count(5) != plan(null)
# failed 4 of 5 tests

`

exports[`test/parse-stringify.ts TAP with_comments.tap strict > stringified flat 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
ok 2 - \\# (t/todo.t at line 10 TODO?!)
ok 3
not ok 4
# Test 4 got: '0' (t/todo.t at line 12 *TODO*)
#   Expected: '1' (need more tuits)
ok 5 - \\# (t/todo.t at line 13 TODO?!)
# woo
# test count(5) != plan(null)
# failed 4 of 5 tests

`

exports[`test/parse-stringify.ts TAP with_comments.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
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
      "fail": 2,
      "failures": Array [
        Object {
          "data": "1..5 todo 1 2 4 5;\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP with_comments.tap strictBail > stringified 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
Bail out!

`

exports[`test/parse-stringify.ts TAP with_comments.tap strictBail > stringified flat 1`] = `
# and stuff
1..5 todo 1 2 4 5;
# yeah, that
not ok 1
# Failed test 1 in t/todo.t at line 9 *TODO*
Bail out!

`
