---
title: API
section: 5
redirect_from:
  - /api/
  - /api
---

# API

This is the API that you interact with when writing tests using
node-tap.

See also:

- [Getting Started](/docs/)
- [Asserts](/docs/api/asserts/)
- [Snapshot Testing](/docs/api/snapshot-testing/)
- [Promises](/docs/api/promises/)
- [Subtests](/docs/api/subtests/)
- [Mocks](/docs/api/mocks/)
- [Parallel Tests](/docs/api/parallel-tests/)
- [Filtering Tests with Grep](/docs/api/grep/)
- [Filtering Tests with Only](/docs/api/only/)
- [Mocha-like DSL](/docs/api/mochalike/)
- [Advanced Usage](/docs/api/advanced/)

## tap = require('tap')

The root `tap` object is an instance of the Test class with a few
slight modifications.

1. By default, it pipes to stdout, so running a test directly just
   dumps the TAP data for inspection.  This piping behavior is a
   _little_ bit magic -- it only pipes when you do something that
   triggers output, so there's no need to manually unpipe if you never
   actually use it to run tests.
2. Various other things are hung onto it for convenience, since it is
   the main package export.
3. The test ends automatically when `process.on('exit')` fires, so
   there is no need to call `tap.end()` explicitly.
4. Adding a `tearDown` function triggers `autoend` behavior, unless
   `autoend` was explicitly set to `false`.

   Otherwise, the `end` would potentially never arrive, if for example
   `tearDown` is used to close a server or cancel some long-running
   process, because `process.on('exit')` would never fire of its own
   accord.

   If you disable `autoend`, and _also_ use a `teardown()` function on
   the main tap instance, you need to either set a `t.plan(n)` or
   explicitly call `t.end()` at some point.

## tap.Test

The `Test` class is the main thing you'll be touching when you use
this module.

The most common way to instantiate a `Test` object by calling the
`test` method on the root or any other `Test` object.  The callback
passed to `test(name, fn)` will receive a child `Test` object as its
argument.

A `Test` object is a Readable Stream.  Child tests automatically send
their data to their parent, and the root `require('tap')` object pipes
to stdout by default.  However, you can instantiate a `Test` object
and then pipe it wherever you like.  The only limit is your imagination.

Whenever you see `t.<whatever>` in this documentation, it refers to a
Test object, but applies equally well in most cases to the root test.

### t.test([name], [options], [function])

Create a subtest.  Returns a [Promise](/docs/api/promises/) which resolves with
the parent when the child test is completed.

If the function is omitted, then it will be marked as a "todo" or
"pending" test.

If the function has a name, and no name is provided, then the function
name will be used as the test name.  If no test name is provided, then
the name will be the empty string `''`.

The function gets a Test object as its only argument.  From there, you
can call the `t.end()` method on that object to end the test, or use
the `t.plan()` method to specify how many child tests or
[asserts](/docs/api/asserts) the test will have.

If the function returns a [Promise](/docs/api/promises/) object (that is, an
object with a `then` method), then when the promise is rejected or
fulfilled, the test will be either ended or failed.  Note that this
means that an `async` function will automatically end when it's done,
because of the implicit promise.

If the function is not provided, then this will be treated as a `todo`
test.

The options object is the same as would be passed to [any
assert](/docs/api/asserts), with some additional fields that are only relevant
for child tests:

* `todo` Set to boolean `true` or a String to mark this as pending.
  (Note that this is always the case if no function is provided.)
* `skip` Set to boolean `true` or a String to mark this as skipped.
* `timeout`: The number of ms to allow the test to run.
* `bail`: Set to `true` to bail out on the first test failure.
* `autoend`: Automatically `end()` the test on the next turn of the
  event loop after its internal queue is drained.
* `diagnostic` Set to boolean `true` to show a yaml diagnostic block
  even if the test passes.  Set to `false` to never show a yaml
  diagnostic block.  (Failing tests show yaml diagnostics by default.)
* `buffered` Set to `true` to run as a buffered [subtest](/docs/api/subtests/).
  Set to `false` to run as an indented subtest.  The default is
  `false` unless `TAP_BUFFER=1` is set in the environment.
* `jobs` Set to an integer to assign the `t.jobs` property.
* `grep` Set to an array of regular expressions to [filter subtests
  with patterns](/docs/api/grep)
* `only` Set to `true` to run this test when in `runOnly` mode.
  See [filtering tests using only](/docs/api/only)
* `runOnly` Set to `true` to only run tests with `only:true` set.
* `strict` Treat invalid `TAP` output as an error.  `node-tap` will never
  _produce_ invalid `TAP` output, but this is useful when spawning child
  tests as subprocesses, or consuming `TAP` from some other source.
* `saveFixture` Set to `true` to save the folder created by `t.testdir()`
  instead of cleaning it up at the end of the test.
* `jobs` When running parallel tests, this is the number of child tests to
  run in parallel.

### t.todo([name], [options], [function])

Exactly the same as `t.test()`, but adds `todo: true` in the options.

### t.skip([name], [options], [function])

Exactly the same as `t.test()`, but adds `skip: true` in the options.

### t.only([name], [options], [function])

Exactly the same as `t.test()`, but adds `only: true` in the options.

See [filtering tests using only](/docs/api/only)

### t.setTimeout(n)

Fail the test with a timeout error if it goes longer than the specified
number of ms.  Call `t.setTimeout(0)` to remove the timeout setting.

