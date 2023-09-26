/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/json.ts > TAP > json 1`] = `
{
  "name": "TAP Tests",
  "level": 0,
  "plan": {
    "start": 1,
    "end": 1
  },
  "tests": 31,
  "failures": 15,
  "assertions": 21,
  "skipped": 15,
  "suites": [
    {
      "name": "test/fixtures/example-tap.ts",
      "level": 1,
      "ok": false,
      "id": 1,
      "diag": {
        "stdio": "inherit",
        "cwd": "/cwd/src/reporter",
        "externalID": "test/fixtures/example-tap.ts",
        "command": "/usr/local/bin/node",
        "args": [
          "--import=file:///cwd/node_modules/@tapjs/mock/dist/esm/import.mjs",
          "--loader=file:///cwd/node_modules/ts-node/esm.mjs",
          "--no-warnings",
          "--enable-source-maps",
          "--import=file:///cwd/node_modules/@tapjs/processinfo/dist/mjs/import.mjs",
          "/cwd/src/reporter/test/fixtures/example-tap.ts"
        ],
        "exitCode": 1
      },
      "time": 484.581,
      "fullname": "test/fixtures/example-tap.ts",
      "plan": {
        "start": 1,
        "end": 13
      },
      "tests": 30,
      "failures": 15,
      "assertions": 21,
      "skipped": 15,
      "suites": [
        {
          "name": "passing suite",
          "level": 2,
          "ok": true,
          "id": 1,
          "time": 5.817,
          "fullname": "test/fixtures/example-tap.ts > passing suite",
          "plan": {
            "start": 1,
            "end": 3
          },
          "tests": 5,
          "failures": 0,
          "assertions": 4,
          "skipped": 0,
          "suites": [
            {
              "name": "subtest",
              "level": 3,
              "ok": true,
              "id": 2,
              "time": 0.822,
              "fullname": "test/fixtures/example-tap.ts > passing suite > subtest",
              "plan": {
                "start": 1,
                "end": 2
              },
              "tests": 2,
              "failures": 0,
              "assertions": 2,
              "skipped": 0,
              "cases": [
                {
                  "ok": true,
                  "name": "test point in subtest",
                  "id": 1,
                  "fullname": "test/fixtures/example-tap.ts > passing suite > subtest > test point in subtest"
                },
                {
                  "ok": true,
                  "name": "second test point in subtest",
                  "id": 2,
                  "fullname": "test/fixtures/example-tap.ts > passing suite > subtest > second test point in subtest"
                }
              ]
            }
          ],
          "cases": [
            {
              "ok": true,
              "name": "test point before subtest",
              "id": 1,
              "fullname": "test/fixtures/example-tap.ts > passing suite > test point before subtest"
            },
            {
              "ok": true,
              "name": "test point after subtest",
              "id": 3,
              "fullname": "test/fixtures/example-tap.ts > passing suite > test point after subtest"
            }
          ]
        },
        {
          "name": "failing suite",
          "level": 2,
          "ok": false,
          "id": 2,
          "diag": {
            "at": {
              "fileName": "test/fixtures/example-tap.ts",
              "lineNumber": 14,
              "columnNumber": 3,
              "isToplevel": true
            },
            "source": "})\\n\\nt.test('failing suite', t => {\\n--^\\n  t.fail('this fails')\\n  t.strictSame(\\n"
          },
          "time": 11.27,
          "fullname": "test/fixtures/example-tap.ts > failing suite",
          "plan": {
            "start": 1,
            "end": 2
          },
          "tests": 2,
          "failures": 2,
          "assertions": 2,
          "skipped": 0,
          "cases": [
            {
              "ok": false,
              "name": "this fails",
              "id": 1,
              "diag": {
                "at": {
                  "fileName": "test/fixtures/example-tap.ts",
                  "lineNumber": 15,
                  "columnNumber": 5,
                  "typeName": "Test"
                },
                "stack": "Test.<anonymous> (test/fixtures/example-tap.ts:15:5)\\nTest.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)\\n../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)\\nTest.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)\\nTAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)\\nTAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)\\ntest/fixtures/example-tap.ts:14:3\\n",
                "source": "\\nt.test('failing suite', t => {\\n  t.fail('this fails')\\n----^\\n  t.strictSame(\\n    {\\n"
              },
              "fullname": "test/fixtures/example-tap.ts > failing suite > this fails"
            },
            {
              "ok": false,
              "name": "has a diff",
              "id": 2,
              "diag": {
                "extra": "diags",
                "diff": "--- expected\\n+++ actual\\n@@ -1,5 +1,5 @@\\n Object {\\n-  \\"b\\": Object {\\n-    \\"a\\": 1,\\n+  \\"a\\": Object {\\n+    \\"b\\": \\"1\\",\\n   },\\n }\\n",
                "at": {
                  "fileName": "test/fixtures/example-tap.ts",
                  "lineNumber": 16,
                  "columnNumber": 5,
                  "typeName": "Test"
                },
                "stack": "Test.<anonymous> (test/fixtures/example-tap.ts:16:5)\\nTest.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)\\n../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)\\nTest.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)\\nTAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)\\nTAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)\\ntest/fixtures/example-tap.ts:14:3\\n",
                "source": "t.test('failing suite', t => {\\n  t.fail('this fails')\\n  t.strictSame(\\n----^\\n    {\\n      a: {\\n"
              },
              "fullname": "test/fixtures/example-tap.ts > failing suite > has a diff"
            }
          ]
        },
        {
          "name": "suite with skipAll",
          "level": 2,
          "ok": true,
          "id": 7,
          "skip": "no tests found",
          "fullname": "test/fixtures/example-tap.ts > suite with skipAll",
          "plan": {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "no tests found",
            "comment": "no tests found"
          },
          "tests": 0,
          "failures": 0,
          "assertions": 0,
          "skipped": 1
        },
        {
          "name": "suite with skipAll, no msg",
          "level": 2,
          "ok": true,
          "id": 8,
          "time": 0.067,
          "fullname": "test/fixtures/example-tap.ts > suite with skipAll, no msg",
          "plan": {
            "start": 1,
            "end": 0,
            "skipAll": true
          },
          "tests": 0,
          "failures": 0,
          "assertions": 0,
          "skipped": 1
        },
        {
          "name": "suite with no points",
          "level": 2,
          "ok": true,
          "id": 9,
          "time": 0.07,
          "fullname": "test/fixtures/example-tap.ts > suite with no points",
          "plan": {
            "start": 1,
            "end": 0,
            "skipAll": true
          },
          "tests": 0,
          "failures": 0,
          "assertions": 0,
          "skipped": 1
        },
        {
          "name": "suite with todo/skip test points",
          "level": 2,
          "ok": true,
          "id": 10,
          "time": 0.397,
          "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points",
          "plan": {
            "start": 1,
            "end": 8
          },
          "tests": 8,
          "failures": 8,
          "assertions": 8,
          "skipped": 8,
          "cases": [
            {
              "ok": true,
              "name": "pass with todo: true",
              "id": 1,
              "todo": true,
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > pass with todo: true"
            },
            {
              "ok": true,
              "name": "pass with skip: true",
              "id": 2,
              "skip": true,
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > pass with skip: true"
            },
            {
              "ok": true,
              "name": "pass with todo message",
              "id": 3,
              "todo": "msg",
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > pass with todo message"
            },
            {
              "ok": true,
              "name": "pass with skip message",
              "id": 4,
              "skip": "msg",
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > pass with skip message"
            },
            {
              "ok": false,
              "name": "fail with todo: true",
              "id": 5,
              "todo": true,
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > fail with todo: true"
            },
            {
              "ok": false,
              "name": "fail with skip: true",
              "id": 6,
              "skip": true,
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > fail with skip: true"
            },
            {
              "ok": false,
              "name": "fail with todo message",
              "id": 7,
              "todo": "msg",
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > fail with todo message"
            },
            {
              "ok": false,
              "name": "fail with skip message",
              "id": 8,
              "skip": "msg",
              "fullname": "test/fixtures/example-tap.ts > suite with todo/skip test points > fail with skip message"
            }
          ]
        },
        {
          "name": "excessive test",
          "level": 2,
          "ok": false,
          "id": 11,
          "diag": {
            "at": {
              "fileName": "test/fixtures/example-tap.ts",
              "lineNumber": 56,
              "columnNumber": 3,
              "isToplevel": true
            },
            "source": "})\\n\\nt.test('excessive test', t => {\\n--^\\n  t.plan(1)\\n  t.pass('this is fine')\\n"
          },
          "time": 0.109,
          "fullname": "test/fixtures/example-tap.ts > excessive test",
          "plan": {
            "start": 1,
            "end": 1
          },
          "tests": 1,
          "failures": 0,
          "assertions": 1,
          "skipped": 0,
          "cases": [
            {
              "ok": true,
              "name": "this is fine",
              "id": 1,
              "fullname": "test/fixtures/example-tap.ts > excessive test > this is fine"
            }
          ]
        },
        {
          "name": "unfinished test",
          "level": 2,
          "ok": false,
          "id": 13,
          "diag": {
            "at": {
              "fileName": "test/fixtures/example-tap.ts",
              "lineNumber": 62,
              "columnNumber": 3,
              "isToplevel": true
            },
            "source": "})\\n\\nt.test('unfinished test', t => {\\n--^\\n  t.plan(3)\\n  t.pass('going to fail')\\n"
          },
          "time": 0.197,
          "fullname": "test/fixtures/example-tap.ts > unfinished test",
          "plan": {
            "start": 1,
            "end": 3
          },
          "tests": 1,
          "failures": 0,
          "assertions": 1,
          "skipped": 0,
          "cases": [
            {
              "ok": true,
              "name": "going to fail",
              "id": 1,
              "fullname": "test/fixtures/example-tap.ts > unfinished test > going to fail"
            }
          ]
        }
      ],
      "cases": [
        {
          "ok": true,
          "name": "suite with todo: true",
          "id": 3,
          "todo": true,
          "fullname": "test/fixtures/example-tap.ts > suite with todo: true"
        },
        {
          "ok": true,
          "name": "suite with skip: true",
          "id": 4,
          "skip": true,
          "fullname": "test/fixtures/example-tap.ts > suite with skip: true"
        },
        {
          "ok": true,
          "name": "suite with todo message",
          "id": 5,
          "todo": "msg",
          "fullname": "test/fixtures/example-tap.ts > suite with todo message"
        },
        {
          "ok": true,
          "name": "suite with skip message",
          "id": 6,
          "skip": "msg",
          "fullname": "test/fixtures/example-tap.ts > suite with skip message"
        },
        {
          "ok": false,
          "name": "test assertion count exceeds plan",
          "id": 12,
          "diag": {
            "stack": "Test.<anonymous> (test/fixtures/example-tap.ts:59:5)\\nTest.cb (../core/src/test-base.ts:341:17)\\n<anonymous> (../core/src/test-base.ts:1116:21)\\nTest.main (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/src/test-base.ts:1169:9)\\n",
            "at": {
              "fileName": "test/fixtures/example-tap.ts",
              "lineNumber": 59,
              "columnNumber": 5,
              "typeName": "Test",
              "methodName": "<anonymous>",
              "functionName": "Test.<anonymous>"
            },
            "test": "excessive test",
            "source": "  t.plan(1)\\n  t.pass('this is fine')\\n  t.pass('this is not')\\n----^\\n})\\n"
          },
          "fullname": "test/fixtures/example-tap.ts > test assertion count exceeds plan"
        }
      ]
    }
  ]
}
`

exports[`test/json.ts > TAP > jsonstream 1`] = `
["start",{"name":"TAP Tests","level":0}]
["start",{"name":"test/fixtures/example-tap.ts","level":1}]
["start",{"name":"passing suite","level":2}]
["pass",{"ok":true,"name":"test point before subtest","id":1,"fullname":"test/fixtures/example-tap.ts > passing suite > test point before subtest"}]
["start",{"name":"subtest","level":3}]
["pass",{"ok":true,"name":"test point in subtest","id":1,"fullname":"test/fixtures/example-tap.ts > passing suite > subtest > test point in subtest"}]
["pass",{"ok":true,"name":"second test point in subtest","id":2,"fullname":"test/fixtures/example-tap.ts > passing suite > subtest > second test point in subtest"}]
["end",{"name":"subtest","level":3,"ok":true,"id":2,"time":0.822,"fullname":"test/fixtures/example-tap.ts > passing suite > subtest","plan":{"start":1,"end":2},"tests":2,"failures":0,"assertions":2,"skipped":0}]
["pass",{"ok":true,"name":"test point after subtest","id":3,"fullname":"test/fixtures/example-tap.ts > passing suite > test point after subtest"}]
["end",{"name":"passing suite","level":2,"ok":true,"id":1,"time":5.817,"fullname":"test/fixtures/example-tap.ts > passing suite","plan":{"start":1,"end":3},"tests":5,"failures":0,"assertions":4,"skipped":0}]
["start",{"name":"failing suite","level":2}]
["fail",{"ok":false,"name":"this fails","id":1,"diag":{"at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":15,"columnNumber":5,"typeName":"Test"},"stack":"Test.<anonymous> (test/fixtures/example-tap.ts:15:5)\\nTest.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)\\n../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)\\nTest.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)\\nTAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)\\nTAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)\\ntest/fixtures/example-tap.ts:14:3\\n","source":"\\nt.test('failing suite', t => {\\n  t.fail('this fails')\\n----^\\n  t.strictSame(\\n    {\\n"},"fullname":"test/fixtures/example-tap.ts > failing suite > this fails"}]
["fail",{"ok":false,"name":"has a diff","id":2,"diag":{"extra":"diags","diff":"--- expected\\n+++ actual\\n@@ -1,5 +1,5 @@\\n Object {\\n-  \\"b\\": Object {\\n-    \\"a\\": 1,\\n+  \\"a\\": Object {\\n+    \\"b\\": \\"1\\",\\n   },\\n }\\n","at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":16,"columnNumber":5,"typeName":"Test"},"stack":"Test.<anonymous> (test/fixtures/example-tap.ts:16:5)\\nTest.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)\\n../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)\\nTest.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)\\nTAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)\\nTAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)\\ntest/fixtures/example-tap.ts:14:3\\n","source":"t.test('failing suite', t => {\\n  t.fail('this fails')\\n  t.strictSame(\\n----^\\n    {\\n      a: {\\n"},"fullname":"test/fixtures/example-tap.ts > failing suite > has a diff"}]
["end",{"name":"failing suite","level":2,"ok":false,"id":2,"diag":{"at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":14,"columnNumber":3,"isToplevel":true},"source":"})\\n\\nt.test('failing suite', t => {\\n--^\\n  t.fail('this fails')\\n  t.strictSame(\\n"},"time":11.27,"fullname":"test/fixtures/example-tap.ts > failing suite","plan":{"start":1,"end":2},"tests":2,"failures":2,"assertions":2,"skipped":0}]
["todo",{"ok":true,"name":"suite with todo: true","id":3,"todo":true,"fullname":"test/fixtures/example-tap.ts > suite with todo: true"}]
["skip",{"ok":true,"name":"suite with skip: true","id":4,"skip":true,"fullname":"test/fixtures/example-tap.ts > suite with skip: true"}]
["todo",{"ok":true,"name":"suite with todo message","id":5,"todo":"msg","fullname":"test/fixtures/example-tap.ts > suite with todo message"}]
["skip",{"ok":true,"name":"suite with skip message","id":6,"skip":"msg","fullname":"test/fixtures/example-tap.ts > suite with skip message"}]
["start",{"name":"suite with skipAll","level":2}]
["end",{"name":"suite with skipAll","level":2,"ok":true,"id":7,"skip":"no tests found","fullname":"test/fixtures/example-tap.ts > suite with skipAll","plan":{"start":1,"end":0,"skipAll":true,"skipReason":"no tests found","comment":"no tests found"},"tests":0,"failures":0,"assertions":0,"skipped":1}]
["start",{"name":"suite with skipAll, no msg","level":2}]
["end",{"name":"suite with skipAll, no msg","level":2,"ok":true,"id":8,"time":0.067,"fullname":"test/fixtures/example-tap.ts > suite with skipAll, no msg","plan":{"start":1,"end":0,"skipAll":true},"tests":0,"failures":0,"assertions":0,"skipped":1}]
["start",{"name":"suite with no points","level":2}]
["end",{"name":"suite with no points","level":2,"ok":true,"id":9,"time":0.07,"fullname":"test/fixtures/example-tap.ts > suite with no points","plan":{"start":1,"end":0,"skipAll":true},"tests":0,"failures":0,"assertions":0,"skipped":1}]
["start",{"name":"suite with todo/skip test points","level":2}]
["todo",{"ok":true,"name":"pass with todo: true","id":1,"todo":true,"fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > pass with todo: true"}]
["skip",{"ok":true,"name":"pass with skip: true","id":2,"skip":true,"fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > pass with skip: true"}]
["todo",{"ok":true,"name":"pass with todo message","id":3,"todo":"msg","fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > pass with todo message"}]
["skip",{"ok":true,"name":"pass with skip message","id":4,"skip":"msg","fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > pass with skip message"}]
["todo",{"ok":false,"name":"fail with todo: true","id":5,"todo":true,"fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > fail with todo: true"}]
["skip",{"ok":false,"name":"fail with skip: true","id":6,"skip":true,"fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > fail with skip: true"}]
["todo",{"ok":false,"name":"fail with todo message","id":7,"todo":"msg","fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > fail with todo message"}]
["skip",{"ok":false,"name":"fail with skip message","id":8,"skip":"msg","fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points > fail with skip message"}]
["end",{"name":"suite with todo/skip test points","level":2,"ok":true,"id":10,"time":0.397,"fullname":"test/fixtures/example-tap.ts > suite with todo/skip test points","plan":{"start":1,"end":8},"tests":8,"failures":8,"assertions":8,"skipped":8}]
["start",{"name":"excessive test","level":2}]
["pass",{"ok":true,"name":"this is fine","id":1,"fullname":"test/fixtures/example-tap.ts > excessive test > this is fine"}]
["end",{"name":"excessive test","level":2,"ok":false,"id":11,"diag":{"at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":56,"columnNumber":3,"isToplevel":true},"source":"})\\n\\nt.test('excessive test', t => {\\n--^\\n  t.plan(1)\\n  t.pass('this is fine')\\n"},"time":0.109,"fullname":"test/fixtures/example-tap.ts > excessive test","plan":{"start":1,"end":1},"tests":1,"failures":0,"assertions":1,"skipped":0}]
["fail",{"ok":false,"name":"test assertion count exceeds plan","id":12,"diag":{"stack":"Test.<anonymous> (test/fixtures/example-tap.ts:59:5)\\nTest.cb (../core/src/test-base.ts:341:17)\\n<anonymous> (../core/src/test-base.ts:1116:21)\\nTest.main (../core/src/test-base.ts:1124:7)\\nTest.runMain (../core/src/base.ts:584:15)\\nTAP.#processSubtest (../core/src/test-base.ts:1169:9)\\n","at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":59,"columnNumber":5,"typeName":"Test","methodName":"<anonymous>","functionName":"Test.<anonymous>"},"test":"excessive test","source":"  t.plan(1)\\n  t.pass('this is fine')\\n  t.pass('this is not')\\n----^\\n})\\n"},"fullname":"test/fixtures/example-tap.ts > test assertion count exceeds plan"}]
["start",{"name":"unfinished test","level":2}]
["pass",{"ok":true,"name":"going to fail","id":1,"fullname":"test/fixtures/example-tap.ts > unfinished test > going to fail"}]
["end",{"name":"unfinished test","level":2,"ok":false,"id":13,"diag":{"at":{"fileName":"test/fixtures/example-tap.ts","lineNumber":62,"columnNumber":3,"isToplevel":true},"source":"})\\n\\nt.test('unfinished test', t => {\\n--^\\n  t.plan(3)\\n  t.pass('going to fail')\\n"},"time":0.197,"fullname":"test/fixtures/example-tap.ts > unfinished test","plan":{"start":1,"end":3},"tests":1,"failures":0,"assertions":1,"skipped":0}]
["end",{"name":"test/fixtures/example-tap.ts","level":1,"ok":false,"id":1,"diag":{"stdio":"inherit","cwd":"/cwd/src/reporter","externalID":"test/fixtures/example-tap.ts","command":"/usr/local/bin/node","args":["--import=file:///cwd/node_modules/@tapjs/mock/dist/esm/import.mjs","--loader=file:///cwd/node_modules/ts-node/esm.mjs","--no-warnings","--enable-source-maps","--import=file:///cwd/node_modules/@tapjs/processinfo/dist/mjs/import.mjs","/cwd/src/reporter/test/fixtures/example-tap.ts"],"exitCode":1},"time":484.581,"fullname":"test/fixtures/example-tap.ts","plan":{"start":1,"end":13},"tests":30,"failures":15,"assertions":21,"skipped":15}]
["end",{"name":"TAP Tests","level":0,"plan":{"start":1,"end":1},"tests":31,"failures":15,"assertions":21,"skipped":15}]

`
