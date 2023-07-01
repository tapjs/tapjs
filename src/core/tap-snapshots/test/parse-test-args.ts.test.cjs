/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-test-args.ts > TAP > cb only 1`] = `
Object {
  "cb": Function cb(_),
  "name": "cb",
}
`

exports[`test/parse-test-args.ts > TAP > empty args 1`] = `
Object {
  "cb": Function todoCb(),
  "name": "",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > extra and cb 1`] = `
Object {
  "cb": Function cb(_),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > extra and false cb 1`] = `
Object {
  "cb": Function todoCb(),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > extra and named cb 1`] = `
Object {
  "cb": Function named(_),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > extra only 1`] = `
Object {
  "cb": Function todoCb(),
  "extra": true,
  "name": "",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > false cb only 1`] = `
Object {
  "cb": Function todoCb(),
  "name": "",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > name and extra 1`] = `
Object {
  "cb": Function todoCb(),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > name extra and cb 1`] = `
Object {
  "cb": Function cb(_),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > name extra cb and default name (use default name) 1`] = `
Object {
  "cb": Function cb(_),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > name extra cb and default name 1`] = `
Object {
  "cb": Function cb(_),
  "extra": true,
  "name": "name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > named cb only 1`] = `
Object {
  "cb": Function named(_),
  "name": "named",
}
`

exports[`test/parse-test-args.ts > TAP > string name 1`] = `
Object {
  "cb": Function todoCb(),
  "name": "test name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > string name and cb 1`] = `
Object {
  "cb": Function cb(_),
  "name": "test name",
}
`

exports[`test/parse-test-args.ts > TAP > string name and false cb 1`] = `
Object {
  "cb": Function todoCb(),
  "name": "test name",
  "todo": true,
}
`

exports[`test/parse-test-args.ts > TAP > string name and named cb 1`] = `
Object {
  "cb": Function named(_),
  "name": "test name",
}
`
