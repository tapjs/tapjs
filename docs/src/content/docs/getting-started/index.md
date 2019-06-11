---
title: Getting Started
type: documentation
section: 1
---

# tap basics

This tutorial will teach you just enough to get up and running with tap in your
Node.js programs.

## install tap

Use npm to install tap:

```bash
npm install tap --save-dev
```

The `save-dev` part makes it saved to your package.json's `devDependencies`
list instead of as a regular dependency.

Next, update your package.json so that the test script invokes tap:

```json
{
  "name": "my-awesome-module",
  "version": "1.2.3",
  "devDependencies": {
    "tap": "^13.0.0"
  },

  "scripts": {
    "test": "tap"
  }
}
```

## test files

Create a folder for your tests.  Call the folder `test` so that people
can guess what it's for:

```bash
mkdir test/
```

It's a good practice to break up a big test suite into multiple files.
Each file should cover a feature or concept.  For small Node modules,
often a single test file is enough.

I usually call the first one `test/basic.js`, because it covers the
basic functionality.

By default, when you run `tap` with no arguments, it'll run any files in the
`test` directory, as well as any files than end in `*.spec.js` or `*.test.js`.
If you want to run a specific file, you can also put it on the command line
directly:

```bash
tap test/foo.js
```

## "hello world" test program

The root tap object is a member of tap's `Test` class.  That means it
has all the same properties as child tests.

Here's a very basic test program:

```javascript
// test/hello-world.js
const tap = require('tap')
tap.pass('this is fine')
```

If we run this with node, we'll see the raw TAP output:

```bash
$ node test/hello-world.js
```

```tap
TAP version 13
ok 1 - this is fine
1..1
# time=26.792ms
```

You can always run a tap test program directly to see what it is
doing.  This is especially handy in debugging test failures

That output is "TAP" or "Test Anything Protocol".  It has a long
history in the Perl community, and there are many tools in many
languages that can generate and parse this format.

Node-tap is one of those tools, so let's have it create something
prettier for us.  Because we installed tap as a devDependency, and
added it as a script in package.json, we can run `npm test` to run all
our tests with the `tap` built-in cli.

```bash
$ npm test

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/basics/my-awesome-module
> tap

 PASS  test/hello-world.js 1 OK 1s


  🌈 SUMMARY RESULTS 🌈


Suites:   1 passed, 1 of 1 completed
Asserts:  1 passed, of 1
Time:     1s
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
```

## coverage

Test coverage makes it a lot easier to know that we're testing what we
think we're testing.

So, let's create a module to test.  Let's say that we want a function
that returns 'even' if the number is even, or 'odd' if it's odd,
unless it's greater than 100, in which case it should return 'big',
and if it's less than 0, it should return 'negative'.

```javascript
// my-awesome-module.js
module.exports = x => {
  if (x % 2 === 0) {
    return 'even'
  } else if (x % 2 === 1) {
    return 'odd'
  } else if (x > 100) {
    return 'big'
  } else if (x < 0) {
    return 'negative'
  }
}
```

Probably no bugs!

Now, we can create a test file that pulls it in and verifies the
result:

```javascript
// test/basic.js
const tap = require('tap')
const mam = require('../my-awesome-module.js')

// Always call as (found, wanted) by convention
tap.equal(mam(1), 'odd')
tap.equal(mam(2), 'even')
```

Looks good to me!

```bash
$ npm test

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/basics/my-awesome-module
> tap

 PASS  test/basic.js 2 OK 1s
 PASS  test/hello-world.js 1 OK 1s


  🌈 SUMMARY RESULTS 🌈


Suites:   2 passed, 2 of 2 completed
Asserts:  3 passed, of 3
Time:     1s
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |    55.56 |     37.5 |      100 |    55.56 |                   |
 my-awesome-module.js |    55.56 |     37.5 |      100 |    55.56 |           6,7,8,9 |
----------------------|----------|----------|----------|----------|-------------------|
```

Ouch, only 55% coverage.  That's not very good.  Let's see what lines
are covered:

```bash
$ npm test -- --coverage-report=lcov
```

This runs the tests and opens a [pretty coverage
report](/basics/my-awesome-module/coverage-1/lcov-report/index.html) in a
web browser.  This shows that the second half of our function [isn't being
called](/basics/my-awesome-module/coverage-1/lcov-report/my-awesome-module.js.html).

Ok, add some more tests then:

```js
// test/basic.js
const tap = require('tap')
const mam = require('../my-awesome-module.js')

// Always call as (found, wanted) by convention
tap.equal(mam(1), 'odd')
tap.equal(mam(2), 'even')
tap.equal(mam(200), 'big')
tap.equal(mam(-10), 'negative')
```

