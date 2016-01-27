---
layout: layout
---

# API

This is the API that you interact with when writing tests using
node-tap.

## tap = require('tap')

The root `tap` object is an instance of the Test class with a few
slight modifications.

1. The `tearDown()`, `plan()`, and `test()` methods are pre-bound onto
   the root object, so that you don't have to call them as methods.
2. By default, it pipes to stdout, so running a test directly just
   dumps the TAP data for inspection.  (You can of course
   `tap.unpipe(process.stdout)` if you want to direct it elsewhere.)
3. Various other things are hung onto it for convenience, since it is
   the main package export.
4. The test ends automatically when `process.on('exit')` fires, so
   there is no need to call `tap.end()` explicitly.
5. Adding a `tearDown` function triggers `autoend` behavior.
   Otherwise, the `end` would potentially never arrive, if for example
   `tearDown` is used to close a server or cancel some long-running
   process, because `process.on('exit')` would never fire of its own
   accord.

## tap.synonyms

A list of all of the canonical assert methods and their synonyms.

## tap.mochaGlobals()

Method that injects `describe()` and `it()` into the global
environment for mocha-like BDD style test definition.

This feature is incomplete, experimental, and may change drastically
in the future.  Feedback is welcome.

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

### t.test([name], [options], [function])

Create a subtest.

If the function is omitted, then it will be marked as a "todo" or
"pending" test.

If the function has a name, and no name is provided, then the function
name will be used as the test name.  If no test name is provided, then
the name will be `(unnamed test)`.

The function gets a Test object as its only argument.  From there, you
can call the `t.end()` method on that object to end the test, or use
the `t.plan()` method to specify how many child tests or asserts the
test will have.

If the function returns a `Promise` object (that is, an object with a
`then` method), then when the promise is rejected or fulfilled, the
test will be either ended or failed.

If the function is not provided, then this will be treated as a `todo`
test.

The options object is the same as would be passed to any assert, with
two additional fields that are only relevant for child tests:

* `timeout`: The number of ms to allow the test to run.
* `bail`: Set to `true` to bail out on the first test failure.
* `autoend`: Automatically `end()` the test on the next turn of the
  event loop after its internal queue is drained.

### t.tearDown(function)

Run the supplied function when `t.end()` is called, or when the `plan`
is met.

Note that when called on the root `tap` export, this also triggers
`autoend` behavior.

### t.beforeEach(function (done) {})

Call the supplied function before every subsequent descendent test.

The `done` callback is a function to call when finished.  You can also
return a Promise rather than using the `done` callback.

### t.afterEach(function (done) {})

Call the supplied function after every subsequent descendent test.

The `done` callback is a function to call when finished.  You can also
return a Promise rather than using the `done` callback.

### t.autoend()

Automatically end the test as soon as there is nothing pending in its
queue.

The automatic end is deferred with a `setTimeout`, and any new action
will cancel and re-schedule the timer.  Nonetheless, calling this
method means that any slow asynchronous behavior may be lost, if it
comes after the `end()` is auto-triggered.

This behavior is triggered on the root `tap` object when
`tap.tearDown()` is called.

### t.plan(number)

Specify that a given number of tests are going to be run.

This may only be called *before* running any asserts or child tests.

### t.end()

Call when tests are done running.  This is not necessary if `t.plan()`
was used, or if the test function returns a Promise.

If you call `t.end()` explicitly more than once, an error will be
raised.

### t.bailout([reason])

Pull the proverbial ejector seat.

Use this when things are severely broken, and cannot be reasonably
handled.  Immediately terminates the entire test run.

### t.passing()

Return true if everything so far is ok.

Note that all assert methods also return `true` if they pass.

### t.comment(message)

