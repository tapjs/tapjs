---
title: Test Lifecycle Events
section: 5.06
redirect_from:
  - /test-lifecycle/
  - /test-lifecycle
---

# Test Lifecycle Events

There are a few moments in the life of a test where you might want to attach
some setup or teardown logic.  Node-tap implements these using the following
interfaces.

## CLI: `--before=before-tests.js`, `--after=after-tests.js`

To run a script before any tests are executed, specify it as a `--before`
config value.  To run a script after all tests are done executing, specify
it as an `--after` config value.

These can be set either on the CLI, in a `.taprc` file, or `package.json`
file.  (See [Configuring Tap](/docs/configuring/).)

`--before` and `--after` file's output will be sent to the parent's
terminal, and outside of any reporters.  It's generally _not_ a great idea
to have them output [TAP](/tap-protocol/), since that can cause the test
run to generate invalid output.

If the script exits in error (either via a status code or being killed by a
signal), then the test run will be aborted and exit in error.  An `--after`
script will run even if the test run bails out.

A defined `--before` or `--after` script will be omitted if it would have
been included as a test file.  So, it's fine to do something like `tap
--before=test/setup.js --after=test/teardown.js test/*.js`.

There is no provided way to communicate context from a `--before` or
`--after` program, since they run in separate processes from the test
scripts, but since they are guaranteed to be run before or after any
parallel testing, it is safe to have them write data to files that can be
read by test scripts.

The other functions referenced below are for use _within_ a test program.

## `t.beforeEach(fn(done, childTest))`

Before any child test (or any children of any child tests, etc.) the supplied
function is called with two arguments.  The first is a callback to indicate
that the function is complete.  The second is the test object that it's
prefixing.

If the function returns a Promise, then that is used as the indication of
doneness.  Thus, `async` functions automatically end when all of their awaited
Promises are complete.

## `t.afterEach(fn(done, childTest))`

This is called after each child test (or any children of any child tests, on
down the tree).  Like `beforeEach`, it's called with a done callback as the
first argument, and the child test object as the second, and can return a
Promise.

## `t.teardown(fn())`

When the test is completely finished, the teardown functions are called.  They
do not receive a `done` callback, but may return a `Promise` to perform
asynchronous actions.

## Why no `t.before()`?

There is no `t.before()` because there are other options for doing this:

- If the actions are synchronous, you can put them before your tests.
- If the actions are asynchronous, you can use a `t.test()`.

## `t.on('end')`

The `end` event fires when the test is completely finished, and all of its
teardown functions have completed.

This is just a normal `EventEmitter` event, so it doesn't support any sort of
async actions.

## `t.context`

You can use the `t.context` object to track details specific to a test.  For
example, a `beforeEach` function might create a database connection, and then
an `afterEach` function might shut it down cleanly.

```javascript
const myDataBase = require('my-special-db-thingie')

t.beforeEach((done, t) => {
  t.context.connection = myDataBase.connect()
  done()
})

t.afterEach((done, t) => {
  t.context.connection.disconnect()
  done()
})

t.test('read and write', t => {
  const conn = t.context.connection
  conn.write('foo', 'bar')
  t.equal(conn.read('foo'), 'bar')
  t.end()
})
```
