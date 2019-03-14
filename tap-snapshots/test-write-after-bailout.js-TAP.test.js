/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/write-after-bailout.js TAP child calling _parse after bailout > events 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "bailout",
        "child",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": "child",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "child",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`
