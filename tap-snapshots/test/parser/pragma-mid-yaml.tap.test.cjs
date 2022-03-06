/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
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
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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

exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
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
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "some yaml",
      "ok": true,
    },
  ],
  Array [
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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
