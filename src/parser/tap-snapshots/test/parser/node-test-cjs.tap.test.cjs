/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > node-test-cjs.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "line",
    "not ok 1 - uhoh, this one throws\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  duration_ms: 0.686334\\n",
  ],
  Array [
    "line",
    "  location: '/path/to/node-test-example/test/node.test.cjs:36:1'\\n",
  ],
  Array [
    "line",
    "  failureType: 'testCodeFailure'\\n",
  ],
  Array [
    "line",
    "  error: 'Invalid time value'\\n",
  ],
  Array [
    "line",
    "  code: 'ERR_TEST_FAILURE'\\n",
  ],
  Array [
    "line",
    "  name: 'RangeError'\\n",
  ],
  Array [
    "line",
    "  stack: |-\\n",
  ],
  Array [
    "line",
    "    Date.toISOString (<anonymous>)\\n",
  ],
  Array [
    "line",
    "    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)\\n",
  ],
  Array [
    "line",
    "    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)\\n",
  ],
  Array [
    "line",
    "    Test.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "    Test.run (node:internal/test_runner/test:631:25)\\n",
  ],
  Array [
    "line",
    "    Test.processPendingSubtests (node:internal/test_runner/test:374:18)\\n",
  ],
  Array [
    "line",
    "    Test.postRun (node:internal/test_runner/test:715:19)\\n",
  ],
  Array [
    "line",
    "    Test.run (node:internal/test_runner/test:673:12)\\n",
  ],
  Array [
    "line",
    "    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "fail",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "line",
    "# Subtest: test thing\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test thing\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting test\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting test\\n",
      ],
      Array [
        "line",
        "not ok 1 - nesting test\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  duration_ms: 0.053\\n",
      ],
      Array [
        "line",
        "  location: '/path/to/node-test-example/test/node.test.cjs:72:11'\\n",
      ],
      Array [
        "line",
        "  failureType: 'testCodeFailure'\\n",
      ],
      Array [
        "line",
        "  error: 'ok'\\n",
      ],
      Array [
        "line",
        "  code: 'ERR_TEST_FAILURE'\\n",
      ],
      Array [
        "line",
        "  stack: |-\\n",
      ],
      Array [
        "line",
        "    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)\\n",
      ],
      Array [
        "line",
        "    Test.runInAsyncScope (node:async_hooks:206:9)\\n",
      ],
      Array [
        "line",
        "    Test.run (node:internal/test_runner/test:631:25)\\n",
      ],
      Array [
        "line",
        "    Test.start (node:internal/test_runner/test:542:17)\\n",
      ],
      Array [
        "line",
        "    TestContext.test (node:internal/test_runner/test:167:20)\\n",
      ],
      Array [
        "line",
        "    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)\\n",
      ],
      Array [
        "line",
        "    Test.runInAsyncScope (node:async_hooks:206:9)\\n",
      ],
      Array [
        "line",
        "    Test.run (node:internal/test_runner/test:631:25)\\n",
      ],
      Array [
        "line",
        "    Test.processPendingSubtests (node:internal/test_runner/test:374:18)\\n",
      ],
      Array [
        "line",
        "    Suite.postRun (node:internal/test_runner/test:715:19)\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
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
        "line",
        "1..1\\n",
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
              "closingTestPoint": false,
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
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting test\\n",
  ],
  Array [
    "line",
    "    not ok 1 - nesting test\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      duration_ms: 0.053\\n",
  ],
  Array [
    "line",
    "      location: '/path/to/node-test-example/test/node.test.cjs:72:11'\\n",
  ],
  Array [
    "line",
    "      failureType: 'testCodeFailure'\\n",
  ],
  Array [
    "line",
    "      error: 'ok'\\n",
  ],
  Array [
    "line",
    "      code: 'ERR_TEST_FAILURE'\\n",
  ],
  Array [
    "line",
    "      stack: |-\\n",
  ],
  Array [
    "line",
    "        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:73:9)\\n",
  ],
  Array [
    "line",
    "        Test.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "        Test.run (node:internal/test_runner/test:631:25)\\n",
  ],
  Array [
    "line",
    "        Test.start (node:internal/test_runner/test:542:17)\\n",
  ],
  Array [
    "line",
    "        TestContext.test (node:internal/test_runner/test:167:20)\\n",
  ],
  Array [
    "line",
    "        TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:72:11)\\n",
  ],
  Array [
    "line",
    "        Test.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "        Test.run (node:internal/test_runner/test:631:25)\\n",
  ],
  Array [
    "line",
    "        Test.processPendingSubtests (node:internal/test_runner/test:374:18)\\n",
  ],
  Array [
    "line",
    "        Suite.postRun (node:internal/test_runner/test:715:19)\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "fail",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "not ok 2 - test thing\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  duration_ms: 0.200792\\n",
  ],
  Array [
    "line",
    "  location: '/path/to/node-test-example/test/node.test.cjs:71:1'\\n",
  ],
  Array [
    "line",
    "  failureType: 'subtestsFailed'\\n",
  ],
  Array [
    "line",
    "  error: '1 subtest failed'\\n",
  ],
  Array [
    "line",
    "  code: 'ERR_TEST_FAILURE'\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
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
    "line",
    "1..2\\n",
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
    "line",
    "# duration_ms 14.422\\n",
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
          "closingTestPoint": false,
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
          "closingTestPoint": true,
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
]
`

exports[`test/parser.ts > TAP > node-test-cjs.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "comment",
    "# Subtest: uhoh, this one throws\\n",
  ],
  Array [
    "line",
    "not ok 1 - uhoh, this one throws\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  duration_ms: 0.686334\\n",
  ],
  Array [
    "line",
    "  location: '/path/to/node-test-example/test/node.test.cjs:36:1'\\n",
  ],
  Array [
    "line",
    "  failureType: 'testCodeFailure'\\n",
  ],
  Array [
    "line",
    "  error: 'Invalid time value'\\n",
  ],
  Array [
    "line",
    "  code: 'ERR_TEST_FAILURE'\\n",
  ],
  Array [
    "line",
    "  name: 'RangeError'\\n",
  ],
  Array [
    "line",
    "  stack: |-\\n",
  ],
  Array [
    "line",
    "    Date.toISOString (<anonymous>)\\n",
  ],
  Array [
    "line",
    "    exports.thrower (/path/to/node-test-example/lib/index.cjs:11:38)\\n",
  ],
  Array [
    "line",
    "    TestContext.<anonymous> (/path/to/node-test-example/test/node.test.cjs:39:16)\\n",
  ],
  Array [
    "line",
    "    Test.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "    Test.run (node:internal/test_runner/test:631:25)\\n",
  ],
  Array [
    "line",
    "    Test.processPendingSubtests (node:internal/test_runner/test:374:18)\\n",
  ],
  Array [
    "line",
    "    Test.postRun (node:internal/test_runner/test:715:19)\\n",
  ],
  Array [
    "line",
    "    Test.run (node:internal/test_runner/test:673:12)\\n",
  ],
  Array [
    "line",
    "    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "fail",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
    "line",
    "Bail out! uhoh, this one throws\\n",
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
          "closingTestPoint": false,
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
]
`
