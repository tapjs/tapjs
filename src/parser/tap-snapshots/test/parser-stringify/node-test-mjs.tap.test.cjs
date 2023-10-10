/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > bail > parsed 1`] = `
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
      "closingTestPoint": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > default settings > parsed 1`] = `
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
      "closingTestPoint": false,
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: A thing\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting suite\\n",
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
      "closingTestPoint": true,
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
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
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
          "closingTestPoint": false,
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
          "closingTestPoint": true,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > default settings > parsed flat 1`] = `
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
      "closingTestPoint": false,
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
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
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
      "id": 2,
      "name": "A thing > nesting suite",
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
    "comment",
    "# duration_ms 13.879834\\n",
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
          "closingTestPoint": false,
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
          "closingTestPoint": true,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: A thing
    # Subtest: nesting suite
    not ok 1 - nesting suite # time=0.036708ms
      ---
      type: suite
      location: file:///path/to/node-test-example/test/node.test.js:65:3
      failureType: testCodeFailure
      error: ok
      code: ERR_TEST_FAILURE
      stack: >-
        SuiteContext.<anonymous>
        (file:///path/to/node-test-example/test/node.test.js:66:9)
      
        Suite.runInAsyncScope (node:async_hooks:206:9)
      
        new Suite (node:internal/test_runner/test:901:26)
      
        Suite.createSubtest (node:internal/test_runner/test:442:18)
      
        run (node:internal/test_runner/harness:214:28)
      
        test (node:internal/test_runner/harness:227:12)
      
        SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
      
        Suite.runInAsyncScope (node:async_hooks:206:9)
      
        new Suite (node:internal/test_runner/test:901:26)
      
        Test.createSubtest (node:internal/test_runner/test:442:18)
      ...
    1..1
not ok 2 - A thing # time=0.191416ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:64:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..2
# duration_ms 13.879834

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: A thing
# Subtest: nesting suite
not ok 2 - A thing > nesting suite # time=0.036708ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:65:3
  failureType: testCodeFailure
  error: ok
  code: ERR_TEST_FAILURE
  stack: >-
    SuiteContext.<anonymous>
    (file:///path/to/node-test-example/test/node.test.js:66:9)
  
    Suite.runInAsyncScope (node:async_hooks:206:9)
  
    new Suite (node:internal/test_runner/test:901:26)
  
    Suite.createSubtest (node:internal/test_runner/test:442:18)
  
    run (node:internal/test_runner/harness:214:28)
  
    test (node:internal/test_runner/harness:227:12)
  
    SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
  
    Suite.runInAsyncScope (node:async_hooks:206:9)
  
    new Suite (node:internal/test_runner/test:901:26)
  
    Test.createSubtest (node:internal/test_runner/test:442:18)
  ...
not ok 3 - A thing # time=0.191416ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:64:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..3
# duration_ms 13.879834

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strict > parsed 1`] = `
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
      "closingTestPoint": false,
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
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: A thing\\n",
      ],
      Array [
        "comment",
        "# Subtest: nesting suite\\n",
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
      "closingTestPoint": true,
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
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
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
          "closingTestPoint": false,
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
          "closingTestPoint": true,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: A thing
    # Subtest: nesting suite
    not ok 1 - nesting suite # time=0.036708ms
      ---
      type: suite
      location: file:///path/to/node-test-example/test/node.test.js:65:3
      failureType: testCodeFailure
      error: ok
      code: ERR_TEST_FAILURE
      stack: >-
        SuiteContext.<anonymous>
        (file:///path/to/node-test-example/test/node.test.js:66:9)
      
        Suite.runInAsyncScope (node:async_hooks:206:9)
      
        new Suite (node:internal/test_runner/test:901:26)
      
        Suite.createSubtest (node:internal/test_runner/test:442:18)
      
        run (node:internal/test_runner/harness:214:28)
      
        test (node:internal/test_runner/harness:227:12)
      
        SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
      
        Suite.runInAsyncScope (node:async_hooks:206:9)
      
        new Suite (node:internal/test_runner/test:901:26)
      
        Test.createSubtest (node:internal/test_runner/test:442:18)
      ...
    1..1
not ok 2 - A thing # time=0.191416ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:64:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..2
# duration_ms 13.879834

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
# Subtest: A thing
# Subtest: nesting suite
not ok 2 - A thing > nesting suite # time=0.036708ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:65:3
  failureType: testCodeFailure
  error: ok
  code: ERR_TEST_FAILURE
  stack: >-
    SuiteContext.<anonymous>
    (file:///path/to/node-test-example/test/node.test.js:66:9)
  
    Suite.runInAsyncScope (node:async_hooks:206:9)
  
    new Suite (node:internal/test_runner/test:901:26)
  
    Suite.createSubtest (node:internal/test_runner/test:442:18)
  
    run (node:internal/test_runner/harness:214:28)
  
    test (node:internal/test_runner/harness:227:12)
  
    SuiteContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:65:3)
  
    Suite.runInAsyncScope (node:async_hooks:206:9)
  
    new Suite (node:internal/test_runner/test:901:26)
  
    Test.createSubtest (node:internal/test_runner/test:442:18)
  ...
not ok 3 - A thing # time=0.191416ms
  ---
  type: suite
  location: file:///path/to/node-test-example/test/node.test.js:64:1
  failureType: subtestsFailed
  error: 1 subtest failed
  code: ERR_TEST_FAILURE
  ...
1..3
# duration_ms 13.879834

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strictBail > parsed 1`] = `
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
      "closingTestPoint": false,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`

exports[`test/parse-stringify.ts > TAP > node-test-mjs.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: uhoh, this one throws
not ok 1 - uhoh, this one throws # time=0.711ms
  ---
  location: file:///path/to/node-test-example/test/node.test.js:35:1
  failureType: testCodeFailure
  error: Invalid time value
  code: ERR_TEST_FAILURE
  name: RangeError
  stack: >-
    Date.toISOString (<anonymous>)
  
    thrower (file:///path/to/node-test-example/lib/index.mjs:11:43)
  
    TestContext.<anonymous> (file:///path/to/node-test-example/test/node.test.js:38:16)
  
    Test.runInAsyncScope (node:async_hooks:206:9)
  
    Test.run (node:internal/test_runner/test:631:25)
  
    Test.processPendingSubtests (node:internal/test_runner/test:374:18)
  
    Test.postRun (node:internal/test_runner/test:715:19)
  
    Test.run (node:internal/test_runner/test:673:12)
  
    async Test.processPendingSubtests (node:internal/test_runner/test:374:7)
  ...
Bail out! uhoh, this one throws

`
