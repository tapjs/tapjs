---
title: TAP Basics
eleventyNavigation:
  key: Docs
  order: 6
---

Node-tap is a test framework library that you can use to write
tests, and a command line program that can be used to run tests
(and manage plugins, watch code for changes, analyze coverage,
etc.)

You _can_ use any of the parts independently, but they are
designed to work well together.

## Installing Tap

You know the drill.

```bash
npm install tap --save-dev
```

## "Zero Patience Just Get Going" Guide

Write a test file like this:

```js
// give this a testy lookin filename, like
// test/foo.js or ./lib/foo.test.js

import t from 'tap'
import { myThing } from '../src/whatever.js'

t.test('this is a child test', t => {
  t.pass('this passes')
  t.fail('this fails')
  t.ok(myThing, 'this passes if truthy')
  t.equal(myThing, 5, 'this passes if the values are equal')
  t.match( myThing, {
    property: String,
  }, 'this passes if myThing.property is a string')
  // call this when you're done
  t.end()
})

t.test('async tests work like you would expect', async t => {
  t.equal(await myThing(), 'whatever')
  // don't have to call t.end(), it'll just end when the
  // async stuff is all resolved.
})
```

Run it like this:

```
$ tap run
```

And you'll get reports like this:

<pre style="color:#eeeeee;background:#222222;position:relative">$ tap run
<span style="font-weight:bold;color:#000000;background:#00aa00"> PASS </span> docs/foo.test.js <span style="font-weight:bold">2</span> <span style="color:#00a000">OK</span> <span style="font-weight:100;color:#b2b2b2">427ms

</span><span style="background:#ffffff">                       
</span><span style="font-weight:bold;color:#000000;background:#ffffff">  <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>   TEST COMPLETE <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>    
</span><span style="background:#ffffff">                       

</span><span style="font-weight:bold">Asserts:</span>  <span style="color:#00a000">2 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">2 of 2 complete
</span><span style="font-weight:bold">Suites:</span>   <span style="color:#00a000">1 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">1 of 1 complete

# { total: 2, pass: 2 }
# time=463.429ms</span></pre>

Tap can do a lot of stuff. Keep reading if you want to know more.

## Writing Tests

Every tap test is a standalone node program that outputs
[TAP](./tap-format.md) to standard output.

This is a very simple tap test:

```ts
console.log(`TAP version 14
1..1
ok
`)
```

The `tap` library can be used to output this format, but in
much more useful and interesting ways.

First, pull in the root `Test` object by importing it from `tap`:

```ts
import t from 'tap'
```

We use the name `t` by convention because it's easy and clean,
but you can of course call it whatever you like.

Next, you can make some assertions:

```ts
import t from 'tap'

t.pass('this is fine')
```

When run, that outputs:

```
$ node --loader=ts-node/esm --no-warnings --enable-source-maps t.mts
TAP version 14
ok 1 - this is fine
1..1
# { total: 1, pass: 1 }
# time=2.723ms
```

