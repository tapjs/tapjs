---
title: Reporting
section: 7
redirect_from:
  - /reporting/
  - /reporting
---

# Reporting

Tests can be reported in a variety of different ways.

When you run a test script directly, it'll always output
[TAP](/tap-protocol/).  The tap runner will interpret this output, and can
format it in a variety of different ways.

Node-tap includes 2 reporting engines, and you can extend either one, or
consume the TAP formatted output in custom modules of your own.

The newer React-based reporter is called [treport](http://npm.im/treport).
It uses [ink](http://npm.im/ink) to provide live feedback about tests in
progress.

The older streams-based bundled reporting engine is
[tap-mocha-reporter](http://npm.im/tap-mocha-reporter), so named because it
ports many of the report styles built into
[mocha](http://mochajs.org/#reporters).

The `--reporter` or `-R` argument on the command line can specify:

- Any built-in reporter from either of these two libraries.
- The name of a command-line program which parses a TAP stream.  The
  `--reporter-arg=<arg>` or `-r<arg>` option can be specified one or more
  times to provide a list of arguments to pass to CLI reporters.
- The name of a Node module that exports either a Stream or a treport-style
  React.Component class.

The built-in reports are:

### base

The default when stdout is a terminal and colors are enabled.  Also the
class to extend to create new treport reporters.  Does all the things,
handles all the edge cases, and ends with a pleasant surprise.

### terse

A lot like Base, but says a lot less.  No timer, no list of tests
concurrently running, nothing printed on test passing.  Just the failures
and the terse summary.

### specy

A `spec` style reporter with the current running jobs and Terse summary and
footer.

### tap

Setting `--reporter=tap` will dump the output as a raw TAP stream.

This is the default when stdout is _not_ a terminal, or colors are
disabled.

### classic

The old default.  Show a summary of each test file being run, along with
reporting each failure and pending test.

### silent

Output absolutely nothing.  Of course, if tests run `console.log` or
`console.error`, then that will be printed to the terminal.

### spec

Output based on rspec, with hierarchical indentation and unicode red and
green checks and X's.

### xunit

XML output popular in .NET land.

### json

Output results in one big JSON object.

### jsonstream

Output results as a stream of `\n`-delimited JSON.

### dot

Output a dot for each pass and failure.

### list

List out each test as it's run.

### min

Just the post-test summary of failures and test count.

### nyan

A magical cat who is also a toaster pastry.

### dump

Mostly for debugging tap-mocha-reporter, dumping out the TAP output and the
way that its being interpreted.
