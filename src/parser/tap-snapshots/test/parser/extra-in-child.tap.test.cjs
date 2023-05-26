/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP extra-in-child.tap > output bail=false 1`] = `
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
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
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
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 43.094,
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
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 43.094,
          "todo": false,
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
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
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 24.16,
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
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 24.16,
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
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 339.14,
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
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 339.14,
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
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 343.487,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP extra-in-child.tap > output bail=true 1`] = `
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
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
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
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 43.094,
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
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 43.094,
          "todo": false,
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
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
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 24.16,
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
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 24.16,
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
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 339.14,
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
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 339.14,
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
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 343.487,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`
