/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP implicit-counter.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP implicit-counter.tap bail > stringified 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap bail > stringified flat 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP implicit-counter.tap default settings > stringified 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap default settings > stringified flat 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP implicit-counter.tap strict > stringified 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap strict > stringified flat 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP implicit-counter.tap strictBail > stringified 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser-stringify.js TAP implicit-counter.tap strictBail > stringified flat 1`] = `
TAP version 13
# before 1
ok - one
ok - two
# before 3
ok - three
ok - four
# after 4
1..4
# tests 4
# pass  4
# ok

`
