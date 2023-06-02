/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > comment-mid-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
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
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
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
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
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
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
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
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
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
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
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
      "fullname": "",
      "id": 2,
      "name": "",
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
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "after": "comment",
          },
          "fullname": "please keep my diags",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 1,
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
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts > TAP > comment-mid-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
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
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
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
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
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
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "after": "comment",
      },
      "fullname": "please keep my diags",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
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
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "Bail out! please keep my diags\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "after": "comment",
          },
          "fullname": "please keep my diags",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`
