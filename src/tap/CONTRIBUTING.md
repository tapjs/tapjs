Please consider signing [the neveragain.tech pledge](http://neveragain.tech/)

- Check the [issues](https://github.com/tapjs/node-tap/issues) to see
  stuff that is likely to be accepted.
- Every patch should have a new test that fails without the patch and
  passes with the patch.
- All tests should pass on Node.js 10.x and above.  If some tests have to
  be skipped for very old Node versions that's fine, but the functionality
  should still work as intended.
- Run `npm run snap` to re-generate the output tests whenever output is
  changed.  However, when you do this, make sure to check the change to
  ensure that it's what you intended, and that it didn't cause any other
  inadvertent changes.
