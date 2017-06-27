import * as tap from '../lib/root.js';

tap.pass("passes")

tap.test("a test", (t) => {
  tap.pass("works")
  t.pass("also works")
})