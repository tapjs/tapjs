---
title: Subtests
section: 5.03
redirect_from:
  - /subtests/
  - /subtests
---

# Subtests

Many test frameworks may conceive of subtests as "suites" or "describe
blocks".  Tests can be grouped into subtests with this test framework
in a few different ways.

The first is by using the
[`t.test()`](/api/#ttestname-options-function) method.  This is also
what's used under the hood when you use the [mochalike](/docs/api/mochalike/)
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

A comment introduces the subtest, and then a test point line is
emitted at the end indicating whether the subtest passed or failed.

For example:

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

## Buffered vs Unbuffered

By default, subtests run one at a time, piping each output line
immediately to the parent stream.

However, you can set `{buffered: true}` to tell `tap` to collect the
output as a string on the child test object.  

## Parallelism

Subtests are run in serial by default.

By setting a `jobs` value, you can tell tap to run subtests in
parallel.  Only buffered tests can be run in parallel.

See [Parallel Tests](/docs/api/parallel-tests/) for more on this.
