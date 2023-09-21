/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/serialize.ts > TAP > serialize a test stream > must match snapshot 1`] = `
Array [
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "message": "direct write to stdout\\n",
    },
    "type": "test:stdout",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "message": "direct write to stderr\\n",
    },
    "type": "test:stderr",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite 1",
      "nesting": 0,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite a",
      "nesting": 0,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite 1",
      "nesting": 0,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite 1",
      "nesting": 0,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 1",
      "nesting": 1,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 2",
      "nesting": 1,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 1",
      "nesting": 1,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 1",
      "nesting": 1,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
      },
      "file": "{FILE}",
      "line": ##,
      "name": "test 1",
      "nesting": 1,
      "testNumber": 1,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 2",
      "nesting": 1,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test 2",
      "nesting": 1,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
      },
      "file": "{FILE}",
      "line": ##,
      "name": "test 2",
      "nesting": 1,
      "testNumber": 2,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "count": 2,
      "file": "{FILE}",
      "line": ##,
      "nesting": 0,
    },
    "type": "test:plan",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
        "type": "suite",
      },
      "file": "{FILE}",
      "line": ##,
      "name": "suite 1",
      "nesting": 0,
      "testNumber": 1,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "message": "suite 1 comment",
      "nesting": 0,
    },
    "type": "test:diagnostic",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite a",
      "nesting": 0,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "suite a",
      "nesting": 0,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test b",
      "nesting": 1,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test c",
      "nesting": 1,
    },
    "type": "test:enqueue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test b",
      "nesting": 1,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test b",
      "nesting": 1,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
      },
      "file": "{FILE}",
      "line": ##,
      "name": "test b",
      "nesting": 1,
      "testNumber": 1,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test c",
      "nesting": 1,
    },
    "type": "test:dequeue",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "name": "test c",
      "nesting": 1,
    },
    "type": "test:start",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
      },
      "file": "{FILE}",
      "line": ##,
      "name": "test c",
      "nesting": 1,
      "testNumber": 2,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "count": 2,
      "file": "{FILE}",
      "line": ##,
      "nesting": 0,
    },
    "type": "test:plan",
  },
  Object {
    "data": Object {
      "column": ##,
      "details": Object {
        "duration_ms": ##,
        "type": "suite",
      },
      "file": "{FILE}",
      "line": ##,
      "name": "suite a",
      "nesting": 0,
      "testNumber": 2,
    },
    "type": "test:pass",
  },
  Object {
    "data": Object {
      "column": ##,
      "file": "{FILE}",
      "line": ##,
      "message": "suite a comment",
      "nesting": 0,
    },
    "type": "test:diagnostic",
  },
]
`
