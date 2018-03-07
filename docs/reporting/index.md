---
layout: layout
title: Reporting
---

# Reporting

Tests can be reported in a variety of different ways.

When you run a test script directly, it'll always output
[TAP](/tap-format/).  The tap runner will interpret this
output, and can format it in a variety of different ways.

These are done programmatically using the
[tap-mocha-reporter](http://npm.im/tap-mocha-reporter) module, which
ports many of the report styles built into
[mocha](http://mochajs.org/#reporters).

You can specify a reporter using the `--reporter` or `-R` argument.
The following options are available:

- classic

    The default when stdout is a terminal.  Show a summary of
    each test file being run, along with reporting each failure and
    pending test.

- tap

    Just the raw TAP.  Default when stdout is not a terminal.

- doc

    Output hierarchical HTML.

- dot

    Output a dot for each pass and failure.

- dump

    Mostly for debugging tap-mocha-reporter, dumping out the TAP
    output and the way that its being interpreted.

- json

    Output results in one big JSON object.

- jsonstream

    Output results as a stream of `\n`-delimited JSON.

- landing

    A unicode airplane that lands on your terminal.

- list

    List out each test as it's run.

- markdown

    Hierarchical markdown output with a table of contents.

- min

    Just the post-test summary of failures and test count.

- nyan

    A magical cat who is also a toaster pastry.

- progress

    A progress bar.

- silent

    Output absolutely nothing

- spec

    Output based on rspec, with hierarchical indentation and
    unicode red and green checks and X's.

- xunit

    XML output popular in .NET land.
