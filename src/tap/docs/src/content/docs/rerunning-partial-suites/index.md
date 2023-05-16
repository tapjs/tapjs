---
title: Re-running Partial Suites
section: 9
redirect_from:
  - /save-failures-run-changed/
  - /save-failures-run-changed
---

# Re-running Partial Test Suites

Occasionally you'll want to re-run just part of a test suite, for example, just
to run the tests that failed in the previous run, or running tests for files in
your application that have changed since the last run.  There are a few ways to
do this in node-tap.

## Save Failures to a File

With the `--save=<file>` option, you can write all failed tests to a file.  If
that file exists, then only the tests in that file will be re-run.

For example, say that you have two tests `foo.test.js` and `bar.test.js`.  When
you run `tap --save=tests.txt`, it will run both files, because the file does
not exist.

Let's say that `foo.test.js` passes, but `bar.test.js` fails.  At the end of
the test run, `bar.test.js` will be written to the `tests.txt` file.  So, if
you run `tap --save=tests.txt` again, it will _only_ run `bar.test.js`.  When
tap does this, it makes sure to keep the old coverage information around, and
only delete the coverage information related to that test file, so that you
don't end up with corrupted coverage results.

The workflow, then goes like this:

- Run tests with a `--save` argument.
- Note the failures.
- Fix the code.
- Run again with the same `--save` argument.
- When the file is empty, run it one last time to do the entire suite again.

### Bail on first failure, then resume

One useful way to work through a project is to run with both `--save=file`
and `--bail`.  In this case, tap will bail out on the first failure, and
any tests that were skipped will be put into the save file.  Fix the
failure, and then pick right back up where you were by running with `tap
--bail --save=file` again.

## Changed

If you run tap with `--changed` (or `-n`), it will only run tests if the
test file, or any of the files it covers, have changed since the last run.

Because this depends on tracking which test covered which file, it requires
that you have [coverage](/docs/coverage/) enabled (which is on by default
anyway).

### Tip: Use a Coverage Map Module

If you specify a [`--coverage-map=<file>`](/docs/coverage/coverage-map/)
option, then you can be very precise about _which_ files under test should
trigger a re-run of the tests.
