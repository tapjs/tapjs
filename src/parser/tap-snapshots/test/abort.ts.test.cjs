/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/abort.ts TAP buffered abort empty diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        ok 2 - doag is also okay\\n",
  "    ok 1 - first\\n",
  "    ok 2 - second {\\n",
  "        ok 1 - but that is ok\\n",
  "        not ok 2 - nope\\n",
  "        1..2\\n",
  "    }\\n",
  "}\\n",
  "not ok 2 - nope\\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP buffered abort empty diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "nope",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`

exports[`test/abort.ts TAP buffered abort no diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        ok 2 - doag is also okay\\n",
  "    ok 1 - first\\n",
  "    ok 2 - second {\\n",
  "        ok 1 - but that is ok\\n",
  "        not ok 2 - \\n",
  "        1..2\\n",
  "    }\\n",
  "}\\n",
  "not ok 2 - \\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP buffered abort no diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`

exports[`test/abort.ts TAP buffered abort with diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        ok 2 - doag is also okay\\n",
  "    ok 1 - first\\n",
  "    ok 2 - second {\\n",
  "        ok 1 - but that is ok\\n",
  "        not ok 2 - nope\\n",
  "          ---\\n",
  "          some: diags\\n",
  "          ...\\n",
  "        1..2\\n",
  "    }\\n",
  "}\\n",
  "not ok 2 - nope\\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP buffered abort with diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "nope",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`

exports[`test/abort.ts TAP destroy() > must match snapshot 1`] = `
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
    "1..1000\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1000,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "destroyed",
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "destroyed",
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
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "destroyed",
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
    "# test count(1) != plan(1000)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(1000)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
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
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "destroyed",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 1000,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
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

exports[`test/abort.ts TAP unbuffered abort empty diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        not ok 2 - nope\\n",
  "    not ok 1 - nope\\n",
  "}\\n",
  "not ok 2 - nope\\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP unbuffered abort empty diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "nope",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`

exports[`test/abort.ts TAP unbuffered abort no diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        not ok 2 - nope\\n",
  "    not ok 1 - nope\\n",
  "}\\n",
  "not ok 2 - nope\\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP unbuffered abort no diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "nope",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`

exports[`test/abort.ts TAP unbuffered abort with diags > lines 1`] = `
Array [
  "ok 1 - nesting {\\n",
  "    1..2\\n",
  "    # Subtest: first\\n",
  "        1..2\\n",
  "        ok 1 - true is ok\\n",
  "        not ok 2 - nope\\n",
  "          ---\\n",
  "          some: diags\\n",
  "          ...\\n",
  "    not ok 1 - nope\\n",
  "}\\n",
  "not ok 2 - nope\\n",
  "1..2\\n",
]
`

exports[`test/abort.ts TAP unbuffered abort with diags > results 1`] = `
FinalResults {
  "bailout": false,
  "count": 2,
  "fail": 1,
  "failures": Array [
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "nope",
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
  "plan": FinalPlan {
    "comment": "",
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 0,
  "time": null,
  "todo": 0,
}
`
