/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Test.postRun (node:internal/test_runner/test:715:19)
          Test.run (node:internal/test_runner/test:673:12)
          async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
        ),
      },
      "fullname": "uhoh, this one throws",
      "id": 1,
      "name": "uhoh, this one throws",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.686334,
      "todo": false,
    },
  ],
  Array [
    "bailout",
    "uhoh, this one throws",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "uhoh, this one throws",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Test.postRun (node:internal/test_runner/test:715:19)
              Test.run (node:internal/test_runner/test:673:12)
              async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
            ),
          },
          "fullname": "uhoh, this one throws",
          "id": 1,
          "name": "uhoh, this one throws",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.686334,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Test.postRun (node:internal/test_runner/test:715:19)
          Test.run (node:internal/test_runner/test:673:12)
          async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
        ),
      },
      "fullname": "uhoh, this one throws",
      "id": 1,
      "name": "uhoh, this one throws",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.686334,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test thing\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "ok",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:72:11",
            "stack": String(
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.start (node:internal/test_runner/test:542:17)
              TestContext.test (node:internal/test_runner/test:167:20)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Suite.postRun (node:internal/test_runner/test:715:19)
            ),
          },
          "fullname": "test thing > nesting test",
          "id": 1,
          "name": "nesting test",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.053,
          "todo": false,
        },
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
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "code": "ERR_TEST_FAILURE",
                "error": "ok",
                "failureType": "testCodeFailure",
                "location": "/path/to/node-test-example/test/node.test.cjs:72:11",
                "stack": String(
                  TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
                  Test.runInAsyncScope (node:async_hooks:206:9)
                  Test.run (node:internal/test_runner/test:631:25)
                  Test.start (node:internal/test_runner/test:542:17)
                  TestContext.test (node:internal/test_runner/test:167:20)
                  TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
                  Test.runInAsyncScope (node:async_hooks:206:9)
                  Test.run (node:internal/test_runner/test:631:25)
                  Test.processPendingSubtests (node:internal/test_runner/test:374:18)
                  Suite.postRun (node:internal/test_runner/test:715:19)
                ),
              },
              "fullname": "test thing > nesting test",
              "id": 1,
              "name": "nesting test",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 0.053,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "1 subtest failed",
        "failureType": "subtestsFailed",
        "location": "/path/to/node-test-example/test/node.test.cjs:71:1",
      },
      "fullname": "test thing",
      "id": 2,
      "name": "test thing",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.200792,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# duration_ms 14.422\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Test.postRun (node:internal/test_runner/test:715:19)
              Test.run (node:internal/test_runner/test:673:12)
              async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
            ),
          },
          "fullname": "uhoh, this one throws",
          "id": 1,
          "name": "uhoh, this one throws",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.686334,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "1 subtest failed",
            "failureType": "subtestsFailed",
            "location": "/path/to/node-test-example/test/node.test.cjs:71:1",
          },
          "fullname": "test thing",
          "id": 2,
          "name": "test thing",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.200792,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 14.422,
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

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Test.postRun (node:internal/test_runner/test:715:19)
          Test.run (node:internal/test_runner/test:673:12)
          async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
        ),
      },
      "fullname": "uhoh, this one throws",
      "id": 1,
      "name": "uhoh, this one throws",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.686334,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "ok",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:72:11",
        "stack": String(
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.start (node:internal/test_runner/test:542:17)
          TestContext.test (node:internal/test_runner/test:167:20)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Suite.postRun (node:internal/test_runner/test:715:19)
        ),
      },
      "fullname": "test thing > nesting test",
      "id": 2,
      "name": "test thing > nesting test",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.053,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# duration_ms 14.422\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Test.postRun (node:internal/test_runner/test:715:19)
              Test.run (node:internal/test_runner/test:673:12)
              async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
            ),
          },
          "fullname": "uhoh, this one throws",
          "id": 1,
          "name": "uhoh, this one throws",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.686334,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "1 subtest failed",
            "failureType": "subtestsFailed",
            "location": "/path/to/node-test-example/test/node.test.cjs:71:1",
          },
          "fullname": "test thing",
          "id": 2,
          "name": "test thing",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.200792,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 14.422,
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

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: test thing
    # Subtest: nesting test
    not ok 1 - nesting test # time=0.053ms
      ---
      location: /path/to/node-test-example/test/node.test.cjs:72:11
      failureType: testCodeFailure
      error: ok
      code: ERR_TEST_FAILURE
      stack: |-
        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
        Test.runInAsyncScope (node:async_hooks:206:9)
        Test.run (node:internal/test_runner/test:631:25)
        Test.start (node:internal/test_runner/test:542:17)
        TestContext.test (node:internal/test_runner/test:167:20)
        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
        Test.runInAsyncScope (node:async_hooks:206:9)
        Test.run (node:internal/test_runner/test:631:25)
        Test.processPendingSubtests (node:internal/test_runner/test:374:18)
        Suite.postRun (node:internal/test_runner/test:715:19)
      ...
    1..1
not ok 2 - test thing # time=0.200792ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:71:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..2
# duration_ms 14.422

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: test thing
# Subtest: nesting test
not ok 2 - test thing > nesting test # time=0.053ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:72:11
  failureType: testCodeFailure
  error: ok
  code: ERR_TEST_FAILURE
  stack: |-
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.start (node:internal/test_runner/test:542:17)
    TestContext.test (node:internal/test_runner/test:167:20)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Suite.postRun (node:internal/test_runner/test:715:19)
  ...
