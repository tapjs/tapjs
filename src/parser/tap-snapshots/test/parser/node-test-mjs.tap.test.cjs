/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > node-test-mjs.tap > output bail=false 1`] = `
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
    "  duration_ms: 0.711\\n",
  ],
  Array [
    "line",
    "  location: 'file:///path/to/node-test-example/test/node.test.js:35:1'\\n",
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
    "    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)\\n",
  ],
  Array [
    "line",
    "    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)\\n",
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
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Subtest: A thing\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: A thing\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting suite\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting suite\\n",
      ],
      Array [
        "line",
        "not ok 1 - nesting suite\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  duration_ms: 0.036708\\n",
      ],
      Array [
        "line",
        "  type: 'suite'\\n",
      ],
      Array [
        "line",
        "  location: 'file:///path/to/node-test-example/test/node.test.js:65:3'\\n",
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
        "    SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)\\n",
      ],
      Array [
        "line",
        "    Suite.runInAsyncScope (node:async_hooks:206:9)\\n",
      ],
      Array [
        "line",
        "    new Suite (node:internal/test_runner/test:901:26)\\n",
      ],
      Array [
        "line",
        "    Suite.createSubtest (node:internal/test_runner/test:442:18)\\n",
      ],
      Array [
        "line",
        "    run (node:internal/test_runner/harness:214:28)\\n",
      ],
      Array [
        "line",
        "    test (node:internal/test_runner/harness:227:12)\\n",
      ],
      Array [
        "line",
        "    SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)\\n",
      ],
      Array [
        "line",
        "    Suite.runInAsyncScope (node:async_hooks:206:9)\\n",
      ],
      Array [
        "line",
        "    new Suite (node:internal/test_runner/test:901:26)\\n",
      ],
      Array [
        "line",
        "    Test.createSubtest (node:internal/test_runner/test:442:18)\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "ok",
            "failureType": "testCodeFailure",
            "location": "file:///path/to/node-test-example/test/node.test.js:65:3",
            "stack": String(
              SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)
              Suite.runInAsyncScope (node:async_hooks:206:9)
              new Suite (node:internal/test_runner/test:901:26)
              Suite.createSubtest (node:internal/test_runner/test:442:18)
              run (node:internal/test_runner/harness:214:28)
              test (node:internal/test_runner/harness:227:12)
              SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
              Suite.runInAsyncScope (node:async_hooks:206:9)
              new Suite (node:internal/test_runner/test:901:26)
              Test.createSubtest (node:internal/test_runner/test:442:18)
            ),
            "type": "suite",
          },
          "fullname": "A thing > nesting suite",
          "id": 1,
          "name": "nesting suite",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.036708,
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
              "diag": Object {
                "code": "ERR_TEST_FAILURE",
                "error": "ok",
                "failureType": "testCodeFailure",
                "location": "file:///path/to/node-test-example/test/node.test.js:65:3",
                "stack": String(
                  SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)
                  Suite.runInAsyncScope (node:async_hooks:206:9)
                  new Suite (node:internal/test_runner/test:901:26)
                  Suite.createSubtest (node:internal/test_runner/test:442:18)
                  run (node:internal/test_runner/harness:214:28)
                  test (node:internal/test_runner/harness:227:12)
                  SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
                  Suite.runInAsyncScope (node:async_hooks:206:9)
                  new Suite (node:internal/test_runner/test:901:26)
                  Test.createSubtest (node:internal/test_runner/test:442:18)
                ),
                "type": "suite",
              },
              "fullname": "A thing > nesting suite",
              "id": 1,
              "name": "nesting suite",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 0.036708,
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
    "    # Subtest: nesting suite\\n",
  ],
  Array [
    "line",
    "    not ok 1 - nesting suite\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      duration_ms: 0.036708\\n",
  ],
  Array [
    "line",
    "      type: 'suite'\\n",
  ],
  Array [
    "line",
    "      location: 'file:///path/to/node-test-example/test/node.test.js:65:3'\\n",
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
    "        SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)\\n",
  ],
  Array [
    "line",
    "        Suite.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "        new Suite (node:internal/test_runner/test:901:26)\\n",
  ],
  Array [
    "line",
    "        Suite.createSubtest (node:internal/test_runner/test:442:18)\\n",
  ],
  Array [
    "line",
    "        run (node:internal/test_runner/harness:214:28)\\n",
  ],
  Array [
    "line",
    "        test (node:internal/test_runner/harness:227:12)\\n",
  ],
  Array [
    "line",
    "        SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)\\n",
  ],
  Array [
    "line",
    "        Suite.runInAsyncScope (node:async_hooks:206:9)\\n",
  ],
  Array [
    "line",
    "        new Suite (node:internal/test_runner/test:901:26)\\n",
  ],
  Array [
    "line",
    "        Test.createSubtest (node:internal/test_runner/test:442:18)\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "ok",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:65:3",
        "stack": String(
          SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)
          Suite.runInAsyncScope (node:async_hooks:206:9)
          new Suite (node:internal/test_runner/test:901:26)
          Suite.createSubtest (node:internal/test_runner/test:442:18)
          run (node:internal/test_runner/harness:214:28)
          test (node:internal/test_runner/harness:227:12)
          SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
          Suite.runInAsyncScope (node:async_hooks:206:9)
          new Suite (node:internal/test_runner/test:901:26)
          Test.createSubtest (node:internal/test_runner/test:442:18)
        ),
        "type": "suite",
      },
      "fullname": "A thing > nesting suite",
      "id": 1,
      "name": "nesting suite",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.036708,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "ok",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:65:3",
        "stack": String(
          SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:66:9)
          Suite.runInAsyncScope (node:async_hooks:206:9)
          new Suite (node:internal/test_runner/test:901:26)
          Suite.createSubtest (node:internal/test_runner/test:442:18)
          run (node:internal/test_runner/harness:214:28)
          test (node:internal/test_runner/harness:227:12)
          SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
          Suite.runInAsyncScope (node:async_hooks:206:9)
          new Suite (node:internal/test_runner/test:901:26)
          Test.createSubtest (node:internal/test_runner/test:442:18)
        ),
        "type": "suite",
      },
      "fullname": "A thing > nesting suite",
      "id": 1,
      "name": "nesting suite",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.036708,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "not ok 2 - A thing\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  duration_ms: 0.191416\\n",
  ],
  Array [
    "line",
    "  type: 'suite'\\n",
  ],
  Array [
    "line",
    "  location: 'file:///path/to/node-test-example/test/node.test.js:64:1'\\n",
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
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "1 subtest failed",
        "failureType": "subtestsFailed",
        "location": "file:///path/to/node-test-example/test/node.test.js:64:1",
        "type": "suite",
      },
      "fullname": "A thing",
      "id": 2,
      "name": "A thing",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 0.191416,
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
    "# duration_ms 13.879834\\n",
  ],
  Array [
    "comment",
    "# duration_ms 13.879834\\n",
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
            "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
              TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
          "time": 0.711,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "1 subtest failed",
            "failureType": "subtestsFailed",
            "location": "file:///path/to/node-test-example/test/node.test.js:64:1",
            "type": "suite",
          },
          "fullname": "A thing",
          "id": 2,
          "name": "A thing",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 0.191416,
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
      "time": 13.879834,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts > TAP > node-test-mjs.tap > output bail=true 1`] = `
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
    "  duration_ms: 0.711\\n",
  ],
  Array [
    "line",
    "  location: 'file:///path/to/node-test-example/test/node.test.js:35:1'\\n",
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
    "    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)\\n",
  ],
  Array [
    "line",
    "    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)\\n",
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
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "code": "ERR_TEST_FAILURE",
        "error": "Invalid time value",
        "failureType": "testCodeFailure",
        "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
        "name": "RangeError",
        "stack": String(
          Date.toISOString (<anonymous>)
          thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
          TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
      "time": 0.711,
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
          "diag": Object {
            "code": "ERR_TEST_FAILURE",
            "error": "Invalid time value",
            "failureType": "testCodeFailure",
            "location": "file:///path/to/node-test-example/test/node.test.js:35:1",
            "name": "RangeError",
            "stack": String(
              Date.toISOString (<anonymous>)
              thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
              TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
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
          "time": 0.711,
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
