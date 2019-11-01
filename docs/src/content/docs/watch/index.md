---
title: Watching Files for Changes
section: 10
redirect_from:
  - /watch/
  - /watch
---

# Watching Files for Changes

When developing a projects, it's useful to run tap in watch mode.  In this
mode, tap will watch your project for changes to test files and the program
files that they cover, and open a repl (Read, Eval, Print Loop) to control the
process.

To run tap in watch mode, run `tap --watch` or `tap -w`.

Watching files for changes requires that [coverage](/docs/coverage/) is enabled,
because it uses NYC to determine which test is relevant to which file being
changed.

At the start of the watch process, tap runs the full test suite.  Thereafter,
it automatically runs the files that are necessary as they change.

Any tests that fail will be re-run on the next file change, even if they are
not connected to the file that changed.

## TAP Repl Commands

* `r [<filename>]`
  Run test suite again, or just run the supplied filename.  (Use this to add
  tests to the suite, if they're not already being watched.)

* `u [<filename>]`
  Update snapshots in the suite, or in the supplied filename.  This supplied
  file will be added to the suite if it's not already included.

* `n`
  Run the suite with [`--changed`](/docs/save-failures-run-changed/).  This is
  useful when resuming after a pause.

* `p`
  Pause/resume the file watcher.

* `c [<report style>]`
  Run coverage report. Default to 'text' style.

* `exit`
  Exit the repl.  You can also use `Ctrl-C` or `Ctrl-D` to terminate the repl,
  if a test run is not in progress.

* `clear`
  Delete all coverage info and re-run the test suite.

* `cls`
  Clear the screen.

## Adding Tests

Due to the way that tap detects which files are covered by each change, _new_
files that are added to the test suite will not automatically be detected by
the watcher.

Use the `r <filename>` or `u <filename>` commands to add them to the suite.

## Tip: Use a Coverage Map Module

If you specify a [`--coverage-map=<file>`](/docs/coverage/coverage-map/)
option, then you can be very precise about _which_ files under test should
trigger a re-run of the tests.
