---
title: Getting Started
section: 1
redirect_from:
  - /docs/
  - /docs
  - /basics/
  - /basics
---

# Getting Started

## tap includes out of the box:

`tap` includes out of the box:

1. [A test framework](/docs/api/) for writing tests in Node.js.
2. [A command-line interface](/docs/cli/) for running tests and reporting on their
   success or failure.
3. [Support for test-coverage](/docs/coverage/), including coverage of child
   processes spawned in the process of testing.
4. [Support for parallel tests](/docs/api/parallel-tests/), including running some tests in
   parallel, and others serially.

See [the changelog](/changelog/) for recent updates, or just get started with the basics down below.

[![Build Status](https://travis-ci.org/tapjs/node-tap.svg?branch=master)](https://travis-ci.org/tapjs/node-tap)

## tap basics

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
`test` directory, as well as any files that end in `*.spec.js` or `*.test.js`.
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

<pre class="language-text"><code class="language-text">
$ npm test

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/static/my-awesome-module
> tap

<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/hello-world.js <b style="color:#fff">1</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>

<div style="background:#fff;color:#111;width:29ex">
  🌈 SUMMARY RESULTS 🌈

</div>
<b>Suites:</b>   <span style="color:#0f0">1 passed</span>, 1 of 1 completed
<b>Asserts:</b>  <span style="color:#0f0">1 passed</span>, of 1
<b style="color:#999">Time:     1s</b>
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
</code></pre>

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

<pre class="language-text"><code class="language-text">
$ npm test

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/static/my-awesome-module
> tap

<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/basic.js <b style="color:#fff">2</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>
<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/hello-world.js <b style="color:#fff">1</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>

<div style="background:#fff;color:#111;width:29ex">
  🌈 SUMMARY RESULTS 🌈

</div>
<b>Suites:</b>   <span style="color:#0f0">2 passed</span>, 2 of 2 completed
<b>Asserts:</b>  <span style="color:#0f0">3 passed</span>, of 3
<b style="color:#999">Time:     1s</b>
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |    <b style="color:#ff0">55.56</b> |     <b style="color:#f00">37.5</b> |      <b style="color:#0f0">100</b> |    <b style="color:#ff0">55.56</b> |                   |
 my-awesome-module.js |    <b style="color:#ff0">55.56</b> |     <b style="color:#f00">37.5</b> |      <b style="color:#0f0">100</b> |    <b style="color:#ff0">55.56</b> |           <b style="color:#f00">6,7,8,9</b> |
----------------------|----------|----------|----------|----------|-------------------|
</code></pre>

Ouch, only 55% coverage.  That's not very good.  Let's see what lines
are covered:

```bash
$ npm test -- --coverage-report=lcov
```

This runs the tests and opens a <a target="my-awesome-module-report"
href="/my-awesome-module/coverage-1/lcov-report/index.html">pretty coverage
report</a> in a web browser.  This shows that the second half of our
function <a target="my-awesome-module-report"
href="/my-awesome-module/coverage-1/lcov-report/my-awesome-module.js.html">isn't
being called</a>.

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

<pre class="language-text"><code class="language-text">
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/static/my-awesome-module
> tap

<b style="background:#f00;color:#fff;padding-top:2px"> FAIL </b> test/basic.js
 <b style="color:#f00">✖</b> should be equal

<div style="background:#222">  <b style="color:#999">test/basic.js</b>
  <span style="color:#666">6 |</span> tap.equal(mam(<span style="color:#0f0">1</span>), <span style="color:#0f0">'odd'</span>)
  <span style="color:#666">7 |</span> tap.equal(mam(<span style="color:#0f0">2</span>), <span style="color:#0f0">'even'</span>)
<b style="color:#f00">></b> <span style="color:#fff">8</span> | tap.equal(mam(<span style="color:#0f0">200</span>), <span style="color:#0f0">'big'</span>)
  <span style="color:#666">  |</span> <span style="color:#f00">----^</span>
  <span style="color:#666">9 |</span> tap.equal(mam(<span style="color:#0f0">-10</span>), <span style="color:#0f0">'negative'</span>)
</div>
  <span style="padding:2px;color:rgb(87,12,6);background:rgb(243,179,213)">--- wanted</span>
  <span style="padding:2px;color:rgb(39,93,22);background:rgb(223,253,183)">+++ found </span>
  <span style="padding:2px;color:rgb(87,12,6);background:rgb(243,179,213)">-big      </span>
  <span style="padding:2px;color:rgb(39,93,22);background:rgb(223,253,183)">+even     </span>

<b style="background:#f00;color:#fff;padding-top:2px"> FAIL </b> test/basic.js
 <b style="color:#f00">✖</b> should be equal

<div style="background:#222">  <b style="color:#999">test/basic.js</b>
  <span style="color:#666">7 |</span> tap.equal(mam(<span style="color:#0f0">2</span>), <span style="color:#0f0">'even'</span>)
  <span style="color:#666">8 |</span> tap.equal(mam(<span style="color:#0f0">200</span>), <span style="color:#0f0">'big'</span>)
<b style="color:#f00">></b> <span style="color:#fff">9 |</span> tap.equal(mam(<span style="color:#0f0">-10</span>), <span style="color:#0f0">'negative'</span>)
  <span style="color:#666">  |</span> <span style="color:#f00">----^</span>
</div>
  <span style="padding:2px;color:rgb(87,12,6);background:rgb(243,179,213)">--- wanted</span>
  <span style="padding:2px;color:rgb(39,93,22);background:rgb(223,253,183)">+++ found </span>
  <span style="padding:2px;color:rgb(87,12,6);background:rgb(243,179,213)">-negative </span>
  <span style="padding:2px;color:rgb(39,93,22);background:rgb(223,253,183)">+even     </span>

<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/hello-world.js <b style="color:#fff">1</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>
<b style="background:#f00;color:#fff;padding-top:2px"> FAIL </b> test/basic.js 2 failed of 4 2s
 <b style="color:#f00">✖</b> should be equal
 <b style="color:#f00">✖</b> should be equal


<div style="background:#fff;color:#111;width:29ex">
  🌈 SUMMARY RESULTS 🌈

</div>
<b style="background:#f00;color:#fff;padding-top:2px"> FAIL </b> test/basic.js 2 failed of 4 2s
 <b style="color:#f00">✖</b> should be equal
 <b style="color:#f00">✖</b> should be equal

<b>Suites:</b>   <span style="color:#f00">1 failed</span>, <span style="color:#0f0">1 passed</span>, 2 of 2 completed
<b>Asserts:</b>  <span style="color:#f00">2 failed</span>, <span style="color:#0f0">3 passed</span>, of 5
<b style="color:#999">Time:     2s</b>
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |    <b style="color:#ff0">55.56</b> |     <b style="color:#f00">37.5</b> |      <b style="color:#0f0">100</b> |    <b style="color:#ff0">55.56</b> |                   |
 my-awesome-module.js |    <b style="color:#ff0">55.56</b> |     <b style="color:#f00">37.5</b> |      <b style="color:#0f0">100</b> |    <b style="color:#ff0">55.56</b> |           <b style="color:#f00">6,7,8,9</b> |
----------------------|----------|----------|----------|----------|-------------------|
<span style="padding:2px;background:#000;color:#fff">npm</span> <span style="padding:2px;color:#000;background:#f00">ERR!</span> Test failed.  See above for more details.
</code></pre>

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

<pre class="language-text"><code class="language-text">
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/static/my-awesome-module
> tap

<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/hello-world.js <b style="color:#fff">1</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>
<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/basic.js <b style="color:#fff">4</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>

<div style="background:#fff;color:#111;width:29ex">
  🌈 SUMMARY RESULTS 🌈

</div>
<b>Suites:</b>   <span style="color:#0f0">2 passed</span>, 2 of 2 completed
<b>Asserts:</b>  <span style="color:#0f0">5 passed</span>, of 5
<b style="color:#999">Time:     1s</b>
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
<b style="color:#0f0">All files</b>             |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |                   |
 <b style="color:#0f0">my-awesome-module.js</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |                   |
----------------------|----------|----------|----------|----------|-------------------|
</code></pre>

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
tests](/docs/api/subtests/) are indented:

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

<pre class="language-text"><code class="language-text">
$ npm t

> my-awesome-module@1.2.3 test /Users/isaacs/dev/js/tap/docs/static/my-awesome-module
> tap

<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/hello-world.js <b style="color:#fff">1</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>
<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/async.js <b style="color:#fff">2</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>
<span style="background:#0f0;color:#000;padding-top:2px"> PASS </span> test/basic.js <b style="color:#fff">4</b> <span style="color:#0f0">OK</span> <b style="color:#999">1s</b>

<div style="background:#fff;color:#111;width:29ex">
  🌈 SUMMARY RESULTS 🌈

</div>
<b>Suites:</b>   <span style="color:#0f0">3 passed</span>, 3 of 3 completed
<b>Asserts:</b>  <span style="color:#0f0">7 passed</span>, of 7
<b style="color:#999">Time:     1s</b>
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
<b style="color:#0f0">All files</b>             |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |                   |
 <b style="color:#0f0">my-awesome-module.js</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |      <b style="color:#0f0">100</b> |                   |
----------------------|----------|----------|----------|----------|-------------------|
</code></pre>

Tap's [promise](/docs/api/promises/) support means it plays great with
async/await.  Stuff like this will Just Work out of the box if you
have a JS engine that supports async functions:

```js
const tap = require('tap')
tap.test('dogs should be ok', async t => {
  const result = await doSomethingAsync()
  t.match(result, { ok: true, message: /dogs/ }, 'dogs are ok')
  // Or you can use any assertion lib you like.  as long as this
  // code doesn't throw an error, it's a pass!
})
```

Move on to [writing well-structured tests](/docs/structure/), or just dive
into the [API reference](/docs/api/)!
