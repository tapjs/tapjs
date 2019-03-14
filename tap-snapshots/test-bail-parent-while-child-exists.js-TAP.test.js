/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bail-parent-while-child-exists.js TAP > undefined 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "",
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "comment",
        "# this is a child\\n",
      ],
    ],
  ],
  Array [
    "bailout",
    "# saw that coming",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": "# saw that coming",
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
