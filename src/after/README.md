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

## Order

If multiple teardown methods are assigned to a single test, they
will be run in _reverse_ order of how they are assigned. This is
a change from earlier versions of tap, and provides symmetry with
`t.before()`.

In practice, it can make things more straightforward, by keeping
cleanup methods close to their associated setup logic. For
example:

```js
const connection = await connectToDB()
t.ok(connection, 'connected to database')
t.teardown(() => disconnectFromDB(connection))

const user1 = await createUser(connection)
t.ok(user1, 'created user 1')
t.teardown(() => deleteUser(connection, user1))

const user2 = await createUser(connection)
t.ok(user2, 'created user 2')
t.teardown(() => deleteUser(connection, user2))
```

If we delete the connection created in the first step _before_
deleting the user records, then we can't use that connection to
delete the user records.

This can also be accomplished with subtests, and a single
teardown in each section:

```js
t.test('user db tests', async t => {
  const connection = await connectToDB()
  t.ok(connection, 'connected to database')
  t.teardown(() => disconnectFromDB(connection))

  t.test('user 1', async t => {
    const user1 = await createUser(connection)
    t.ok(user1, 'created user 1')
    t.teardown(() => deleteUser(connection, user1))
  })

  t.test('user 2', async t => {
    const user2 = await createUser(connection)
    t.ok(user2, 'created user 2')
    t.teardown(() => deleteUser(connection, user2))
  })
})
```
