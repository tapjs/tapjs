---
layout: layout
title: Promises
---

# Promises

The `t.test()`, `t.spawn()` and `t.stdin()` methods all return a
Promise which resolves to the `t` object once the child test, process,
or input stream is done.  (Note that the returned Promise does *not*
resolve to the *child* object, because the child is already ended when
control returns to the parent.)

Additionally, if the function passed to `t.test()` *returns* a
Promise, then the child test will be ended when the Promise resolves,
or failed when it is rejected.

These two features together mean that you can string together Promise
chains in your tests, if that's a thing you're into.

If you do use a lot of Promises to chain your tests in a long
declarative list, it's a good idea to put `.catch(t.threw)` at the
end, so that any unhandled rejections will be bubbled up to the top
level handler rather than being ignored or reported in a less helpful
manner.

Here is an example:

```javascript
var t = require('tap')
t.test('get thing', function (t) {
  return getSomeThing().then(function (result) {
    return t.test('check result', function (t) {
      t.equal(result.foo, 'bar')
      t.end()
    })
  })
}).then(function (t) {
  return getTwoThings().then(function (things) {
    return t.test('the things', function (t) {
      t.equal(things.length, 2)
      return makeSomeOtherPromise()
    })
  }).then(function (otherPromiseResult) {
    return t.test('check other promise thing', function (t) {
      t.equal(otherPromiseResult, 7, 'it should be seven')
      t.end()
    })
  })
}).catch(t.threw)
```

If this sort of style offends you, you are welcome to ignore it.  It's
not mandatory.

If you want to pass Promises to [assertions](/asserts/) and have them
auto-resolve, then check out [tapromise](http://npm.im/tapromise).

## Rejected promise

To verify that a promise is rejected, you can use the
[`t.rejects()`](/asserts/#trejectspromise--fn-expectederror-message-extra)
function.

## `async`/`await`

Because `async` functions return a Promise, you can use them out of
the box with node-tap.  If you pass an `async` function as the
`t.test()` callback, then tap will detect the promise return and move
onto the next test once the async function has completely resolved.

The above example could be written like this:

```js
var t = require('tap')
t.test('get thing', async function (t) {
  var result = await getSomeThing()
  await t.test('check result', function (t) {
    t.equal(result.foo, 'bar')
    t.end()
  })
}).then(async function (t) {
  var things = await getTwoThings()
  var otherPromiseResult = await t.test('the things', function (t) {
    t.equal(things.length, 2)
    return makeSomeOtherPromise()
  })
  await t.test('check other promise thing', function (t) {
    t.equal(otherPromiseResult, 7, 'it should be seven')
    t.end()
  })
}).catch(t.threw)
```

Because subtests return promises, you can also `await` them to do
things in between subtests.  However, this requires a top-level async
function.

For example:

```js
var t = require('tap')

async function main () {
  await t.test('get thing', function (t) {
    return getSomeThing().then(function (result) {
      return t.test('check result', function (t) {
        t.equal(result.foo, 'bar')
        t.end()
      })
    })
  })
  var things = await getTwoThings()
  var otherPromiseResult = await t.test('got two things', function (t) {
    t.equal(things.length, 2)
    return makeSomeOtherPromise()
  })
  await t.test('check other promise thing', function (t) {
    t.equal(otherPromiseResult, 7, 'it should be seven')
    t.end()
  })
  console.log('tests are all done!')
}
main()
```
