/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP pragma-invalid.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap bail > stringified 1`] = `
TAP version 13
1..1
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap bail > stringified flat 1`] = `
TAP version 13
1..0
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok 1

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap default settings > stringified 1`] = `
TAP version 13
1..1
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap default settings > stringified flat 1`] = `
TAP version 13
1..0
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok 1

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
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
    "# failed 2 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "pragma +this is not a valid pragma\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "pragma -neither # is this\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strict > stringified 1`] = `
TAP version 13
1..1
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok
# failed 2 test

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strict > stringified flat 1`] = `
TAP version 13
1..0
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok 1
# failed 2 test

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "extra",
    "pragma +this is not a valid pragma\\n",
  ],
  Array [
    "extra",
    "pragma -neither # is this\\n",
  ],
  Array [
    "pragma",
    "thisISfineTHO_420-69_lolyolo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 0,
      "name": "",
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
    "# failed 2 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "pragma +this is not a valid pragma\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "pragma -neither # is this\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strictBail > stringified 1`] = `
TAP version 13
1..1
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok
# failed 2 test

`

exports[`test/parse-stringify.ts TAP pragma-invalid.tap strictBail > stringified flat 1`] = `
TAP version 13
1..0
pragma +this is not a valid pragma
pragma -neither # is this
pragma +thisISfineTHO_420-69_lolyolo
ok 1
# failed 2 test

`
