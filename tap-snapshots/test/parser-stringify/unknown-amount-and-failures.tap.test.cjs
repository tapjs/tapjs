/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "hostname \\"saphire\\" unknown",
        "severity": "fail",
      },
      "fullname": "",
      "id": 4,
      "name": "pinged saphire",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "pinged saphire",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "pinged saphire",
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "message": "hostname \\"saphire\\" unknown",
            "severity": "fail",
          },
          "fullname": "",
          "id": 4,
          "name": "pinged saphire",
          "ok": false,
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

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap bail > stringified 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
Bail out! pinged saphire

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap bail > stringified flat 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
Bail out! pinged saphire

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "hostname \\"saphire\\" unknown",
        "severity": "fail",
      },
      "fullname": "",
      "id": 4,
      "name": "pinged saphire",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "pinged onyx",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "timeout",
        "severity": "fail",
      },
      "fullname": "",
      "id": 6,
      "name": "pinged quartz",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "pinged gold",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 7,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 2,
      "failures": Array [
        Result {
          "diag": Object {
            "message": "hostname \\"saphire\\" unknown",
            "severity": "fail",
          },
          "fullname": "",
          "id": 4,
          "name": "pinged saphire",
          "ok": false,
        },
        Result {
          "diag": Object {
            "message": "timeout",
            "severity": "fail",
          },
          "fullname": "",
          "id": 6,
          "name": "pinged quartz",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 7,
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

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap default settings > stringified 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
ok 5 - pinged onyx
not ok 6 - pinged quartz
  ---
  message: timeout
  severity: fail
  ...
ok 7 - pinged gold
1..7
# failed 2 of 7 tests

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap default settings > stringified flat 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
ok 5 - pinged onyx
not ok 6 - pinged quartz
  ---
  message: timeout
  severity: fail
  ...
ok 7 - pinged gold
1..7
# failed 2 of 7 tests

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "hostname \\"saphire\\" unknown",
        "severity": "fail",
      },
      "fullname": "",
      "id": 4,
      "name": "pinged saphire",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "pinged onyx",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "timeout",
        "severity": "fail",
      },
      "fullname": "",
      "id": 6,
      "name": "pinged quartz",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "pinged gold",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 7,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 7 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 7,
      "fail": 2,
      "failures": Array [
        Result {
          "diag": Object {
            "message": "hostname \\"saphire\\" unknown",
            "severity": "fail",
          },
          "fullname": "",
          "id": 4,
          "name": "pinged saphire",
          "ok": false,
        },
        Result {
          "diag": Object {
            "message": "timeout",
            "severity": "fail",
          },
          "fullname": "",
          "id": 6,
          "name": "pinged quartz",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 7,
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

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strict > stringified 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
ok 5 - pinged onyx
not ok 6 - pinged quartz
  ---
  message: timeout
  severity: fail
  ...
ok 7 - pinged gold
1..7
# failed 2 of 7 tests

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strict > stringified flat 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
ok 5 - pinged onyx
not ok 6 - pinged quartz
  ---
  message: timeout
  severity: fail
  ...
ok 7 - pinged gold
1..7
# failed 2 of 7 tests

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "message": "hostname \\"saphire\\" unknown",
        "severity": "fail",
      },
      "fullname": "",
      "id": 4,
      "name": "pinged saphire",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "pinged saphire",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "pinged saphire",
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "message": "hostname \\"saphire\\" unknown",
            "severity": "fail",
          },
          "fullname": "",
          "id": 4,
          "name": "pinged saphire",
          "ok": false,
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

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strictBail > stringified 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
Bail out! pinged saphire

`

exports[`test/parser-stringify.js TAP unknown-amount-and-failures.tap strictBail > stringified flat 1`] = `
TAP version 13
ok 1 - retrieving servers from the database
# need to ping 6 servers
ok 2 - pinged diamond
ok 3 - pinged ruby
not ok 4 - pinged saphire
  ---
  message: hostname "saphire" unknown
  severity: fail
  ...
Bail out! pinged saphire

`
