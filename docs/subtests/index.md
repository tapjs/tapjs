---
layout: layout
title: Subtests
---

# Subtests

Many test frameworks may conceive of subtests as "suites" or "describe
blocks".  Tests can be grouped into subtests with this test framework
in a few different ways.

The first is by using the
[`t.test()`](/api/#ttestname-options-function) method.  This is also
what's used under the hood when you use the [mochalike](/mochalike/)
API.

The second way to run a subtest is by using the
[`t.spawn()`](/advanced/#tspawncommand-arguments-options-name-extra)
method.

Lastly, you can consume [TAP](http://testanything.org/) data being
piped into the test process by using the
[`t.stdin()`](/advanced/#tstdin) method.

## Subtest Formats

Subtest output is indented, and a summary test point prints `ok` or
`not ok` based on whether the subtest passed or failed.  Bailouts in a
subtest trigger a bailout in the top-most parent test.

There are 2 different ways that this framework can output subtests.
Both are backwards compatible to TAP parsers that do not understand
subtests, provided that they correctly ignore data that they do not
understand.

### Unbuffered Subtests

The default format is an "unbuffered" subtest.  In this mode, a
comment introduces the subtest, and then a test point line is emitted
at the end indicating whether the subtest passed or failed.  For
example:

```tap
TAP version 13
# Subtest: foo
    # Subtest: bar
        1..1
        ok 1 - this is fine
    ok 1 - bar # time=1.831ms

    1..1
ok 1 - foo # time=11.106ms

1..1
# time=19.039ms
```

In this mode, the child test output is printed line by line as it
comes.  The pass/fail status of the subtest doesn't matter until the
very end, so there's no need to buffer the output.

However, this means that reading the output as a human can be a bit
more tedious, because one must skip to the bottom to see if it's worth
investigating.

### Buffered Subtests

If the `{buffered: true}` option is set on the `t.spawn()` or
`t.test()` function call, or if the `TAP_BUFFER=1` environment
variable is set, then subtests will be output in buffered mode.

In this mode, the summary test point is printed _before_ printing the
indented subtest output, and the child output is wrapped in a `{...}`
block.

For example:

```tap
TAP version 13
ok 1 - foo {
    ok 1 - bar {
        1..1
        ok 1 - this is fine
    }

    1..1
}

1..1
# time=17.088ms
```

If the summary test point has additional diagnostics, then they are
printed before the `{`.  For example:

```tap
TAP version 13
ok 1 - foo
  ---
  some: diags
  ...
{
    ok 1 - bar {
        1..1
        ok 1 - this is fine
    }

    1..1
}

1..1
# time=18.16ms
```

This mode is a bit more convenient for a human to read, because there
is a little bit less visual noise, many tools can fold or jump between
braces, and the question of "do I need to investigate" is answered up
front.

However, it does require that the subtest output is entirely buffered
before any of it can be printed.  While this is not usually an
enormous amount of data, it can make certain timing-related issues
harder to notice when watching tests in real time.

## Parallelism

Subtests are run in serial by default.

By setting a `jobs` value, you can tell tap to run subtests in
parallel.  Only buffered tests can be run in parallel.

See [Parallel Tests](/parallel/) for more on this.
