/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP combined.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
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
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke loose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP combined.tap bail > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser-stringify.js TAP combined.tap bail > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser-stringify.js TAP combined.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
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
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
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
      "skip": "contract negotiations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
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
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
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
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP combined.tap default settings > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser-stringify.js TAP combined.tap default settings > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser-stringify.js TAP combined.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
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
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
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
      "skip": "contract negotiations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
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
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
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
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP combined.tap strict > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser-stringify.js TAP combined.tap strict > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser-stringify.js TAP combined.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
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
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke loose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
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

exports[`test/parser-stringify.js TAP combined.tap strictBail > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser-stringify.js TAP combined.tap strictBail > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`
