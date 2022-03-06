/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP combined_compat.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
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
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negociations\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 9,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! all hell broke lose\\n",
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
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
