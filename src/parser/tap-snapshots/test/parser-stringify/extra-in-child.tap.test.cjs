/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP extra-in-child.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
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
              "time": 43.094,
              "todo": 0,
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
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
              "time": 24.16,
              "todo": 0,
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
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
          "time": 339.14,
          "todo": 0,
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
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
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
      "time": 343.487,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP extra-in-child.tap bail > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
# Subtest: update profile
ok 1 - test/01c-user-updates.js update profile > should be equivalent
ok 2 - test/01c-user-updates.js update profile > should be equivalent
ok 3 - test/01c-user-updates.js > update profile # time=43.094ms
# Subtest: update email
ok 4 - test/01c-user-updates.js update email > should be equivalent
ok 5 - test/01c-user-updates.js > update email # time=24.16ms
# time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 6 - test/01c-user-updates.js # time=339.14ms
1..6
# time=343.487ms

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
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
              "time": 43.094,
              "todo": 0,
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
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
              "time": 24.16,
              "todo": 0,
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
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
          "time": 339.14,
          "todo": 0,
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
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
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
      "time": 343.487,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP extra-in-child.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js update profile > should be equivalent",
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
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "test/01c-user-updates.js update profile > should be equivalent",
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
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "test/01c-user-updates.js update email > should be equivalent",
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
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
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
      "time": 343.487,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP extra-in-child.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
# Subtest: update profile
ok 1 - test/01c-user-updates.js update profile > should be equivalent
ok 2 - test/01c-user-updates.js update profile > should be equivalent
ok 3 - test/01c-user-updates.js > update profile # time=43.094ms
# Subtest: update email
ok 4 - test/01c-user-updates.js update email > should be equivalent
ok 5 - test/01c-user-updates.js > update email # time=24.16ms
# time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 6 - test/01c-user-updates.js # time=339.14ms
1..6
# time=343.487ms

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
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
              "time": 43.094,
              "todo": 0,
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
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
              "time": 24.16,
              "todo": 0,
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# failed 26 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 26,
          "failures": Array [
            Object {
              "data": "null { _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "{ _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
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
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# failed 26 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 26,
      "failures": Array [
        Object {
          "data": "null { _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{ _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP extra-in-child.tap strict > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
# Subtest: update profile
ok 1 - test/01c-user-updates.js update profile > should be equivalent
ok 2 - test/01c-user-updates.js update profile > should be equivalent
ok 3 - test/01c-user-updates.js > update profile # time=43.094ms
# Subtest: update email
ok 4 - test/01c-user-updates.js update email > should be equivalent
ok 5 - test/01c-user-updates.js > update email # time=24.16ms
# time=174.236ms
# failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 6 - test/01c-user-updates.js # time=339.14ms
1..6
# time=343.487ms
# failed 26 test

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
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
              "time": 43.094,
              "todo": 0,
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
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
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
              "time": 24.16,
              "todo": 0,
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# failed 26 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 26,
          "failures": Array [
            Object {
              "data": "null { _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "{ _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
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
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# failed 26 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 26,
      "failures": Array [
        Object {
          "data": "null { _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{ _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
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

exports[`test/parse-stringify.ts TAP extra-in-child.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parse-stringify.ts TAP extra-in-child.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
# Subtest: update profile
ok 1 - test/01c-user-updates.js update profile > should be equivalent
ok 2 - test/01c-user-updates.js update profile > should be equivalent
ok 3 - test/01c-user-updates.js > update profile # time=43.094ms
# Subtest: update email
ok 4 - test/01c-user-updates.js update email > should be equivalent
ok 5 - test/01c-user-updates.js > update email # time=24.16ms
# time=174.236ms
# failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 6 - test/01c-user-updates.js # time=339.14ms
1..6
# time=343.487ms
# failed 26 test

`
