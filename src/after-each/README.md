# `@tapjs/after-each`

A default tap plugin providing `t.afterEach()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/after-each` to
bring it back.

```ts
import t from 'tap'
t.afterEach(t => {
  // this will run after each child test, all of their child
  // tests, and so on
  // the parameter is the child test that just ended.
})
```

If the method returns a promise, it will be awaited before moving
on to the next test.

The `afterEach` method is called for _all_ child tests, not just
direct children. "Closer" ancestor `afterEach` methods are called
before further ancestors.

For example, this test:

```js
import t from 'tap'
t.afterEach(t => {
  console.error('root after each', t.name)
})

t.test('parent test', t => {
  t.afterEach(t => {
    console.error('parent after each', t.name)
  })
  t.test('child test', t => t.end())
  t.end()
})
```

will print:

```
parent after each child test
root after each child test
root after each parent test
```
