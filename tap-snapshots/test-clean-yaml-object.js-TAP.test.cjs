/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/clean-yaml-object.js TAP diff stuff > another weird one 1`] = `
Object {
  "found": "Object {\\n  \\"a\\": 1,\\n}",
  "wanted": Object {
    "a": 1,
  },
}
`

exports[`test/clean-yaml-object.js TAP diff stuff > objects that do not strictly match 1`] = `
Object {
  "comparator": "===",
  "diff": "--- expected\\n+++ actual\\n@@ -1,3 +1,3 @@\\n Object {\\n-  \\"a\\": \\"1\\",\\n+  \\"a\\": 1,\\n }\\n",
}
`

exports[`test/clean-yaml-object.js TAP diff stuff > string that differ 1`] = `
Object {
  "comparator": "===",
  "diff": "--- expected\\n+++ actual\\n@@ -1,1 +1,1 @@\\n-world\\n+hello\\n",
}
`

exports[`test/clean-yaml-object.js TAP diff stuff > this one is weird 1`] = `
Object {
  "found": Object {
    "a": 1,
  },
  "wanted": "Object {\\n  \\"a\\": 1,\\n}",
}
`

exports[`test/clean-yaml-object.js TAP string diffs > must match snapshot 1`] = `
Object {
  "diff": "--- expected\\n+++ actual\\n@@ -1,5 +1,2 @@\\n-a big\\n hello\\n world\\n-string\\n-\\n",
}
`
