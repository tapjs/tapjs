/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/clean-yaml-object.js TAP string diffs > must match snapshot 1`] = `
Object {
  "found": "hello\\nworld",
  "wanted": "a big\\nhello\\nworld\\nstring\\n",
  "diff": "--- wanted\\n+++ found\\n-|\\n-a big\\n+|-\\n hello\\n world\\n-string\\n",
}
`
