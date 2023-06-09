/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > bail > parsed 1`
] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > bail > stringified 1`
] = `
TAP version 13
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > bail > stringified flat 1`
] = `
TAP version 13
1..0
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > default settings > parsed 1`
] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > default settings > parsed flat 1`
] = `
Array [
  Array [
    "version",
    13,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "end": 5,
      "start": 1,
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > default settings > stringified 1`
] = `
TAP version 13
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > default settings > stringified flat 1`
] = `
TAP version 13
1..0
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strict > parsed 1`
] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strict > stringified 1`
] = `
TAP version 13
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strict > stringified flat 1`
] = `
TAP version 13
1..0
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strictBail > parsed 1`
] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 5,
      "start": 1,
    },
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
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
    "assert",
    Result {
      "buffered": false,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 5,
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
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strictBail > stringified 1`
] = `
TAP version 13
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

exports[
  `test/parse-stringify.ts > TAP > simple_yaml.tap > strictBail > stringified flat 1`
] = `
TAP version 13
1..0
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
