---
layout: layout
title: Test Anything Protocol
---

# Test Anything Protocol

`tap` is a JavaScript implementation of the [Test Anything
Protocol](http://testanything.org/).  TAP is a highly parseable,
human-readable, loosely-specified format for reporting test results.
It rose to popularity in the Perl community, with CPAN's
[Test](http://search.cpan.org/~exodist/Test-Simple-1.302075/) family.

This protocol is how child test processes communicate their success or
failure with their parent process.

Most of the time, you'll view `tap`'s output using one of the
[reporting options](/reporting/).  However, occasionally it's useful
to view the raw output for a variety of reasons.  For example, you may
wish to run a test file directly, or store TAP output for later
analysis.

Most of the time, you'll generate TAP by using the functions in
`tap`'s [API](/api/).  But if you have a different kind of program
that you would like to consume with `tap`'s test runner, you can just
print TAP to standard output in any way you please.

This page describes the TAP format that `tap` supports.

## Version

TAP streams generally start with `TAP version 13`.  This isn't
strictly required by `tap`, but since some other TAP implementations
_do_ require it, `tap` always outputs `TAP version 13` as the line.

There's no way to set the version in `tap`.

Since some TAP consumers get upset about an indented version
declaration, the version in Subtest streams is always stripped out.

## Plan

Every TAP stream must contain a "plan" either at the beginning or the
end of the set of test points.  The plan lists the range of test point
IDs that are expected in the TAP stream.  It can also optionally
contain a comment prefixed by a `#`.

A plan of `1..0` indicates that the test file is completely skipped,
and no tests are expected.

Examples:

```tap
1..9
1..0 # skip this test file, no tests here
5..8 # only run tests 5 through 8
```

When consuming a plan, `tap` will accept any of these.  However, when
generating test output with `tap`, you may only set the _end_ of the
plan to indicate the number of tests you expect to run (or expect to
have run).

Plans cannot be set in the middle of a test set.  That is, they have
to come before all the test points, or after all of them.

To set a plan in `tap` explicitly, use the `t.plan(n, [comment])`
function.  If you end a test by returning a [promise](/promises/) or
calling `t.end()`, then a plan will be automatically generated at the
end of the stream.

## Test Point

Sometimes called an "assert" or "test line", this is the core of the
TAP format.  A test point consists of 4 things:

1. Either `ok` or `not ok`.  This is required.  It specifies whether
   the test point is a pass or a fail.
2. A optional numeric identifier.  This is a check to ensure that test
   points are correctly ordered, and that the output is reasonable.
   `tap` does not let you set this number explicitly.  It assigns test
   point IDs based on its own internal counter.
3. An optional message, which may be prefixed by a `-` character.
4. A directive, prefixed with a `#` character.  (See below)

After a test point, there can be some YAML diagnostics, and
potentially also a buffered subtest.

```tap
1..2
ok
not ok 2 - that last test point was pretty bare
  ---
  but: this one
  has:
    - lots
    - of
    - stuff
  ...
```

The most common way to generate a test point in `tap` is to use one of
the [assertion methods](/asserts/).  Test points are also generated
for [subtests](/subtests/), and to communicate failures for unfinished
tests, exceeding a plan count, and anything else that might go wrong.

## Directives

A directive is similar to a comment, but communicates some information
about a test point.

A test point can be marked as `todo` to indicate that it is going to
be implemented later, or `skip` to indicate that the test should not
be performed in the given context.  `todo` and `skip` are

A test point associated with a
Subtest can also have a `# time=...` directive indicating how long the
subtest took to run.

Example:

```tap
not ok 1 - this will pass some day # todo
ok 2 - unix stuff # SKIP do not run on Windows
# Subtest: child test
    1..1
    ok
ok 3 - child test # time=12ms
1..3
```

In this case, we see a test that failed, but that's expected, because
it hasn't been implemented yet.  Then, test point #2, we're skipping
because we're on Windows.  Lastly, there's a child test stream that
took 12ms to complete.

Overall, a passing test stream :)

To set a `todo` or `skip` directive, pass `{ todo: reason }` or
`{skip: reason}` in either an assert or subtest method.  If you don't
wish to provide a reason, you can pass `{todo: true}` or `{skip:
true}`.  You can also mark subtests as `todo` by omitting the callback
function.

## YAML Diagnostics

Diagnostics can be used to provide additional details about a test
point.  They are a YAML object indented by 2 spaces, starting with
`---` and ending with `...`.  YAML diagnostics are associated with the
preceeding test point.

```tap
TAP version 13

ok 1 - everything is ok, just very communicative
  ---
  yaml: is
  so: true
  to:
    - every
    - vector
  ...

not ok 2 - failing, gonna tell you why
  ---
  at:
    file: foo.js
    line: 13
    column: 4
  message: This is not ok
  thrown: true
  ...

1..2
```

In `tap`, diagnostics are printed by default with failing tests, but
not with passing tests.  You can change this default by setting
`TAP_DIAG=0` in the environment to make it not print diagnostics with
failing tests or by setting `TAP_DIAG=1` to make it print diagnostics
with passing tests by default.  Setting `{ diagnostic: true }` in a
test point options object will always print diagnostics.  Setting `{
diagnostic: false }` will always omit diagnostics.

## Subtests

A [subtest](/subtests/) is an indented TAP stream that is a child of
the current set of tests.  It can be used to group test points
together, consume the output of a TAP-producing child process, or run
tests asynchronously.

"Unbuffered" subtests start with a `# Subtest: <name>` comment,
followed by the child TAP stream indented by 4 spaces, and finished
with a test point that indicates the passing status of the stream as a
whole.

"Buffered" subtest start with a test point indicating the status of
the group, and the indented child stream is wrapped in `{}` braces.
It's called "buffered" because the entire child stream has to be
parsed before the summary test point can be generated.

The summary test point ensures that TAP consumers that ignore indented
lines will at least report on the passing status based on the summary.

```tap
1..2
# Subtest: not buffered
    ok 1 - each line just printed as it comes
    ok 2 - no time to wait!
    1..2
ok 1 - not buffered

ok 2 - buffered {
    1..3
    ok 1 - this test is buffered
    ok 2 - so all the test points had to be parsed
    ok 3 - before success could be reported
}
```

Directives on buffered subtests can go either before or after the `{`
character.  When a buffered subtest has diagnostics, the `{` goes on
the line by itself after the yaml block.

```tap
1..2
ok 1 - usually would not even run this # TODO {
    ok 1 - but here we are anyway
    ok 2 - todo'ing away
    1..2
}
ok 2 - a very diagnostic subtest # time=33ms
  ---
  this: is fine
  i: am ok with the way things are proceeding
  ...
{
    1..1
    ok 1 - whatever
}
```

The most common way to run subtests is via `t.test(...)`.  See
[Subtests](/subtests/) for more info.

## Pragma

Pragmas are a way to set arbitrary switches on the parser.

The only switch that is treated specially is `strict`.  When in strict
mode, any non-TAP data is treated as an error.

```tap
TAP version 13
pragma +strict
ok 1 - this is very strict
so this line here is an error
not ok 2 - that line failed
pragma -strict
but this line here is fine
ok 3 - because garbage data is allowed in non-strict mode
1..3
```

Set pragms in `tap` by doing `t.pragma({ keys: values, ... })`.
The object can contain any number of keys, but only `strict` has any
meaning to `tap` itself.

## Bail out!

Sometimes a set of tests hits a state where there's no point
continuing.  Or, perhaps you just wish to stop on the first failure to
work on errors one at a time with a faster turnover.

In this case, TAP allows a "bail out".  A bail out is much more
extreme than a test point failure.  It means that everything should
come to a halt, all the way up to the highest level test harness.
Nothing should come after a bailout.  Any plan is dropped, test points
ignored, and so on.

```tap
TAP version 13
# Subtest: child
    # Subtest: grandchild
        1..2999
        ok 1 - here we go
        Bail out! Nope.
Bail out! Nope.
```

Bail outs in buffered tests should still print the closing `}` braces,
but no other output.

```tap
TAP version 13
not ok 1 - child {
    not ok 2 - grandchild {
        1..2999
        ok 1 - here we go
        Bail out! Nope.
    }
}
Bail out! Nope.
```

You can generate a bailout explicitly by doing `t.bailout(reason)`.
You can also have `tap` bail out on any test failure by setting
`TAP_BAIL=1` in the environment, or by setting `{ bail: true }` in a
child test options, or by running with the `tap` [command-line
interface](/cli/) and passing the `--bail` flag.

## Comments and Other Stuff

Anything that starts with a `#` and is not a directive or subtest
prefix is treated as a comment, and ignored.

Anything that isn't parseable as one of the above types of lines is
considered "extra" non-TAP data.  In strict mode, extra output is an
error.  In non-strict mode, it's ignored.

The `tap` runner ignores comments.  Non-TAP data is passed through the
reporting engine and printed to the top-level process standard output.
This means that `console.log('foo')` will make its way to the top
level, instead of being swallowed by a reporter.

You can output comments by doing `t.comment('foo')`.  This function
takes any arguments that can be passed to `console.log()`.  For
example, `t.comment('number %d and\nobj =', 1, { foo: 'bar' })` would
output:

```tap
# number 1 and
# obj = { foo: 'bar' }
```
