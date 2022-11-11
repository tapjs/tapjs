/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP skipping-a-few.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
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
    "# $^0 is solaris\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "skip": "no /sys directory",
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
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 4,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap bail > stringified 1`] = `
TAP version 13
1..5
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap bail > stringified flat 1`] = `
TAP version 13
1..0
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
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
    "# $^0 is solaris\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "skip": "no /sys directory",
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
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 4,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap default settings > parsed flat 1`] = `
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
      "name": "approved operating system",
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
    "# $^0 is solaris\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "skip": "no /sys directory",
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
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# skip: 4\\n",
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
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 4,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap default settings > stringified 1`] = `
TAP version 13
1..5
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap default settings > stringified flat 1`] = `
TAP version 13
1..0
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
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
    "# $^0 is solaris\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "skip": "no /sys directory",
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
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 4,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strict > stringified 1`] = `
TAP version 13
1..5
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strict > stringified flat 1`] = `
TAP version 13
1..0
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
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
    "# $^0 is solaris\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "skip": "no /sys directory",
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
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
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
      "id": 5,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "no /sys directory",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 4,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strictBail > stringified 1`] = `
TAP version 13
1..5
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`

exports[`test/parse-stringify.ts TAP skipping-a-few.tap strictBail > stringified flat 1`] = `
TAP version 13
1..0
ok 1 - approved operating system
# $^0 is solaris
ok 2 # SKIP no /sys directory
ok 3 # SKIP no /sys directory
ok 4 # SKIP no /sys directory
ok 5 # SKIP no /sys directory
# skip: 4

`
