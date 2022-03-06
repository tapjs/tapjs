/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP version-in-yaml.tap bail > parsed 1`] = `
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
        "# Subtest: child indented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "some yaml",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "some yaml",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "some yaml",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "some yaml",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP version-in-yaml.tap bail > stringified 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    Bail out! some yaml
Bail out! some yaml

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    Bail out! some yaml
Bail out! some yaml

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap default settings > parsed 1`] = `
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
        "# Subtest: child indented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "child indented",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child unindented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child unindented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child unindented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child unindented",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child unnamed",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child buffered\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child buffered",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child buffered",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 4,
      "name": "child buffered",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "child indented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 2,
          "name": "child unindented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "child unnamed",
          "ok": false,
        },
        Result {
          "buffered": true,
          "fullname": "",
          "id": 4,
          "name": "child buffered",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP version-in-yaml.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 1 - child indented
# Subtest: child unindented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 2 - child unindented
# Subtest
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 3 - child unnamed
# Subtest: child buffered
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 4 - child buffered
1..4
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 1 - child indented
# Subtest: child unindented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 2 - child unindented
# Subtest
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 3 - child unnamed
# Subtest: child buffered
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 4 - child buffered
1..4
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strict > parsed 1`] = `
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
        "# Subtest: child indented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "child indented",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child unindented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child unindented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child unindented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child unindented",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child unnamed",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child buffered\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child buffered",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child buffered",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 4,
      "name": "child buffered",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "child indented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 2,
          "name": "child unindented",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "child unnamed",
          "ok": false,
        },
        Result {
          "buffered": true,
          "fullname": "",
          "id": 4,
          "name": "child buffered",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strict > stringified 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 1 - child indented
# Subtest: child unindented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 2 - child unindented
# Subtest
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 3 - child unnamed
# Subtest: child buffered
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 4 - child buffered
1..4
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 1 - child indented
# Subtest: child unindented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 2 - child unindented
# Subtest
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 3 - child unnamed
# Subtest: child buffered
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    1..1
    # failed 1 test
not ok 4 - child buffered
1..4
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strictBail > parsed 1`] = `
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
        "# Subtest: child indented\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "version": String(
              
              TAP version 13
            ),
          },
          "fullname": "child indented",
          "name": "some yaml",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "some yaml",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "some yaml",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "version": String(
                  
                  TAP version 13
                ),
              },
              "fullname": "child indented",
              "name": "some yaml",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "some yaml",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "some yaml",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    Bail out! some yaml
Bail out! some yaml

`

exports[`test/parser-stringify.js TAP version-in-yaml.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: child indented
    not ok - some yaml
      ---
      version: |-
        
        TAP version 13
      ...
    Bail out! some yaml
Bail out! some yaml

`
