---
layout: layout
title: Mocha-like DSL
---

# Mocha-like DSL

If you prefer to use a BDD-style DSL like
[mocha](http://mochajs.org/) instead of the traditional
`t.whatever()`, tap lets you do that!

You can do this by using the methods on the `tap.mocha` object, or
dump them into the global namespace using `tap.mochaGlobals()`.

So, instead of this:

```javascript
// tap.js
var t = require('tap')
t.test('Array.indexOf', function (t) {
  var array = [1, 2, 3]
  t.test('when item is not found', function (t) {
    t.test('does not throw an error', function (t) {
      array.indexOf(4)
      t.end()
    })
    t.equal(array.indexOf(4), -1, 'returns -1')
    t.end()
  })
  t.end()
})
```

You can do this:

```javascript
// bdd.js
require('tap').mochaGlobals()
var should = require('should')
describe('Array.indexOf', function () {
  var array = [1, 2, 3]
  context('when item is not found', function () {
    it('does not throw an error', function () {
      array.indexOf(4)
    })
    it('returns -1', function () {
      array.indexOf(4).should.equal(-1)
    })
  })
})
```

Running these with the `spec` reporter results in this output:

```
$ tap -Rspec tap.js bdd.js

tap.js
  Array.indexOf
    when item is not found
      ✓ does not throw an error
      ✓ returns -1

bdd.js
  Array.indexOf
    when item is not found
      ✓ does not throw an error
      ✓ returns -1


  4 passing (527.355ms)
```

The following functions are provided:

* `describe(function () {})`

    Defines a test suite.  Runs synchronously.

* `context(function () {})`

    Alias for `describe`.

* `it(function ([done]) {})`

    Defines a test block.  As long as nothing throws, it is considered
    passing.

    If a `Promise` is returned, then it'll wait for the Promise to
    resolve before continuing to the next test block.

    If the function takes an argument, then it'll get a callback which
    must be called to signal that the test block is complete.

    If the function does not take an argument, and does not return a
    Promise, then it is assumed to be done immediately.

* `before(function ([done]) {})`

    Similar to `it`, but doesn't get reported.  Run immediately.

* `after(function ([done]) {})`

    Similar to `it`, but doesn't get reported.  Run after all test
    blocks are completed.

* `beforeEach(function ([done]) {})`

    Run before each test block.

* `afterEach(function ([done]) {})`

    Run after each test block.

Using the mocha-like BDD interface defines tests hanging off of the
root `tap` object, so tests defined in this way will always start at
the "top level", even if they are defined within a `t.test(...)`
function.
