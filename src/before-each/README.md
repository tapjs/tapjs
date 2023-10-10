# `@tapjs/before-each`

A default tap plugin providing `t.beforeEach()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/before-each` to
bring it back.

```ts
import t from 'tap'
t.beforeEach(t => {
  // this will run before each child test, all of their child
  // tests, and so on
  // the parameter is the child test that is about to start.
})
```

If the method returns a promise, it will be awaited before moving
on to the next test.

The `beforeEach` method is called for _all_ child tests, not just
direct children. "Closer" ancestor `beforeEach` methods are called
after further ancestors.

For example, this test:

```js
import t from 'tap'
t.beforeEach(t => {
  console.error('root before each', t.name)
})

t.test('parent test', t => {
  t.beforeEach(t => {
    console.error('parent before each', t.name)
  })
  t.test('child test', t => t.end())
  t.end()
})
```

will print:

```
root before each parent test
root before each child test
parent before each child test
```
