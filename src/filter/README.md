# `@tapjs/filter`

A default tap plugin providing `only` and `grep` functionality.

Occasionally, you just want to run a small subset of the tests in
a file, without the trouble of going into the file itself and
commenting out all the other ones.

This plugin gives you a handy way to do that.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/filter` to
bring it back.

### `grep`

Imagine if you had a test like this:

```ts
// test.mts
import t from 'tap'
import { MyThing } from '../src/my-thing.ts'

t.test('foo the bars', async t => {
  const mt = new MyThing()
  // this takes a while...
  await mt.foo(mt.bars)
  for (const b of mt.bars) {
    t.equal(b.foo, true)
  }
})

t.test('bar all the foos', async t => {
  const mt = new MyThing()
  // this takes a while...
  await mt.bar(mt.foos)
  for (const f of mt.foos) {
    t.equal(f.bar, true)
  }
})
```

Things are great, and my module seems to work, but then someone
finds a case where the `mt.bar` function throws an error. While
working on fixing this issue, I can run _just_ the second test by
doing this:

```
$ tap --grep 'bar all the foos' test.mts
```

The `--grep` argument can be specified multiple times on the
command line (or as an array in a config file), to grep through a
series of child tests.

```ts
// test.mts
import t from 'tap'
t.test('parent test', t => {
  t.test('child one', () => {
    t.test('subtest a', t => t.end())
    t.test('the b test', t => t.end())
    t.end()
  })
  t.test('child two', () => {
    t.test('subtest a', t => t.end())
    t.test('the b test', t => t.end())
    t.end()
  })
  t.end()
})
```

If you run `tap -g parent -g one -g a` then it will run only
`subtest a` under `child one`.

### Grep Flags

You can specify grep flags by writing the argument as a
JavaScript RegExp literal.

```ts
// test.mts
// run with `-g /foo/i` to run both foo and FOO tests, but not bar
import t from 'tap'
t.test('foo', t => t.end())
t.test('FOO', t => t.end())
t.test('bar', t => t.end())
```

### Grep Invert

Specify the `--grep-invert` (or `-i`) flag to invert the matches.
That is, then the things matching the pattern will _not_ be run,
and other tests will be.

## `only`

Another way, if you don't mind editing the file a little bit, is to
put `{ only: true }` in the subtest options, like this:

```ts
t.test('bar all the foos', { only: true }, async t => {
  const mt = new MyThing()
  // this takes a while...
  await mt.bar(mt.foos)
  for (const f of mt.foos) {
    t.equal(f.bar, true)
  }
})
```

Or, you can use the `t.only()` function instead of `t.test`:

```ts
t.only('bar all the foos', async t => {
  const mt = new MyThing()
  // this takes a while...
  await mt.bar(mt.foos)
  for (const f of mt.foos) {
    t.equal(f.bar, true)
  }
})
```

Then, run `tap --only test.mts`, and it will only run tests
marked with `only`.

In order to make this work, a `runOnly` flag is added in the test
options and on the test object itself, which you can set
explicitly as well. This is handy if you want the `only`
filtering happening in just one test file, or just one subtest in
a file:

```ts
import t from 'tap'
t.runOnly = true
t.only('this will run', t => t.end())
t.test('this will be skipped', t => t.end())
```

Or, in a subtest:

```ts
import t from 'tap'
t.test('parent test', { runOnly: true }, async t => {
  t.only('this will run', t => t.end())
  t.test('this will be skipped', t => t.end())
})
t.test('this will run', t => t.end())
```

You can also explicitly _disable_ `only` behavior, even if it's
set on the command line, by setting `runOnly` explicitly to
false.

```ts
import t from 'tap'
// override the --only flag
t.runOnly = false
t.only('this will run', t => t.end())
t.test('so will this, even with --only', t => t.end())
```

## `--filter-quietly`

By default, when a test is skipped with `--grep` or `--only`, a
skip message is applied, indicating why it was omitted.

This is often desireable, but can be noisy. The
`--filter-quietly` config flag will disable this reporting,
making filtered tests look like empty passing assertions.

Since a skip message will cause failures when `--fail-skip` is
set, in that case `--filter-quietly` will be enabled by default.
Presumably, if you tell tap "fail on skipped tests", you don't
also mean for it to fail on tests that you have told it to skip
in that very same command with `--grep` or `--only`.

If you _do_ mean to have it fail on intentionally skipped tests,
then you can set `--no-filter-quietly` (or `filter-quietly:
false` in a `.taprc` file) along with `--fail-skip`.
