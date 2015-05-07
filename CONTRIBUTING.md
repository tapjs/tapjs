- Check the `TODO.md` file to see stuff that is likely to be accepted.
- Every patch should have a new test that fails without the patch and
  passes with the patch.
- All tests should pass on Node 0.8 and above.  If some tests have to
  be skipped for very old Node versions that's fine, but the
  functionality should still work as intended.
- Run `node scripts/generate-test-test.js test/test/*.js` to
  re-generate the output tests whenever output is changed.  However,
  when you do this, make sure to check the change to ensure that it's
  what you intended, and that it didn't cause any other inadvertent
  changes.
- Prefer adding cases to an existing test rather than writing a new
  one from scratch.  For example, add a new test in `test/test/*.js`
  rather than create a new test that validates test output.
