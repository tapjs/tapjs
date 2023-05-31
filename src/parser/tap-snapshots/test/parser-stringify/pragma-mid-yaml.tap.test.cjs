/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap bail > parsed 1`] = `
Array [
  Array [
    "pragma",
    "foo",
    true,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "some yaml",
      "id": 1,
      "name": "some yaml",
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
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap bail > stringified 1`] = `
pragma +foo
1..1
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap bail > stringified flat 1`] = `
pragma +foo
1..0
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap default settings > parsed 1`] = `
Array [
  Array [
    "pragma",
    "foo",
    true,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "some yaml",
      "id": 1,
      "name": "some yaml",
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
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "some yaml",
      "id": 1,
      "name": "some yaml",
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
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
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
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap default settings > stringified 1`] = `
pragma +foo
1..1
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap default settings > stringified flat 1`] = `
pragma +foo
1..0
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strict > parsed 1`] = `
Array [
  Array [
    "pragma",
    "foo",
    true,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "some yaml",
      "id": 1,
      "name": "some yaml",
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
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "comment",
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": String(
              ---
              ok: true
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: some yaml\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strict > stringified 1`] = `
pragma +foo
1..1
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...
# failed 3 test

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strict > stringified flat 1`] = `
pragma +foo
1..0
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...
# failed 3 test

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strictBail > parsed 1`] = `
Array [
  Array [
    "pragma",
    "foo",
    true,
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "some yaml",
      "id": 1,
      "name": "some yaml",
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
    "extra",
    String(
        ---
        ok: true
      
    ),
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "comment",
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": String(
              ---
              ok: true
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: some yaml\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strictBail > stringified 1`] = `
pragma +foo
1..1
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...
# failed 3 test

`

exports[`test/parse-stringify.ts TAP pragma-mid-yaml.tap strictBail > stringified flat 1`] = `
pragma +foo
1..0
ok 1 - some yaml
  ---
  ok: true
pragma +foo
  name: some yaml
  ...
# failed 3 test

`
