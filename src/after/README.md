# `@tapjs/after`

A default tap plugin providing `t.after()` and `t.teardown()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/after` to
bring it back.

```ts
import t from 'tap'
t.after(() => {
  // this will run after all the tests in this file are done
})
```

The method can be called as either `t.teardown()` or `t.after()`.
In an earlier version of tap, these had slightly different
behaviors, but they are now the same.

If the method returns a promise, it will be awaited before moving
on to the next test.

So, this test:

```js
import t from 'tap'

t.test('first test', t => {
  t.teardown(async () => {
    // this will wait before moving on
    await new Promise(res => setTimeout(res, 100))
    console.error('end of first test teardown')
  })
  console.error('in first test')
  t.end()
})
t.test('second test', t => {
  console.error('in second test')
  t.end()
})
```

will print:

```
in first test
end of first test teardown
in second test
```
