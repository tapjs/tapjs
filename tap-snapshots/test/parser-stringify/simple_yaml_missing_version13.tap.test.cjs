/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
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
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap bail > stringified 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap bail > stringified flat 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
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
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap default settings > stringified 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap default settings > stringified flat 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
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
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strict > stringified 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strict > stringified flat 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
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
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strictBail > stringified 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`

exports[`test/parser-stringify.js TAP simple_yaml_missing_version13.tap strictBail > stringified flat 1`] = `
1..5
ok 1
ok 2
  ---
  - fnurk: skib
    ponk: gleeb
  - bar: krup
    foo: plink
  ...
ok 3
ok 4
  ---
  expected:
    - 1
    - 2
    - 4
  got:
    - 1
    - pong
    - 4
  ...
ok 5

`
