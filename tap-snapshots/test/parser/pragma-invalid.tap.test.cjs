/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP pragma-invalid.tap > output bail=false 1`] = `
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
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "line",
    "pragma -neither # is this\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "line",
    "pragma +thisISfineTHO_420-69_lolyolo\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
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

exports[`test/parser.js TAP pragma-invalid.tap > output bail=true 1`] = `
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
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "line",
    "pragma -neither # is this\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "line",
    "pragma +thisISfineTHO_420-69_lolyolo\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "ok": true,
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
