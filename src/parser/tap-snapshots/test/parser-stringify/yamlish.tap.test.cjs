/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP yamlish.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "data": Object {
          "expected": Object {
            "address": "85.193.201.85",
            "hostname": "peebles.example.com",
          },
          "got": Object {
            "address": null,
            "hostname": "peebles.example.com",
          },
        },
        "message": "Failed with error 'hostname peebles.example.com not found'",
        "severity": "fail",
      },
      "fullname": "Resolve address",
      "id": 1,
      "name": "Resolve address",
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
    "Resolve address",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Resolve address",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "data": Object {
              "expected": Object {
                "address": "85.193.201.85",
                "hostname": "peebles.example.com",
              },
              "got": Object {
                "address": null,
                "hostname": "peebles.example.com",
              },
            },
            "message": "Failed with error 'hostname peebles.example.com not found'",
            "severity": "fail",
          },
          "fullname": "Resolve address",
          "id": 1,
          "name": "Resolve address",
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
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

exports[`test/parse-stringify.ts TAP yamlish.tap bail > stringified 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
Bail out! Resolve address

`

exports[`test/parse-stringify.ts TAP yamlish.tap bail > stringified flat 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
Bail out! Resolve address

`

exports[`test/parse-stringify.ts TAP yamlish.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "data": Object {
          "expected": Object {
            "address": "85.193.201.85",
            "hostname": "peebles.example.com",
          },
          "got": Object {
            "address": null,
            "hostname": "peebles.example.com",
          },
        },
        "message": "Failed with error 'hostname peebles.example.com not found'",
        "severity": "fail",
      },
      "fullname": "Resolve address",
      "id": 1,
      "name": "Resolve address",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "data": Object {
              "expected": Object {
                "address": "85.193.201.85",
                "hostname": "peebles.example.com",
              },
              "got": Object {
                "address": null,
                "hostname": "peebles.example.com",
              },
            },
            "message": "Failed with error 'hostname peebles.example.com not found'",
            "severity": "fail",
          },
          "fullname": "Resolve address",
          "id": 1,
          "name": "Resolve address",
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
      "time": null,
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

exports[`test/parse-stringify.ts TAP yamlish.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "data": Object {
          "expected": Object {
            "address": "85.193.201.85",
            "hostname": "peebles.example.com",
          },
          "got": Object {
            "address": null,
            "hostname": "peebles.example.com",
          },
        },
        "message": "Failed with error 'hostname peebles.example.com not found'",
        "severity": "fail",
      },
      "fullname": "Resolve address",
      "id": 1,
      "name": "Resolve address",
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
    "# failed 1 test\\n",
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
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "data": Object {
              "expected": Object {
                "address": "85.193.201.85",
                "hostname": "peebles.example.com",
              },
              "got": Object {
                "address": null,
                "hostname": "peebles.example.com",
              },
            },
            "message": "Failed with error 'hostname peebles.example.com not found'",
            "severity": "fail",
          },
          "fullname": "Resolve address",
          "id": 1,
          "name": "Resolve address",
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
      "time": null,
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

exports[`test/parse-stringify.ts TAP yamlish.tap default settings > stringified 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish.tap default settings > stringified flat 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "data": Object {
          "expected": Object {
            "address": "85.193.201.85",
            "hostname": "peebles.example.com",
          },
          "got": Object {
            "address": null,
            "hostname": "peebles.example.com",
          },
        },
        "message": "Failed with error 'hostname peebles.example.com not found'",
        "severity": "fail",
      },
      "fullname": "Resolve address",
      "id": 1,
      "name": "Resolve address",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "data": Object {
              "expected": Object {
                "address": "85.193.201.85",
                "hostname": "peebles.example.com",
              },
              "got": Object {
                "address": null,
                "hostname": "peebles.example.com",
              },
            },
            "message": "Failed with error 'hostname peebles.example.com not found'",
            "severity": "fail",
          },
          "fullname": "Resolve address",
          "id": 1,
          "name": "Resolve address",
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
      "time": null,
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

exports[`test/parse-stringify.ts TAP yamlish.tap strict > stringified 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish.tap strict > stringified flat 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "data": Object {
          "expected": Object {
            "address": "85.193.201.85",
            "hostname": "peebles.example.com",
          },
          "got": Object {
            "address": null,
            "hostname": "peebles.example.com",
          },
        },
        "message": "Failed with error 'hostname peebles.example.com not found'",
        "severity": "fail",
      },
      "fullname": "Resolve address",
      "id": 1,
      "name": "Resolve address",
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
    "Resolve address",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Resolve address",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "data": Object {
              "expected": Object {
                "address": "85.193.201.85",
                "hostname": "peebles.example.com",
              },
              "got": Object {
                "address": null,
                "hostname": "peebles.example.com",
              },
            },
            "message": "Failed with error 'hostname peebles.example.com not found'",
            "severity": "fail",
          },
          "fullname": "Resolve address",
          "id": 1,
          "name": "Resolve address",
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
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

exports[`test/parse-stringify.ts TAP yamlish.tap strictBail > stringified 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
Bail out! Resolve address

`

exports[`test/parse-stringify.ts TAP yamlish.tap strictBail > stringified flat 1`] = `
TAP version 13
not ok 1 - Resolve address
  ---
  message: Failed with error 'hostname peebles.example.com not found'
  severity: fail
  data:
    got:
      hostname: peebles.example.com
      address: null
    expected:
      hostname: peebles.example.com
      address: 85.193.201.85
  ...
Bail out! Resolve address

`
