import t from 'tap'
import { prettyDiff } from '../src/pretty-diff.js'

t.equal(prettyDiff(''), '')
t.equal(prettyDiff(null), '')
t.equal(prettyDiff({}), '')
t.equal(prettyDiff(true), '')
t.matchSnapshot(
  prettyDiff(`--- expected
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
`)
)
