/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failSkip > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: fails actually
|   { failSkip: true },
|   t => {
|     t.pass('fails actually', { skip: true })
| ------^
|     t.end()
|   } {
      "cause": Error: fails actually
|   { failSkip: true },
|   t => {
|     t.pass('fails actually', { skip: true })
| ------^
|     t.end()
|   } {
        "failedSkip": true,
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failSkip",
  "nesting": 0,
  "testNumber": 5,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failTodo > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: fails actually
|   { failTodo: true },
|   t => {
|     t.pass('fails actually', { todo: true })
| ------^
|     t.end()
|   } {
      "cause": Error: fails actually
|   { failTodo: true },
|   t => {
|     t.pass('fails actually', { todo: true })
| ------^
|     t.end()
|   } {
        "failedTodo": true,
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failTodo",
  "nesting": 0,
  "testNumber": 6,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > must match snapshot 1`] = `
undefined
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > a > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "a",
  "nesting": 1,
  "testNumber": 1,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > b > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3) {
      "cause": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "b",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > fail > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: failure
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3)
|     t.fail('failure')
| ------^
|     t.pass('passing')
|     t.fail('not ok') {
      "cause": Error: failure
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3)
|     t.fail('failure')
| ------^
|     t.pass('passing')
|     t.fail('not ok'),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failure",
        "not ok",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "fail",
  "nesting": 1,
  "testNumber": 3,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 2 subtests failed {
      "cause": "2 subtests failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
        "fail",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "one",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skip > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skip",
  "nesting": 1,
  "skip": true,
  "testNumber": 5,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipAll > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipAll",
  "nesting": 1,
  "skip": true,
  "testNumber": 6,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todo > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todo",
  "nesting": 1,
  "testNumber": 4,
  "todo": true,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "solo",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "oneFail",
  "nesting": 0,
  "testNumber": 7,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > solo > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest') {
      "cause": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest'),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "nope",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "solo",
  "nesting": 1,
  "testNumber": 1,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > tre > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: thrown error
| )
| const { subtest: tre } = tap.test('tre', () => {
|   throw new Error('thrown error')
| --------^
| })
| const { subtest: failSkip } = tap.test( {
      "cause": Error: thrown error
| )
| const { subtest: tre } = tap.test('tre', () => {
|   throw new Error('thrown error')
| --------^
| })
| const { subtest: failSkip } = tap.test( {
        "tapCaught": "testFunctionThrow",
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "thrown error",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "tre",
  "nesting": 0,
  "testNumber": 4,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > two > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: failed promise
| 
| const { subtest: two } = tap.test('two', async () =>
|   Promise.reject(new Error('failed promise'))
| -----------------^
| )
| const { subtest: tre } = tap.test('tre', () => { {
      "cause": Error: failed promise
| 
| const { subtest: two } = tap.test('two', async () =>
|   Promise.reject(new Error('failed promise'))
| -----------------^
| )
| const { subtest: tre } = tap.test('tre', () => { {
        "tapCaught": "returnedPromiseRejection",
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failed promise",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "two",
  "nesting": 0,
  "testNumber": 3,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > zro > must match snapshot 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: incorrect number of tests {
      "cause": Error: incorrect number of tests,
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "incorrect number of tests",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "zro",
  "nesting": 0,
  "testNumber": 1,
}
`