There are many more assertion methods provided by the
[@tapjs/asserts
plugin](https://tapjs.github.io/tapjs/classes/_tapjs_asserts.index.Assertions.html).

```ts
import t from 'tap'

const myObject = { a: 1, b: 2 }
t.match(myObject, { a: Number }, 'this passes')
t.matchOnly(myObject, { b: 2 }, 'this fails')
```

With this, we can see that the `t.match()` assertion passes,
because the object has an `a` member which is a `number`.
However, the `t.matchOnly()` does _not_ pass, because the object
has other properties not specified in the comparison pattern.

```
$ node --loader=ts-node/esm --no-warnings --enable-source-maps t.mts
TAP version 14
ok 1 - this passes
not ok 2 - this fails
  ---
  diff: |
    --- expected
    +++ actual
    @@ -1,2 +1,3 @@
     Object {
    +  "a": 1,
     }
  at:
    fileName: t.mts
    lineNumber: 5
    columnNumber: 3
    isToplevel: true
  stack: t.mts:5:3
  source: |
    const myObject = { a: 1, b: 2 }
    t.match(myObject, { a: Number }, 'this passes')
    t.matchOnly(myObject, { b: 2 }, 'this fails')
    --^
  ...

1..2
# { total: 2, pass: 1, fail: 1 }
# time=13.576ms
```

When run with the tap cli, it looks like this:

<pre style="color:#eeeeee;background:#222222;position:relative">$ tap t.mts
<span style="font-weight:bold;color:#ffffff;background:#ff0000"> FAIL </span> t.mts <span style="color:#ff0000">1 failed</span> of <span style="font-weight:bold">2</span> <span style="font-weight:100;color:#b2b2b2">14ms
</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> this fails <span style="font-weight:100;color:#b2b2b2">t.mts:5:3

</span><span style="background:#ffffff">                       
</span><span style="font-weight:bold;color:#000000;background:#ffffff">  <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>   TEST COMPLETE <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>    
</span><span style="background:#ffffff">                       

</span><span style="font-weight:bold;color:#ffffff;background:#ff0000"> FAIL </span> t.mts <span style="color:#ff0000">1 failed</span> of <span style="font-weight:bold">2</span> <span style="font-weight:100;color:#b2b2b2">14ms
</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> this fails
    <span style="font-weight:100;color:#b2b2b2;background:#1c1c1c">t.mts                                            
</span>    <span style="color:#8fa5d1;background:#1c1c1c">2 </span><span style="color:#d0d0d0;background:#1c1c1c">                                               
</span>    <span style="color:#8fa5d1;background:#1c1c1c">3 </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> myObject = </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c"> a: </span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> b: </span><span style="color:#87d75f;background:#1c1c1c">2</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">}</span><span style="color:#d0d0d0;background:#1c1c1c">                
</span>    <span style="color:#8fa5d1;background:#1c1c1c">4 </span><span style="color:#d0d0d0;background:#1c1c1c">t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">match</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">myObject</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c"> a: Number </span><span style="color:#93cdff;background:#1c1c1c">},</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'this passes'</span><span style="color:#93cdff;background:#1c1c1c">)
</span>    <span style="color:#8fa5d1;background:#1c1c1c">5 </span><span style="color:#d0d0d0;background:#1c1c1c">t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">matchOnly</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">myObject</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c"> b: </span><span style="color:#87d75f;background:#1c1c1c">2</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">},</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'this fails'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">  
</span>    <span style="color:#ff0000;background:#1c1c1c">━━━━</span><span style="font-weight:bold;color:#ff0000;background:#1c1c1c">┛</span><span style="color:#ff0000;background:#1c1c1c">                                            
</span>    <span style="color:#ffe5f1;background:#ac3ea3">--- expected   
</span>    <span style="color:#f2ffe5;background:#3a7500">+++ actual     
</span>    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,2 +1,3 @@
</span>    <span style="color:#cccccc;background:#333333"> Object {      
</span>    <span style="color:#f2ffe5;background:#3a7500">+  &quot;a&quot;: 1,     
</span>    <span style="color:#cccccc;background:#333333"> }             
</span>    <span style="color:#ffff00">t.mts</span><span style="font-weight:100;color:#b2b2b2">:5:3

</span><span style="font-weight:bold">Asserts:</span>  <span style="color:#00a000">1 pass</span>  <span style="font-weight:bold;color:#ff0000">1 fail</span>  <span style="font-weight:100;color:#b2b2b2">2 of 2 complete
</span><span style="font-weight:bold">Suites:</span>   <span style="color:#00a000">0 pass</span>  <span style="font-weight:bold;color:#ff0000">1 fail</span>  <span style="font-weight:100;color:#b2b2b2">1 of 1 complete

# No coverage generated
# { total: 2, pass: 1, fail: 1 }
# time=45.911ms</span></pre>

The tap framework will print the assertion, as well as
information about where the failure occurred, what was expected,
and so on.

## Child Tests

It's usually convenient to [group tests](./structure.md) into
"suites" of assertions about related functionality.

This can be done in tap using the
[`t.test()`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#test)
method.

```ts
import t from 'tap'

const myObject = { a: 1, b: 2 }

t.test('test myObject', t => {
  t.equal(myObject.a, 1)
  t.matchOnly(myObject, { a: Number, b: Number })
  t.end()
})
```

### Async Child Test Functions

If you have asynchronous things to do in your subtest, or if you
just don't prefer having to remember to call `t.end()` when it's
over, your subtest method can return a promise.

```ts
import t from 'tap'

const myObject = { a: 1, b: 2, p: Promise.resolve('promise') }

t.test('test myObject', async t => {
  t.equal(myObject.a, 1)
  t.matchOnly(myObject, { a: Number, b: Number, p: Promise })
  t.equal(await myObject.p, 'promise')
})
```

We don't have to call `t.end()` if we use async functions,
because tap will automatically end the subtest when the returned
promise resolves.

### Planned Assertion Counts

If you know how many assertions you expect to call, you
can use `t.plan(n)` to ensure that exactly that many are
executed.

```js
import t from 'tap'

const myObject = { a: 1, b: 2 }

t.test('test myObject', async t => {
  t.plan(2)
  t.equal(myObject.a, 1)
  t.matchOnly(myObject, { a: Number, b: Number })
})
```

We also don't have to call `t.end()` if we set a plan, because
tap will automatically end the child test when the plan is
completed.

This is useful when you have a fixed number of assertions to run,
but they can occur in any arbitrary order.

## Running Tests

While you can definitely just run your tests with node directly,
it has some drawbacks:

- If you use typescript or other functionality that depends on a
  loader, you have to remember to provide the proper argument.
- The raw TAP output is very noisy (though sometimes it's good to
  be able to look at it, it's usually just a lot).
- It doesn't have pretty colors.
- You can only run one test at a time.
- You don't get coverage information without extra steps.

The `tap` [command line interface](./cli.11ty.js) will run tests in
parallel (as much as your system and configuration allow), with
the correct loaders all assembled in the arguments, and format
the output so that excessive noise is eliminated, and actionable
information is clearly highlighted.

<pre style="color:#eeeeee;background:#222222;position:relative">$ tap t.mts
<span style="font-weight:bold;color:#000000;background:#00aa00"> PASS </span> docs/foo.test.js <span style="font-weight:bold">2</span> <span style="color:#00a000">OK</span> <span style="font-weight:100;color:#b2b2b2">410ms

</span><span style="background:#ffffff">                       
</span><span style="font-weight:bold;color:#000000;background:#ffffff">  <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>   TEST COMPLETE <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>    
</span><span style="background:#ffffff">                       

</span><span style="font-weight:bold">Asserts:</span>  <span style="color:#00a000">2 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">2 of 2 complete
</span><span style="font-weight:bold">Suites:</span>   <span style="color:#00a000">1 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">1 of 1 complete

# No coverage generated
# { total: 2, pass: 2 }
# time=446.935ms</span></pre>

## Code Coverage

That `# No coverage generated` warning is telling you that this
dummy example test was kind of pointless, because it didn't
actually test anything.

If your test doesn't provide any code coverage, then it didn't
really test anything, and is not very helpful. That's why tap
exits with an error status code when no coverage is generated, or
when the tests don't fully cover the program you're testing.

See the [Code Coverage](./coverage.md) guide for more information
about how to get the most out of code coverage with tap.

## Other Test Utilities

Real world tests often have to create fixture files, spy on or
intercept properties and methods, or swap out dependency modules
in order to trigger certain code paths and verify that they
behave properly. Check out the docs on these plugins for helpful
information as you write your tests:

- [`@tapjs/intercept`](./plugins/intercept.md) Spies and
  property/method interception.
- [`@tapjs/mock`](./plugins/mock.md) Dependency injection by
  overriding the behavior of `require()` and `import`, providing
  your mock modules in place of the actual versions.
- [`@tapjs/fixture`](./plugins/fixture.md) Create temporary test
  directories which are automatically cleaned up when the test
  ends.
- [`@tapjs/snapshot`](./plugins/snapshot.md) Use the
  `t.matchSnapshot` method to save values to a file automatically
  by running `tap --snapshot`, and then verify them later when
  running the test.

For much more detail about the behavior of `Test` objects in your
program, check out the [full generated typedocs for the Test
class](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html)

If there's some test functionality you need, and it's not already
present, you can check for an existing [plugin](./plugins/index.md)
that might provide it, or [create one
youself](./plugins/create.md).

## Note about "Expected Failures" and "Run Until Good" Testing

Occasionally people ask for a way to run a test multiple times,
and consider it "passing" if it passes at least once. Or even,
run a test, and expect it to fail, but don't treat that as a
failure.

An "expected failure" should be either marked as `todo` (meaning
that you'll get to it later), conditionally skipped on platforms
that don't support the feature (eg, doing unixy things on
Windows, or vice versa), or deleted from the test suite.

Ignoring test failures is an very bad practice, as it reduces
confidence in your tests, which means that you can't just relax
and focus on your code.

```ts
import t from 'tap'

// this is fine
t.test('unixy thing', {
  skip: process.platform === 'win32' ? 'unix only' : false,
}, t => {
  t.equal(doUnixyThing(), true)
  t.end()
})

// this is also fine
t.test('froblz is the blortsh', {
  todo: 'froblz not yet implemented',
}, t => {
  t.equal(froblz(), 'the blortsh')
})
```

If you have a test that _sometimes_ passes, but is flaky, then
that is a problem. Fix the problem! Let the test framework help
you. Factor your code into more reasonable pieces that can be
tested independently from one another. There are a lot of
options, don't settle for having to remember which failures are
"ok" and which are "real". All test failures are worth fixing!
Why even have a test if you're ok with it failing?

Tap will never support such a thing. (Actually, it probably is
possible to do somehow with plugins. But don't! It's a horrible
idea!)

## Further Reading

- [Writing Well-Structured Tests with Tap](./structure.md)
- [Upgrading to tap 18 from tap v16 and
  before](./upgrading-from-16.md)
- [The tap CLI and configuration options](./cli.11ty.js)
- [Test Environment](./environment.md)
- [tap REPL](./repl.md)
- [What's in that `.tap` folder?](./dot-tap-folder.md)
- [full API reference](./api.md)

Or maybe don't bother reading all that, and just go write some tests 😅
