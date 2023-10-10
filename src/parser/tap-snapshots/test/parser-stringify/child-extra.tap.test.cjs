/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > child-extra.tap > bail > parsed 1`] = `
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
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "test/debug-test.js > Should output debugger message",
          "id": 1,
          "name": "Should output debugger message",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
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
          "time": 537.383,
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 537.383,
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
    "# time=543.783ms\\n",
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
      "time": 543.783,
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

exports[`test/parse-stringify.ts > TAP > child-extra.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
# debug test
ok 1 - test/debug-test.js > Should output debugger message
# tests 1
# pass  1
# ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 2 - test/debug-test.js # time=537.383ms
1..2
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > default settings > parsed 1`] = `
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
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "test/debug-test.js > Should output debugger message",
          "id": 1,
          "name": "Should output debugger message",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
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
          "time": 537.383,
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 537.383,
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
    "# time=543.783ms\\n",
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
      "time": 543.783,
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

exports[`test/parse-stringify.ts > TAP > child-extra.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
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
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "test/debug-test.js > Should output debugger message",
      "id": 1,
      "name": "test/debug-test.js > Should output debugger message",
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
    "# time=543.783ms\\n",
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
      "time": 543.783,
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

exports[`test/parse-stringify.ts > TAP > child-extra.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
# debug test
ok 1 - test/debug-test.js > Should output debugger message
# tests 1
# pass  1
# ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 2 - test/debug-test.js # time=537.383ms
1..2
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strict > parsed 1`] = `
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
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "test/debug-test.js > Should output debugger message",
          "id": 1,
          "name": "Should output debugger message",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
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
          "time": 537.383,
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 537.383,
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
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "debug test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "t.plan=1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "'Debugger listening on port 5858\\\\n'\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
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
      "time": 543.783,
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

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
# debug test
ok 1 - test/debug-test.js > Should output debugger message
# tests 1
# pass  1
# ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 2 - test/debug-test.js # time=537.383ms
1..2
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strictBail > parsed 1`] = `
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
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "test/debug-test.js > Should output debugger message",
          "id": 1,
          "name": "Should output debugger message",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
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
          "time": 537.383,
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
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 537.383,
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
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "debug test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "t.plan=1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "'Debugger listening on port 5858\\\\n'\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
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
      "time": 543.783,
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

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parse-stringify.ts > TAP > child-extra.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
# debug test
ok 1 - test/debug-test.js > Should output debugger message
# tests 1
# pass  1
# ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 2 - test/debug-test.js # time=537.383ms
1..2
# time=543.783ms

`
