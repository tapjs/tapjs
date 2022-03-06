/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP combined_compat.tap bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
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

exports[`test/parser-stringify.js TAP combined_compat.tap bail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser-stringify.js TAP combined_compat.tap bail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser-stringify.js TAP combined_compat.tap default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
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

exports[`test/parser-stringify.js TAP combined_compat.tap default settings > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 4 of 10 tests
# skip: 1

`

exports[`test/parser-stringify.js TAP combined_compat.tap default settings > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 4 of 10 tests
# skip: 1

`

exports[`test/parser-stringify.js TAP combined_compat.tap strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
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
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 10 tests\\n",
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
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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

exports[`test/parser-stringify.js TAP combined_compat.tap strict > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 5 of 10 tests
# skip: 1

`

exports[`test/parser-stringify.js TAP combined_compat.tap strict > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 5 of 10 tests
# skip: 1

`

exports[`test/parser-stringify.js TAP combined_compat.tap strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
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
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
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
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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

exports[`test/parser-stringify.js TAP combined_compat.tap strictBail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser-stringify.js TAP combined_compat.tap strictBail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`
