/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/base.js TAP parser event stuff no bail > counts 1`] = `
Object {
  "total": 4,
  "pass": 1,
  "fail": 1,
  "skip": 1,
  "todo": 1,
}
`

exports[`test/base.js TAP parser event stuff no bail > lists 1`] = `
Object {
  "fail": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "actually not fine",
      "diag": Object {
        "fine": false,
      },
      "fullname": "",
    },
  ],
  "todo": Array [
    Result {
      "ok": false,
      "id": 3,
      "todo": "will be fine later",
      "name": "not so fine",
      "fullname": "",
    },
  ],
  "skip": Array [
    Result {
      "ok": false,
      "id": 4,
      "skip": "dont care for now",
      "name": "not so fine",
      "fullname": "",
    },
  ],
}
`

exports[`test/base.js TAP parser event stuff yes bail > counts 1`] = `
Object {
  "total": 2,
  "pass": 1,
  "fail": 1,
  "skip": 0,
  "todo": 0,
}
`

exports[`test/base.js TAP parser event stuff yes bail > expected bailout 1`] = `
actually not fine
`

exports[`test/base.js TAP parser event stuff yes bail > lists 1`] = `
Object {
  "fail": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "actually not fine",
      "diag": Object {
        "fine": false,
      },
      "fullname": "",
    },
  ],
  "todo": Array [],
  "skip": Array [],
}
`
