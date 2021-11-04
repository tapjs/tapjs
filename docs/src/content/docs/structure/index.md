---
title: Structuring Tests
section: 2
redirect_from:
  - /structure/
  - /structure
---

# Writing Well-Structured Tests with Tap

Tests should be a tool to help understand a program and diagnose problems
when they occur.  There are two tools that you can use to organize your
tests so that they help in this process: [**test files**](#test-files) (aka
suites) and [**subtest**](#subtests-within-a-test-suite) blocks within a
test file.

What follows is opinionated, and your use case may vary.  There is no
objectively right or wrong way to write tests; if it helps you create
better software, then that's the point.  This is one set of patterns, but
tap is very flexible if you prefer other patterns instead.

## Test Files

Each file that is run by tap defines a "suite".  The ideal structure and
organization of these suites will depend on what kind of program you are
testing.

Test files are run [in parallel](/docs/api/parallel-tests/) by default, and
in separate processes from one another, so they should not rely on being
run in a specific order, or share state with one another.  (If you need to
manage shared fixtures before or after the entire test run, you can use
[`--before` and `--after` modules](/docs/api/test-lifecycle-events/).)

### Unit-Focused: For Programs With Several Modular Units

In programs with multiple files (for example, a library split out into
multiple classes), a common pattern is to have one test file whose name
matches a file in the library.

For example, if you have `lib/base.js` that defines a base class, and
`lib/thing.js` and `lib/widget.js` that extend it, then you might create
the following test files:

```
test/base.js
test/thing.js
test/widget.js
```

If you also have a `lib/util/bits.js` that exports some reusable bits, you
can add `test/util/bits.js` to the list as well.

```
test/base.js
test/thing.js
test/widget.js
test/util/bits.js
```

To ensure that you are fully testing each unit with each test suite, you
can add a simple [coverage map](/docs/coverage/coverage-map/) module like so:

```js
// map.js
module.exports = test => test.replace(/^test/, 'lib')
```

Top it off with the following configuration in your `package.json` file:

```json
{
  "scripts": {
    "test": "tap"
  },
  "tap": {
    "coverage-map": "map.js"
  }
}
```

This is a *unit-focused* testing strategy, which can deliver a very
powerful way to maintain good test coverage and clear connection from a
test to the system under test.  It's easy for new contributors to guess
correctly about where to add a test for a new contribution, and it's easy
to figure out where to go digging in the code when a test breaks.

However, it is less self-documenting than a behavior-focused testing
strategy, since it relies on the unit organization of the system itself to
be somewhat intuitive.  If your library's class heirarchy and unit
structure is difficult to understand, then your unit tests will be as well!

A few examples of this pattern:

- [tap](https://github.com/tapjs/node-tap)
- [tar](https://github.com/npm/node-tar)
- [treport](https://github.com/tapjs/treport)
- [tformat](https://github.com/tapjs/tformat)
- [pacote](https://github.com/npm/pacote)
- [minipass-fetch](https://github.com/npm/minipass-fetch)
- [npm](https://github.com/npm/npm)

#### Alternative style: `*.test.js`

Rather than using a `test` folder, sometimes it's nice to keep the tests
right inline with the code itself.  A common pattern is to name the test
suites after the unit that they cover, but with a `.test.js` filename
extension rather than merely `.js`.

Using the previous example, you'd end up with a structure like this:

```
lib/base.js
lib/base.test.js
lib/thing.js
lib/thing.test.js
lib/widget.js
lib/widget.test.js
lib/util/bits.js
lib/util/bits.test.js
```

The `map.js` module for this program would look like this:

```js
// map.js
module.exports = test => test.replace(/\.test\.js$/, '.js')
```

One advantage of this style is that the tests are closer to the code that
they cover.  If the codebase contains a lot of folder nesting, then this
can avoid having to do stuff like:
`require('../../../../../../lib/hope/its/the/right/number/of/dots.js')`

### Behavior-Focused: For Programs With a Single Unit

If your module being tested is essentially one "thing", then it might not
make sense to split the test suites up in this way.  It's not going to add
much structure to have a single test file that tests `./index.js`.

In modules like this, it may make sense to make each test file reflect a
use case or bug that was reproduced by the test in question.

So, to start, you might have a single `test/basic.js` that loads the file
and tests the basic API.  When the first bug is found, you can add a
failing test at `test/bug-description.js`, and then update the code to make
the test pass.  When features are added, you can add example code at
`test/feature-description.js` that demonstrates using the feature, and
then update the code to make it pass by implementing the feature.

Over time, you might end up with something like this:

```
index.js
test/array-buffers.js
test/auto-end-deferred-when-paused.js
test/basic.js
test/collect-with-error-end.js
test/collect.js
test/dest-write-returns-nonboolean.js
test/destroy.js
test/emit-during-end-event.js
test/empty-buffer-end-with-encoding.js
test/empty-stream-emits-end-without-read.js
test/end-missed.js
test/end-returns-this.js
test/end-twice.js
test/is-stream.js
test/iteration-unsupported.js
test/iteration.js
test/pipe-ended-stream.js
test/readable-only-when-buffering.js
```

(This is the actual set of test suites from the
[minipass](https://github.com/isaacs/minipass) module.)

This is a strategy that more easily fits into a TDD or BDD workflow.  A
failing test file is added with a name that describes the intended behavior
or bug (red).  Then the code is modified to implement that behavior or fix
that bug, without breaking any other tests (green).  Lastly, the code is
edited for performance, elegance, and clarity, without breaking any tests
(refactor).

### Mixing the Strategies

You are 100% allowed to mix and match these strategies!  Unit tests can
have BDD or TDD focused subtests, or live right alongside regression
tracking and bug-focused tests.  You can also create a folder full of TDD
style tests that are connected to a single unit (and mapped to it with a
coverage-map file.)

The tests for node-tap itself primarily follow a unit-focused approach with
a [coverage-map
file](https://github.com/tapjs/node-tap/blob/master/coverage-map.js), but
the ["run"](https://github.com/tapjs/node-tap/tree/master/test/run) and
["settings"](https://github.com/tapjs/node-tap/tree/master/test/settings)
units both have several separate suites to test and track different
behavior elements.

## Subtests within a Test Suite

While it's perfectly fine to just write some assertions at the top level
for simple tests (whatever gets your code tested!), that's not always the
best way to ensure that your tests are approachable and easy to reason
about.  That's where [subtests](/docs/api/subtests/) come in.

Within a test file, the subtests are run sequentially by default, but _may_
be [run in parallel](/docs/api/parallel-tests/) if you opt into that
behavior by setting the `t.jobs` property on one of the test objects.

Subtests group a set of assertions.  Some test frameworks call these
"behaviors" or "suites", but essentially they're just a function that does
some things and runs some assertions.  There is no hard and fast rule about
what must be grouped or not, but a good rule of thumb is that if an
assertion is a sentence, then a subtest is a paragraph.

So, instead of something like this:

```js
// sloppy mess, don't do this!
const t = require('tap')
const myThing = require('./my-thing.js')

t.equal(myThing.add(1, 2), 3, '1 added to 2 is 3')
t.throws(() => myThing.add('dog', 'cat'), 'cannot add dogs and cats')
t.equal(myThing.times(2, 2), 4, '2 times 2 is 4')
t.equal(myThing.add(2, -1), 1, '2 added to -1 is 1')
t.equal(myThing.times(-1, 3), 3, '-1 times 3 is -3')
t.throws(() => myThing.times('best', 'worst'), 'can only times numbers')
```

You could do this instead, which is much neater and easier to read:

```js
// much better, so clean and nice
const t = require('tap')
const myThing = require('./my-thing.js')

t.test('add() can add two numbers', t => {
  t.equal(myThing.add(1, 2), 3, '1 added to 2 is 3')
  t.equal(myThing.add(2, -1), 1, '2 added to -1 is 1')
  t.throws(() => myThing.add('dog', 'cat'), 'cannot add dogs and cats')
  t.end()
})

t.test('times() can multiply two numbers', t => {
  t.equal(myThing.times(2, 2), 4, '2 times 2 is 4')
  t.equal(myThing.times(-1, 3), 3, '-1 times 3 is -3')
  t.throws(() => myThing.times('best', 'worst'), 'can only times numbers')
  t.end()
})
```

To end a subtest, you can either call `t.end()` at some point, or you can
call `t.plan(number)` with the number of assertions you plan to do, or you
can return a Promise (for example, from an `async` function).  This would
be another way to define the subtests above, without having to call
`t.end()`:

```js
// using async functions, no t.end() necessary
const t = require('tap')
const myThing = require('./my-thing.js')

t.test('add() can add two numbers', async t => {
  t.equal(myThing.add(1, 2), 3, '1 added to 2 is 3')
  t.equal(myThing.add(2, -1), 1, '2 added to -1 is 1')
  t.throws(() => myThing.add('dog', 'cat'), 'cannot add dogs and cats')
})

t.test('times() can multiply two numbers', async t => {
  t.equal(myThing.times(2, 2), 4, '2 times 2 is 4')
  t.equal(myThing.times(-1, 3), 3, '-1 times 3 is -3')
  t.throws(() => myThing.times('best', 'worst'), 'can only times numbers')
})
```

Subtests can also be nested indefinitely.  For example, you might have a
way to perform the same action in two different ways, but yielding the same
result.  In a case like this, you can define both of them as children of a
shared parent subtest for the feature.  In this example, we're using a
[fixture](/docs/api/fixtures/) which will get automatically removed after
the subtest block is completed and requiring our module defining
[mocks](/docs/api/mocks/) which is only going to be available in this scope.


```js
t.test('reads symbolic links properly', t => {
  // setup the environment
  // this will automatically get torn down at the end
  const dir = t.testdir({
    file: 'some file contents',
    link: t.fixture('symlink', 'file'),
  })

  // requires a module while mocking
  // one of its internally required module
  const myModule = t.mock('../my-module.js', {
    fs: {
      readFileSync: () => 'file'
    }
  })

  // test both synchronously and asynchronously.
  // in this case we know there are 2 subtests coming,
  // but we could also have called t.end() at the bottom
  t.plan(2)

  t.test('sync', async t => {
    t.equal(myModule.readSync(dir + '/link'), 'file')
    t.equal(myModule.typeSync(dir + '/link'), 'SYMBOLIC LINK')
  })

  t.test('async', async t => {
    t.equal(await myModule.read(dir + '/link'), 'file')
    t.equal(await myModule.type(dir + '/link'), 'SYMBOLIC LINK')
  })
})
```

## Don't Forget: Just Write Some Tests

When in doubt, just write some tests.  It's almost always better to just
write some tests than to worry about the ideal test structure for your
program.  TDD, BDD, and unit testing are all perfectly fine, but if you
don't write some tests, they don't matter.

A good way to avoid analysis paralysis is to just do the simplest thing you
can, and then build up from there, and refactor when it seems like there
might be a better way.  Create a `test/basic.js` for your module, with some
assertions.  When it feels like there's more than one "thing" being tested,
split it up into subtests.  When the subtests don't seem related to each
other, or if you have multiple different setup and teardown blocks, then
split them into separate test suite files.  Always add a new test (either
as a new test file, or within an existing one) for each bug-fix and feature
change.

Over time, you'll figure out the structure that works best for any given
program.
