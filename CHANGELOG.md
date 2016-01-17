## 5.1

All about the cli flags!

Support `--node-arg=...` and `--nyc-arg=...` command line flags.

Add support for coverage checking using `--statements=95` etc.

Test for executable-ness more consistently across platforms.

## 5.0

Make it impossible to `try/catch` out of plan/end abuses.  Calling
`t.end()` more than once, or having a number of tests that doesn't
match the `plan()` number, is always a failure.

Push thrown errors to the front of the action queue.  This means that,
even if other things are pending, an uncaught exception or a plan/end
bug, will always take the highest priority in what gets output.

Many updates to nyc, spawn-wrap, and foreground-child, so that tap now
reliably works on Windows (and a [ci to prove
it](https://ci.appveyor.com/project/isaacs/node-tap).)

Moved into the [tapjs org](https://github.com/tapjs).

## 4.0

Raise an error if `t.end()` is explicitly called more than once.  This
is a breaking change, because it can cause previously-passing tests to
fail, if they did `t.end()` in multiple places.

Support promises returned by mochalike functions.

## 3.1

Support sending coverage output to both codecov.io and coveralls.io.

## 3.0

Upgrade to nyc 5.  This means that `config.nyc.exclude` arrays in
`package.json` now take globs instead of regular expressions.

## 2.3

Use the name of the function supplied to `t.test(fn)` as the test name
if a string name is not provided.

Better support for sparse arrays.

## 2.2

Add support for Codecov.io as well as Coveralls.io.

Catch failures that come after an otherwise successful test set.

Fix timing of `t.on('end')` so that event fires *before* the next
child test is started, instead of immediately after it.

`t.throws()` can now be supplied a regexp for the expected Error
message.

## 2.1

Exit in failure on root test bailout.

Support promises returned by `t.test(fn)` function.

## 2.0

Update matching behavior using [tmatch](http://npm.im/tmatch).  This
is a breaking change to `t.match`, `t.similar`, `t.has`, etc., but
brings them more in line with what people epirically seem to expect
these functions to do.

Deal with pending handles left open when a child process gets a
`SIGTERM` on timeout.

Remove domains in favor of more reliable and less invasive state and
error-catching bookkeeping.

## 1.4

Add `t.contains()` alias for `t.match()`.

Use `deeper` for deep object similarity testing.

Treat unfinished tests as failures.

Add support for pragmas in TAP output.

## 1.3

Bind all Test methods to object.

Add `t.tearDown()`, `t.autoend()`, so that the root export is Just
Another Test Object, which just happens to be piping to stdout.

Support getting an error object in bailout()

## 1.2

Better support for exit status codes.

## 1.1

Add coverage using nyc.

If a `COVERALLS_REPO_TOKEN` is provided, then run tests with coverage,
and pipe to coveralls.

## 1.0

Complete rewrite from 0.x.

Child tests implemented as nested TAP output, similar to Perl's `Test::More`.

## 0.x

The 0.x versions used a "flattened" approach to child tests, which
requires some bookkeeping.

It worked, mostly, but its primary success was inspiring
[tape](http://npm.im/tape) and tap v1 and beyond.