Print the supplied message as a TAP comment.

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
var t = require('tap')
console.log('this non-TAP output is ok')
t.pragma({ strict: true })
console.log('but this will cause a failure')
```

## Asserts

The `Test` object has a collection of assertion methods, many of which
are given several synonyms for compatibility with other test runners
and the vagaries of human expectations and spelling.  When a synonym
is multi-word in `camelCase` the corresponding lower case and
`snake_case` versions are also created as synonyms.

All assertion methods take optional `message` and `extra` arguments as
the last two params.  The `message` is the name of the test.  The
`extra` argument can contain any arbitrary data about the test, but
the following fields are "special".

* `todo` Set to boolean `true` or a String to mark this as pending
* `skip` Set to boolean `true` or a String to mark this as skipped
* `at` Generated by the framework.  The location where the assertion
  was called.  Do not set this field.
* `stack` Generated by the framework.  The stack trace to the point
  where the assertion was called.  Do not set this field.

### t.ok(obj, message, extra)

Verifies that the object is truthy.

Synonyms: `t.true`, `t.assert`

### t.notOk(obj, message, extra)

Verifies that the object is not truthy.

Synonyms: `t.false`, `t.assertNot`

### t.error(obj, message, extra)

If the object is an error, then the assertion fails.

Note: if an error is encountered unexpectedly, it's often better to
simply throw it.  The Test object will handle this as a failure.

Synonyms: `t.ifErr`, `t.ifError`

### t.throws(fn, [expectedError], message, extra)

Expect the function to throw an error.  If an expected error is
provided, then also verify that the thrown error matches the expected
error.

If the function has a name, and the message is not provided, then the
function name will be used as the message.

If the function is not provided, then this will be treated as a `todo`
test.

Caveat: if you pass a `extra` object to t.throws, then you MUST also
pass in an expected error, or else it will read the diag object as the
expected error, and get upset when your thrown error doesn't match
`{skip:true}` or whatever.

For example, this will not work as expected:

```javascript
t.throws(function() {throw new Error('x')}, { skip: true })
```

But this is fine:

```javascript
// note the empty 'expected error' object.
// since it has no fields, it'll only verify that the thrown thing is
// an object, not the value of any properties
t.throws(function() {throw new Error('x')}, {}, { skip: true })
```

The expected error is tested against the throw error using `t.match`,
so regular expressions and the like are fine.  If the expected error
is an `Error` object, then the `stack` field is ignored, since that
will generally never match.

Synonyms: `t.throw`

### t.doesNotThrow(fn, message, extra)

Verify that the provided function does not throw.

If the function has a name, and the message is not provided, then the
function name will be used as the message.

If the function is not provided, then this will be treated as a `todo`
test.

Note: if an error is encountered unexpectedly, it's often better to
simply throw it.  The Test object will handle this as a failure.

Synonyms: `t.notThrow`

### t.equal(found, wanted, message, extra)

Verify that the object found is exactly the same (that is, `===`) to
the object that is wanted.

Synonyms: `t.equals`, `t.isEqual`, `t.is`, `t.strictEqual`,
`t.strictEquals`, `t.strictIs`, `t.isStrict`, `t.isStrictly`

### t.notEqual(found, notWanted, message, extra)

Inverse of `t.equal()`.

Verify that the object found is not exactly the same (that is, `!==`) as
the object that is wanted.

Synonyms: `t.inequal`, `t.notEqual`, `t.notEquals`,
`t.notStrictEqual`, `t.notStrictEquals`, `t.isNotEqual`, `t.isNot`,
`t.doesNotEqual`, `t.isInequal`

### t.same(found, wanted, message, extra)

Verify that the found object is deeply equivalent to the wanted
object.  Use non-strict equality for scalars (ie, `==`).

Synonyms: `t.equivalent`, `t.looseEqual`, `t.looseEquals`,
`t.deepEqual`, `t.deepEquals`, `t.isLoose`, `t.looseIs`

### t.notSame(found, notWanted, message, extra)

Inverse of `t.same()`.

Verify that the found object is not deeply equivalent to the
unwanted object.  Uses non-strict inequality (ie, `!=`) for scalars.

Synonyms: `t.inequivalent`, `t.looseInequal`, `t.notDeep`,
`t.deepInequal`, `t.notLoose`, `t.looseNot`

### t.strictSame(found, wanted, message, extra)

Strict version of `t.same()`.

Verify that the found object is deeply equivalent to the wanted
object.  Use strict equality for scalars (ie, `===`).

Synonyms: `t.strictEquivalent`, `t.strictDeepEqual`, `t.sameStrict`,
`t.deepIs`, `t.isDeeply`, `t.isDeep`, `t.strictDeepEquals`

### t.strictNotSame(found, notWanted, message, extra)

Inverse of `t.strictSame()`.

Verify that the found object is not deeply equivalent to the unwanted
object.  Use strict equality for scalars (ie, `===`).

Synonyms: `t.strictInequivalent`, `t.strictDeepInequal`,
`t.notSameStrict`, `t.deepNot`, `t.notDeeply`, `t.strictDeepInequals`,
`t.notStrictSame`

### t.match(found, pattern, message, extra)

Verify that the found object matches the pattern provided.

If pattern is a regular expression, and found is a string, then verify
that the string matches the pattern.

If the pattern is a string, and found is a string, then verify that
the pattern occurs within the string somewhere.

If pattern is an object, then verify that all of the (enumerable)
fields in the pattern match the corresponding fields in the object
using this same algorithm.  For example, the pattern `{x:/a[sdf]{3}/}`
would successfully match `{x:'asdf',y:'z'}`.

This is useful when you want to verify that an object has a certain
set of required fields, but additional fields are ok.

Synonyms: `t.has`, `t.hasFields`, `t.matches`, `t.similar`, `t.like`,
`t.isLike`, `t.includes`, `t.include`, `t.contains`

### t.notMatch(found, pattern, message, extra)

Interse of `match()`

Verify that the found object does not match the pattern provided.

Synonyms: `t.dissimilar`, `t.unsimilar`, `t.notSimilar`, `t.unlike`,
`t.isUnlike`, `t.notLike`, `t.isNotLike`, `t.doesNotHave`,
`t.isNotSimilar`, `t.isDissimilar`

### t.type(object, type, message, extra)

Verify that the object is of the type provided.

Type can be a string that matches the `typeof` value of the object, or
the string name of any constructor in the object's prototype chain, or
a constructor function in the object's prototype chain.

For example, all the following will pass:

```javascript
t.type(new Date(), 'object')
t.type(new Date(), 'Date')
t.type(new Date(), Date)
```

Synonyms: `t.isa`, `t.isA`

## Advanced Usage

These methods are primarily for internal use, but can be handy in some
unusual situations.  If you find yourself using them frequently, you
*may* be Doing It Wrong.  However, if you find them useful, you should
feel perfectly comfortable using them.

Please [let us know](https://github.com/isaacs/node-tap/issues) if you
frequently encounter situations requiring advanced usage, because this
may indicate a shortcoming in the "non-advanced" API.

### t.stdin()

Parse standard input as if it was a child test named `/dev/stdin`.

This is primarily for use in the test runner, so that you can do
`some-tap-emitting-program | tap other-file.js - -Rnyan`.

### t.spawn(command, arguments, [options], [name], [extra])

Sometimes, instead of running a child test directly inline, you might
want to run a TAP producting test as a child process, and treat its
standard output as the TAP stream.

That's what this method does.

It is primarily used by the executable runner, to run all of the
filename arguments provided on the command line.

The `options` object is passed to `child_process.spawn`, and can
contain stuff like stdio directives and environment vars.

The `extra` arg is the same that would be passed to any assertion or
child test, with the addition of the following fields:

* `bail`: Set to `true` to bail out on the first failure.  This is
  done by checking the output and then forcibly killing the process,
  but also sets the `TAP_BAIL` environment variable, which node-tap
  uses to set this field internally as well.
* `timeout`: The number of ms to allow the child process to continue.
  If it goes beyond this time, the child process will be forcibly
  killed.

### t.addAssert(name, length, fn)

This is used for creating assertion methods on the `Test` class.

It's a little bit advanced, but it's also super handy sometimes.  All
of the assert methods below are created using this function, and it
can be used to create application-specific assertions in your tests.

The name is the method name that will be created.  The length is the
number of arguments the assertion operates on.  (The `message` and
`extra` arguments will alwasy be appended to the end.)

For example, you could have a file at `test/setup.js` that does the
following:

```javascript
var tap = require('tap')

// convenience
if (module === require.main) {
  tap.pass('ok')
  return
}

// Add an assertion that a string is in Title Case
// It takes one argument (the string to be tested)
tap.Test.prototype.addAssert('titleCase', 1, function (str, message, extra) {
  message = message || 'should be in Title Case'
  // the string in Title Case
  // A fancier implementation would avoid capitalizing little words
  // to get `Silence of the Lambs` instead of `Silence Of The Lambs`
  // But whatever, it's just an example.
  var tc = str.toLowerCase().replace(/\b./, function (match) {
    return match.toUpperCase()
  })

  // should always return another assert call, or
  // this.pass(message) or this.fail(message, extra)
  return this.equal(str, tc, message, extra)
})
```

Then in your individual tests, you'd do this:

```javascript
require('./setup.js') // adds the assert
var tap = require('tap')
tap.titleCase('This Passes')
tap.titleCase('however, tHis tOTaLLy faILS')
```

### t.endAll()

Call the `end()` method on all child tests, and then on this one.

### t.current()

Return the currently active test.
