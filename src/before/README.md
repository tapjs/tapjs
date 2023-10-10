# `@tapjs/before`

A default tap plugin providing `t.before()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/before` to
bring it back.

```ts
import t from 'tap'
t.before(() => {
  // this will run before the tests in this file start
})
```

If the method returns a promise, it will be awaited before moving
on to the next test.

A `t.before()` method will run prior to any _subsequent_ child
tests. If it's called before any child tests have started, then
it will be run right away.

So, this test:

```js
import t from 'tap'

t.before(() => {
  console.error('before initial')
})

t.test('first test', t => {
  t.before(async () => {
    // this will wait before moving on
    await new Promise(res => setTimeout(res, 100))
    console.error('before in first test')
  })
  console.error('in first test')
  t.test('child test', t => {
    console.error('child of first test')
    t.end()
  })
  t.end()
})

t.before(() => {
  console.error('before between')
})

t.test('second test', t => {
  console.error('in second test')
  t.end()
})
```

will print:

```
before initial
in first test
before in first test
child of first test
before between
in second test
```

Essentially, `t.before()` is a bit like a child test method that
doesn't get a `Test` object as an argument.
