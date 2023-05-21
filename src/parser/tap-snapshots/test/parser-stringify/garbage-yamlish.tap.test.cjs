/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP garbage-yamlish.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
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

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap bail > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap bail > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
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
      "name": "truncating the yamlish",
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
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
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
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 3,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
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
          "id": 3,
          "name": "truncating the yamlish",
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
          "name": "this is truncated weirdly",
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
      "pass": 1,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
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
      "name": "truncating the yamlish",
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
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
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
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 3,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
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
          "id": 3,
          "name": "truncating the yamlish",
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
          "name": "this is truncated weirdly",
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
      "pass": 1,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap default settings > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 3 of 4 tests

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap default settings > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 3 of 4 tests

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
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
      "name": "truncating the yamlish",
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
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
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
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 7 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 7,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "data": String(
              ---
              message: "Failed with error 'hostname peebles.example.com not found'"
              severity: fail
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " this is not valid yamlish\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "truncating the yamlish",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "data": String(
              ---
              here: is some yaml
              i: guess
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "     not ok 99 this is not a child test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "this is truncated weirdly",
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
      "pass": 1,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strict > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 7 of 4 tests

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strict > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 7 of 4 tests

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
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
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "data": " this is not valid yamlish\\n",
          "tapError": "Non-TAP data encountered in strict mode",
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

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strictBail > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parse-stringify.ts TAP garbage-yamlish.tap strictBail > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`