Now the test output gets a lot more interesting:

```bash
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/basics/my-awesome-module
> tap

 FAIL  test/basic.js
 ✖ should be equal

  test/basic.js
  6 | tap.equal(mam(1), 'odd')
  7 | tap.equal(mam(2), 'even')
> 8 | tap.equal(mam(200), 'big')
    | ----^
  9 | tap.equal(mam(-10), 'negative')

  --- wanted
  +++ found
  -big
  +even

 FAIL  test/basic.js
 ✖ should be equal

  test/basic.js
  7 | tap.equal(mam(2), 'even')
  8 | tap.equal(mam(200), 'big')
> 9 | tap.equal(mam(-10), 'negative')
    | ----^

  --- wanted
  +++ found
  -negative
  +even

 PASS  test/hello-world.js 1 OK 2s
 FAIL  test/basic.js 2 failed of 4 2s
 ✖ should be equal
 ✖ should be equal



  🌈 SUMMARY RESULTS 🌈


 FAIL  test/basic.js 2 failed of 4 2s
 ✖ should be equal
 ✖ should be equal

Suites:   1 failed, 1 passed, 2 of 2 completed
Asserts:  2 failed, 3 passed, of 5
Time:     2s
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |    55.56 |     37.5 |      100 |    55.56 |                   |
 my-awesome-module.js |    55.56 |     37.5 |      100 |    55.56 |           6,7,8,9 |
----------------------|----------|----------|----------|----------|-------------------|
npm ERR! Test failed.  See above for more details.
```

Let's update our code so that it makes our tests pass:

```js
// my-awesome-module.js
module.exports = x => {
  if (x > 100) {
    return 'big'
  } else if (x < 0) {
    return 'negative'
  } else if (x % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}
```

And now our coverage report is much happier:

```bash
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/basics/my-awesome-module
> tap

 PASS  test/hello-world.js 1 OK 1s
 PASS  test/basic.js 4 OK 1s


  🌈 SUMMARY RESULTS 🌈


Suites:   2 passed, 2 of 2 completed
Asserts:  5 passed, of 5
Time:     2s
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |      100 |      100 |      100 |      100 |                   |
 my-awesome-module.js |      100 |      100 |      100 |      100 |                   |
----------------------|----------|----------|----------|----------|-------------------|
```

## async stuff

If your module has some async stuff, you can test that using a child
test.  (You can also just use child tests to group a bunch of
assertions into a block so it's easier to manage.)

Create a child test with the `tap.test(...)` function.  The child
tests look just like the main `tap` object.

You can call the `.end()` method on a child test object when it's
done.

```javascript
// test/async.js
// this is a silly test.
const tap = require('tap')
const fs = require('fs')
tap.test('some async stuff', childTest => {
  fs.readdir(__dirname, (er, files) => {
    if (er) {
      throw er // tap will handle this
    }
    childTest.match(files.join(','), /\basync\.js\b/)
    childTest.end()
  })
})

tap.test('this waits until after', childTest => {
  // no asserts?  no problem!
  // the lack of throwing means "success"
  childTest.end()
})
```

If you run this test with Node, you'll see that the [child
tests](/subtests/) are indented:

```bash
$ node test/async.js
```

```tap
TAP version 13
# Subtest: some async stuff
    ok 1 - should match pattern provided
    1..1
ok 1 - some async stuff # time=9.647ms

# Subtest: this waits until after
    1..0
ok 2 - this waits until after # time=6ms

1..2
# time=36.53ms
```

If you run it with tap, it'll look just like the others

```bash
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/basics/my-awesome-module
> tap

 PASS  test/hello-world.js 1 OK 1s
 PASS  test/async.js 2 OK 1s
 PASS  test/basic.js 4 OK 1s


  🌈 SUMMARY RESULTS 🌈


Suites:   3 passed, 3 of 3 completed
Asserts:  7 passed, of 7
Time:     2s
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |      100 |      100 |      100 |      100 |                   |
 my-awesome-module.js |      100 |      100 |      100 |      100 |                   |
----------------------|----------|----------|----------|----------|-------------------|
```

Tap's [promise](/promises/) support means it plays great with
async/await.  Stuff like this will Just Work out of the box if you
have a JS engine that supports async functions:

```js
const tap = require('tap')
tap.test(async t => {
  const result = await doSomethingAsync()
  t.match(result, { ok: true, message: /dogs/ }, 'dogs are ok')
  // Or you can use any assertion lib you like.  as long as this
  // code doesn't throw an error, it's a pass!
})
```

See the [API reference](/api/) to learn more!
