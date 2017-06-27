import * as tap from '../lib/root.js';

tap.pass("passes")

tap.tearDown((x) => {
  
})
tap.beforeEach(() => {
  let a = 1;
})
tap.afterEach(() => {
  let b = 2;
})
tap.comment("this is", "a comment");

tap.test("a test", (t) => {
  tap.pass("works")
  t.pass("also works")
})