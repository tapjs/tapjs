---
layout: layout
title: Test Lifecycle Events
---

There are a few moments in the life of a test where you might want to attach
some setup or teardown logic.  Node-tap implements these using the following
functions.

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
