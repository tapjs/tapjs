/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 Resolve address\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "line",
    "  data:\\n",
  ],
  Array [
    "line",
    "    got:\\n",
  ],
  Array [
    "line",
    "      hostname: 'peebles.example.com'\\n",
  ],
  Array [
    "line",
    "      address: ~\\n",
  ],
  Array [
    "line",
    "    expected:\\n",
  ],
  Array [
    "line",
    "      hostname: 'peebles.example.com'\\n",
  ],
  Array [
    "line",
    "      address: '85.193.201.85'\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
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
          "fullname": "",
          "id": 1,
          "name": "Resolve address",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser.js TAP yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 Resolve address\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "line",
    "  data:\\n",
  ],
  Array [
    "line",
    "    got:\\n",
  ],
  Array [
    "line",
    "      hostname: 'peebles.example.com'\\n",
  ],
  Array [
    "line",
    "      address: ~\\n",
  ],
  Array [
    "line",
    "    expected:\\n",
  ],
  Array [
    "line",
    "      hostname: 'peebles.example.com'\\n",
  ],
  Array [
    "line",
    "      address: '85.193.201.85'\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
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
      "fullname": "",
      "id": 1,
      "name": "Resolve address",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! Resolve address\\n",
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
          "fullname": "",
          "id": 1,
          "name": "Resolve address",
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
