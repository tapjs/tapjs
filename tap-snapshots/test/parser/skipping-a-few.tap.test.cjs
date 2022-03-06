/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP skipping-a-few.tap > output bail=false 1`] = `
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
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
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

exports[`test/parser.js TAP skipping-a-few.tap > output bail=true 1`] = `
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
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "approved operating system",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 5,
      "name": "",
      "ok": true,
      "skip": "no /sys directory",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
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
