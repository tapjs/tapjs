---
layout: layout
title: Watching Files for Changes
---

# Watching Files for Changes

When developing a projects, it's useful to run tap in watch mode.  In this
mode, tap will watch your project for changes to test files and the program
files that they cover.

To run tap in watch mode, run `tap --watch` or `tap -w`.

Watching files for changes requires that [coverage](/coverage/) is enabled,
because it uses NYC to determine which test is relevant to which file being
changed.

At the start of the watch process, tap runs the full test suite.  Thereafter,
it only runs the files that are necessary.

Any tests that fail will be re-run on the next file change, even if they are
not connected to the file that changed.

## Adding Tests

Due to the way that tap detects which files are covered by each change, _new_
files that are added to the test suite will not automatically be detected by the watcher.

When a new test file is added, press `Ctrl-C` to kill the process, and then
re-run the test watcher.

## Tip: Use a Coverage Map Module

If you specify a [`--coverage-map=<file>`](/coverage-map/) option, then you can
be very precise about _which_ files under test should trigger a re-run of the
tests.
