---
title: Testing with Fixtures
section: 5.035
---

# Testing with Fixtures

Frequently, tests need to setup and then tear down some files and
directories.

Doing this manually can be very tedious.  For example:

```js
// tedious annoying way:
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const {resolve, basename} = require('path')
const t = require('tap')
const dir = resolve(__dirname, basename(__filename, '.js'))
rimraf.sync(dir)
mkdirp.sync(dir)
t.teardown(() => rimraf.sync(dir))
fs.writeFileSync(dir + '/some-file', 'some contents')
fs.symlinkSync(dir + '/link', 'some-file')

// ok, now we can finally run some tests!
```

With the [`t.testdir()`](/docs/api/#ttestdirfixtures) method, you can do
this:

```js
// awesome slick way
const dir = t.testdir({
  'some-file': 'some contents',
  // use t.fixture() to create links and symlinks
  // this will use junctions on Windows as of v14.11.0 if the
  // target is a directory, so Administrator perms aren't needed.
  link: t.fixture('symlink', 'some-file'),
  nested: {
    'README.md': 'nested dirs work, too!'
  }
})

// run tests!
```

## Keeping the Fixture Around

If you need to inspect the fixture directory after running your test, you
can either pass `{ saveFixture: true }` to the test creation, or add
`--save-fixture` to the command-line, or set `TAP_SAVE_FIXTURE=1` in the
environment.

Otherwise, the test fixture will be deleted when the test creating it is
finished.

## Fixture Arguments

The [`t.fixture(type, content)`](/docs/api/#tfixturetype-content) method
will create a `Fixture` object with the specified type and content.  The
supported types are:

* `link` - A hardlink to the file specified in `content`.
* `symlink` - A symbolic link to the path specified in `content`.
* `dir` - A directory, where the `content` is an object describing the
  children in that directory.
* `file` - A file, where the `content` is the file contents.

You can also pass in a plain JavaScript object to specify a `dir` type, or
a string or buffer to specify a `file` type.  For example, these two styles
produce identical results:

```js
// clunky style:
t.testdir(t.fixture('dir', {
  'filename': t.fixture('file', 'contents')
}))

// sugar style:
t.testdir({
  filename: 'contents'
})
```

## Fixture Directory Filename

The fixture directory is returned by the `t.testdir()` method.  It is also
available on the `t.testdirName` getter.

The name is determined by the filename and path of the `main` script.  If
no `main` script is available (for example, if running tap in a node repl),
then it uses the test file name `TAP`.

## Timing Caveat

While the fixture directory is _created_ synchronously, it is _removed_
asynchronously, because that is the only way to get around `ENOTEMPTY`
errors on Windows.

This means that the next test after one that uses `t.testdir()` will be
deferred until after the end of the current run to completion.  So, for
example:

```js
t.test('first test', t => {
  console.error('one')
  t.testdir()
  t.end()
})
console.error('two')
t.test('second test', t => {
  console.error('three')
  t.end()
})
console.error('four')
```

This will print `one two four three` instead of `one two three four`,
because the second test is deferred while waiting for the first test's
fixture dir to be removed.

The fixture directory cleanup will always happen _after_ any user-scheduled
`t.teardown()` functions, as of tap v14.11.0.
