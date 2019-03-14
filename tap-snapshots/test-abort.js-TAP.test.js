/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/abort.js TAP buffered abort with diags > lines 1`] = `
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

exports[`test/abort.js TAP buffered abort with diags > results 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`

exports[`test/abort.js TAP buffered abort empty diags > lines 1`] = `
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

exports[`test/abort.js TAP buffered abort empty diags > results 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`

exports[`test/abort.js TAP buffered abort no diags > lines 1`] = `
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

exports[`test/abort.js TAP buffered abort no diags > results 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`

exports[`test/abort.js TAP unbuffered abort with diags > lines 1`] = `
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

exports[`test/abort.js TAP unbuffered abort with diags > must match snapshot 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`

exports[`test/abort.js TAP unbuffered abort empty diags > lines 1`] = `
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

exports[`test/abort.js TAP unbuffered abort empty diags > must match snapshot 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`

exports[`test/abort.js TAP unbuffered abort no diags > lines 1`] = `
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

exports[`test/abort.js TAP unbuffered abort no diags > must match snapshot 1`] = `
FinalResults {
  "ok": false,
  "count": 2,
  "pass": 1,
  "fail": 1,
  "bailout": false,
  "todo": 0,
  "skip": 0,
  "plan": FinalPlan {
    "start": 1,
    "end": 2,
    "skipAll": false,
    "skipReason": "",
    "comment": "",
  },
  "failures": Array [
    Result {
      "ok": false,
      "id": 2,
      "name": "nope",
      "fullname": "",
    },
  ],
}
`
