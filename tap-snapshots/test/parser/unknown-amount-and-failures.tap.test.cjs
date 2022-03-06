/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP unknown-amount-and-failures.tap > output bail=false 1`] = `
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
    "ok 1 - retrieving servers from the database\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "line",
    "ok 2 - pinged diamond\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - pinged ruby\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 4 - pinged saphire\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: 'hostname \\"saphire\\" unknown'\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "line",
    "  ...\\n",
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
    "result",
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
    "fail",
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
    "line",
    "ok 5 - pinged onyx\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "pinged onyx",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "pinged onyx",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 6 - pinged quartz\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: 'timeout'\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "line",
    "  ...\\n",
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
    "result",
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
    "fail",
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
    "line",
    "ok 7 - pinged gold\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "name": "pinged gold",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 7,
      "name": "pinged gold",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..7\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 7,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 2 of 7 tests\\n",
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

exports[`test/parser.js TAP unknown-amount-and-failures.tap > output bail=true 1`] = `
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
    "ok 1 - retrieving servers from the database\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "retrieving servers from the database",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "comment",
    "# need to ping 6 servers\\n",
  ],
  Array [
    "line",
    "ok 2 - pinged diamond\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "pinged diamond",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - pinged ruby\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "pinged ruby",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 4 - pinged saphire\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: 'hostname \\"saphire\\" unknown'\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "line",
    "  ...\\n",
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
    "result",
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
    "fail",
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
    "line",
    "Bail out! pinged saphire\\n",
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
