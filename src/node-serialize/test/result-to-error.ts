import t from 'tap'
import { resultToError } from '../src/result-to-error.js'

const results: Record<string, any>[] = [
  { ok: true, name: 'this is fine' },
  { ok: false, name: 'error, no details' },
  { ok: false, diag: { doesNotHave: ['name'] } },
  { ok: false, name: 'found/wanted', diag: { found: 1, wanted: 2 } },
  {
    ok: false,
    name: 'actual/expected',
    diag: { actual: 1, expected: 2 },
  },
  {
    ok: false,
    name: 'found/wanted diff',
    diag: {
      source: `
    helpful snippet of source code
-----------------------^
    the better to find errors with!
`,
      wanted: {
        some: {
          object: {
            i: 'wanted',
          },
        },
      },
      found: {
        some: {
          object: {
            you: {
              gave: 'me',
            },
          },
        },
      },
      diff: `--- expected
+++ actual
@@ -1,9 +1,7 @@
 Object {
   "some": Object {
     "object": Object {
-      "i": "wanted",
+      "you": Object {
+        "gave": "me",
+      },
     },
   },
 }
`,
    },
  },
  {
    ok: false,
    name: 'result with actual/expected diff',
    diag: {
      expected: {
        some: {
          object: {
            i: 'expected',
          },
        },
      },
      actual: {
        some: {
          object: {
            you: {
              actually: 'gave me',
            },
          },
        },
      },
      diff: `--- expected
+++ actual
@@ -1,9 +1,7 @@
 Object {
   "some": Object {
     "object": Object {
-      "i": "expected",
+      "you": Object {
+        "actually": "gave me",
+      },
     },
   },
 }
`,
    },
  },
  {
    test: {
      options: {
        at: {
          fileName: '/some/file.js',
          lineNumber: 1,
          columnNumber: 2,
        },
      },
    },
    ok: false,
    diag: {},
  },
  {
    ok: false,
    diag: {
      at: {
        fileName: '/some/file.js',
        lineNumber: 1,
        columnNumber: 2,
      },
    },
  },
]

for (const { test, ...r } of results) {
  const e = resultToError(r, test)
  t.test(r.name || 'no name', t => {
    t.type(e, Error)
    let { stack, ...properties } = e
    const h = `Error: ${e.message}\n`
    if (typeof stack === 'string' && stack.startsWith(h))
      stack = stack.substring(h.length)
    t.matchSnapshot(e.message, 'message')
    t.matchSnapshot({ ...properties, stack }, 'properties')
    t.end()
  })
}
