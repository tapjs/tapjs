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

## `t.beforeEach(fn(childTest))`

Before any child test (or any children of any child tests, etc.) the supplied
function is called with the test object that it's prefixing.

If the function returns a Promise, then that is used as the indication of
doneness.  Thus, `async` functions automatically end when all of their awaited
Promises are complete.

If the function does not return a Promise, then it is assumed to be
completed synchronously.

### Backwards Compatibility Note

Prior to v15, tap would call `t.beforeEach()` functions with a `done`
callback to indicate completion.  As of v15, Promises are the only way to
use these functions asynchronously.

## `t.afterEach(fn(childTest))`

This is called after each child test (or any children of any child tests, on
down the tree).  Like `beforeEach`, it's called with the child test object,
and can return a Promise to perform asynchronous operations.

### Backwards Compatibility Note

Prior to v15, tap would call `t.afterEach()` functions with a `done`
callback to indicate completion.  As of v15, Promises are the only way to
use these functions asynchronously.

## `t.before(fn())`

`t.before()` is a way to perform some actions _before_ any subsequent tests
are run.  If the function returns a Promise, then that Promise will be
awaited for completion before any subsequent `t.test()` child tests are
executed.

The `t.before()` method will never be filtered out by setting `--only` or
`--grep` configurations, so it is useful in cases where you might have a
lot of tests in a given file, but _all_ of them depend on some initial
setup to be performed.

## `t.teardown(fn())`

When the test is completely finished, the teardown functions are called.  They
may return a `Promise` to perform asynchronous actions.

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

t.beforeEach(async t => {
  t.context.connection = await myDataBase.connect()
})

t.afterEach(t => {
  t.context.connection.disconnect()
})

t.test('read and write', t => {
  const conn = t.context.connection
  conn.write('foo', 'bar')
  t.equal(conn.read('foo'), 'bar')
  t.end()
})
```