not ok 3 - test thing # time=0.200792ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:71:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..3
# duration_ms 14.422

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Test.postRun (node:internal/test_runner/test:715:19)
          Test.run (node:internal/test_runner/test:673:12)
          async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
        ),
      },
      "fullname": "uhoh, this one throws",
      "id": 1,
      "name": "uhoh, this one throws",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.686334,
      "todo": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test thing\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting test\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "ok",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:72:11",
            "stack": String(
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.start (node:internal/test_runner/test:542:17)
              TestContext.test (node:internal/test_runner/test:167:20)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Suite.postRun (node:internal/test_runner/test:715:19)
            ),
          },
          "fullname": "test thing > nesting test",
          "id": 1,
          "name": "nesting test",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.053,
          "todo": false,
        },
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
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "diag": Object {
                "code": "ERR_TEST_FAILURE",
                "error": "ok",
                "failureType": "testCodeFailure",
                "location": "/path/to/node-test-example/test/node.test.cjs:72:11",
                "stack": String(
                  TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
                  Test.runInAsyncScope (node:async_hooks:206:9)
                  Test.run (node:internal/test_runner/test:631:25)
                  Test.start (node:internal/test_runner/test:542:17)
                  TestContext.test (node:internal/test_runner/test:167:20)
                  TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
                  Test.runInAsyncScope (node:async_hooks:206:9)
                  Test.run (node:internal/test_runner/test:631:25)
                  Test.processPendingSubtests (node:internal/test_runner/test:374:18)
                  Suite.postRun (node:internal/test_runner/test:715:19)
                ),
              },
              "fullname": "test thing > nesting test",
              "id": 1,
              "name": "nesting test",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 0.053,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "1 subtest failed",
        "failureType": "subtestsFailed",
        "location": "/path/to/node-test-example/test/node.test.cjs:71:1",
      },
      "fullname": "test thing",
      "id": 2,
      "name": "test thing",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.200792,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# duration_ms 14.422\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Test.postRun (node:internal/test_runner/test:715:19)
              Test.run (node:internal/test_runner/test:673:12)
              async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
            ),
          },
          "fullname": "uhoh, this one throws",
          "id": 1,
          "name": "uhoh, this one throws",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.686334,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "1 subtest failed",
            "failureType": "subtestsFailed",
            "location": "/path/to/node-test-example/test/node.test.cjs:71:1",
          },
          "fullname": "test thing",
          "id": 2,
          "name": "test thing",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.200792,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 14.422,
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

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: test thing
    # Subtest: nesting test
    not ok 1 - nesting test # time=0.053ms
      ---
      location: /path/to/node-test-example/test/node.test.cjs:72:11
      failureType: testCodeFailure
      error: ok
      code: ERR_TEST_FAILURE
      stack: |-
        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
        Test.runInAsyncScope (node:async_hooks:206:9)
        Test.run (node:internal/test_runner/test:631:25)
        Test.start (node:internal/test_runner/test:542:17)
        TestContext.test (node:internal/test_runner/test:167:20)
        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
        Test.runInAsyncScope (node:async_hooks:206:9)
        Test.run (node:internal/test_runner/test:631:25)
        Test.processPendingSubtests (node:internal/test_runner/test:374:18)
        Suite.postRun (node:internal/test_runner/test:715:19)
      ...
    1..1
not ok 2 - test thing # time=0.200792ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:71:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..2
# duration_ms 14.422

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: test thing
# Subtest: nesting test
not ok 2 - test thing > nesting test # time=0.053ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:72:11
  failureType: testCodeFailure
  error: ok
  code: ERR_TEST_FAILURE
  stack: |-
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.start (node:internal/test_runner/test:542:17)
    TestContext.test (node:internal/test_runner/test:167:20)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Suite.postRun (node:internal/test_runner/test:715:19)
  ...
not ok 3 - test thing # time=0.200792ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:71:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..3
# duration_ms 14.422

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
          TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
          Test.runInAsyncScope (node:async_hooks:206:9)
          Test.run (node:internal/test_runner/test:631:25)
          Test.processPendingSubtests (node:internal/test_runner/test:374:18)
          Test.postRun (node:internal/test_runner/test:715:19)
          Test.run (node:internal/test_runner/test:673:12)
          async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
        ),
      },
      "fullname": "uhoh, this one throws",
      "id": 1,
      "name": "uhoh, this one throws",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.686334,
      "todo": false,
    },
  ],
  Array [
    "bailout",
    "uhoh, this one throws",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "uhoh, this one throws",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "/path/to/node-test-example/test/node.test.cjs:36:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
              TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
              Test.runInAsyncScope (node:async_hooks:206:9)
              Test.run (node:internal/test_runner/test:631:25)
              Test.processPendingSubtests (node:internal/test_runner/test:374:18)
              Test.postRun (node:internal/test_runner/test:715:19)
              Test.run (node:internal/test_runner/test:673:12)
              async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
            ),
          },
          "fullname": "uhoh, this one throws",
          "id": 1,
          "name": "uhoh, this one throws",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.686334,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-cjs.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.686334ms
  ---
  location: /path/to/node-test-example/test/node.test.cjs:36:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: |-
    Date.toISOString (<anonymous>)
    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)
    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)
    Test.runInAsyncScope (node:async_hooks:206:9)
    Test.run (node:internal/test_runner/test:631:25)
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
    Test.postRun (node:internal/test_runner/test:715:19)
    Test.run (node:internal/test_runner/test:673:12)
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`
