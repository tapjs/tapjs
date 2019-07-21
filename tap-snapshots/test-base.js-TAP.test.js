/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/base.js TAP parser event stuff no bail > counts 1`] = `
Object {
  "fail": 1,
  "pass": 1,
  "skip": 1,
  "todo": 1,
  "total": 4,
}
`

exports[`test/base.js TAP parser event stuff no bail > lists 1`] = `
Object {
  "fail": Array [
    Result {
      "diag": Object {
        "fine": false,
      },
      "fullname": "",
      "id": 2,
      "name": "actually not fine",
      "ok": false,
    },
  ],
  "skip": Array [
    Result {
      "fullname": "",
      "id": 4,
      "name": "not so fine",
      "ok": false,
      "skip": "dont care for now",
    },
  ],
  "todo": Array [
    Result {
      "fullname": "",
      "id": 3,
      "name": "not so fine",
      "ok": false,
      "todo": "will be fine later",
    },
  ],
}
`

exports[`test/base.js TAP parser event stuff yes bail > counts 1`] = `
Object {
  "fail": 1,
  "pass": 1,
  "skip": 0,
  "todo": 0,
  "total": 2,
}
`

exports[`test/base.js TAP parser event stuff yes bail > expected bailout 1`] = `
actually not fine
`

exports[`test/base.js TAP parser event stuff yes bail > lists 1`] = `
Object {
  "fail": Array [
    Result {
      "diag": Object {
        "fine": false,
      },
      "fullname": "",
      "id": 2,
      "name": "actually not fine",
      "ok": false,
    },
  ],
  "skip": Array [],
  "todo": Array [],
}
`
