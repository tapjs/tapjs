/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > basic teardown timing > must match snapshot 1`] = `
Array [
  "second",
  "first",
]
`

exports[`test/index.ts > TAP > basic teardown timing > test output 1`] = `
TAP version 14
ok 1 - this is fine
# Subtest: child test
    ok 1 - child test is fine
    1..1
ok 2 - child test # time={TIME}

1..2

`

exports[`test/index.ts > TAP > handle async teardown > test output 1`] = `
TAP version 14
ok 1 - this is fine
# Subtest: child test
    ok 1 - child test is fine
    1..1
ok 2 - child test # time={TIME}

1..2

`

exports[`test/index.ts > TAP > teardown that rejects > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
# Subtest: rejected child
    1..1
    ok 1 - child is fine
# error thrown in teardown
not ok 2 - rejected child # time={TIME}

not ok 3 - broken promise
  ---
  stack: {STACK}
  at:
    fileName: test/index.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
    methodName: <anonymous>
    functionName: Test.<anonymous>
  test: rejected child
  source: |2
        t.plan(1)
        t.teardown(async () => {
          throw new Error('broken promise')
    ------------^
        })
        t.pass('child is fine')
  ...

1..3

`

exports[`test/index.ts > TAP > teardown that throws > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
# Subtest: troublesome child
    ok 1 - this is fine
    1..1
not ok 2 - troublesome child # time={TIME}
  ---
  at:
    fileName: test/index.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      const output = tt.concat()
      tt.pass('this is fine')
      tt.test('troublesome child', t => {
    -----^
        t.teardown(() => {
          throw new Error('ohno')
  ...

not ok 3 - ohno
  ---
  stack: {STACK}
  at:
    fileName: test/index.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
    methodName: <anonymous>
    functionName: Test.<anonymous>
  test: troublesome child
  source: |2
      tt.test('troublesome child', t => {
        t.teardown(() => {
          throw new Error('ohno')
    ------------^
        })
        t.pass('this is fine')
  ...

1..3

`

exports[`test/index.ts > TAP > teardown when onEOF is already async > test output 1`] = `
TAP version 14
ok 1 - this is fine
# Subtest: child test
    ok 1 - child test is fine
    1..1
ok 2 - child test # time={TIME}

1..2

`