When this is called on the top-level tap object, it sets the runners
timeout value to the specified value for that test process as well.

### t.name

This is a read-only property set to the string value provided as the `name`
argument to `t.test()`, or an empty string if no name is provided.

### t.context

This is an object which is inherited by child tests, and is a handy place
to put various contextual information.  If you set `t.context = foo`,
then it will only be inherited by child tests if it is an object.

Typically, you'll want to assign properties to it, which are shared with
child tests.  For example, a `t.beforeEach()` function might create a
database connection, assign it to `t.context.connection`, and then close
the connection in a `t.afterEach()` function.

See [Test Lifecycle Events](/docs/api/test-lifecycle-events) for more information.

### t.runOnly

Set to `true` to only run child tests that have `only: true` set in
their options (or are run with `t.only()`, which is the same thing).

### t.jobs

If you set the `t.jobs` property to a number greater than 1, then it
will enable [parallel execution](/docs/api/parallel-tests/) of all of this test's
children.

### t.cleanSnapshot = function

Assign a function to `t.cleanSnapshot` to modify formatted snapshot strings
before they are saved or compared against, in order to strip out data that
changes between test runs.

Child tests copy their parent test's `cleanSnapshot` method at the time of
creation.  The default value is an identity function that does not modify its
input.

See [Snapshot Testing](/snapshots/) for more information.

### t.formatSnapshot = function

Assign a function to `t.formatSnapshot` to turn all non-String snapshot
arguments into a snapshot string to save or compare against.

Child tests copy their parent test's `formatSnapshot` method at the time of
creation.  The default is to use [`tcompare.format`](http://npm.im/tcompare) to
convert any non-String values into snapshot strings.

If the function returns a non-string, then this result will be passed to the
default [`tcompare.format`](http://npm.im/tcompare) function.

Note that string values are not passed to this function, as its purpose is to
convert the snapshot value into a string.

See [Snapshot Testing](/snapshots/) for more information.

### t.testdir(fixtures)

Create a fresh directory with the specified fixtures, which is deleted on
test teardown.  Returns the directory name.

See [testing with fixtures](/docs/api/fixtures/) for more info.

### t.fixture(type, content)

Create a `fixture` object, to specify hard links and symbolic links in the
fixture definition object passed to `t.testdir()`.

See [testing with fixtures](/docs/api/fixtures/) for more info.

### t.tearDown(function)

Run the supplied function when `t.end()` is called, or when the `plan`
is met.  Function can return a promise to perform async actions.

Note that when called on the root `tap` export, this also triggers
`autoend` behavior.

See [Test Lifecycle Events](/docs/api/test-lifecycle-events) for more information.

### t.beforeEach(function (done, testObject) {})

Call the supplied function before every subsequent descendent test.

The `done` callback is a function to call when finished.  You can also
return a [Promise](/docs/api/promises/) rather than using the `done` callback.

See [Test Lifecycle Events](/docs/api/test-lifecycle-events) for more information.

### t.afterEach(function (done) {})

Call the supplied function after every subsequent descendent test.

The `done` callback is a function to call when finished.  You can also
return a [Promise](/docs/api/promises/) rather than using the `done` callback.

See [Test Lifecycle Events](/docs/api/test-lifecycle-events) for more information.

### t.plan(number)

Specify that a given number of tests are going to be run.

This may only be called *before* running any [asserts](/docs/api/asserts) or
child tests.

### t.end()

Call when tests are done running.  This is not necessary if `t.plan()`
was used, or if the test function returns a [Promise](/docs/api/promises/).

If you call `t.end()` explicitly more than once, an error will be
raised.

### t.bailout([reason])

Fire the proverbial ejector seat.

Use this when things are severely broken, and cannot be reasonably
handled.  Immediately terminates the entire test run.

### t.passing()

Return true if everything so far is ok.

Note that all assert methods also return `true` if they pass.

### t.comment(message)

Print the supplied message as a TAP comment.

If you provide the `--comment` flag to the test runner, then tap
comments will be printed to stderr.

Note that you can always use `console.error()` for debugging (or
`console.log()` as long as the message doesn't look like TAP formatted
data).

### t.fail(message, extra)

Emit a failing test point.  This method, and `pass()`, are the basic
building blocks of all fancier assertions.

### t.pass(message)

Emit a passing test point.  This method, and `fail()`, are the basic
building blocks of all fancier assertions.

### t.pragma(set)

Sets a `pragma` switch for a set of boolean keys in the argument.

The only pragma currently supported by the TAP parser is `strict`,
which tells the parser to treat non-TAP output as a failure.

Example:

```
const t = require('tap')
console.log('this non-TAP output is ok')
t.pragma({ strict: true })
console.log('but this will cause a failure')
```

### t.threw(error)

When an uncaught exception is raised in the context of a test, then
this method is used to handle the error.  It fails the test, and
prints out appropriate information about the stack, message, current
test, and so on.

Generally, you never need to worry about this directly.

However, this method can also be called explicitly in cases where an
error would be handled by something else (for example, a default
[Promise](/docs/api/promises/) `.catch(er)` method.)

### t.autoend(value)

If `value` is boolean `false`, then it will disable the `autoend`
behavior.  If `value` is anything other than `false`, then it will
cause the test to automatically end when nothing is pending.

Note that this is triggered by default on the root `tap` instance when
a `teardown()` function is set, unless `autoend` was explicitly
disabled.
