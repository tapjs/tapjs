/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP plan-escape.tap > output bail=false 1`] = `
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
    "1..0 # hash \\\\# slash \\\\\\\\ noesc hash # noesc slash \\\\\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "hash # slash \\\\ noesc hash # noesc slash \\\\",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "hash # slash \\\\ noesc hash # noesc slash \\\\",
        "end": 0,
        "skipAll": true,
        "skipReason": "hash # slash \\\\ noesc hash # noesc slash \\\\",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP plan-escape.tap > output bail=true 1`] = `
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
    "1..0 # hash \\\\# slash \\\\\\\\ noesc hash # noesc slash \\\\\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "hash # slash \\\\ noesc hash # noesc slash \\\\",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "hash # slash \\\\ noesc hash # noesc slash \\\\",
        "end": 0,
        "skipAll": true,
        "skipReason": "hash # slash \\\\ noesc hash # noesc slash \\\\",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`
